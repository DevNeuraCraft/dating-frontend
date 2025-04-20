import Image from 'next/image';

import { User } from '@app/src/types/data-interfaces';
import LikeStatus from './like-status';

import { SwipeStatus } from '@utils/consts';

interface LikeProps {
  user: User;
  status: SwipeStatus;
}

export default function Like({ user, status }: LikeProps) {
  return (
    <div
      className="bg-tg-section-bg-color w-full flex rounded-xl p-2 items-center justify-between ">
      <div className="flex items-center gap-3">
        <div className="relative min-w-12 w-11 h-12">
          <Image
            src={user.images[0]}
            alt="User image"
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>
        <p className="text-tg-text-color">
          {user.name}, {user.age}
        </p>
      </div>
      <LikeStatus status={status} />
    </div>
  );
}
