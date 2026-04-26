
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from '../../data/teamData';
import TeamMemberCard from '../TeamMemberCard';

interface DepartmentLeadersSectionProps {
  departmentLeaders: TeamMember[];
}

const DepartmentLeadersSection: React.FC<DepartmentLeadersSectionProps> = ({ departmentLeaders }) => {
  const { t } = useTranslation();

  return (
    <section className="site-panel team-section-shell">
      <div className="mb-8 flex flex-col gap-3">
        <p className="section-eyebrow">{t('team-page.department-leaders.eyebrow')}</p>
        <h3 className="site-heading team-category-title text-3xl">{t('team-page.department-leaders.title')}</h3>
        <p className="site-body max-w-2xl">
          {t('team-page.department-leaders.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {departmentLeaders.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default DepartmentLeadersSection;
