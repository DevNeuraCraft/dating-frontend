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
  city: string;
}

export interface UserResponse {
  user: User | null;
}

export type BackendTypes = City | UserResponse;
