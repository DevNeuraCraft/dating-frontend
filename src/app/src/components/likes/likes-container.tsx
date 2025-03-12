import Like from "@components/likes/like";
import { Swipe } from "@app/src/types/data-interfaces";

interface LikesContainerProps {
  swipes: Swipe[];
}

export default function LikesContainer({ swipes }: LikesContainerProps) {
  return (
    <div className="grid gap-2">
      {swipes.map((swipe) => (
        <Like user={swipe.swiped_id} status={swipe.status} key={swipe._id} />
      ))}
    </div>
  );
}
