import { useEffect } from "react";
import { mainButton } from "@telegram-apps/sdk-react";
import { ButtonState } from "../interfraces/telegram-interfaces";

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
