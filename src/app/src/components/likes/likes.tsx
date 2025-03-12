"use client";
import { useCallback, useEffect, useState } from "react";

import Loading from "@components/loading/loading";
import { Swipe, SwipesRespone } from "@app/src/types/data-interfaces";
import LikesContainer from "./likes-container";

import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import userStore from "@store/user-store";

export default function Likes() {
  const { user } = userStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [swipes, setSwipes] = useState<Swipe[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchSwipes = useCallback(async () => {
    if (user) {
      try {
        const { swipes } = await fetchData<SwipesRespone>(
          ENDPOINTS.BACKEND.SWIPE.BASE,
          METHODS.GET,
          { id: user._id, page }
        );
        setSwipes(swipes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  }, [page, user]);

  useEffect(() => {
    fetchSwipes();
  }, [fetchSwipes]);

  if (loading) return <Loading />;

  return <LikesContainer swipes={swipes} />;
}
