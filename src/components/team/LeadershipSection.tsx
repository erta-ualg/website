
import React from 'react';
import type { TeamMember } from '../../data/teamData';
import TeamMemberCard from '../TeamMemberCard';

interface LeadershipSectionProps {
  leadership: TeamMember[];
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ leadership }) => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-3xl mb-10">
        Team Leadership
      </h3>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {leadership.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
