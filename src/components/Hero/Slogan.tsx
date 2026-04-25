import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import data from "../../data/Slogan";

export default function Slogan() {
    const { t } = useTranslation();
    const [isMuted, setIsMuted] = useState(true);
    const [reduceMotion, setReduceMotion] = useState(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return false;
        }

        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
    const isYoutube = data.provider === "youtube";
    const youtubeSrc = `https://www.youtube.com/embed/${data.youtubeVideoId}?autoplay=${reduceMotion ? 0 : 1}&mute=1&loop=1&playlist=${data.youtubeVideoId}&controls=0&modestbranding=1&playsinline=1&fs=0&rel=0`;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery.matches);
        const handleChange = () => setReduceMotion(mediaQuery.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    return (
        <section className="relative hero-video w-full flex items-center justify-center text-center overflow-hidden">
            {isYoutube ? (
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <iframe
                        src={youtubeSrc}
                        title="Hero Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            border: "none",
                            pointerEvents: "none",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "100vw",
                            height: "56.25vw",
                            minHeight: "100vh",
                            minWidth: "177.78vh",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            ) : (
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
            )}
            <div className="hero-video-overlay" aria-hidden="true" />

            {!isYoutube && (
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
            )}

            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/85">
                    {t("home.hero.eyebrow")}
                </p>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.06em] text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
                    {t("home.hero.title")}
                </h1>
                <p className="mt-6 text-lg md:text-xl leading-8 text-slate-200">
                    {t("home.hero.subtitle")}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-white">
                    <Link to="/join" className="hero-cta-primary">
                        {t("home.hero.cta-sponsor")}
                    </Link>
                    <Link
                        to="/team"
                        className="inline-flex items-center justify-center rounded-md border border-cyan-300/40 bg-slate-900/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-slate-900/70"
                    >
                        {t("home.hero.cta-team")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
