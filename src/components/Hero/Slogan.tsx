import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import data from "../../data/Slogan";

export function SloganImage() {
    const { t } = useTranslation();

    return (
        <section
            /* TODO tentar meter a imagem por tras em vez de ficar "associada" à section ??? */
            className="relative w-full flex items-center justify-center text-center"
            style={{
                backgroundImage: `url(${data.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "calc(100vh - var(--header-height))",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {t("hero.slogan.text")}
                </h1>
            </div>
        </section>
    );
}

export function SloganVideo() {
    const { t } = useTranslation();
    const [isMuted, setIsMuted] = useState(true);
    const [reduceMotion, setReduceMotion] = useState(() => {
        if (typeof window === "undefined") {
            return false;
        }
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleChange = () => setReduceMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <section
            className="relative w-full flex items-center justify-center text-center hero-video"
        >
            <video
                className="hero-video-media"
                autoPlay={!reduceMotion}
                muted={isMuted}
                loop={!reduceMotion}
                playsInline
                preload="metadata"
                poster={data.background}
                aria-hidden="true"
            >
                <source src={data.video} type="video/webm" />
            </video>

            <div className="hero-video-overlay" aria-hidden="true" />

            <button
                type="button"
                className="hero-video-audio"
                onClick={() => setIsMuted((current) => !current)}
                aria-label={isMuted ? t("hero.video.unmute") : t("hero.video.mute")}
                aria-pressed={!isMuted}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                <span className="hero-video-audio-label">
                    {isMuted ? t("hero.video.unmute") : t("hero.video.mute")}
                </span>
            </button>

            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {t("hero.slogan.text")}
                </h1>
            </div>
        </section>
    );
}

export default function Slogan() {
    return SloganImage();
}
