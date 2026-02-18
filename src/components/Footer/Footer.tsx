import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import data from "../../data/Footer";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-primary text-gray-200 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0 text-left">
                    <h2 className="text-lg font-bold text-gray-200">ERTA</h2>
                    <div className="flex space-x-4 mt-2">
                        <a
                            href={data.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
                        </a>
                        <a
                            href={data.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="w-5 h-5 hover:text-blue-400 transition-colors" />
                        </a>
                    </div>
                </div>

                <div className="text-right">
                    <h3 className="text-sm font-semibold mb-1">
                        {t("footer.contact")}
                    </h3>
                    <p className="text-xs text-gray-300">
                        {t("footer.email")}
                    </p>
                    <p className="text-xs text-gray-300">
                        {t("footer.location")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
