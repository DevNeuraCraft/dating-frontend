import ExploreCard from "@components/explore/explore-card";
import { User } from "../../types/data-interfaces";

interface ExploreCardCollectionProps {
  explores: User[];
}

export default function ExploreCardCollection({
  explores,
}: ExploreCardCollectionProps) {
  if (explores.length > 0)
    return (
      <>
        <ExploreCard {...explores[0]} />
      </>
    );
}
