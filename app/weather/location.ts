import axios from "axios";
import 'dotenv/config'

export interface LocationInfo {
  lat: string;
  lon: string;
  display_name: string;
}

export async function fetchLocationData(
  apiUrl: string,
  location: string
): Promise<LocationInfo> {
  const options = {
    method: "GET",
    url: apiUrl,
    params: {
      q: location,
      api_key: process.env.GEOCODE_API_KEY
    },
  };

  // This won't always work. If the API updates, then this may result in a runtime error.
  // Later we will use Zod to fix this.
  const response = await axios.request<LocationInfo[]>(options);

  if (response.status === 200) {
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error(`Unable to find location information for ${location}`);
    }
  } else {
    throw new Error("Failed to fetch location data");
  }
}
