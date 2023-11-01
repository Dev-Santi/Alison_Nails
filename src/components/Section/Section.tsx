export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[80rem] min-h-screen mx-auto px-6 py-6 ${className}`}
    >
      {children}
    </div>
  );
}
