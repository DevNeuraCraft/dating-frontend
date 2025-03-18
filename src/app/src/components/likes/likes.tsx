"use client";
import { useCallback, useEffect, useState } from "react";

import Loading from "@components/loading/loading";
import { Swipe, SwipesRespone } from "@app/src/types/data-interfaces";
import LikesContainer from "./likes-container";

import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import userStore from "@store/user-store";
import LikesLoadingButton from "./likes-loading-button";

export default function Likes() {
  const { user } = userStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [swipes, setSwipes] = useState<Swipe[]>([]);
  const [page, setPage] = useState<number>(1);

  const setNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const fetchSwipes = useCallback(
    async (page: number) => {
      if (user) {
        try {
          setLoading(true);
          const { swipes } = await fetchData<SwipesRespone>(
            ENDPOINTS.BACKEND.SWIPE.BASE,
            METHODS.GET,
            { id: user._id, page: page }
          );
          setSwipes((prev) => {
            const newSwipes = swipes.filter(
              (swipe) => !prev.some((p) => p._id === swipe._id)
            );
            return [...prev, ...newSwipes];
          });
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    },
    [user]
  );

  useEffect(() => {
    fetchSwipes(page);
  }, [fetchSwipes, page]);

  if (loading && swipes.length === 0) return <Loading />;

  return (
    <div className="grid gap-2 pb-2">
      <LikesContainer swipes={swipes} />
      <LikesLoadingButton onClick={setNextPage} loading={loading} />
    </div>
  );
}
