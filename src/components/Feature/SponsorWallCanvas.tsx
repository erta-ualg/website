import { useMemo } from "react";

import type { Partner } from "../../data/Partners";

interface SponsorWallCanvasProps {
    partners: Partner[];
}

function chooseBestColumns(total: number) {
    if (total <= 1) {
        return 1;
    }

    let bestColumns = 1;
    let bestScore = Number.POSITIVE_INFINITY;

    for (let columns = 1; columns <= Math.min(6, total); columns += 1) {
        const rows = Math.ceil(total / columns);
        const emptySlots = rows * columns - total;
        const shapePenalty = Math.abs(columns - rows);
        const score = emptySlots * 3 + shapePenalty;

        if (score < bestScore) {
            bestScore = score;
            bestColumns = columns;
        }
    }

    return bestColumns;
}

function classForColumns(columns: number, prefix = "") {
    const safeColumns = Math.max(1, Math.min(6, columns));
    const classMap = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
    } as const;

    return `${prefix}${classMap[safeColumns as keyof typeof classMap]}`;
}

export default function SponsorWallCanvas({ partners }: SponsorWallCanvasProps) {
    const logoPartners = useMemo(() => partners.filter((partner) => Boolean(partner.logo)), [partners]);
    const total = logoPartners.length;

    const idealColumns = useMemo(() => chooseBestColumns(total), [total]);
    const mobileColumns = Math.min(2, idealColumns);
    const tabletColumns = Math.min(3, idealColumns);

    const gridClasses = useMemo(
        () =>
            [
                classForColumns(mobileColumns),
                classForColumns(tabletColumns, "sm:"),
                classForColumns(idealColumns, "lg:"),
            ].join(" "),
        [idealColumns, mobileColumns, tabletColumns],
    );

    return (
        <div className={`grid h-full gap-3 p-4 ${gridClasses}`} role="list" aria-label="Sponsor wall">
            {logoPartners.map((partner) => (
                <a
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex h-16 items-center justify-center rounded-xl bg-white ease-in-out border px-3 transition duration-200 hover:-translate-y-0.5 ${
                        partner.tier === "gold"
                            ? "border-amber-300/60 shadow-[0_0_0_1px_rgba(251,191,36,0.28)]"
                            : "border-[var(--site-card-border)]"
                    }`}
                    role="listitem"
                    aria-label={partner.name}
                >
                    {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} className="max-h-10 w-auto object-contain" loading="lazy" />
                    ) : (
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">{partner.name}</span>
                    )}
                </a>
            ))}
        </div>
    );
}