import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const JoinCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('feature.join-cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {t('feature.join-cta.description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/join"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
            >
              {t('feature.join-cta.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
