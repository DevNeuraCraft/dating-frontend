import clsx from 'clsx';

import Icon from '@components/icons/icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CardButtonType } from '@utils/consts';


interface CardButtonProps {
  onClick: () => void;
  icon: IconDefinition;
  type: CardButtonType;
  text?: string;
}

export default function CardButton({
                                     onClick,
                                     icon,
                                     type,
                                     text = '',
                                   }: CardButtonProps) {

  const classes = {
    [CardButtonType.NEGATIVE]: 'border-tg-button-color border-[0.1rem] text-tg-button-color',
    [CardButtonType.POSITIVE]: 'text-white bg-tg-button-color',
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-3 p-3 py-1 rounded-xl w-full cursor-pointer h-12',
        'transition-all duration-200 ease-out active:scale-95',
        classes[type],
      )}
      onClick={onClick}
    >
      {Icon({ iconDefinition: icon })} {text}
    </div>
  );
}
