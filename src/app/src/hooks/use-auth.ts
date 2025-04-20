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
      const { user } = await fetchData<UserResponse>(
        ENDPOINTS.BACKEND.USER.BY_TG_ID(telegramData.id),
        METHODS.GET
      );

      if (user && user.username !== telegramData.username) {
        await fetchData(
          ENDPOINTS.BACKEND.USER.UPDATE(user._id),
          METHODS.PUT,
          {},
          { username: telegramData.username }
        );
      }

      setUser(user);
    } catch (err) {
      console.error("Ошибка при загрузке пользователя:", err);
    } finally {
      setLoading(false);
    }
  }, [setUser, setLoading]);

  useEffect(() => {
    if (loading) return;

    const redirectRoute = productionMode
      ? user
        ? undefined
        : AppRoute.REGISTRATION
      : AppRoute.HEART_BEAT;

    if (redirectRoute) {
      router.replace(redirectRoute);
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);
}
