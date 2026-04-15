import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import i18n from "i18next";

import data from "../../data/Header";

export default function Header() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/carro", label: t("header.the-car") },
        { href: "/demo-homepage#partners", label: t("header.partners") },
        { href: "/team", label: t("header.team") },
    ];

    const selectLanguage = (lang: "en" | "pt") => {
        changeLanguage(lang);
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-primary shadow-sm site-header">
            <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 site-header-inner">
                <a href="/demo-homepage" className="flex items-center logo-link">
                    <img
                        src={data.logo}
                        alt="ERTA"
                        className="h-8 md:h-10 w-auto object-contain site-logo"
                    />
                </a>

                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8 text-base font-medium text-white site-nav">
                        <li>
                            <button
                                onClick={() => selectLanguage("en")}
                                aria-current={i18n.language === "en" ? "page" : undefined}
                                className={`transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                                    i18n.language === "en" ? "underline" : ""
                                }`}
                            >
                                EN
                            </button>
                            <span> / </span>
                            <button
                                onClick={() => selectLanguage("pt")}
                                aria-current={i18n.language === "pt" ? "page" : undefined}
                                className={`transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                                    i18n.language === "pt" ? "underline" : ""
                                }`}
                            >
                                PT
                            </button>
                        </li>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="transition-colors duration-200 hover:opacity-80"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/contactos"
                                className="rounded-xl bg-white px-4 py-2 text-black transition-opacity duration-200 hover:opacity-90 site-header-cta"
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4 md:hidden text-white">
                    <button
                        onClick={() => selectLanguage(i18n.language === "en" ? "pt" : "en")}
                        className="text-sm font-semibold"
                        aria-label={i18n.language === "en" ? "Switch language to Portuguese" : "Switch language to English"}
                    >
                        {i18n.language === "en" ? "PT" : "EN"}
                    </button>
                    <button
                        type="button"
                        className="rounded-md border border-white/40 px-3 py-2 text-sm font-semibold"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        {isMenuOpen ? t("header.close") : t("header.menu")}
                    </button>
                </div>
            </div>

            <nav
                id="mobile-nav"
                aria-hidden={!isMenuOpen}
                className={`mobile-nav border-t border-white/20 bg-primary/95 px-4 md:hidden ${
                    isMenuOpen ? "mobile-nav-open" : "mobile-nav-closed"
                }`}
            >
                {isMenuOpen && (
                    <ul className="flex flex-col gap-3 py-3 text-white site-nav">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block rounded-md px-2 py-2 transition-colors duration-200 hover:bg-white/10"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/contactos"
                                className="mt-1 inline-flex rounded-xl bg-white px-4 py-2 text-black transition-opacity duration-200 hover:opacity-90 site-header-cta"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
