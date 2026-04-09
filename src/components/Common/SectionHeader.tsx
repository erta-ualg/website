interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    headingLevel?: "h2" | "h3";
}

export default function SectionHeader({
    title,
    subtitle,
    headingLevel = "h2",
}: SectionHeaderProps) {
    const HeadingTag = headingLevel;

    return (
        <div className="section-header">
            <HeadingTag className="site-heading">{title}</HeadingTag>
            {subtitle ? <p className="site-body">{subtitle}</p> : null}
        </div>
    );
}
