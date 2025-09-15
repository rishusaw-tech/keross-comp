import { cn } from "./utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md", className)}
      style={{ backgroundColor: "var(--keross-skeleton-bg)" }}
      {...props}
    />
  );
}

export { Skeleton };