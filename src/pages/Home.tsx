import Header from "../components/Header/Header";
import Slogan from "../components/Hero/Slogan";
import Footer from "../components/Footer/Footer";
import PartnersSection from "../components/Feature/Partners";
import WorkshopDiorama from "../components/Three/WorkshopDiorama";
import { useTranslation } from "react-i18next";

function MissionSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-background px-6 py-20 text-text lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="site-panel rounded-[2rem] p-4 shadow-[0_0_60px_rgba(8,145,178,0.10)] backdrop-blur-xl">
                    <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-dashed border-cyan-300/30 bg-background text-center">
                        {/* INSERT STORK MASCOT HERE */}
                        <div className="px-8">
                            <div className="mx-auto mb-4 h-20 w-20 rounded-full border border-cyan-300/35 bg-cyan-300/10" />
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                                {t("home.mission.placeholder-title")}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-text-secondary">
                                {t("home.mission.placeholder-body")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                        {t("home.mission.eyebrow")}
                    </p>
                    <h2 className="max-w-2xl text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                        {t("home.mission.title")}
                    </h2>
                    <p className="max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
                        {t("home.mission.body")}
                    </p>

                    {/* <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            t("home.mission.chips.rookie"),
                            t("home.mission.chips.south"),
                            t("home.mission.chips.ev"),
                        ].map((chip) => (
                            <div
                                key={chip}
                                className="rounded-2xl border border-cyan-300/15 bg-[color:var(--site-surface-strong)] px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-text"
                            >
                                {chip}
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

function MachineSection() {
    const { t } = useTranslation();

    const targetSpecs = [
        { label: t("home.machine.specs.weight"), value: t("home.machine.specs.tbd") },
        { label: t("home.machine.specs.power"), value: t("home.machine.specs.tbd") },
        { label: t("home.machine.specs.acceleration"), value: t("home.machine.specs.tbd") },
        { label: t("home.machine.specs.aero"), value: t("home.machine.specs.tbd") },
    ];

    return (
        <section className="bg-background px-6 py-20 text-text lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--site-accent)]/80">
                        {t("home.machine.eyebrow")}
                    </p>
                    <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[0.06em] text-text md:text-5xl">
                        {t("home.machine.title")}
                    </h2>
                    <p className="text-lg leading-8 text-text-secondary md:text-xl">
                        {t("home.machine.body")}
                    </p>
                </div>

                <div className="site-panel mt-10 rounded-[2rem] p-4 shadow-[0_0_60px_rgba(8,145,178,0.10)] backdrop-blur-xl">
                    <div className="flex min-h-[24rem] items-center justify-center rounded-[1.5rem] border border-dashed border-cyan-300/30 bg-background text-center">
                        <div className="h-[20rem] w-full overflow-hidden rounded-[1.25rem]">
                            <WorkshopDiorama mode="compact" />
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {targetSpecs.map((spec) => (
                            <div
                                key={spec.label}
                                className="site-panel rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.14)]"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--site-accent)]/70">
                                    {spec.label}
                                </p>
                                <p className="mt-4 text-3xl font-black tracking-[0.08em] text-text">
                                    {spec.value}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-text-secondary">
                                    {t("home.machine.spec-placeholder")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="bg-background text-text">
            <Header />

            <main className="overflow-hidden">
                <Slogan />
                <MissionSection />
                <MachineSection />
                <PartnersSection />
            </main>

            <Footer />
        </div>
    );
}
