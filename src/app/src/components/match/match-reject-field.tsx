import Icon from '@components/icons/icons';
import { IconDefinition } from '@utils/consts';

export default function MatchRejectField() {
  return <div className="flex items-center justify-center py-3">{Icon({
    iconDefinition: IconDefinition.BROKEN_HEART,
    size: '2x',
    classes: 'text-tg-subtitle-text-color heart-beat',
  })}</div>;
}
