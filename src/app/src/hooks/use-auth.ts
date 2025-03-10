import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import { UserResponse } from "../types/data-interfaces";

import { fetchData } from "@utils/api/fetch-data";
import { productionMode, AppRoute } from "@utils/consts";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import { getTelegramUserData } from "@utils/telegram";
import userStore from "@store/user-store";

export default function useAuth() {
  const router = useRouter();
  const { user, loading, setUser, setLoading } = userStore();

  const loadUser = useCallback(async () => {
    try {
      const telegramData = getTelegramUserData();
      if (!telegramData?.id) {
        throw new Error("Ошибка: Telegram ID не найден");
      }

      const { user } = await fetchData<UserResponse>(
        ENDPOINTS.BACKEND.USER.BY_TG_ID(telegramData.id),
        METHODS.GET
      );

      setUser(user);
    } catch (err) {
      console.error("Ошибка при загрузке пользователя:", err);
    } finally {
      setLoading(false);
    }
  }, [setUser, setLoading]);

  useEffect(() => {
    if (loading) return;

    if (productionMode) {
      if (!user) {
        router.replace(AppRoute.REGISTRATION); // replace вместо push
      }
    } else {
      router.replace(AppRoute.HEART_BEAT);
    }
  }, [loading, user, router]);

  // Загружаем пользователя только если его нет
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);
}
