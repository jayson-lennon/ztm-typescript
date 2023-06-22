import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CurrentWeather, CurrentWeatherApiResponse, currentWeatherApiResponseSchema, fetchWeatherData } from "./weatherapi";
import { strict as assert } from "assert";

const SAMPLE_API_RESPONSE = {
  latitude: 36.16438,
  longitude: -115.143936,
  generationtime_ms: 0.23496150970458984,
  utc_offset_seconds: 0,
  timezone: 'GMT',
  timezone_abbreviation: 'GMT',
  elevation: 620,
  current_weather: {
    temperature: 30.7,
    windspeed: 15.3,
    winddirection: 27,
    weathercode: 0,
    is_day: 1,
    time: '2023-05-13T18:00'
  },
  hourly_units: { time: 'iso8601', temperature_2m: '°C' },
  hourly: {
    time: [
      '2023-05-13T00:00', '2023-05-13T01:00',
      '2023-05-13T02:00', '2023-05-13T03:00',
      '2023-05-13T04:00', '2023-05-13T05:00',
      '2023-05-13T06:00', '2023-05-13T07:00',
      '2023-05-13T08:00', '2023-05-13T09:00',
      '2023-05-13T10:00', '2023-05-13T11:00',
      '2023-05-13T12:00', '2023-05-13T13:00',
      '2023-05-13T14:00', '2023-05-13T15:00',
      '2023-05-13T16:00', '2023-05-13T17:00',
      '2023-05-13T18:00', '2023-05-13T19:00',
      '2023-05-13T20:00', '2023-05-13T21:00',
      '2023-05-13T22:00', '2023-05-13T23:00'
    ],
    temperature_2m: [
      32.5, 32.1, 30.9, 28.7, 27.4,
      26.4, 26, 26.1, 26, 24.7,
      24.2, 23.8, 24, 23.3, 24.1,
      25.7, 27.2, 28.6, 30.7, 31.6,
      32.3, 33.4, 33.5, 33.5
    ]
  }
}

it("should convert API request", async () => {
  // makes `axios` to use the mock instead of making an actual request
  const httpClient = new MockAdapter(axios);

  const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

  httpClient.onGet(WEATHER_API_URL, {
    params: {
      latitude: "0.0",
      longitude: "0.0",
      hourly: "temperature_2m",
      temperature_unit: "celsius",
      current_weather: true,
      forecast_days: 1,
    }
  }).reply(200, SAMPLE_API_RESPONSE);

  // this will throw an error if it fails, which will mark the test as a failure
  await fetchWeatherData(axios, WEATHER_API_URL, "0.0", "0.0");
});

it("throws error when response is not 200", async () => {
  // makes `axios` to use the mock instead of making an actual request
  const httpClient = new MockAdapter(axios);

  const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

  httpClient.onGet(WEATHER_API_URL, {
    params: {
      latitude: "0.0",
      longitude: "0.0",
      hourly: "temperature_2m",
      temperature_unit: "celsius",
      current_weather: true,
      forecast_days: 1,
    }
  }).reply(400, {});

  // this will throw an error if it fails, which will mark the test as a failure
  await expect(fetchWeatherData(axios, WEATHER_API_URL, "0.0", "0.0")).rejects.toThrow();
});

it("throws error when the API response changes", async () => {
  // makes `axios` to use the mock instead of making an actual request
  const httpClient = new MockAdapter(axios);

  const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

  httpClient.onGet(WEATHER_API_URL, {
    params: {
      latitude: "0.0",
      longitude: "0.0",
      hourly: "temperature_2m",
      temperature_unit: "celsius",
      current_weather: true,
      forecast_days: 1,
    }
  }).reply(200, {});

  // this will throw an error if it fails, which will mark the test as a failure
  await expect(fetchWeatherData(axios, WEATHER_API_URL, "0.0", "0.0")).rejects.toThrow();
});

it("gets low temp", () => {
  const response: CurrentWeatherApiResponse = currentWeatherApiResponseSchema.parse(SAMPLE_API_RESPONSE);
  const currentWeather = new CurrentWeather(response);
  const lowTemp = currentWeather.lowTemp();
  assert.equal(lowTemp, 23.3);
});

it("gets high temp", () => {
  const response: CurrentWeatherApiResponse = currentWeatherApiResponseSchema.parse(SAMPLE_API_RESPONSE);
  const currentWeather = new CurrentWeather(response);
  const highTemp = currentWeather.highTemp();
  assert.equal(highTemp, 33.5);
});

it("gets condition", () => {
  const response: CurrentWeatherApiResponse = currentWeatherApiResponseSchema.parse(SAMPLE_API_RESPONSE);
  const currentWeather = new CurrentWeather(response);
  const condition = currentWeather.condition();
  assert.equal(condition, "Clear sky");
});
