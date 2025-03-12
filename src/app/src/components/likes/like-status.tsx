import Icon from "@components/icons/icons";

import { IconDefinition, SwipeStatus } from "@utils/consts";

interface LikeStatusProps {
  status: SwipeStatus;
}

export default function LikeStatus({ status }: LikeStatusProps) {
  const likeStatusData = {
    [SwipeStatus.REJECTED]: { icon: IconDefinition.CROSS },
    [SwipeStatus.ACCEPTED]: { icon: IconDefinition.CHECK },
    [SwipeStatus.IGNORED]: { icon: IconDefinition.DOTS },
  };
  return <div>{Icon({ iconDefinition: likeStatusData[status].icon })}</div>;
}
