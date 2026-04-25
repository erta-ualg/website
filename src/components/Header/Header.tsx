import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import i18n from "i18next";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";

import data from "../../data/Header";

export default function Header() {
    const { t } = useTranslation();
    const [isHydrated, setIsHydrated] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "light" || storedTheme === "dark") {
            return storedTheme;
        }

        return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === "dark") {
            return;
        }

        const themeQuery = window.matchMedia?.("(prefers-color-scheme: dark)");

        if (!themeQuery) {
            return;
        }

        const syncTheme = () => {
            if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === "dark") {
                return;
            }

            const nextTheme = themeQuery.matches ? "dark" : "light";
            document.documentElement.dataset.theme = nextTheme;
            setTheme(nextTheme);
        };

        syncTheme();

        if (themeQuery.addEventListener) {
            themeQuery.addEventListener("change", syncTheme);
            return () => themeQuery.removeEventListener("change", syncTheme);
        }

        themeQuery.addListener(syncTheme);
        return () => themeQuery.removeListener(syncTheme);
    }, []);

    useEffect(() => {
        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", onEscape);
        return () => window.removeEventListener("keydown", onEscape);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("site-lock-scroll", isMobileMenuOpen);
        document.documentElement.classList.toggle("site-lock-scroll", isMobileMenuOpen);
        return () => {
            document.body.classList.remove("site-lock-scroll");
            document.documentElement.classList.remove("site-lock-scroll");
        };
    }, [isMobileMenuOpen]);

    const navigationLinks = [
        { key: "the-car", href: "/carro", label: t("header.the-car") },
        { key: "partners", href: "/#partners", label: t("header.partners") },
        { key: "team", href: "/team", label: t("header.team") },
    ];

    const handleLanguageChange = (lang: "en" | "pt") => {
        changeLanguage(lang);
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        setTheme(nextTheme);
    };

    const mobileNavigation = (
        <div
            id="mobile-navigation"
            className={`site-mobile-nav ${isMobileMenuOpen ? "is-open" : ""}`}
            aria-hidden={!isMobileMenuOpen}
        >
            <nav className="site-mobile-nav-panel" aria-label="Mobile primary" role="dialog" aria-modal="true">
                <div className="site-mobile-nav-top">
                    <div className="site-mobile-nav-actions">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            title={theme === "dark" ? "Light mode" : "Dark mode"}
                            aria-pressed={theme === "dark"}
                            className="theme-toggle"
                        >
                            {theme === "dark" ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
                        </button>

                        <button
                            type="button"
                            className="site-mobile-nav-close"
                            aria-label="Close menu"
                            onClick={closeMobileMenu}
                        >
                            <HiXMark className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="site-mobile-lang" role="group" aria-label="Language switcher">
                        <button
                            type="button"
                            onClick={() => handleLanguageChange("en")}
                            aria-current={i18n.language === "en" ? "page" : undefined}
                            className={i18n.language === "en" ? "is-active" : ""}
                        >
                            EN
                        </button>
                        <span aria-hidden="true">/</span>
                        <button
                            type="button"
                            onClick={() => handleLanguageChange("pt")}
                            aria-current={i18n.language === "pt" ? "page" : undefined}
                            className={i18n.language === "pt" ? "is-active" : ""}
                        >
                            PT
                        </button>
                    </div>
                </div>

                <ul className="site-mobile-nav-list">
                    {navigationLinks.map((link) => (
                        <li key={link.key}>
                            <a href={link.href} onClick={closeMobileMenu}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/contactos" className="site-header-cta" onClick={closeMobileMenu}>
                            {t("header.contact")}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-primary shadow-sm site-header">
                <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 site-header-inner">
                    <a href="/" className="flex items-center logo-link">
                        <img
                            src={data.logoText}
                            alt="ERTA"
                            className="h-8 w-auto object-contain site-logo"
                        />
                    </a>

                    <button
                        type="button"
                        className="site-mobile-menu-toggle"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMobileMenuOpen((current) => !current)}
                    >
                        {isMobileMenuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
                    </button>

                    <nav className="site-desktop-nav" aria-label="Primary">
                        <ul className="flex items-center gap-6 text-base font-medium text-white site-nav">
                            <li className="flex items-center">
                                <button
                                    type="button"
                                    onClick={toggleTheme}
                                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                                    title={theme === "dark" ? "Light mode" : "Dark mode"}
                                    aria-pressed={theme === "dark"}
                                    className="theme-toggle"
                                >
                                    {theme === "dark" ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        handleLanguageChange("en");
                                    }}
                                    aria-current={i18n.language === "en" ? "page" : undefined}
                                    className={`transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                                        i18n.language === "en" ? "underline" : ""
                                    }`}
                                >
                                    EN
                                </button>
                                <span> / </span>
                                <button
                                    onClick={() => {
                                        handleLanguageChange("pt");
                                    }}
                                    aria-current={i18n.language === "pt" ? "page" : undefined}
                                    className={`transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                                        i18n.language === "pt" ? "underline" : ""
                                    }`}
                                >
                                    PT
                                </button>
                            </li>
                            {navigationLinks.map((link) => (
                                <li key={link.key}>
                                    <a href={link.href} className="transition-colors duration-200 hover:opacity-80">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/contactos"
                                    className="site-header-cta transition-opacity duration-200 hover:opacity-90"
                                >
                                    {t("header.contact")}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {isHydrated && createPortal(mobileNavigation, document.body)}
        </>
    );
}
