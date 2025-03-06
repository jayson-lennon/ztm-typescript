import axios from 'axios';

// These are the types for the LocationInfo object, pulled from the Geocode API

export interface LocationInfo {
  lat: string;
  lon: string;
  display_name: string;
}

/**
 * Fetches location data for a given location name from the Geocode API.
 * @param apiUrl The URL of the Geocode API.
 * @param locationName The name of the location to search for.
 * @returns A LocationInfo object containing information about the location
 * @throws An error if the location is not found, or the request fails.
 */
export async function fetchLocationData(
  apiUrl: string,
  locationName: string
): Promise<LocationInfo> {
  // HTTP GET request options for the Geocode API (https://geocode.maps.co/search?q=locationName&api_key=API_KEY)
  const options = {
    method: 'GET',
    url: apiUrl,
    params: { q: locationName, api_key: process.env.GEOCODE_API_KEY },
  };

  const response = await axios.request<LocationInfo[]>(options); // request an array of LocationInfo objects with options
  if (response.status === 200) {
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error('Location not found');
    }
  } else {
    throw new Error(`Request failed with status code ${response.status}`);
  }
}
