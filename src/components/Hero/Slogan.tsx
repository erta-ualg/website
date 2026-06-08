import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { HiArrowsPointingOut, HiArrowsPointingIn, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

import data from "../../data/Slogan";

export default function Slogan() {
    const { t } = useTranslation();
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoContainerRef = useRef<HTMLDivElement | null>(null);
    const lastVolumeRef = useRef(0.7);
    const [volume, setVolume] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return false;
        }

        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
    const isMuted = volume === 0;

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

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume / 100;
            videoRef.current.muted = volume === 0;
        }
    }, [volume]);

    useEffect(() => {
        const onFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", onFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
    }, []);

    const handleToggleFullscreen = () => {
        if (!document.fullscreenElement && videoContainerRef.current) {
            videoContainerRef.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const handleToggleMute = () => {
        setVolume((current) => {
            if (current === 0) {
                return Math.round(lastVolumeRef.current * 100);
            }

            lastVolumeRef.current = current / 100;
            return 0;
        });
    };

    return (
        <section className="relative hero-video w-full flex items-center justify-center text-center overflow-hidden">
            <div ref={videoContainerRef} className="absolute inset-0 overflow-hidden hero-video-container">
                <video
                    ref={videoRef}
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

                <button
                    type="button"
                    className="hero-video-close"
                    onClick={() => document.exitFullscreen()}
                    aria-label={t("home.hero.video.exit-fullscreen")}
                    title={t("home.hero.video.exit-fullscreen")}
                >
                    <HiXMark className="h-6 w-6" />
                </button>
            </div>
            <div className="hero-video-overlay" aria-hidden="true" />

            <div className="hero-video-audio" aria-label={t("home.hero.video.controls")}>
                <button
                    type="button"
                    className="hero-video-audio-toggle"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? t("home.hero.video.unmute") : t("home.hero.video.mute")}
                    aria-pressed={!isMuted}
                >
                    {isMuted ? <FaVolumeMute className="hero-video-audio-icon" /> : <FaVolumeUp className="hero-video-audio-icon" />}
                    <span className="hero-video-audio-label">
                        {isMuted ? t("home.hero.video.unmute") : t("home.hero.video.mute")}
                    </span>
                </button>

                <label className="hero-video-volume" aria-label={t("home.hero.video.volume")}>
                    <span className="sr-only">{t("home.hero.video.volume")}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={volume}
                        onChange={(event) => {
                            const nextVolume = Number(event.target.value);
                            setVolume(nextVolume);

                            if (nextVolume > 0) {
                                lastVolumeRef.current = nextVolume / 100;
                            }
                        }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={volume}
                    />
                </label>

                <button
                    type="button"
                    className="hero-video-fullscreen"
                    onClick={handleToggleFullscreen}
                    aria-label={isFullscreen ? t("home.hero.video.exit-fullscreen") : t("home.hero.video.fullscreen")}
                    title={isFullscreen ? t("home.hero.video.exit-fullscreen") : t("home.hero.video.fullscreen")}
                >
                    {isFullscreen ? <HiArrowsPointingIn className="hero-video-audio-icon" /> : <HiArrowsPointingOut className="hero-video-audio-icon" />}
                </button>
            </div>

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
                    <Link to="/partners" className="hero-cta-primary">
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
