
import React from 'react';
import type { TeamMember } from '../../data/teamData';
import TeamMemberCard from '../TeamMemberCard';

interface Department {
  name: string;
  members: TeamMember[];
}

interface DepartmentsSectionProps {
  departmentMembers: Department[];
}

const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ departmentMembers }) => {
  return (
    <>
      {departmentMembers.map((department) => (
        <div key={department.name} className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-3xl mb-10">
            {department.name}
          </h3>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {department.members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default DepartmentsSection;
