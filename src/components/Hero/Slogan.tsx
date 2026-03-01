import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import data from "../../data/Slogan";

export default function Slogan() {
    const { t } = useTranslation();
    const [isMuted, setIsMuted] = useState(true);

    return (
        <section
            className="relative w-full h-screen min-h-[130vh] flex items-center justify-center text-center hero-video"
        >
            <video
                className="hero-video-media"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                poster={data.background}
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
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {t("hero.slogan.text")}
                </h1>
            </div>
        </section>
    );
}
