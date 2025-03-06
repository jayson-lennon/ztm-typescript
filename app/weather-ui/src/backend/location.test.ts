import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchLocationData } from './location';

const SAMPLE_API_RESPONSE = [
  {
    place_id: 287781008,
    licence:
      'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
    powered_by: 'Map Maker: https://maps.co',
    osm_type: 'relation',
    osm_id: 207359,
    boundingbox: [Array],
    lat: '34.0536909',
    lon: '-118.242766',
    display_name: 'Los Angeles, Los Angeles County, California, United States',
    class: 'boundary',
    type: 'administrative',
    importance: 0.9738053728457621,
  },
  {
    place_id: 259239981,
    licence:
      'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
    powered_by: 'Map Maker: https://maps.co',
    osm_type: 'way',
    osm_id: 807458549,
    boundingbox: [Array],
    lat: '34.0708781',
    lon: '-118.44684973165106',
    display_name:
      'University of California, Los Angeles, Bellagio Road, Bel Air, Bel-Air, Los Angeles, Los Angeles County, California, 90049, United States',
    class: 'amenity',
    type: 'university',
    importance: 0.8181396344174214,
  },
];

it('should convert API response', async () => {
  const httpClient = new MockAdapter(axios);
  const GEOCODE_API_URL = 'https://geocode.maps.co/search';
  httpClient
    .onGet(GEOCODE_API_URL, { params: { q: 'test' } })
    .reply(200, SAMPLE_API_RESPONSE);

  await fetchLocationData(GEOCODE_API_URL, 'test', axios);
});

it('throws error when response is not 200', async () => {
  const httpClient = new MockAdapter(axios);
  const GEOCODE_API_URL = 'https://geocode.maps.co/search';
  httpClient
    .onGet(GEOCODE_API_URL, { params: { q: 'test' } })
    .reply(400, SAMPLE_API_RESPONSE);

  await expect(
    fetchLocationData(GEOCODE_API_URL, 'test', axios)
  ).rejects.toThrow();
});

it('throws error when API has changed', async () => {
  const httpClient = new MockAdapter(axios);
  const GEOCODE_API_URL = 'https://geocode.maps.co/search';
  httpClient.onGet(GEOCODE_API_URL, { params: { q: 'test' } }).reply(200, {});

  await expect(
    fetchLocationData(GEOCODE_API_URL, 'test', axios)
  ).rejects.toThrow();
});
