export const TG_BOT_NAME = "maiuniversity_schedule_bot";
export const TG_CHANNEL_NAME = "maiuniversity_schedule";
export const TG_MINI_APP_NAME = "mai_schedule_app";
export const API_BACKEND_URL = "http://172.20.10.4:3030/api";

export const ENDPOINTS = {
  TG: {
    TMA_LINK: `https://t.me/${TG_BOT_NAME}/${TG_MINI_APP_NAME}`,
  },
  BACKEND: {
    CITY: `${API_BACKEND_URL}/cities`,
    USER: `${API_BACKEND_URL}/user`,
  },
} as const;
