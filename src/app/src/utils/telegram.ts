import { useEffect } from "react";

import { initDataUser, mainButton, User } from "@telegram-apps/sdk-react";
import { ButtonState } from "../types/telegram-interfaces";

export const useTelegramMainButton = (
  updates: Partial<ButtonState>,
  onClick?: () => void
) => {
  useEffect(() => {
    if (!mainButton.isMounted()) {
      return;
    }

    mainButton.setParams(updates);

    if (onClick) {
      mainButton.onClick(onClick);
    }

    return () => {
      if (onClick) {
        mainButton.offClick(onClick);
      }
      mainButton.setParams({});
    };
  }, [onClick, updates]);
};

export const getTelegramUserData = (): User => {
  const user = initDataUser();
  if (!user) {
    throw new Error("Пользователь не определён");
  }
  return user
};
