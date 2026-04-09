import { useTranslation } from "react-i18next";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import JoinApplyCtaSection from "../components/Join/JoinApplyCtaSection";
import JoinHeroSection from "../components/Join/JoinHeroSection";
import JoinReasonsSection from "../components/Join/JoinReasonsSection";
import JoinRolesSection from "../components/Join/JoinRolesSection";
import data from "../data/Join";

export default function Join() {
    const { t } = useTranslation();

    const reasons = [
        t("join.reasons.item-1"),
        t("join.reasons.item-2"),
        t("join.reasons.item-3"),
    ];

    const roles = [
        {
            title: t("join.roles.item-1.title"),
            description: t("join.roles.item-1.description"),
            skills: [
                t("join.roles.item-1.skill-1"),
                t("join.roles.item-1.skill-2"),
                t("join.roles.item-1.skill-3"),
            ],
        },
        {
            title: t("join.roles.item-2.title"),
            description: t("join.roles.item-2.description"),
            skills: [
                t("join.roles.item-2.skill-1"),
                t("join.roles.item-2.skill-2"),
                t("join.roles.item-2.skill-3"),
            ],
        },
        {
            title: t("join.roles.item-3.title"),
            description: t("join.roles.item-3.description"),
            skills: [
                t("join.roles.item-3.skill-1"),
                t("join.roles.item-3.skill-2"),
                t("join.roles.item-3.skill-3"),
            ],
        },
    ];

    return (
        <div>
            <Header />

            <JoinHeroSection
                eyebrow={t("join.eyebrow")}
                title={t("join.title")}
                subtitle={t("join.subtitle")}
                actionLabel={t("join.hero-action")}
                futureNote={t("join.future-note")}
                actionLink={data.link}
            />

            <JoinReasonsSection
                title={t("join.reasons.title")}
                subtitle={t("join.reasons.subtitle")}
                reasons={reasons}
            />

            <JoinRolesSection
                title={t("join.roles.title")}
                subtitle={t("join.roles.subtitle")}
                roles={roles}
            />

            <JoinApplyCtaSection
                title={t("join.cta.title")}
                body={t("join.cta.body")}
                actionLabel={t("join.cta.action")}
                actionLink={data.link}
            />

            <Footer />
        </div>
    );
}
