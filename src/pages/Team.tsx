import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import teamData from '../data/teamData';
import LeadershipSection from '../components/team/LeadershipSection';
import DepartmentLeadersSection from '../components/team/DepartmentLeadersSection';
import DepartmentsSection from '../components/team/DepartmentsSection';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TeamHero from '../components/Hero/TeamHero';
import JoinCTA from '../components/CTA/JoinCTA';
import { coursesCount } from '../data/siteStats';
import { SEO } from '../hooks/useSEO';

const departments = [
  { sourceName: 'Gestão / Finanças', translationKey: 'team-page.departments.management' },
  { sourceName: 'Marketing / Design', translationKey: 'team-page.departments.marketing' },
  { sourceName: 'Vehicle Dynamics', translationKey: 'team-page.departments.vehicle-dynamics' },
  { sourceName: 'Powertrain / Elétrica', translationKey: 'team-page.departments.powertrain' },
  { sourceName: 'Chassis / Aerodinâmica', translationKey: 'team-page.departments.chassis-aero' },
  { sourceName: 'Software / Informática', translationKey: 'team-page.departments.software' },
];

const toDepartmentId = (department: string) =>
  department.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const TeamPage = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('all');

  const leadership = teamData.filter((member) =>
    member.department === 'Team Leaders' || member.role.toLowerCase().includes('engenheiro chefe')
  );

  const departmentLeaders = teamData.filter((member) =>
    member.department !== 'Team Leaders' && member.role.toLowerCase().includes('líder de departamento')
  );

  const filteredLeadership = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leadership.filter((member) => {
      if (!query) {
        return true;
      }

      return [member.name, member.role, member.descriptionPt, member.descriptionEn, member.department]
        .join(' ')
        .toLowerCase()
        .includes(query);
    });
  }, [leadership, search]);

  const filteredDepartmentLeaders = useMemo(() => {
    const query = search.trim().toLowerCase();
    return departmentLeaders.filter((member) => {
      if (!query) {
        return true;
      }

      return [member.name, member.role, member.descriptionPt, member.descriptionEn, member.department]
        .join(' ')
        .toLowerCase()
        .includes(query);
    });
  }, [departmentLeaders, search]);

  const departmentMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return departments
      .filter((department) => activeDepartment === 'all' || activeDepartment === department.sourceName)
      .map((department) => ({
        id: toDepartmentId(department.sourceName),
        name: t(department.translationKey),
        members: teamData.filter((member) => {
          const matchesDepartment = member.department === department.sourceName;

          if (!matchesDepartment) {
            return false;
          }

          if (!query) {
            return true;
          }

          return [member.name, member.role, member.descriptionPt, member.descriptionEn, member.department]
            .join(' ')
            .toLowerCase()
            .includes(query);
        }),
      }))
      .filter((department) => department.members.length > 0);
  }, [activeDepartment, search, t]);

  const stats = [
    { label: t('team-page.stats.total-members'), value: String(teamData.length) },
    { label: t('team-page.stats.departments'), value: String(departments.length) },
    {
      label: t('team-page.stats.courses'),
      value: String(coursesCount),
    },
  ];

  const quickLinks = [
    { label: t('team-page.leadership.eyebrow'), href: '#team-leadership' },
    { label: t('team-page.quick-links.department-leads'), href: '#department-leaders' },
    { label: t('team-page.stats.departments'), href: '#team-departments' },
    { label: t('team-page.quick-links.join'), href: '#join-team' },
  ];

  return (
    <>
      <SEO
        title="Team"
        description="Meet ERTA's team - 20+ engineering students across 6 departments working on Formula Student competition."
        keywords="ERTA team, Formula Student, UAlg, engineering, management, powertrain, chassis, software"
        ogUrl="https://fs-erta.com/team"
        canonicalUrl="https://fs-erta.com/team"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "ERTA Team",
          "description": "Meet ERTA's team",
          "url": "https://fs-erta.com/team",
        }}
      />
      <Header />
      <TeamHero />

      <main className="team-page-shell">

        {/* HACK disabled for now, on marketing and design request */}

        {/* <section id="team-overview" className="team-page-section py-12 sm:py-16 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
              <div className="site-panel team-overview-panel">
                <p className="section-eyebrow">{t('team-page.overview.eyebrow')}</p>
                <h2 className="site-heading team-overview-title">{t('team-page.overview.title')}</h2>
                <p className="site-body team-overview-copy">
                  {t('team-page.overview.body')}
                </p>

                <div className="team-stats-grid">
                  {stats.map((stat) => (
                    <div key={stat.label} className="team-stat-card">
                      <span className="team-stat-value">{stat.value}</span>
                      <span className="team-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="site-panel team-navigation-panel">
                <div>
                  <p className="section-eyebrow">{t('team-page.navigation.eyebrow')}</p>
                  <h3 className="site-heading">{t('team-page.navigation.title')}</h3>
                </div>

                <div className="team-quick-links">
                  {quickLinks.map((link) => (
                    <a key={link.href} href={link.href} className="team-quick-link">
                      {link.label}
                    </a>
                  ))}
                </div>

                <label className="team-search-block" htmlFor="team-search">
                  <span className="team-search-label">{t('team-page.search.label')}</span>
                  <input
                    id="team-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={t('team-page.search.placeholder')}
                    className="team-search-input"
                  />
                </label>

                <div className="team-filter-group" role="tablist" aria-label={t('team-page.filters.aria')}>
                  <button
                    type="button"
                    className={`team-filter-chip ${activeDepartment === 'all' ? 'is-active' : ''}`}
                    onClick={() => setActiveDepartment('all')}
                  >
                    {t('team-page.filters.all')}
                  </button>
                  {departments.map((department) => (
                    <button
                      key={department.sourceName}
                      type="button"
                      className={`team-filter-chip ${
                        activeDepartment === department.sourceName ? 'is-active' : ''
                      }`}
                      onClick={() => setActiveDepartment(department.sourceName)}
                    >
                      {t(department.translationKey)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="team-leadership" className="team-page-section py-8 sm:py-10 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <LeadershipSection leadership={filteredLeadership} />
          </div>
        </section>

        <section id="department-leaders" className="team-page-section py-8 sm:py-10 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <DepartmentLeadersSection departmentLeaders={filteredDepartmentLeaders} />
          </div>
        </section>

        <section id="team-departments" className="team-page-section py-8 sm:py-10 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <DepartmentsSection departmentMembers={departmentMembers} />
          </div>
        </section>

        <section id="join-team" className="team-page-section">
          <JoinCTA />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;
