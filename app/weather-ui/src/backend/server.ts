import path from "path";
import formBody from "@fastify/formbody";
import staticFiles from "@fastify/static";
import axios from "axios";
import dotenv from "dotenv";
import { fastify as fastify_fastify } from "fastify";
import nunjucks from "nunjucks";
import { z } from "zod";
import { fetchLocationData } from "./location";
import { fetchWeatherData } from "./weatherapi";

dotenv.config();

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
const GEOCODE_API_URL = "https://geocode.maps.co/search";
const HTTP_CLIENT = axios;

const environment = process.env.NODE_ENV;
const templates = new nunjucks.Environment(new nunjucks.FileSystemLoader("src/backend/templates"));

const server = fastify_fastify({
  logger: true,
});

// middlewares
{
  // process forms
  server.register(formBody);

  // serve static files
  server.register(staticFiles, {
    root: path.join(__dirname, '../../dist'),
  });
}

const weatherCodeToImage = (code: number): string => {
  switch (code) {
    case 0: return "/static/img/clear.svg";
    case 1: return "/static/img/clear.svg";
    case 2: return "/static/img/cloudy.svg";
    case 3: return "/static/img/overcast.svg";
    case 45: return "/static/img/fog.svg";
    case 48: return "/static/img/fog.svg";
    case 51: return "/static/img/drizzle.svg";
    case 53: return "/static/img/drizzle.svg";
    case 55: return "/static/img/drizzle.svg";
    case 56: return "/static/img/drizzle.svg";
    case 57: return "/static/img/drizzle.svg";
    case 61: return "/static/img/rain.svg";
    case 63: return "/static/img/rain.svg";
    case 65: return "/static/img/rain.svg";
    case 66: return "/static/img/rain.svg";
    case 67: return "/static/img/rain.svg";
    case 71: return "/static/img/snow.svg";
    case 73: return "/static/img/snow.svg";
    case 75: return "/static/img/snow.svg";
    case 77: return "/static/img/snow.svg";
    case 80: return "/static/img/rain.svg";
    case 81: return "/static/img/rain.svg";
    case 82: return "/static/img/rain.svg";
    case 85: return "/static/img/snow.svg";
    case 86: return "/static/img/snow.svg";
    case 95: return "/static/img/thunderstorm.svg";
    case 96: return "/static/img/thunderstorm.svg";
    case 99: return "/static/img/thunderstorm.svg";
    default: return "/static/img/info.svg";
  }
};

const locationSchema = z.object({
  location: z.string(),
});

server.get("/", async (request, reply) => {
  const queryParams = request.query;
  try {
    const { location } = locationSchema.parse(queryParams);
    const locationInfo = await fetchLocationData(HTTP_CLIENT, GEOCODE_API_URL, location);
    const weatherInfo = await fetchWeatherData(HTTP_CLIENT, WEATHER_API_URL, locationInfo.lat, locationInfo.lon);

    const rendered = templates.render("weather.njk", {
      environment,
      location: locationInfo.display_name,
      currentDate: new Date().toDateString(),
      weather: {
        ...weatherInfo,
        conditionImg: weatherCodeToImage(weatherInfo.weathercode),
        condition: weatherInfo.condition(),
        lowTemp: weatherInfo.lowTemp(),
        highTemp: weatherInfo.highTemp(),
      }
    });
    await reply
      .header("Content-Type", "text/html; charset=utf-8")
      .send(rendered);
  } catch (e) {
    console.error(e);
    const rendered = templates.render("get_started.njk", { environment, });
    await reply
      .header("Content-Type", "text/html; charset=utf-8")
      .send(rendered);
  }
});

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 8089 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
