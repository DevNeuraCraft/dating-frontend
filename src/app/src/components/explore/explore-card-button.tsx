import clsx from 'clsx';

import Icon from '@components/icons/icons';

import { ExploreCardButtonType, IconDefinition, SwipeStatus } from '@utils/consts';

interface ExploreCardButtonProps {
  type: ExploreCardButtonType;
  removeExplore: (type: ExploreCardButtonType | SwipeStatus) => void;
}

export default function ExploreCardButton({
                                            type,
                                            removeExplore,
                                          }: ExploreCardButtonProps) {
  const classes = {
    [ExploreCardButtonType.ACCEPT]: {
      classes: 'text-white bg-tg-button-color',
      icon: IconDefinition.CHECK,
      // type: type,
    },
    [ExploreCardButtonType.REJECT]: {
      classes: 'border-tg-button-color border-[0.1rem] text-tg-button-color',
      icon: IconDefinition.CROSS,
      // type: type,
    },
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-center p-3 py-4 rounded-xl w-full cursor-pointer',
        'transition-all duration-200 ease-out active:scale-95',
        classes[type].classes,
      )}
      onClick={() => {
        removeExplore(type);
      }}
    >
      {Icon({ iconDefinition: classes[type].icon })}
    </div>
  );
}
