import PrimaryLinkButton from "../Common/PrimaryLinkButton";
import SectionHeader from "../Common/SectionHeader";

interface JoinApplyCtaSectionProps {
    title: string;
    body: string;
    actionLabel: string;
    actionLink: string;
}

export default function JoinApplyCtaSection({
    title,
    body,
    actionLabel,
    actionLink,
}: JoinApplyCtaSectionProps) {
    return (
        <section className="w-full py-16 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="cta-block">
                    <SectionHeader title={title} subtitle={body} headingLevel="h3" />
                    <PrimaryLinkButton href={actionLink} openInNewTab>
                        {actionLabel}
                    </PrimaryLinkButton>
                </div>
            </div>
        </section>
    );
}
