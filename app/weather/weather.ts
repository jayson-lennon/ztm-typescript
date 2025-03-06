import { fetchLocationData } from './location';
import { fetchWeatherData } from './weatherapi';
import type { LocationInfo } from './location';
const GEOCODE_API_URL = 'https://geocode.maps.co/search';
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

async function main(): Promise<number> {
  // npm run weather LOCATION
  if (process.argv.length < 3) {
    console.error('Please provide a location');
    return 1; // 1 = error
  }
  // get location
  const location = process.argv[2];

  // convert location to lat and lon
  // type LocationInfo is imported from location.ts
  let locationInfo: LocationInfo;
  try {
    locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
  } catch (error) {
    console.error(error);
    return 1; // 1 = error
  }
  console.log(`Fetching weather data for ${locationInfo.display_name}`);
  // fetch weather data
  try {
    const weatherData = await fetchWeatherData(
      WEATHER_API_URL,
      locationInfo.lat,
      locationInfo.lon
    );
    console.log(weatherData.format());
  } catch (error) {
    console.error(error);
    return 1; // 1 = error
  }

  return await Promise.resolve(0); // 0 = success
}

main().catch((error) => console.error(error));
