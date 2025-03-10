export const TG_BOT_NAME = "maiuniversity_schedule_bot";
export const TG_CHANNEL_NAME = "maiuniversity_schedule";
export const TG_MINI_APP_NAME = "mai_schedule_app";
export const API_BACKEND_URL =
  process.env.API_BACKEND_URL || "http://172.20.10.4:3030/api";

export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const API_ROUTES = {
  CITIES: { BASE: "cities" },
  USER: {
    BASE: "user",
    BY_ID: "by-id",
    BY_TG_ID: "by-tg-id",
    FIND_EXPLORES: "find-explores",
  },
} as const;

export const ENDPOINTS = {
  TG: {
    TMA_LINK: `https://t.me/${TG_BOT_NAME}/${TG_MINI_APP_NAME}/`,
  },
  BACKEND: {
    CITIES: `${API_BACKEND_URL}/${API_ROUTES.CITIES.BASE}/`,
    USER: {
      BASE: `${API_BACKEND_URL}/${API_ROUTES.USER.BASE}/`,
      BY_ID: (id: string) =>
        `${API_BACKEND_URL}/${API_ROUTES.USER.BASE}/${API_ROUTES.USER.BY_ID}/${id}`,
      BY_TG_ID: (id: number) =>
        `${API_BACKEND_URL}/${API_ROUTES.USER.BASE}/${API_ROUTES.USER.BY_TG_ID}/${id}`,
      FIND_EXPLORES: (id: string) =>
        `${API_BACKEND_URL}/${API_ROUTES.USER.BASE}/${API_ROUTES.USER.FIND_EXPLORES}/${id}`,
    },
  },
} as const;
