import clsx from "clsx";

interface LikesLoadingButtonPorps {
  onClick: () => void;
  loading: boolean;
}

export default function LikesLoadingButton({
  onClick,
  loading,
}: LikesLoadingButtonPorps) {
  const shimmer =
    "before:absolute before:z-10 before:opacity-50 before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-tg-secondary-bg-color before:to-transparent";

  return (
    <div
      className={clsx(
        "w-full flex items-center justify-center bg-tg-button-color rounded-xl p-3",
        "transition-all duration-200 ease-out active:scale-90 cursor-pointer",
        loading ? shimmer : ""
      )}
      onClick={onClick}
    >
      <p className="text-white text-lg">Загрузить ещё</p>
    </div>
  );
}
