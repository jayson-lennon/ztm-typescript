import path from 'path';
import formBody from '@fastify/formbody';
import staticFiles from '@fastify/static';
import axios from 'axios';
import dotenv from 'dotenv';
import fastify from 'fastify';
import nunjucks from 'nunjucks';
import { z } from 'zod';
import { fetchLocationData } from './location';
import { fetchWeatherData } from './weatherapi';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';
const LOCATION_API_URL = 'https://geocode.maps.co/search';
const HTTP_CLIENT = axios;
const server = fastify({
  logger: true,
});

{
  server.register(formBody);
  server.register(staticFiles, {
    root: path.join(__dirname, '../../dist'),
  });
}

dotenv.config();

const environment = process.env.NODE_ENV || 'development';

/*
The nunjucks package is a templating engine. Templating engines take a regular html file and allow you to insert dynamic data into it. They do this by adding special tags to the html that the templating engine can then look for and replace with the dynamic data. This is useful because it allows us to separate our html from our programming logic. Without a templating engine, we would have to write a whole bunch of html strings and concatenate them together, which is messy and hard to maintain.
In this app, we use nunjucks to generate the html that gets sent to the user. We create a template of what the html should look like, and then use nunjucks to fill in the dynamic parts. This allows us to easily change the layout of the page without having to rewrite all of the html strings in our code.
*/
const templates = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('./src/backend/templates')
);

const weatherCodeToImage = (code: number): string => {
  switch (code) {
    case 0:
      return '/static/img/clear.svg';
    case 1:
      return '/static/img/clear.svg';
    case 2:
      return '/static/img/cloudy.svg';
    case 3:
      return '/static/img/overcast.svg';
    case 45:
      return '/static/img/fog.svg';
    case 48:
      return '/static/img/fog.svg';
    case 51:
      return '/static/img/drizzle.svg';
    case 53:
      return '/static/img/drizzle.svg';
    case 55:
      return '/static/img/drizzle.svg';
    case 56:
      return '/static/img/drizzle.svg';
    case 57:
      return '/static/img/drizzle.svg';
    case 61:
      return '/static/img/rain.svg';
    case 63:
      return '/static/img/rain.svg';
    case 65:
      return '/static/img/rain.svg';
    case 66:
      return '/static/img/rain.svg';
    case 67:
      return '/static/img/rain.svg';
    case 71:
      return '/static/img/snow.svg';
    case 73:
      return '/static/img/snow.svg';
    case 75:
      return '/static/img/snow.svg';
    case 77:
      return '/static/img/snow.svg';
    case 80:
      return '/static/img/rain.svg';
    case 81:
      return '/static/img/rain.svg';
    case 82:
      return '/static/img/rain.svg';
    case 85:
      return '/static/img/snow.svg';
    case 86:
      return '/static/img/snow.svg';
    case 95:
      return '/static/img/thunderstorm.svg';
    case 96:
      return '/static/img/thunderstorm.svg';
    case 99:
      return '/static/img/thunderstorm.svg';
    default:
      return '/static/img/info.svg';
  }
};

const locationSchema = z.object({
  location: z.string(),
});

server.get('/', async (request, reply) => {
  const queryParams = request.query;
  try {
    const { location } = locationSchema.parse(queryParams);
    const locationInfo = await fetchLocationData(
      LOCATION_API_URL,
      location,
      HTTP_CLIENT
    );
    const weatherInfo = await fetchWeatherData(
      HTTP_CLIENT,
      WEATHER_API_URL,
      locationInfo.lat,
      locationInfo.lon
    );

    const rendered = templates.render('weather.njk', {
      environment,
      location: locationInfo.display_name,
      currentDate: new Date().toDateString(),
      weather: {
        ...weatherInfo,
        conditionImage: weatherCodeToImage(weatherInfo.weathercode),
        condition: weatherInfo.getWeatherCondition(),
        lowTemp: weatherInfo.getLowTemp(),
        highTemp: weatherInfo.getHighTemp(),
      },
    });

    await reply
      .header('Content-Type', 'text/html; charset=utf-8')
      .send(rendered);
  } catch (error) {
    console.error(error);
    const rendered = templates.render('get_started.njk', { environment });
    await reply
      .header('Content-Type', 'text/html; charset=utf-8')
      .send(rendered);
  }
});

const startServer = async (): Promise<void> => {
  try {
    await server.listen({ port: 3000 });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

startServer();
