import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import footerData from "../data/Footer";
import contactsData from "../data/Contacts";
import { SEO } from "../hooks/useSEO";

export default function Contactos() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [cooldown, setCooldown] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (cooldown) return;

        setStatus("sending");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: contactsData.web3formsKey,
                    subject: formData.subject,
                    from_name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    botcheck: "",               // honeypot — must stay empty
                }),
            });

            const json = await res.json();
            if (json.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });

                // 30 s cooldown so users can't hammer the button
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
        <div className="bg-background text-text">
            <SEO
                title="Contact Us"
                description="Get in touch with ERTA. We'd love to hear from you about sponsorships, partnerships, or any inquiries."
                keywords="contact ERTA, Formula Student contact, sponsorship, partnership inquiry"
                ogUrl="https://fs-erta.com/contactos"
                canonicalUrl="https://fs-erta.com/contactos"
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Contact ERTA",
                  "description": "Contact ERTA Formula Student Team",
                  "url": "https://fs-erta.com/contactos",
                }}
            />
            <Header />

            <main className="overflow-hidden">

            {/* Hero */}
            <section className="bg-background px-6 pb-12 pt-32 text-text lg:pb-16">
                <div className="mx-auto max-w-7xl contact-hero">
                    <p className="section-eyebrow">{t("contacts.eyebrow")}</p>
                    <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[0.06em] text-text md:text-6xl">
                        {t("contacts.title")}
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">{t("contacts.subtitle")}</p>
                </div>
            </section>

            {/* Info + Form grid */}
            <section className="bg-background px-6 py-12 text-text lg:py-16">
                <div className="mx-auto max-w-7xl contact-grid">
                    {/* Contact info sidebar */}
                    <div className="contact-info">
                        <div className="site-panel contact-info-panel rounded-[1.5rem] p-6">
                            <h2 className="site-heading text-lg mb-6">{t("contacts.info.title")}</h2>

                            <div className="contact-info-items">
                                <div className="contact-info-item">
                                    <HiOutlineMail className="contact-info-icon" />
                                    <div>
                                        <span className="contact-info-label">{t("contacts.info.email-label")}</span>
                                        <a href={`mailto:${contactsData.email}`} className="contact-info-value contact-link">
                                            {contactsData.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <HiOutlineLocationMarker className="contact-info-icon" />
                                    <div>
                                        <span className="contact-info-label">{t("contacts.info.location-label")}</span>
                                        <span className="contact-info-value">{contactsData.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-socials">
                                <span className="contact-info-label">{t("contacts.info.socials-label")}</span>
                                <div className="flex gap-3 mt-2">
                                    <a
                                        href={footerData.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="contact-social-link"
                                    >
                                        <FaInstagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={footerData.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="contact-social-link"
                                    >
                                        <FaLinkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="site-panel contact-form rounded-[1.5rem] p-6">
                            <h2 className="site-heading text-lg mb-6">{t("contacts.form.title")}</h2>

                            {/* Honeypot — hidden from humans, catches bots */}
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="contact-form-row">
                                <div className="contact-field">
                                    <label htmlFor="name" className="contact-label">{t("contacts.form.name")}</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t("contacts.form.name-placeholder")}
                                        className="contact-input"
                                    />
                                </div>
                                <div className="contact-field">
                                    <label htmlFor="email" className="contact-label">{t("contacts.form.email")}</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t("contacts.form.email-placeholder")}
                                        className="contact-input"
                                    />
                                </div>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="subject" className="contact-label">{t("contacts.form.subject")}</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={t("contacts.form.subject-placeholder")}
                                    className="contact-input"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="message" className="contact-label">{t("contacts.form.message")}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t("contacts.form.message-placeholder")}
                                    className="contact-input contact-textarea"
                                />
                            </div>

                            <div className="contact-form-footer">
                                <button
                                    type="submit"
                                    className="contact-submit"
                                    disabled={status === "sending" || cooldown}
                                >
                                    {status === "sending" ? t("contacts.form.sending") : t("contacts.form.send")}
                                </button>

                                {status === "success" && (
                                    <p className="contact-status contact-status-success">{t("contacts.form.success")}</p>
                                )}
                                {status === "error" && (
                                    <p className="contact-status contact-status-error">{t("contacts.form.error")}</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="bg-background px-6 py-12 text-text lg:py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="section-header">
                        <h2 className="site-heading">{t("contacts.map.title")}</h2>
                    </div>
                    <div className="contact-map">
                        <iframe
                            title="Universidade do Algarve - Campus da Penha"
                            src={contactsData.map.embedUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: "1.25rem" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-background px-6 py-16 text-text lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="cta-block">
                        <div>
                            <h3 className="site-heading">{t("contacts.cta.title")}</h3>
                            <p className="site-body">{t("contacts.cta.body")}</p>
                        </div>
                        <Link to="/join" className="hero-cta-primary">{t("contacts.cta.action")}</Link>
                    </div>
                </div>
            </section>

            </main>

            <Footer />
        </div>
    );
}
