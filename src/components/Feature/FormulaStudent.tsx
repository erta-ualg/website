import { useTranslation } from "react-i18next";

import Card from "../Card/Card"

import data from "../../data/FormulaStudent";

export default function FormulaStudent() {
    const { t } = useTranslation();

    const cards = [
        {
            imageSrc: data.card1,
            title: t("feature.formula-student.ev-card.title"),
            description: t("feature.formula-student.ev-card.description"),
        },
        {
            imageSrc: data.card2,
            title: t("feature.formula-student.cv-card.title"),
            description: t("feature.formula-student.cv-card.description"),
        },
        {
            imageSrc: data.card3,
            title: t("feature.formula-student.dv-card.title"),
            description: t("feature.formula-student.dv-card.description"),
        },
    ];

    return (
        <section className="w-full bg-surface py-16" /* XXX bg-background */ >
            <div className="max-w-6xl mx-auto px-6 text-center site-section-inner">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 site-heading">
                    {t("feature.formula-student.title")}
                </h2>
                <p className="text-text-secondary text-lg md:text-xl mb-12 site-body">
                    {t("feature.formula-student.description")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
