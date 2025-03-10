import { PropsWithChildren } from "react";
import clsx from "clsx";

export default function ProfileMenuButtonIconContainter({
  children,
  color,
}: PropsWithChildren<{ color: string }>) {
  return <div className={clsx("flex p-2 rounded-lg", color)}>{children}</div>;
}
