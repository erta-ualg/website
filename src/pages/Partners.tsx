import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PartnerCard from "../components/Card/PartnerCard";
import SponsorWallCanvas from "../components/Feature/SponsorWallCanvas";
import partners from "../data/Partners";

export default function PartnersPage() {
    const { t } = useTranslation();
    const goldPartner = partners.find((partner) => partner.tier === "gold");
    const supportingPartners = partners.filter((partner) => partner.tier === "partner");

    const stats = [
        { label: t("partners-page.stats.gold"), value: String(partners.filter((partner) => partner.tier === "gold").length) },
        { label: t("partners-page.stats.supporting"), value: String(supportingPartners.length) },
        { label: t("partners-page.stats.total"), value: String(partners.length) },
    ];

    return (
        <div className="bg-background text-text">
            <Header />

            <main className="overflow-hidden">
                <section className="bg-background px-6 py-16 text-text lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="space-y-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                                {t("partners-page.hero.eyebrow")}
                            </p>
                            <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.92] tracking-[0.06em] text-text md:text-6xl">
                                {t("partners-page.hero.title")}
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
                                {t("partners-page.hero.body")}
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border border-cyan-300/15 bg-[color:var(--site-surface-strong)] px-4 py-4"
                                    >
                                        <p className="text-3xl font-black uppercase tracking-[0.08em] text-text">
                                            {stat.value}
                                        </p>
                                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--site-muted)]">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="site-panel rounded-[2rem] p-4">
                            <div className="min-h-[22rem] overflow-hidden rounded-[1.5rem]">
                                <SponsorWallCanvas partners={partners} />
                            </div>
                        </div>
                    </div>
                </section>

                {goldPartner && (
                    <section className="bg-background px-6 py-12 text-text lg:py-16">
                        <div className="mx-auto max-w-7xl space-y-6">
                            <div className="max-w-3xl space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                                    {t("partners-page.gold.eyebrow")}
                                </p>
                                <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                                    {t("partners-page.gold.title")}
                                </h2>
                                <p className="text-lg leading-8 text-text-secondary md:text-xl">
                                    {t("partners-page.gold.body")}
                                </p>
                            </div>

                            <PartnerCard partner={goldPartner} featured />
                        </div>
                    </section>
                )}

                <section className="bg-background px-6 py-12 text-text lg:py-16">
                    <div className="mx-auto max-w-7xl space-y-6">
                        <div className="max-w-3xl space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                                {t("partners-page.supporting.title")}
                            </p>
                            <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                                {t("partners-page.supporting.title")}
                            </h2>
                            <p className="text-lg leading-8 text-text-secondary md:text-xl">
                                {t("partners-page.supporting.body")}
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {supportingPartners.map((partner) => (
                                <PartnerCard key={partner.name} partner={partner} compact />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-background px-6 py-16 text-text lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col gap-6 rounded-[2rem] border border-[var(--site-card-border)] bg-[color:var(--site-surface-strong)] p-8 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl space-y-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                                    {t("partners-page.cta.eyebrow")}
                                </p>
                                <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                                    {t("partners-page.cta.title")}
                                </h2>
                                <p className="text-lg leading-8 text-text-secondary md:text-xl">
                                    {t("partners-page.cta.body")}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/contactos" className="hero-cta-primary">
                                    {t("partners-page.cta.contact")}
                                </Link>
                                <Link
                                    to="/join"
                                    className="inline-flex items-center justify-center rounded-md border border-cyan-300/40 bg-slate-900/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-slate-900/70"
                                >
                                    {t("feature.join-cta.button")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}