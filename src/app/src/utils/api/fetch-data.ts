import axios from "axios";

import { EndpointMapping } from "../../types/endpoint-map-type";

export const fetchData = async <T extends keyof EndpointMapping>(
  url: T
): Promise<EndpointMapping[T]> => {
  try {
    const response = await axios.get<EndpointMapping[T]>(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Responde error ${error}`);
    throw error;
  }
};
