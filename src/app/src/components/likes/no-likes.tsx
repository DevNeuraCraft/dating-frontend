import {NO_LIKES_MESSAGES} from "@utils/consts";

interface NoLikesProps {
    gender: "male" | "female";
}

export default function NoLikes({gender}: NoLikesProps) {
    const noLikesAlertTitle= NO_LIKES_MESSAGES[gender];
  return (
    <div className="h-[95vh] flex items-center justify-center">
      <p className="text-tg-text-color">{noLikesAlertTitle}</p>
    </div>
  );
}
