import { fetchLocationData } from "./location";
import { fetchWeatherData } from "./weatherapi";
import type { LocationInfo } from "./location";

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
const GEOCODE_API_URL = "https://geocode.maps.co/search";

async function main(): Promise<number> {
  if (process.argv.length !== 3) {
    console.error("usage: weather LOCATION");
    return 1;
  }
  const location = process.argv[2];

  let locationInfo: LocationInfo;
  try {
    locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
  } catch (error) {
    console.error(error);
    return 1;
  }

  console.log(`Fetching weather data for ${locationInfo.display_name}...\n`);
  try {
    const weather = await fetchWeatherData(
      WEATHER_API_URL,
      locationInfo.lat,
      locationInfo.lon
    );
    console.log(weather.format());
  } catch (error) {
    console.error(error);
    return 1;
  }

  return 0;
}

if (require.main === module) {
  main().catch((err) => console.error(err));
}
