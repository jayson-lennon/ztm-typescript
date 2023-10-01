import axios from "axios";

const weatherCodes: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Moderate thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

interface CurrentWeatherApiResponse {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  // day or night
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
  weathercode: number;
  daytime: boolean;
  time: string;

  constructor(apiResponse: CurrentWeatherApiResponse) {
    this.temperature = {
      value: apiResponse.temperature,
      unit: "C",
    };
    this.wind = {
      speed: apiResponse.windspeed,
      direction: apiResponse.winddirection,
      unit: "kmh",
    };
    this.weathercode = apiResponse.weathercode;
    this.daytime = apiResponse.is_day === 1;
    this.time = apiResponse.time;
  }

  condition(): string {
    return weatherCodes[this.weathercode];
  }

  format(): string {
    const descriptionLen = 16;

    const temp = "Temperature".padStart(descriptionLen, " ");
    const windSpeed = "Wind Speed".padStart(descriptionLen, " ");
    const condition = "Condition".padStart(descriptionLen, " ");

    const formatted: string[] = [];
    formatted.push(`${temp}: ${formatTemperature(this.temperature)}`);
    formatted.push(`${windSpeed}: ${formatWind(this.wind)}`);
    formatted.push(`${condition}: ${this.condition()}`);

    return formatted.join("\n");
  }
}

export async function fetchWeatherData(
  apiUrl: string,
  lat: string,
  lon: string
): Promise<CurrentWeather> {
  const options = {
    method: "GET",
    url: apiUrl,
    params: {
      latitude: lat,
      longitude: lon,
      hourly: "temperature_2m",
      temperature_unit: "celsius",
      windspeed_unit: "kmh",
      current_weather: true,
    },
  };

  const response = await axios.request(options);

  if (response.status === 200) {
    if (response.data?.current_weather !== undefined) {
      // This might fail if the API changes. We'll see how to use Zod later to
      // make this more type safe.
      const res = response.data.current_weather as CurrentWeatherApiResponse;
      return new CurrentWeather(res);
    } else {
      throw new Error("Received invalid API response");
    }
  } else {
    throw new Error("Failed to fetch weather data");
  }
}
