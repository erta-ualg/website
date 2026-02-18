import { useTranslation } from "react-i18next";

import data from "../../data/Slogan";

export default function Slogan() {
    const { t } = useTranslation();

    return (
        <section
            /* TODO tentar meter a imagem por tras em vez de ficar "associada" à section ??? */
            className="relative w-full h-screen flex items-center justify-center text-center"
            style={{
                backgroundImage: `url(${data.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {t("hero.slogan.text")}
                </h1>
            </div>
        </section>
    );
}
