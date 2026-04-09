import PrimaryLinkButton from "../Common/PrimaryLinkButton";

interface JoinHeroSectionProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    actionLabel: string;
    futureNote: string;
    actionLink: string;
}

export default function xJoinHeroSection({
    eyebrow,
    title,
    subtitle,
    actionLabel,
    futureNote,
    actionLink,
}: JoinHeroSectionProps) {
    return (
        <section className="w-full pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6 join-hero text-black-200">
                <p className="section-eyebrow">{eyebrow}</p>
                <h1 className="join-title">{title}</h1>
                <p className="site-body join-subtitle">{subtitle}</p>
                <div className="join-hero-actions">
                    <PrimaryLinkButton href={actionLink} openInNewTab>
                        {actionLabel}
                    </PrimaryLinkButton>
                    <span className="join-future-note">{futureNote}</span>
                </div>
            </div>
        </section>
    );
}
