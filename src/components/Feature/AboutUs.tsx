import { useTranslation } from "react-i18next";

import data from "../../data/AboutUs";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-background py-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {t("feature.about-us.title")}
                    </h2>
                    <p className="text-text-secondary text-lg">{t("feature.about-us.description")}</p>
                </div>

                <div className="flex-1">
                    <img
                        src={data.image}
                        className="w-full h-auto rounded shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
