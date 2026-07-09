"use client";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-6">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}

    </div>
  );
}