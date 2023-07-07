import { cn } from "../lib/utils";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
  time?: string;
}

export function DocsPageHeader({
  heading,
  text,
  time,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {heading}
        </h1>
        {text && <p className="text-xl text-muted-foreground">{text}</p>}
        {time && (
          <p className="text-sm text-zinc-400 dark:text-zinc-500 flex ">
            {time}
          </p>
        )}
      </div>
      <hr className="my-4" />
    </>
  );
}
