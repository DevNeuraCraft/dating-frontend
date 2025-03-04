import { User } from "@telegram-apps/sdk-react";
import { City } from "./data-interfaces";

import { ENDPOINTS } from "@utils/endpoints";

export type EndpointMapping = {
    [ENDPOINTS.BACKEND.CITY]: City[];
    [ENDPOINTS.BACKEND.USER]: User;
  };