import SectionHeader from "../Common/SectionHeader";

interface JoinReasonsSectionProps {
    title: string;
    subtitle: string;
    reasons: string[];
}

export default function JoinReasonsSection({
    title,
    subtitle,
    reasons,
}: JoinReasonsSectionProps) {
    return (
        <section className="w-full py-16 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader title={title} subtitle={subtitle} />
                <div className="join-reasons-grid">
                    {reasons.map((reason) => (
                        <article className="site-panel join-reason-card" key={reason}>
                            <p className="join-reason-text">{reason}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
