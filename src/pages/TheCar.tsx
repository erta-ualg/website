import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import CarroHero from "../components/Hero/CarroHero";
import Footer from "../components/Footer/Footer";
import SEO from "../hooks/useSEO";

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
        <div className="bg-background text-text">
            <SEO
                title="The Car"
                description="Discover ERTA's electric Formula Student racing car. Learn about its innovative design, specs, and engineering."
                keywords="ERTA car, Formula Student car, electric vehicle, racing car, engineering, specs"
                ogUrl="https://fs-erta.com/carro"
                canonicalUrl="https://fs-erta.com/carro"
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "ERTA Race Car",
                  "description": "ERTA's Formula Student racing car",
                  "url": "https://fs-erta.com/carro",
                }}
            />
            <Header />
            <CarroHero />

            <main className="overflow-hidden">
            <section className="bg-background px-6 py-16 text-text lg:py-24">
                <div className="mx-auto max-w-7xl car-section">
                    <div className="car-intro">
                        <p className="section-eyebrow">{t("the-car.eyebrow")}</p>
                        <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                            {t("the-car.title")}
                        </h2>
                        <p className="max-w-3xl text-lg leading-8 text-text-secondary md:text-xl">{t("the-car.subtitle")}</p>
                    </div>
                    <div className="car-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="site-panel car-stat-card transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                                <span className="car-stat-value">{stat.value}</span>
                                <span className="car-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background px-6 py-12 text-text lg:py-16">
                <div className="mx-auto max-w-7xl car-section">
                    <div className="car-grid">
                        <div className="site-panel rounded-[1.5rem] p-6">
                            <h3 className="site-heading car-category-title">{t("the-car.overview.title")}</h3>
                            <p className="site-body">{t("the-car.overview.body")}</p>
                            <div className="site-fact-list">
                                <span className="site-fact-chip">{t("the-car.overview.fact-1")}</span>
                                <span className="site-fact-chip">{t("the-car.overview.fact-2")}</span>
                            </div>
                        </div>
                        <div className="site-panel rounded-[1.5rem] p-6">
                            <h3 className="site-heading car-category-title">{t("the-car.timeline.title")}</h3>
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

            <section className="bg-background px-6 py-12 text-text lg:py-16">
                <div className="mx-auto max-w-7xl car-section">
                    <div className="section-header">
                        <h3 className="site-heading car-category-title">{t("the-car.specs.title")}</h3>
                        <p className="site-body">{t("the-car.specs.body")}</p>
                    </div>
                    <div className="spec-grid">
                        {specs.map((spec, index) => (
                            <div key={index} className="site-panel spec-card transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                                <h4 className="spec-title">{spec.title}</h4>
                                <p className="site-body">{spec.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background px-6 py-12 text-text lg:py-16">
                <div className="mx-auto max-w-7xl car-section">
                    <div className="section-header">
                        <h3 className="site-heading car-category-title">{t("the-car.systems.title")}</h3>
                        <p className="site-body">{t("the-car.systems.body")}</p>
                    </div>
                    <div className="system-grid">
                        {systems.map((system, index) => (
                            <div key={index} className="site-panel system-card transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                                <h4 className="spec-title">{system.title}</h4>
                                <p className="site-body">{system.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background px-6 py-12 text-text lg:py-16">
                <div className="mx-auto max-w-7xl car-section">
                    <div className="section-header">
                        <h3 className="site-heading car-category-title">{t("the-car.gallery.title")}</h3>
                        <p className="site-body">{t("the-car.gallery.body")}</p>
                    </div>
                    <div className="gallery-grid">
                        <div className="site-panel gallery-card" aria-hidden="true" />
                        <div className="site-panel gallery-card" aria-hidden="true" />
                        <div className="site-panel gallery-card" aria-hidden="true" />
                    </div>
                </div>
            </section>

            <section className="bg-background px-6 py-16 text-text lg:py-24">
                <div className="mx-auto max-w-7xl car-section">
                    <div className="cta-block">
                        <div>
                            <h3 className="site-heading car-category-title">{t("the-car.cta.title")}</h3>
                            <p className="site-body">{t("the-car.cta.body")}</p>
                        </div>
                        <Link to="/join" className="hero-cta-primary">{t("the-car.cta.action")}</Link>
                    </div>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
}
