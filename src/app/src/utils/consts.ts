import { faLocationDot } from "@awesome.me/kit-7090d2ba88/icons/classic/light";
import {
  faCheck,
  faCircle,
  faEllipsis,
  faSliders,
  faXmarkLarge,
} from "@awesome.me/kit-7090d2ba88/icons/classic/regular";
import {
  faCardsBlank,
  faChevronRight,
  faCircleCheck,
  faCircleChevronUp,
  faCircleUser,
  faHeart,
  faPen,
  faPlus,
} from "@awesome.me/kit-7090d2ba88/icons/classic/solid";

export enum AppRoute {
  REGISTRATION = "/registration",
  NOT_FOUND = "/not-found",
  HEART_BEAT = "/heart-beat/",
  EXPLORE = "/",
  PROFILE = "/profile",
  LIKES = "/likes",
}

export enum TabBarButton {
  PROFILE = "Профиль",
  EXPLORE = "Встречи",
}

export enum ProfileMenuButtonTitle {
  EDIT_PROFILE = "Редактировать профиль",
  FILTERS = "Фильтры",
  LIKES = "Лайки",
}

export enum ExploreCardButtonType {
  ACCEPT = "accept",
  REJECT = "reject",
}

export enum SwipeStatus {
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  IGNORED = "ignored",
}

export const IconDefinition = {
  CIRCLE_CHECK: faCircleCheck,
  CIRCLE: faCircle,
  PLUS: faPlus,
  HEART: faHeart,
  PROFILE: faCircleUser,
  CARDS: faCardsBlank,
  CHEVRON: faChevronRight,
  CHEVRON_CIRCLE: faCircleChevronUp,
  PEN: faPen,
  CHECK: faCheck,
  SLIDERS: faSliders,
  LOCATION_DOT: faLocationDot,
  CROSS: faXmarkLarge,
  DOTS: faEllipsis,
};

export const productionMode = true;
