import { ExploreCardButtonType, SwipeStatus } from '@utils/consts';

export interface City {
  _id: string;
  name: string;
}

export interface User {
  _id: string;
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  images: string[];
  name: string;
  about: string;
  age: number;
  gender: 'male' | 'female';
  city: string;
}

export interface Swipe {
  _id: string;
  swiper_id: User;
  swiped_id: User;
  swipe_type: ExploreCardButtonType;
  status: SwipeStatus;
}

export interface SwipesResponse {
  swipes: Swipe[];
}

export interface SwipeResponse {
  swipe: Swipe | null;
}

export interface UserResponse {
  user: User | null;
}

export interface ExploresResponse {
  explores: User[];
}

export type BackendTypes =
  | City
  | UserResponse
  | ExploresResponse
  | SwipesResponse
  | SwipeResponse;
