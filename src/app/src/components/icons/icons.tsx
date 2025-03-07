import { faCircle } from "@awesome.me/kit-7090d2ba88/icons/classic/regular";
import {
  faCircleCheck,
  faHeart,
  faPlus,
} from "@awesome.me/kit-7090d2ba88/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const circleCheck = () => (
  <FontAwesomeIcon
    icon={faCircleCheck}
    size="lg"
    className="text-tg-button-color"
  />
);

export const circle = () => (
  <FontAwesomeIcon icon={faCircle} size="lg" className="text-tg-text-color" />
);

export const plus = () => (
  <FontAwesomeIcon icon={faPlus} size="xl" className="text-tg-text-color" />
);

export const heart = () => (
  <FontAwesomeIcon
    icon={faHeart}
    className="text-tg-subtitle-text-color h-16 heart-beat "
  />
);
