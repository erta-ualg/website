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

            <div className="relative z-10 h-full w-full flex items-center hero-diorama-overlay">
                <div className="hero-diorama-text">
                    <p className="hero-eyebrow">Formula Student Team</p>
                    <h1 className="hero-title">
                        {t("hero.slogan.text")}
                    </h1>
                    <p className="hero-subtitle">
                        Engineering a new generation of performance. Design, build, and race a Formula Student car with precision, speed, and relentless curiosity.
                    </p>
                </div>
            </div>
        </section>
    );
}
