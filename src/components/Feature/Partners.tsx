import { useTranslation } from "react-i18next";

import PartnerSlide from "../Card/PartnerSlide";

export default function Partners() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-background py-12">
            <div className="max-w-6xl mx-auto px-6 text-center site-section-inner">
                <p className="text-text-secondary mb-8 text-lg font-medium site-body">
                    {t("feature.partners.text")}
                </p>

                <PartnerSlide/>
            </div>
        </section>
    );
}
