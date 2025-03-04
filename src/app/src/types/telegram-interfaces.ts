import { RGB } from "@telegram-apps/bridge";

export interface ButtonState {
  backgroundColor?: RGB;
  hasShineEffect: boolean;
  isEnabled: boolean;
  isLoaderVisible: boolean;
  isVisible: boolean;
  text: string;
  textColor?: RGB;
}
