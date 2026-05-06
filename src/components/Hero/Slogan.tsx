import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import data from "../../data/Slogan";

export default function Slogan() {
    const { t } = useTranslation();
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const lastVolumeRef = useRef(0.7);
    const [volume, setVolume] = useState(0);
    const [reduceMotion, setReduceMotion] = useState(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return false;
        }

        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
    const isYoutube = data.provider === "youtube";
    const isMuted = volume === 0;
    const youtubeSrc = `https://www.youtube.com/embed/${data.youtubeVideoId}?autoplay=${reduceMotion ? 0 : 1}&mute=${isMuted ? 1 : 0}&loop=1&playlist=${data.youtubeVideoId}&controls=0&modestbranding=1&playsinline=1&fs=0&rel=0&enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}`;

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
        const currentVolume = volume / 100;

        if (!isYoutube && videoRef.current) {
            videoRef.current.volume = currentVolume;
            videoRef.current.muted = volume === 0;
            return;
        }

        if (isYoutube && iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: "command",
                    func: volume === 0 ? "mute" : "unMute",
                    args: [],
                }),
                "*"
            );

            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: "command",
                    func: "setVolume",
                    args: [volume],
                }),
                "*"
            );
        }
    }, [isYoutube, volume]);

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
            {isYoutube ? (
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <iframe
                        ref={iframeRef}
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
            )}
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
