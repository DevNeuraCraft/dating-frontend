import { CardButtonType, IconDefinition, SwipeStatus } from '@utils/consts';
import CardButton from '@components/buttons/card-button';

interface MathCardButtonContainerProps {
  reactToProfile: (status: SwipeStatus) => void;
}

export default function MathCardButtonContainer({
                                                  reactToProfile,
                                                }: MathCardButtonContainerProps) {
  const buttons = [
    {
      status: SwipeStatus.REJECTED,
      type: CardButtonType.NEGATIVE,
      icon: IconDefinition.BROKEN_HEART,
    },
    {
      status: SwipeStatus.ACCEPTED,
      type: CardButtonType.POSITIVE,
      icon: IconDefinition.HEART,
    },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map((button) => (
        <CardButton
          key={button.status}
          onClick={() => reactToProfile(button.status)}
          type={button.type}
          icon={button.icon}
        />
      ))}
    </div>
  );
}
