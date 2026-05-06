import { useTranslation } from "react-i18next";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function TeamHero() {
    const { t } = useTranslation();

    return (
        <section className="w-full py-20 px-6 team-hero-shell">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center site-panel team-hero-panel">
                {/* Text Content */}
                <div className="max-w-2xl mb-12">
                    <h1 className="team-hero-title mb-6 leading-tight">
                        {t("team-page.hero.title")}
                    </h1>
                    <p className="team-hero-copy mb-8 leading-relaxed">
                        {t("team-page.hero.description")}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#team-leadership" className="team-hero-primary-button inline-flex items-center justify-center px-8 py-3 font-medium transition-colors">
                            {t("team-page.hero.explore")}
                        </a>
                        <a href="#team-departments" className="team-hero-secondary-button inline-flex items-center justify-center px-8 py-3 font-medium transition-colors">
                            {t("team-page.hero.learn-more")}
                        </a>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="team-hero-media w-full aspect-video flex items-center justify-center rounded-sm">
                    <HiOutlinePhotograph className="team-hero-media-icon text-8xl" />
                </div>
            </div>
        </section>
    );
}
