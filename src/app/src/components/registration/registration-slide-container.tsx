export default function RegistrationSlideContainter({
  children,
  title,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="p-1">
      <p className="text-2xl text-tg-text-color select-none mb-2">{title}</p>
      {children}
    </div>
  );
}
