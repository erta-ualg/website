import { useTranslation } from "react-i18next";

import trackImage from "../../assets/team/track.webp";
import teamPhoto from "../../data/Team";

export default function TeamHero() {
    const { t } = useTranslation();

    return (
        <section
            className="w-full px-6 py-16 lg:px-8 lg:py-24 relative overflow-hidden"
        >
            <img
                src={trackImage}
                alt=""
                aria-hidden="true"
                width={1200}
                height={675}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.6)_0%,rgba(15,23,42,0.82)_100%)]" />
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="relative overflow-hidden site-panel rounded-[var(--radius-xl)]">
                    <div className="grid items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-14 lg:py-14">
                        <div className="space-y-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                                {t("team-page.hero.eyebrow")}
                            </p>
                            <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.92] tracking-[0.08em] text-text md:text-6xl">
                                {t("team-page.hero.title")}
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
                                {t("team-page.hero.description")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#team-leadership" className="hero-cta-primary">
                                    {t("team-page.hero.explore")}
                                </a>
                                <a href="#team-departments" className="team-hero-secondary-button inline-flex items-center justify-center px-8 py-3 font-medium transition-colors">
                                    {t("team-page.hero.learn-more")}
                                </a>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--site-card-border)]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src={teamPhoto.photo}
                                    alt={t("team-page.hero.title")}
                                    className="h-full w-full object-cover"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
