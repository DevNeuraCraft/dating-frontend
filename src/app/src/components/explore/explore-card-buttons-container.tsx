import ExploreCardButton from "@components/explore/explore-card-button";

import { ExploreCardButtonType } from "@utils/consts";

interface ExploreCardButtonContainerProps {
  removeExplore: (type: ExploreCardButtonType) => void;
}

export default function ExploreCardButtonContainer({
  removeExplore,
}: ExploreCardButtonContainerProps) {
  return (
    <div className="flex gap-2">
      <ExploreCardButton
        type={ExploreCardButtonType.REJECT}
        removeExplore={removeExplore}
      />
      <ExploreCardButton
        type={ExploreCardButtonType.ACCEPT}
        removeExplore={removeExplore}
      />
    </div>
  );
}