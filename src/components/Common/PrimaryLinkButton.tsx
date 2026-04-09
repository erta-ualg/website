import type { ReactNode } from "react";

interface PrimaryLinkButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    openInNewTab?: boolean;
}

export default function PrimaryLinkButton({
    href,
    children,
    className,
    openInNewTab = false,
}: PrimaryLinkButtonProps) {
    return (
        <a
            href={href}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
            className={["hero-cta-primary", className].filter(Boolean).join(" ")}
        >
            {children}
        </a>
    );
}
