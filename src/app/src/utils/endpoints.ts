export const TG_BOT_NAME = 'soul_link_app_bot';
export const TG_CHANNEL_NAME = 'soullink_dating';
export const TG_MINI_APP_NAME = 'mai_schedule_app';
export const API_BACKEND_URL = 'https://grigorieva-coach.store/api';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const API_ROUTES = {
  CITIES: { BASE: 'cities' },
  USER: {
    BASE: 'user',
    BY_ID: 'by-id',
    BY_TG_ID: 'by-tg-id',
    FIND_EXPLORES: 'find-explores',
  },
  SWIPE: {
    BASE: 'swipe',
    ALL: 'swipes',
  },
} as const;

export const ENDPOINTS = {
  TG: {
    TMA_LINK: `https://t.me/${TG_BOT_NAME}/${TG_MINI_APP_NAME}/`,
    CHANNEL_SHORT_LINK: TG_CHANNEL_NAME,
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
      UPDATE: (id: string) =>
        `${API_BACKEND_URL}/${API_ROUTES.USER.BASE}/${id}`,
    },
    SWIPE: {
      BASE: `${API_BACKEND_URL}/${API_ROUTES.SWIPE.BASE}`,
      ALL: `${API_BACKEND_URL}/${API_ROUTES.SWIPE.ALL}`,
    },
  },
} as const;
