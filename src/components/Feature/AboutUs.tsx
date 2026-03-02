import { useTranslation } from "react-i18next";

import data from "../../data/AboutUs";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-background py-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 site-section-inner">
                <div className="flex-1 text-center md:text-left site-panel">
                    <p className="section-eyebrow">
                        {t("feature.about-us.eyebrow")}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 site-heading">
                        {t("feature.about-us.title")}
                    </h2>
                    <p className="text-text-secondary text-lg site-body">{t("feature.about-us.description")}</p>
                    <div className="site-fact-list">
                        <span className="site-fact-chip">{t("feature.about-us.fact-founded")}</span>
                        <span className="site-fact-chip">{t("feature.about-us.fact-class2")}</span>
                        <span className="site-fact-chip">{t("feature.about-us.fact-roadmap")}</span>
                    </div>
                </div>

                <div className="flex-1 site-media">
                    <img
                        src={data.image}
                        className="w-full h-auto rounded shadow-lg site-media-image"
                    />
                </div>
            </div>
        </section>
    );
}
