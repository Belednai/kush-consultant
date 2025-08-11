import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "list";
  as?: keyof JSX.IntrinsicElements;
  gradient?: boolean;
}

const Typography = ({
  variant = "p",
  as,
  gradient = false,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = as || variant;

  const styles = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 border-primary pl-6 italic",
    list: "my-6 ml-6 list-disc [&>li]:mt-2",
  };

  return (
    <Component
      className={cn(
        styles[variant],
        gradient && "text-gradient",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Typography };

