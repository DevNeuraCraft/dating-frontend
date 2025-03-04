
export interface City {
  _id: string;
  name: string;
}

interface User {
  _id: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  images?: string[];
}

export interface UserResponse {
  user: User
}

export type BackendTypes = City | UserResponse;
