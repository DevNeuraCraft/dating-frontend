import Image from "next/image";

import { User } from "@app/src/types/data-interfaces";
import LikeStatus from "./like-status";

import { SwipeStatus } from "@utils/consts";

interface LikeProps {
  user: User;
  status: SwipeStatus;
}

export default function Like({ user, status }: LikeProps) {
  return (
    <div className="bg-tg-section-bg-color w-full flex rounded-xl p-2 items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={user.images[0]}
          alt="User image"
          width={45}
          height={45}
          className="object-cover object-center rounded-xl"
        />
        <p className="text-tg-text-color">
          {user.name}, {user.age}
        </p>
      </div>
      <LikeStatus status={status} />
    </div>
  );
}
