import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

interface HeaderProps {
    logoSrc: string;
    logoAlt?: string;
}

export default function Header({ logoSrc, logoAlt = "Logo" }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <header className="sticky top-0 z-50 w-full bg-primary shadow-sm">
            <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
                <div className="flex items-center">
                    <img /* TODO meter a imagem a voltar para a homepage??? nao sei se sera mesmo necessario, mas constuma ser assim */
                        src={logoSrc}
                        alt={logoAlt}
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* parceiros equipa contacto */}
                <nav>
                    <ul className="flex items-center space-x-8 text-base font-medium text-white">
                        <li>
                            <button /* TODO classes de estilo */
                                onClick={() => {
                                    changeLanguage("en");
                                    localStorage.setItem("lang", "en");
                                }}
                            >
                                EN
                            </button>

                            <button /* TODO classes de estilo */
                                onClick={() => {
                                    changeLanguage("pt");
                                    localStorage.setItem("lang", "en");
                                }}
                            >
                                PT
                            </button>
                        </li>
                        <li>
                            <a
                                href="#partners" /* TODO ver estas referencias */
                                className="transition-colors duration-200 hover:opacity-80"
                            >
                                {t("header.partners")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#team" /* TODO ver estas referencias */
                                className="transition-colors duration-200 hover:opacity-80"
                            >
                                {t("header.team")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact" /* TODO ver estas referencias */
                                className="rounded-xl bg-white px-4 py-2 text-black transition-opacity duration-200 hover:opacity-90"
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
