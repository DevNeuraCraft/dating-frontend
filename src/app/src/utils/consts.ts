import { faLocationDot } from '@awesome.me/kit-7090d2ba88/icons/classic/light';
import {
  faCheck,
  faCircle,
  faEllipsis,
  faSliders,
  faXmarkLarge,
} from '@awesome.me/kit-7090d2ba88/icons/classic/regular';
import {
  faCardsBlank,
  faChevronRight,
  faCircleCheck,
  faCircleChevronUp,
  faCircleUser,
  faHeart,
  faHeartBroken,
  faPaperPlane,
  faPen,
  faPlus,
} from '@awesome.me/kit-7090d2ba88/icons/classic/solid';

export enum AppRoute {
  REGISTRATION = '/registration',
  NOT_FOUND = '/not-found',
  HEART_BEAT = '/heart-beat/',
  MATCH = '/match',
  EXPLORE = '/',
  PROFILE = '/profile',
  LIKES = '/likes',
  EDIT_PROFILE = '/edit',
}

export enum TabBarButton {
  PROFILE = 'Профиль',
  EXPLORE = 'Встречи',
}

export enum ProfileMenuButtonTitle {
  EDIT_PROFILE = 'Редактировать профиль',
  FILTERS = 'Фильтры',
  LIKES = 'Лайки',
}

export enum ExploreCardButtonType {
  ACCEPT = 'accept',
  REJECT = 'reject',
}

export enum SwipeStatus {
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  IGNORED = 'ignored',
}

export const IconDefinition = {
  CIRCLE_CHECK: faCircleCheck,
  CIRCLE: faCircle,
  PLUS: faPlus,
  HEART: faHeart,
  BROKEN_HEART: faHeartBroken,
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
  PLANE: faPaperPlane,
};

export enum CardButtonType {
  NEGATIVE = 'NEGATIVE',
  POSITIVE = 'POSITIVE',
}

export const NO_LIKES_MESSAGES = {
  male: 'Ты ещё пока никого не лайкнул :(',
  female: 'Ты ещё пока никого не лайкнула :(',
};

export const productionMode = true;
