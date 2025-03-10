import ExploreCardButton from "@components/explore/explore-card-button";
import { ExploreCardButtonType } from "../../utils/consts";

export default function ExploreCardButtonContainer() {
  return (
    <div className="flex gap-2">
      <ExploreCardButton type={ExploreCardButtonType.REJECT} />
      <ExploreCardButton type={ExploreCardButtonType.ACCEPT} />
    </div>
  );
}
