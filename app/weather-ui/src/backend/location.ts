import { z } from 'zod';
import type { AxiosStatic } from 'axios';

const locationInfoSchema = z.object({
  lat: z.string(),
  lon: z.string(),
  display_name: z.string(),
});

// These are the types for the LocationInfo object, pulled from the Geocode API

// export interface LocationInfo {
//   lat: string;
//   lon: string;
//   display_name: string;
// }
export type LocationInfo = z.infer<typeof locationInfoSchema>;

/**
 * Fetches location data for a given location name from the Geocode API.
 * @param apiUrl The URL of the Geocode API.
 * @param locationName The name of the location to search for.
 * @returns A LocationInfo object containing information about the location
 * @throws An error if the location is not found, or the request fails.
 */
export async function fetchLocationData(
  apiUrl: string,
  locationName: string,
  axios: AxiosStatic
): Promise<LocationInfo> {
  // HTTP GET request options for the Geocode API (https://geocode.maps.co/search?q=locationName&api_key=API_KEY)
  const options = {
    method: 'GET',
    url: apiUrl,
    params: { q: locationName, api_key: process.env.GEOCODE_API_KEY },
  };

  const response = await axios.request(options); // request an array of LocationInfo objects with options
  if (response.status === 200) {
    try {
      return locationInfoSchema.parse(response.data[0]); // parse the response using the LocationInfo schema
    } catch (error) {
      console.error(error);
      throw new Error('Location not found');
    }
  } else {
    throw new Error(`Request failed with status code ${response.status}`);
  }
}
