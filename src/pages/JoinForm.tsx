import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Note: This key is intentionally not stored in an environment variable since it's meant to be public and used client-side.
const formAccessKey = "01f1b5b7-0278-43a2-b31f-42763de02328";

type JoinFormData = {
    fullName: string;
    institutionalEmail: string;
    whatsappPhone: string;
    universityCourse: string;
    universityYear: string;
    extracurricularEngineering: "" | "yes" | "no";
    extracurricularDetails: string;
    motivation: string;
    inPersonAvailability: "" | "yes" | "no";
    interestAreas: string[];
};

const initialFormData: JoinFormData = {
    fullName: "",
    institutionalEmail: "",
    whatsappPhone: "",
    universityCourse: "",
    universityYear: "",
    extracurricularEngineering: "",
    extracurricularDetails: "",
    motivation: "",
    inPersonAvailability: "",
    interestAreas: [],
};

const interestAreaKeys = [
    "chassis-aero",
    "dynamics",
    "powertrain-motor",
    "software-it",
    "management-finances",
    "marketing",
] as const;

const institutionalEmailRegex = /^[^@\s]+@ualg\.pt$/i;

export default function JoinForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<JoinFormData>(initialFormData);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [cooldown, setCooldown] = useState(false);
    const [formError, setFormError] = useState("");
    const normalizedInstitutionalEmail = formData.institutionalEmail.trim();
    const hasInstitutionalEmail = normalizedInstitutionalEmail.length > 0;
    const isInstitutionalEmailValid = institutionalEmailRegex.test(normalizedInstitutionalEmail);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormError("");
    };

    const handleInterestAreaToggle = (area: string) => {
        const hasArea = formData.interestAreas.includes(area);
        const nextAreas = hasArea
            ? formData.interestAreas.filter((item) => item !== area)
            : [...formData.interestAreas, area];

        setFormData({ ...formData, interestAreas: nextAreas });
        setFormError("");
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (cooldown) return;

        if (!isInstitutionalEmailValid) {
            setFormError(t("join-form.form.email-domain-required"));
            return;
        }

        if (!formData.extracurricularEngineering || !formData.inPersonAvailability) {
            setFormError(t("join-form.form.yes-no-required"));
            return;
        }

        if (formData.extracurricularEngineering === "yes" && !formData.extracurricularDetails.trim()) {
            setFormError(t("join-form.form.extracurricular-details-required"));
            return;
        }

        if (formData.interestAreas.length === 0) {
            setFormError(t("join-form.form.interest-areas-required"));
            return;
        }

        setStatus("sending");
        setFormError("");

        try {
            const composedMessage = [
                `${t("join-form.form.name")}: ${formData.fullName}`,
                `${t("join-form.form.email")} (${t("join-form.form.email-institutional")}): ${formData.institutionalEmail}`,
                `${t("join-form.form.whatsapp")}: ${formData.whatsappPhone}`,
                `${t("join-form.form.course")}: ${formData.universityCourse}`,
                `${t("join-form.form.year")}: ${formData.universityYear}`,
                `${t("join-form.form.extracurricular")}: ${t(`join-form.form.${formData.extracurricularEngineering}`)}`,
                `${t("join-form.form.extracurricular-details")}: ${formData.extracurricularDetails || t("join-form.form.none")}`,
                `${t("join-form.form.in-person")}: ${t(`join-form.form.${formData.inPersonAvailability}`)}`,
                `${t("join-form.form.interest-areas")}: ${formData.interestAreas
                    .map((area) => t(`join-form.form.interest-options.${area}`))
                    .join(", ")}`,
                "",
                `${t("join-form.form.motivation")}:`,
                formData.motivation,
            ].join("\n");

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: formAccessKey,
                    subject: `${t("join-form.email-subject")} - ${formData.fullName}`,
                    from_name: formData.fullName,
                    email: formData.institutionalEmail,
                    message: composedMessage,
                    botcheck: "",
                }),
            });

            const json = await res.json();
            if (json.success) {
                setStatus("success");
                setFormData(initialFormData);
                setFormError("");
                setCooldown(true);
                setTimeout(() => setCooldown(false), 30_000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div>
            <Header />

            <section className="w-full pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-6 contact-hero">
                    <p className="section-eyebrow">{t("join-form.eyebrow")}</p>
                    <h1 className="contact-title">{t("join-form.title")}</h1>
                    <p className="site-body max-w-xl">{t("join-form.subtitle")}</p>
                </div>
            </section>

            <section className="w-full py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="contact-form-wrapper max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="site-panel contact-form">
                            <h2 className="site-heading text-lg mb-6">{t("join-form.form.title")}</h2>
                            <p className="site-body mb-2">{t("join-form.form.required-note")}</p>

                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="contact-field">
                                <label htmlFor="fullName" className="contact-label">{t("join-form.form.name")}</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder={t("join-form.form.name-placeholder")}
                                    className="contact-input"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="institutionalEmail" className="contact-label">
                                    {t("join-form.form.email")} ({t("join-form.form.email-institutional")})
                                </label>
                                <input
                                    id="institutionalEmail"
                                    name="institutionalEmail"
                                    type="email"
                                    required
                                    pattern="^[^@\s]+@ualg\.pt$"
                                    value={formData.institutionalEmail}
                                    onChange={handleChange}
                                    placeholder={t("join-form.form.email-placeholder")}
                                    className="contact-input"
                                />
                                <p className={`text-sm ${
                                    hasInstitutionalEmail
                                        ? isInstitutionalEmailValid
                                            ? "contact-status-success"
                                            : "contact-status-error"
                                        : "site-body"
                                }`}>
                                    {!hasInstitutionalEmail && t("join-form.form.email-feedback-empty")}
                                    {hasInstitutionalEmail && isInstitutionalEmailValid && t("join-form.form.email-feedback-valid", { email: formData.institutionalEmail })}
                                    {hasInstitutionalEmail && !isInstitutionalEmailValid && t("join-form.form.email-feedback-invalid", { email: formData.institutionalEmail })}
                                </p>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="whatsappPhone" className="contact-label">{t("join-form.form.whatsapp")}</label>
                                <input
                                    id="whatsappPhone"
                                    name="whatsappPhone"
                                    type="tel"
                                    required
                                    value={formData.whatsappPhone}
                                    onChange={handleChange}
                                    placeholder={t("join-form.form.whatsapp-placeholder")}
                                    className="contact-input"
                                />
                            </div>

                            <div className="contact-form-row">
                                <div className="contact-field">
                                    <label htmlFor="universityCourse" className="contact-label">{t("join-form.form.course")}</label>
                                    <input
                                        id="universityCourse"
                                        name="universityCourse"
                                        type="text"
                                        required
                                        value={formData.universityCourse}
                                        onChange={handleChange}
                                        placeholder={t("join-form.form.course-placeholder")}
                                        className="contact-input"
                                    />
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="universityYear" className="contact-label">{t("join-form.form.year")}</label>
                                    <input
                                        id="universityYear"
                                        name="universityYear"
                                        type="text"
                                        required
                                        value={formData.universityYear}
                                        onChange={handleChange}
                                        placeholder={t("join-form.form.year-placeholder")}
                                        className="contact-input"
                                    />
                                </div>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="extracurricularEngineering" className="contact-label">{t("join-form.form.extracurricular")}</label>
                                <select
                                    id="extracurricularEngineering"
                                    name="extracurricularEngineering"
                                    required
                                    value={formData.extracurricularEngineering}
                                    onChange={handleChange}
                                    className="contact-input"
                                >
                                    <option value="">{t("join-form.form.select-option")}</option>
                                    <option value="yes">{t("join-form.form.yes")}</option>
                                    <option value="no">{t("join-form.form.no")}</option>
                                </select>
                            </div>

                            {formData.extracurricularEngineering === "yes" && (
                                <div className="contact-field">
                                    <label htmlFor="extracurricularDetails" className="contact-label">{t("join-form.form.extracurricular-details")}</label>
                                    <textarea
                                        id="extracurricularDetails"
                                        name="extracurricularDetails"
                                        required
                                        rows={3}
                                        value={formData.extracurricularDetails}
                                        onChange={handleChange}
                                        placeholder={t("join-form.form.extracurricular-details-placeholder")}
                                        className="contact-input contact-textarea"
                                    />
                                </div>
                            )}

                            <div className="contact-field">
                                <label className="contact-label">{t("join-form.form.interest-areas")}</label>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {interestAreaKeys.map((area) => {
                                        const checked = formData.interestAreas.includes(area);

                                        return (
                                            <label
                                                key={area}
                                                className={`group relative flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 transition-all duration-200 ${
                                                    checked
                                                        ? "border-[var(--site-accent)] bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(34,197,94,0.12))] shadow-[0_8px_22px_rgba(59,130,246,0.18)]"
                                                        : "border-[var(--site-panel-border)] bg-[rgba(245,248,255,0.55)] hover:border-[var(--site-accent)] hover:bg-[rgba(245,248,255,0.85)]"
                                                }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={() => handleInterestAreaToggle(area)}
                                                    className="peer sr-only"
                                                />
                                                <span
                                                    aria-hidden="true"
                                                    className={`grid h-5 w-5 place-items-center rounded-md border transition-all duration-200 ${
                                                        checked
                                                            ? "border-[var(--site-accent)] bg-[var(--site-accent)] text-white"
                                                            : "border-[var(--site-panel-border)] bg-white text-transparent group-hover:border-[var(--site-accent)]"
                                                    }`}
                                                >
                                                    <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 transition-transform duration-200 ${checked ? "scale-100" : "scale-75"}`}>
                                                        <path
                                                            d="M3.2 8.3 6.5 11.6 12.8 4.9"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className={`text-sm transition-colors ${checked ? "text-[var(--site-text)] font-medium" : "site-body"}`}>
                                                    {t(`join-form.form.interest-options.${area}`)}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="inPersonAvailability" className="contact-label">{t("join-form.form.in-person")}</label>
                                <select
                                    id="inPersonAvailability"
                                    name="inPersonAvailability"
                                    required
                                    value={formData.inPersonAvailability}
                                    onChange={handleChange}
                                    className="contact-input"
                                >
                                    <option value="">{t("join-form.form.select-option")}</option>
                                    <option value="yes">{t("join-form.form.yes")}</option>
                                    <option value="no">{t("join-form.form.no")}</option>
                                </select>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="motivation" className="contact-label">{t("join-form.form.motivation")}</label>
                                <textarea
                                    id="motivation"
                                    name="motivation"
                                    required
                                    rows={5}
                                    value={formData.motivation}
                                    onChange={handleChange}
                                    placeholder={t("join-form.form.motivation-placeholder")}
                                    className="contact-input contact-textarea"
                                />
                            </div>

                            <div className="contact-form-footer">
                                <button
                                    type="submit"
                                    className="contact-submit"
                                    disabled={status === "sending" || cooldown}
                                >
                                    {status === "sending" ? t("join-form.form.sending") : t("join-form.form.send")}
                                </button>

                                {status === "success" && (
                                    <p className="contact-status contact-status-success">{t("join-form.form.success")}</p>
                                )}
                                {status === "error" && (
                                    <p className="contact-status contact-status-error">{t("join-form.form.error")}</p>
                                )}
                                {formError && (
                                    <p className="contact-status contact-status-error">{formError}</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}