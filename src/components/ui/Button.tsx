import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
}

export const getButtonClasses = (variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) => {
    return cn(
        "inline-flex items-center justify-center rounded-sm font-bold tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase shadow-sm active:scale-[0.98]",
        {
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-md": variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary/5": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-10 px-4 text-xs": size === "sm",
            "h-12 px-8 text-sm": size === "md",
            "h-14 px-10 text-base": size === "lg",
        },
        className
    );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, variant = "primary", size = "md", href, ...props
}, ref) => {
    const classes = getButtonClasses(variant, size, className);

    if (href) {
        // Start external links with http
        const isExternal = href.startsWith('http');
        if (isExternal) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                    {props.children}
                </a>
            )
        }
        return (
            <Link href={href} className={classes}>
                {props.children}
            </Link>
        );
    }

    return (
        <button
            ref={ref}
            className={classes}
            {...props}
        />
    );
});
Button.displayName = "Button";

export { Button };
