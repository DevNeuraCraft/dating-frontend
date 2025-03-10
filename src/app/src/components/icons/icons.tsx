import {
  faCircle,
  faSliders,
} from "@awesome.me/kit-7090d2ba88/icons/classic/regular";
import {
  faCardsBlank,
  faChevronRight,
  faCircleCheck,
  faCircleUser,
  faHeart,
  faPen,
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

export const profile = (classes: string) => (
  <FontAwesomeIcon icon={faCircleUser} className={classes} size="2x" />
);

export const cards = (classes: string) => (
  <FontAwesomeIcon icon={faCardsBlank} className={classes} size="2x" />
);

export const chevron = () => <FontAwesomeIcon icon={faChevronRight} />;

export const pen = () => <FontAwesomeIcon icon={faPen} color="white" />;

export const sliders = () => <FontAwesomeIcon icon={faSliders} color="white" />;

export const likes = () => <FontAwesomeIcon icon={faHeart} color="white" />;