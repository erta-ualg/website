import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SEO } from "../hooks/useSEO";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="bg-background text-text">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Return to ERTA's homepage."
                keywords="404, not found, error"
                ogUrl="https://fs-erta.com"
                canonicalUrl="https://fs-erta.com"
            />
            <Header />

            <main className="relative overflow-hidden px-6 py-20 text-text lg:py-28">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="not-found-orb not-found-orb-one" />
                    <div className="not-found-orb not-found-orb-two" />
                    <div className="not-found-grid" />
                </div>

                <section className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                    <div className="space-y-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                            {t("not-found.eyebrow")}
                        </p>

                        <div className="space-y-4">
                            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-[0.04em] text-text sm:text-7xl lg:text-8xl">
                                {t("not-found.title")}
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
                                {t("not-found.description")}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <Link
                                to="/"
                                className="hero-cta-primary"
                            >
                                {t("not-found.home")}
                            </Link>
                            <Link
                                to="/team"
                                className="inline-flex items-center justify-center rounded-full border border-[var(--site-border)] bg-[color:var(--site-surface)] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-text"
                            >
                                {t("not-found.team")}
                            </Link>
                            <Link
                                to="/contactos"
                                className="inline-flex items-center justify-center rounded-full border border-[var(--site-border)] bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-text-secondary"
                            >
                                {t("not-found.contact")}
                            </Link>
                        </div>
                    </div>

                    <div className="site-panel relative overflow-hidden rounded-[2rem] border border-[var(--site-panel-border)] bg-[color:var(--site-surface)] p-6 shadow-[var(--site-shadow)] backdrop-blur-xl sm:p-8">
                        <div className="not-found-panel-glow" />
                        <div className="relative space-y-6">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--site-accent)]/80">
                                        {t("not-found.panel.eyebrow")}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-text">
                                        {t("not-found.panel.title")}
                                    </h2>
                                </div>

                                <div className="rounded-2xl border border-[var(--site-border)] bg-[color:var(--site-surface-strong)] px-4 py-3 text-right">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--site-accent)]/80">
                                        {t("not-found.panel.status-label")}
                                    </p>
                                    <p className="mt-1 text-2xl font-black tracking-[0.08em] text-text">
                                        404
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        label: t("not-found.links.home.label"),
                                        value: "/",
                                        description: t("not-found.links.home.description"),
                                    },
                                    {
                                        label: t("not-found.links.team.label"),
                                        value: "/team",
                                        description: t("not-found.links.team.description"),
                                    },
                                    {
                                        label: t("not-found.links.join.label"),
                                        value: "/join",
                                        description: t("not-found.links.join.description"),
                                    },
                                    {
                                        label: t("not-found.links.contact.label"),
                                        value: "/contactos",
                                        description: t("not-found.links.contact.description"),
                                    },
                                ].map((item) => (
                                    <Link
                                        key={item.value}
                                        to={item.value}
                                        className="group rounded-2xl border border-[var(--site-border)] bg-[color:var(--site-surface-strong)] p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--site-accent)]/50 hover:shadow-[0_18px_40px_rgba(47,128,237,0.16)]"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--site-accent)]/75">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-lg font-bold uppercase tracking-[0.08em] text-text">
                                            {item.value}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-text-secondary">
                                            {item.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}