import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import results from "../data/Results";
import { SEO } from "../hooks/useSEO";

export default function Results() {
    const { t } = useTranslation();
    const result = results[0];

    const eventStats = result.events.map((event) => ({
        id: event.id,
        rank: event.rank,
        label: t(`results-page.stats.${event.id}`),
    }));

    return (
        <div className="results-page-shell text-text">
            <SEO
                title={t("seo.results.title")}
                description={t("seo.results.description")}
                keywords={t("seo.results.keywords")}
                ogImage="https://fs-erta.com/images/results/og-results.png"
                twitterImage="https://fs-erta.com/images/results/og-results.png"
                ogUrl="https://fs-erta.com/results"
                canonicalUrl="https://fs-erta.com/results"
                structuredData={[
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "ERTA Results — FSPT26",
                        description: "ERTA's results at Formula Student Portugal 2026",
                        url: "https://fs-erta.com/results",
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "SportsEvent",
                        name: "Formula Student Portugal 2026 — Class 2",
                        startDate: "2026-07-19",
                        endDate: "2026-07-24",
                        eventStatus: "https://schema.org/EventScheduled",
                        location: {
                            "@type": "Place",
                            name: "Castelo Branco Motorsport Park",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Castelo Branco",
                                addressCountry: "PT",
                            },
                        },
                        competitor: {
                            "@type": "SportsTeam",
                            name: "ERTA — Engineering Racing Team Algarve",
                            url: "https://fs-erta.com/",
                        },
                        description:
                            "ERTA finished 8th overall in Class 2 at FSPT26, with 5th in Cost & Manufacturing, 6th in Business Plan Presentation and 7th in Engineering Design.",
                    },
                ]}
            />
            <Header />

            <main className="overflow-hidden">
                <section className="results-hero relative w-full overflow-hidden px-6 py-16 lg:px-8 lg:py-24">
                    <img
                        src={result.heroImage}
                        alt=""
                        aria-hidden="true"
                        width={1200}
                        height={675}
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="eager"
                    />
                    <div className="results-hero-overlay absolute inset-0" aria-hidden="true" />

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="site-panel results-hero-panel">
                            <div className="results-hero-grid">
                                <div className="results-hero-copy">
                                    <p className="section-eyebrow results-eyebrow">{t("results-page.hero.eyebrow")}</p>
                                    <h1 className="results-title">{t("results-page.hero.title")}</h1>
                                    <p className="results-body">{t("results-page.hero.body")}</p>

                                    <div className="results-chips">
                                        <span className="results-chip">
                                            {t("results-page.chips.cost")} <b>P{result.events[0].rank}</b>
                                        </span>
                                        <span className="results-chip">
                                            {t("results-page.chips.business")} <b>P{result.events[1].rank}</b>
                                        </span>
                                        <span className="results-chip">
                                            {t("results-page.chips.design")} <b>P{result.events[2].rank}</b>
                                        </span>
                                        <span className="results-chip">
                                            {t("results-page.chips.overall")} <b>P{result.overallRank}</b>
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a href="#results-breakdown" className="hero-cta-primary">
                                            {t("results-page.hero.primary")}
                                        </a>
                                        <Link to="/team" className="team-hero-secondary-button inline-flex items-center justify-center">
                                            {t("results-page.hero.secondary")}
                                        </Link>
                                    </div>
                                </div>

                                <div className="results-rank-card">
                                    <div>
                                        <p className="results-rank-label">{t("results-page.rank.label")}</p>
                                        <p className="results-rank-value">
                                            {String(result.overallRank).padStart(2, "0")}
                                            <span className="results-rank-suffix">{t("results-page.rank.suffix")}</span>
                                        </p>
                                        <p className="results-rank-caption">{t("results-page.rank.overall")}</p>
                                    </div>

                                    <div className="results-rank-foot">
                                        <span>{result.season}</span>
                                        <span>{t("results-page.rank.entries", { total: result.entries })}</span>
                                        <span>{t("results-page.rank.car", { number: result.carNumber })}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="results-stats">
                            <div className="results-stat results-stat-highlight">
                                <p className="results-stat-value">P{result.overallRank}</p>
                                <p className="results-stat-label">{t("results-page.stats.overall")}</p>
                            </div>
                            {eventStats.map((stat) => (
                                <div key={stat.id} className="results-stat">
                                    <p className="results-stat-value">P{stat.rank}</p>
                                    <p className="results-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="results-breakdown" className="results-section scroll-mt-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="results-section-head">
                            <h2 className="results-section-title">{t("results-page.events.title")}</h2>
                            <p className="results-section-meta">{t("results-page.events.meta")}</p>
                        </div>

                        <div className="results-events">
                            {result.events.map((event, index) => (
                                <article key={event.id} className="site-panel results-event">
                                    <span className="results-event-medal" aria-hidden="true">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="results-event-copy">
                                        <p className="results-event-kicker">
                                            {t("results-page.events.kicker", {
                                                number: String(index + 1).padStart(2, "0"),
                                            })}
                                        </p>
                                        <h3 className="results-event-title">
                                            {t(`results-page.events.${event.id}.title`)}
                                        </h3>
                                        <p className="results-event-body">{t(`results-page.events.${event.id}.body`)}</p>
                                        <span className="sr-only">
                                            {t("results-page.events.rank-label", { rank: event.rank })}
                                        </span>
                                    </div>
                                    <div className="results-event-standing">
                                        <span className="results-event-standing-label">
                                            {t("results-page.events.standing")}
                                        </span>
                                        <span className="results-event-standing-value">P{event.rank}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="results-section">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="results-section-head">
                            <h2 className="results-section-title">{t("results-page.gallery.title")}</h2>
                            <p className="results-section-meta">{t("results-page.gallery.meta")}</p>
                        </div>

                        <div className="results-gallery">
                            {result.gallery.map((item) => (
                                <figure key={item.id} className="results-gallery-item">
                                    {item.image ? (
                                        <img src={item.image} alt={t(item.altKey)} loading="lazy" />
                                    ) : (
                                        <div
                                            className="results-gallery-placeholder"
                                            role="img"
                                            aria-label={t(item.altKey)}
                                        />
                                    )}
                                    <figcaption>{t(item.captionKey)}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="results-section">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="results-closing">
                            <div className="site-panel results-quote">
                                <p>{t("results-page.quote.text")}</p>
                                <span>{t("results-page.quote.author")}</span>
                            </div>

                            <div className="site-panel results-cta">
                                <p className="section-eyebrow results-eyebrow">{t("results-page.cta.eyebrow")}</p>
                                <h2 className="results-cta-title">{t("results-page.cta.title")}</h2>
                                <p className="results-cta-body">{t("results-page.cta.body")}</p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/join" className="hero-cta-primary">
                                        {t("results-page.cta.primary")}
                                    </Link>
                                    <Link
                                        to="/contactos"
                                        className="team-hero-secondary-button inline-flex items-center justify-center"
                                    >
                                        {t("results-page.cta.secondary")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
