import { useEffect } from 'react';

import { initDataUser, mainButton, popup, postEvent, User } from '@telegram-apps/sdk-react';
import { ENDPOINTS } from './endpoints';
import { ButtonState } from '../types/telegram-interfaces';

export const useTelegramMainButton = (
  updates: Partial<ButtonState>,
  onClick?: () => void,
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
    };
  }, [onClick, updates]);
};

export const getTelegramUserData = (): User => {
  const user = initDataUser();
  if (!user) {
    throw new Error('Пользователь не определён');
  }
  return user;
};

export const showWrongImagesPopup = () => {
  if (popup.isOpened()) return;
  popup.open({
    message: 'Загрузи три фото',
    buttons: [{ type: 'ok' }],
  });
};

export const handleDisabledButtonClick = async () => {
  if (popup.isOpened()) return;
  const res = await popup.open({
    title: 'Скоро тут что-то будет',
    message: 'Узнавай об обновлениях на нашем канале',
    buttons: [
      { id: 'open_channel', type: 'default', text: 'Перейти' },
      { type: 'close' },
    ],
  });
  if (res === 'open_channel')
    postEvent('web_app_open_tg_link', {
      path_full: ENDPOINTS.TG.CHANNEL_SHORT_LINK,
    });
};
