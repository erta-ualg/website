
import React from 'react';
import type { TeamMember } from '../../data/teamData';
import TeamMemberCard from '../TeamMemberCard';

interface DepartmentLeadersSectionProps {
  departmentLeaders: TeamMember[];
}

const DepartmentLeadersSection: React.FC<DepartmentLeadersSectionProps> = ({ departmentLeaders }) => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-3xl mb-10">
        Department Leaders
      </h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {departmentLeaders.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentLeadersSection;
