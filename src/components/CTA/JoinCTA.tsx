import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function JoinCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 join-cta-shell">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center site-panel join-cta-panel">
          <h2 className="join-cta-title text-3xl font-bold tracking-tight sm:text-4xl">
            {t("feature.join-cta.title")}
          </h2>
          <p className="join-cta-copy mx-auto mt-6 max-w-xl text-lg leading-8">
            {t("feature.join-cta.description")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/join"
              className="hero-cta-primary join-cta-button"
            >
              {t("feature.join-cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
