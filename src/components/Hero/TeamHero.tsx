import { useTranslation } from "react-i18next";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function TeamHero() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Text Content */}
                <div className="max-w-2xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {t("hero.team.title")}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {t("hero.team.description")}
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
                            {t("hero.team.explore")}
                        </button>
                        <button className="px-8 py-3 bg-white text-black border border-black font-medium hover:bg-gray-50 transition-colors">
                            {t("hero.team.learn-more")}
                        </button>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="w-full aspect-video bg-gray-200 flex items-center justify-center rounded-sm">
                    <HiOutlinePhotograph className="text-gray-400 text-8xl" />
                </div>
            </div>
        </section>
    );
}
