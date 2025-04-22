import { CardButtonType, ExploreCardButtonType, IconDefinition } from '@utils/consts';
import CardButton from '@components/buttons/card-button';

interface ExploreCardButtonContainerProps {
  removeExplore: (type: ExploreCardButtonType) => void;
}

export default function ExploreCardButtonContainer({
                                                     removeExplore,
                                                   }: ExploreCardButtonContainerProps) {

  const buttons = [
    {
      swipeType: ExploreCardButtonType.REJECT,
      type: CardButtonType.NEGATIVE,
      icon: IconDefinition.CROSS,
    },
    {
      swipeType: ExploreCardButtonType.ACCEPT,
      type: CardButtonType.POSITIVE,
      icon: IconDefinition.CHECK,
    },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map(button => (
        <CardButton
          key={button.swipeType}
          onClick={() => {
            removeExplore(button.swipeType);
          }}
          type={button.type}
          icon={button.icon}
        />
      ))}

    </div>
  );
}
