import { usePathname } from "next/navigation";

import BottomBarButton from "@components/bottom-bar/bottom-bar-button";
import { cards, profile } from "@icons/icons";

import { AppRoute, TabBarButton } from "@utils/consts";

export default function BottomBar() {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 grid grid-cols-2 w-full pb-5 border-t-[0.05rem] border-tg-section-separator-color">
      <BottomBarButton
        href={AppRoute.EXPLORE}
        title={TabBarButton.EXPLORE}
        icon={cards}
        currentRoute={pathName}
      />
      <BottomBarButton
        href={AppRoute.PROFILE}
        title={TabBarButton.PROFILE}
        icon={profile}
        currentRoute={pathName}
      />
    </div>
  );
}
