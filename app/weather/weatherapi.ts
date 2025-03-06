import axios from 'axios';

const weatherCodes: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Moderate thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

interface CurrentWeatherApiResponse {
  temperature: string;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface Temperature {
  value: number;
  unit: string;
}

const formatTemperature = (temp: Temperature): string =>
  `${temp.value}${temp.unit}`;

export interface Wind {
  speed: number;
  direction: number;
  unit: string;
}

const formatWind = (wind: Wind): string => `${wind.speed}${wind.unit}`;

export class CurrentWeather {
  temperature: Temperature;
  wind: Wind;
  windspeed: number;
  weathercode: number;
  daytime: boolean;
  time: string;

  constructor(apiResponse: CurrentWeatherApiResponse) {
    this.temperature = {
      value: parseInt(apiResponse.temperature),
      unit: '°C',
    };
    this.wind = {
      speed: apiResponse.windspeed,
      direction: apiResponse.winddirection,
      unit: 'km/h',
    };
    this.windspeed = apiResponse.windspeed;
    this.weathercode = apiResponse.weathercode;
    this.daytime = apiResponse.is_day === 1; // The API returns 0 for night, 1 for day
    this.time = apiResponse.time;
  }

  getWeatherCondition(): string {
    return weatherCodes[this.weathercode];
  }

  format(): string {
    const descriptionLength = 16; // How wide the description should be in the terminal
    const temperature = 'Temperature'.padStart(descriptionLength, ' '); // Pad the temperature with spaces to make it the same width as the description
    const windspeed = 'Wind Speed'.padStart(descriptionLength, ' '); // Pad the windspeed with spaces to make it the same width as the description
    const condition = 'Condition'.padStart(descriptionLength, ' '); // Pad the condition with spaces to make it the same width as the description

    const formatted: string[] = [];
    formatted.push(
      `${temperature}: ${formatTemperature(this.temperature)}`,
      `${windspeed}: ${formatWind(this.wind)}`,
      `${condition}: ${this.getWeatherCondition()}`
    );

    return formatted.join('\n'); // Join the formatted strings with a newline
  }
}
/**
 * @param apiUrl The URL of the weather API.
 * @param latitude The latitude of the location.
 * @param longitude The longitude of the location.
 * @returns A CurrentWeather object containing information about the current weather
 */
export async function fetchWeatherData(
  apiUrl: string,
  latitude: string,
  longitude: string
): Promise<CurrentWeather> {
  const options = {
    method: 'GET',
    url: apiUrl,
    params: {
      latitude,
      longitude,
      current_weather: true,
    },
  };

  const response = await axios.request(options);
  if (response.status === 200) {
    if (response.data?.current_weather !== undefined) {
      const res = response.data.current_weather as CurrentWeatherApiResponse;
      return new CurrentWeather(res);
    } else {
      throw new Error('Invalid API response');
    }
  } else {
    throw new Error(`Request failed with status code ${response.status}`);
  }
}
