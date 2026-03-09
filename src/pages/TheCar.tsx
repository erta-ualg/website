import { useTranslation } from "react-i18next";

import Header from "../components/Header/Header";
import CarroHero from "../components/Hero/CarroHero";
import Footer from "../components/Footer/Footer";

export default function TheCar() {
    const { t } = useTranslation();

    const stats = [
        { value: t("the-car.stats.value-1"), label: t("the-car.stats.label-1") },
        { value: t("the-car.stats.value-2"), label: t("the-car.stats.label-2") },
        { value: t("the-car.stats.value-3"), label: t("the-car.stats.label-3") },
    ];

    const specs = [
        { title: t("the-car.specs.item-1.title"), body: t("the-car.specs.item-1.body") },
        { title: t("the-car.specs.item-2.title"), body: t("the-car.specs.item-2.body") },
        { title: t("the-car.specs.item-3.title"), body: t("the-car.specs.item-3.body") },
        { title: t("the-car.specs.item-4.title"), body: t("the-car.specs.item-4.body") },
    ];

    const systems = [
        { title: t("the-car.systems.item-1.title"), body: t("the-car.systems.item-1.body") },
        { title: t("the-car.systems.item-2.title"), body: t("the-car.systems.item-2.body") },
        { title: t("the-car.systems.item-3.title"), body: t("the-car.systems.item-3.body") },
    ];

    return (
        <div>
            <Header/>
            <CarroHero/>

            <section className="w-full py-16">
                <div className="max-w-6xl mx-auto px-6 car-section">
                    <div className="car-intro">
                        <p className="section-eyebrow">{t("the-car.eyebrow")}</p>
                        <h2 className="car-title">{t("the-car.title")}</h2>
                        <p className="site-body">{t("the-car.subtitle")}</p>
                    </div>
                    <div className="car-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="car-stat-card">
                                <span className="car-stat-value">{stat.value}</span>
                                <span className="car-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6 car-section">
                    <div className="car-grid">
                        <div className="site-panel">
                            <h3 className="site-heading">{t("the-car.overview.title")}</h3>
                            <p className="site-body">{t("the-car.overview.body")}</p>
                            <div className="site-fact-list">
                                <span className="site-fact-chip">{t("the-car.overview.fact-1")}</span>
                                <span className="site-fact-chip">{t("the-car.overview.fact-2")}</span>
                            </div>
                        </div>
                        <div className="site-panel">
                            <h3 className="site-heading">{t("the-car.timeline.title")}</h3>
                            <ul className="timeline">
                                <li>
                                    <span className="timeline-label">{t("the-car.timeline.step-1")}</span>
                                    <span className="site-body">{t("the-car.timeline.step-1-body")}</span>
                                </li>
                                <li>
                                    <span className="timeline-label">{t("the-car.timeline.step-2")}</span>
                                    <span className="site-body">{t("the-car.timeline.step-2-body")}</span>
                                </li>
                                <li>
                                    <span className="timeline-label">{t("the-car.timeline.step-3")}</span>
                                    <span className="site-body">{t("the-car.timeline.step-3-body")}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16">
                <div className="max-w-6xl mx-auto px-6 car-section">
                    <div className="section-header">
                        <h3 className="site-heading">{t("the-car.specs.title")}</h3>
                        <p className="site-body">{t("the-car.specs.body")}</p>
                    </div>
                    <div className="spec-grid">
                        {specs.map((spec, index) => (
                            <div key={index} className="spec-card">
                                <h4 className="spec-title">{spec.title}</h4>
                                <p className="site-body">{spec.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6 car-section">
                    <div className="section-header">
                        <h3 className="site-heading">{t("the-car.systems.title")}</h3>
                        <p className="site-body">{t("the-car.systems.body")}</p>
                    </div>
                    <div className="system-grid">
                        {systems.map((system, index) => (
                            <div key={index} className="system-card">
                                <h4 className="spec-title">{system.title}</h4>
                                <p className="site-body">{system.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-16">
                <div className="max-w-6xl mx-auto px-6 car-section">
                    <div className="section-header">
                        <h3 className="site-heading">{t("the-car.gallery.title")}</h3>
                        <p className="site-body">{t("the-car.gallery.body")}</p>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-card" aria-hidden="true" />
                        <div className="gallery-card" aria-hidden="true" />
                        <div className="gallery-card" aria-hidden="true" />
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6 car-section">
                    <div className="cta-block">
                        <div>
                            <h3 className="site-heading">{t("the-car.cta.title")}</h3>
                            <p className="site-body">{t("the-car.cta.body")}</p>
                        </div>
                        <a href="/join" className="hero-cta-primary">{t("the-car.cta.action")}</a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
