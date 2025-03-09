"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppRoute, productionMode } from "@utils/consts";
import PageWrapper from "@components/page-wrapper";
import userStore from "@store/user-store";
import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import { UserResponse } from "./src/types/data-interfaces";
import { getTelegramUserData } from "@utils/telegram";

export default function Home() {
  const router = useRouter();
  const { user, loading, setUser, setLoading } = userStore();

  useEffect(() => {
    if (productionMode) {
      if (!loading) {
        if (!user) {
          router.push(AppRoute.REGISTRATION);
        }
      }
    } else {
      router.push(AppRoute.HEART_BEAT);
    }
  }, [loading, user, router]);

  useEffect(() => {
    (async () => {
      try {
        const { id: telegramUserId } = getTelegramUserData();
        const { user } = await fetchData<UserResponse>(
          ENDPOINTS.BACKEND.USER.BY_TG_ID(telegramUserId),
          METHODS.GET
        );
        setUser(user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [setLoading, setUser]);

  return (
    <PageWrapper back={false}>
      <div></div>
    </PageWrapper>
  );
}
