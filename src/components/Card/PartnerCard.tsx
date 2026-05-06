import { useTranslation } from "react-i18next";

import type { Partner } from "../../data/Partners";

interface PartnerCardProps {
    partner: Partner;
    featured?: boolean;
    compact?: boolean;
}

function getInitials(name: string) {
    return name
        .split(/\s+/)
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 3)
        .join("")
        .toUpperCase();
}

export default function PartnerCard({ partner, featured = false, compact = false }: PartnerCardProps) {
    const { t } = useTranslation();
    const initials = getInitials(partner.name);
    const isGold = partner.tier === "gold";

    return (
        <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("partners-page.card.open", { name: partner.name })}
            className={`group site-panel flex h-full flex-col justify-between gap-6 rounded-[1.75rem] border transition duration-300 hover:-translate-y-1 hover:border-[color:var(--site-accent)] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] ${
                isGold
                    ? "border-amber-300/70 shadow-[0_0_40px_rgba(251,191,36,0.18)]"
                    : featured
                        ? "border-[color:var(--site-accent)]"
                        : "border-[var(--site-card-border)]"
            } ${compact ? "p-5" : "p-6 md:p-7"}`}
        >
            <div className="flex items-start justify-between gap-4">
                <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
                        isGold
                            ? "bg-amber-300/90 text-amber-950"
                            : "bg-[color:var(--site-surface-strong)] text-[color:var(--site-text)]"
                    }`}
                >
                    {t(`partners-page.tiers.${partner.tier}`)}
                </span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--site-muted)]">
                    {compact ? t("partners-page.compact-label") : t("partners-page.card-label")}
                </span>
            </div>

            <div className="flex items-center gap-4">
                {partner.logo ? (
                    <div
                        className={`flex shrink-0 items-center justify-center rounded-[1rem] border bg-white px-3 ${
                            isGold
                                ? "border-amber-300/55 bg-amber-100/30"
                                : "border-[var(--site-card-border)] bg-[color:var(--site-surface-strong)]"
                        } ${
                            featured ? "h-16 w-40" : "h-14 w-32"
                        }`}
                    >
                        <img
                            src={partner.logo}
                            alt={`${partner.name} banner`}
                            className="max-h-[70%] w-full object-contain"
                        />
                    </div>
                ) : (
                    <div
                        className={`flex shrink-0 items-center justify-center rounded-[1.4rem] border font-black uppercase tracking-[0.12em] text-[color:var(--site-text)] ${
                            isGold
                                ? "border-amber-300/55 bg-amber-100/30"
                                : "border-[var(--site-card-border)] bg-[color:var(--site-surface-strong)]"
                        } ${
                            featured ? "h-16 w-16 text-lg" : "h-14 w-14 text-base"
                        }`}
                    >
                        {initials}
                    </div>
                )}

                <div className="min-w-0">
                    <h3
                        className={`font-black uppercase tracking-[0.06em] text-[color:var(--site-text)] ${
                            compact ? "text-base" : "text-xl"
                        }`}
                    >
                        {partner.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[color:var(--site-muted)]">
                        {t(`partners-page.tier-descriptions.${partner.tier}`)}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-accent)]">
                <span>{t("partners-page.visit")}</span>
                <span aria-hidden="true">↗</span>
            </div>
        </a>
    );
}