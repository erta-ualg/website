import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import WorkshopDiorama from "../Three/WorkshopDiorama";

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return;
        }

        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(media.matches);
        update();

        if (media.addEventListener) {
            media.addEventListener("change", update);
            return () => media.removeEventListener("change", update);
        }

        media.addListener(update);
        return () => media.removeListener(update);
    }, []);

    return reduced;
}

export default function CarroHero() {
    const { t } = useTranslation();
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section className="relative w-full h-[calc(100vh-5rem)] min-h-[520px] hero-diorama">
            <div className="absolute inset-0 hero-diorama-canvas">
                <WorkshopDiorama reducedMotion={prefersReducedMotion} />
            </div>

            <div
                className="absolute inset-0 z-10 bg-transparent touch-pan-y md:hidden hero-diorama-touch-shield"
                aria-hidden="true"
            />

            <div className="relative z-20 h-full w-full flex items-center hero-diorama-overlay">
                <div className="hero-diorama-text">
                    <p className="hero-eyebrow">{t("the-car.eyebrow")}</p>
                    <h1 className="hero-title">
                        {t("the-car.hero.title")}
                    </h1>
                    <p className="hero-subtitle">
                        {t("the-car.hero.subtitle")}
                    </p>
                </div>
            </div>
        </section>
    );
}
