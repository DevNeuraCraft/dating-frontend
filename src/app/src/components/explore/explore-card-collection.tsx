import ExploreCard from "@components/explore/explore-card";
import {User} from "../../types/data-interfaces";

interface ExploreCardCollectionProps {
    explores: User[];
    currentUserId?: string;
    removeExplore: (id: string) => void;
}

export default function ExploreCardCollection({
                                                  explores,
                                                  removeExplore,
                                                  currentUserId,
                                              }: ExploreCardCollectionProps) {
    if (explores.length > 0)
        return (
            <ExploreCard
                {...explores[0]}
                removeExplore={removeExplore}
                currentUserId={currentUserId}
            />
        );
}
