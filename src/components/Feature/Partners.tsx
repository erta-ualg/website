import { useTranslation } from "react-i18next";

import partners from "../../data/Partners";
import PartnerCard from "../Card/PartnerCard";

export default function Partners() {
    const { t } = useTranslation();
    const goldPartner = partners.find((partner) => partner.tier === "gold");
    const supportingPartners = partners.filter((partner) => partner.tier === "partner");
    const highlightPartners = supportingPartners.slice(0, 3);
    const remainingPartners = supportingPartners.slice(3);

    return (
        <section id="partners" className="site-partners-anchor w-full bg-background px-6 py-20 text-text lg:py-28">
            <div className="mx-auto max-w-7xl space-y-10">
                <div className="max-w-3xl space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                        {t("home.sponsors.eyebrow")}
                    </p>
                    <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                        {t("home.sponsors.title")}
                    </h2>
                    <p className="text-lg leading-8 text-text-secondary md:text-xl">
                        {t("home.sponsors.body")}
                    </p>
                </div>

                {goldPartner && (
                    <div className="rounded-[2rem] border border-[var(--site-card-border)] bg-[color:var(--site-surface-strong)] p-4 md:p-5">
                        <PartnerCard partner={goldPartner} compact featured />
                    </div>
                )}

                {highlightPartners.length > 0 && (
                    <div className="grid gap-4 md:grid-cols-3">
                        {highlightPartners.map((partner) => (
                            <PartnerCard key={partner.name} partner={partner} compact />
                        ))}
                    </div>
                )}

                {remainingPartners.length > 0 && (
                    <div className="grid gap-4 md:grid-cols-3">
                        {remainingPartners.map((partner) => (
                            <PartnerCard key={partner.name} partner={partner} compact />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}