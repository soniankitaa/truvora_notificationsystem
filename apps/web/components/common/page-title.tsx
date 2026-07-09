interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({
  title,
  description,
}: PageTitleProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="text-muted-foreground text-base">
          {description}
        </p>
      )}
    </div>
  );
}