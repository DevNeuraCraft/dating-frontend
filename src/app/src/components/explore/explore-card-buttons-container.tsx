import ExploreCardButton from '@components/explore/explore-card-button';

import { ExploreCardButtonType, SwipeStatus } from '@utils/consts';

interface ExploreCardButtonContainerProps {
  altIcon?: boolean;
  removeExplore: (type: ExploreCardButtonType) => void | (status: SwipeStatus) => void;
}

export default function ExploreCardButtonContainer({
                                                     removeExplore,
                                                     altIcon = false,
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
