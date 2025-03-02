import {
  backButton,
  disableVerticalSwipes,
  init,
  initData,
  isTMA,
  mainButton,
  miniApp,
  settingsButton,
  swipeBehavior,
  themeParams,
  viewport,
} from "@telegram-apps/sdk-react";

import { convertHtmlHexStylesToBodyRgb } from "./telegram-helpers";
import { ENDPOINTS } from "../../utils/endpoints";

export default async function TelegramSDK() {
  try {
    // Проверяем, запущено ли приложение внутри Telegram Mini App (TMA).
    // Если нет, перенаправляем пользователя на соответствующую ссылку.
    // TODO Создать соответсвующую страницу, перекинуть на неё в случае запуска не через TMA
    if (!isTMA("simple")) {
      window.location.href = ENDPOINTS.TG.TMA_LINK;
      return; // Прерываем дальнейшую инициализацию.
    }

    // Инициализируем SDK для настройки окружения и получения необходимых данных.
    init();
    if (swipeBehavior.isSupported()) {
      swipeBehavior.mount();
      disableVerticalSwipes();
    }

    // Проверяем, поддерживается ли кнопка "Назад" в текущем окружении.
    // Если да, монтируем (отображаем) кнопку "Назад" в интерфейсе.
    if (backButton.isSupported()) {
      backButton.mount();
    }

    // Монтируем главноую кнопку в интерфейс
    mainButton.mount();

    if (viewport.mount.isAvailable()) {
      await viewport.mount();
      viewport.expand(); // first it would be better to expand
    }

    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen(); // then request full screen mode
    }
    // Проверяем, поддерживается ли кнопка "Настройки" в текущем окружении.
    // Если да, монтируем (отображаем) кнопку "Настройки" в интерфейсе.
    if (settingsButton.isSupported()) {
      settingsButton.mount();
    }

    // Проверяем, доступен ли компонент themeParams для работы.
    // Если да, монтируем его и связываем параметры темы с CSS-переменными.
    if (themeParams.mount.isAvailable()) {
      themeParams.mount();
      if (themeParams.bindCssVars.isAvailable()) {
        themeParams.bindCssVars();
        // Конвертирует HEX-цвета у тега `<html>` в формат RGB и записывает в `<body>
        convertHtmlHexStylesToBodyRgb();
      }
    }

    // Проверяем, доступен ли компонент miniApp для работы.
    // Если да, монтируем его и настраиваем цвета заголовка и фона приложения
    // на основе вторичного цвета фона из параметров темы.
    if (miniApp.mount.isAvailable()) {
      miniApp.mount();

      // Получаем вторичный цвет фона из параметров темы.
      // Если он не задан, используем значение 'secondary_bg_color' по умолчанию.
      const secondaryBgColor =
        themeParams.secondaryBackgroundColor() || "secondary_bg_color";

      // Устанавливаем цвет заголовка мини-приложения, если функция доступна.
      if (miniApp.setHeaderColor.isAvailable())
        miniApp.setHeaderColor(secondaryBgColor);
      // Устанавливаем цвет фона мини-приложения, если функция доступна.
      if (miniApp.setBackgroundColor.isAvailable())
        miniApp.setBackgroundColor(secondaryBgColor);
      if (miniApp.setBottomBarColor.isAvailable())
        miniApp.setBottomBarColor(secondaryBgColor);
    }

    // Монтируем компонент viewport для управления размерами окна приложения.
    // После монтирования связываем свойства viewport с CSS-переменными.
    viewport.mount().then(() => {
      viewport.bindCssVars();
    });

    // Восстанавливаем данные инициализации, чтобы получить информацию о состоянии приложения.
    initData.restore();
  } catch (error) {
    // В случае возникновения ошибки во время инициализации SDK,
    // выводим сообщение об ошибке в консоль для отладки.
    console.error("Ошибка инициализации Telegram SDK:", error);
  }
}
