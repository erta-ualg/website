
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from '../../data/teamData';
import TeamMemberCard from '../TeamMemberCard';

interface Department {
  id: string;
  name: string;
  members: TeamMember[];
}

interface DepartmentsSectionProps {
  departmentMembers: Department[];
}

const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ departmentMembers }) => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-8">
      {departmentMembers.map((department) => (
        <section
          key={department.name}
          id={department.id}
          className="site-panel team-section-shell scroll-mt-28"
        >
          <div className="mb-8 flex flex-col gap-3">
            <p className="section-eyebrow">{t('team-page.departments-section.eyebrow')}</p>
            <h3 className="site-heading team-category-title text-center text-3xl sm:text-left">{department.name}</h3>
            <p className="site-body max-w-2xl text-center sm:text-left">
              {t('team-page.departments-section.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {department.members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      ))}

      {departmentMembers.length === 0 && (
        <section className="site-panel team-section-shell">
          <p className="site-body text-center">
            {t('team-page.departments-section.empty')}
          </p>
        </section>
      )}
    </div>
  );
};

export default DepartmentsSection;
