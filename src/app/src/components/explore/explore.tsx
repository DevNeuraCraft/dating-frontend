import React, { useEffect, useCallback } from "react";

import ExploreCardCollection from "@components/explore/explore-card-collection";
import { ExploresResponse } from "../../types/data-interfaces";

import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import exploresStore from "@store/explores-store";
import userStore from "@store/user-store";

export default function Explore() {
  const { explores, setExplores, loading, setLoading, removeExplore } =
    exploresStore();
  const { user } = userStore();

  const fetchExplores = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { explores } = await fetchData<ExploresResponse>(
        ENDPOINTS.BACKEND.USER.FIND_EXPLORES(user._id),
        METHODS.GET
      );
      setExplores(explores);
    } catch (error) {
      console.error("Failed to fetch explores:", error);
    } finally {
      setLoading(false);
    }
  }, [user, setExplores, setLoading]);

  useEffect(() => {
    if (explores.length === 0 && user) {
      fetchExplores();
    }
  }, [explores.length, user, fetchExplores]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ExploreCardCollection
      explores={explores}
      removeExplore={removeExplore}
      currentUserId={user?._id}
    />
  );
}