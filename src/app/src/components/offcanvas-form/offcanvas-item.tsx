interface OffcanvasItemProps {
  title: string;
  toggleOpen: () => void;
}

export default function OffcanvasItem({
  title,
  toggleOpen,
}: OffcanvasItemProps) {
  return (
    <div
      className="bg-tg-section-bg-color py-2 px-4
    active:opacity-55 transition-opacity duration-300
    border-2 border-tg-secondary-bg-color rounded-xl
    select-none"
      onClick={toggleOpen}
    >
      <p>{title}</p>
    </div>
  );
}
