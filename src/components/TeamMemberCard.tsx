
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import type { TeamMember } from '../data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const { name, role, description, photoUrl, linkedin, instagram, department } = member;

  return (
    <div className="group bg-zinc-100 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
      <div className="relative w-32 h-32 mb-4">
        <img
          src={photoUrl}
          alt={`Foto de ${name}`}
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white">
          <span className="text-xs font-bold">{department.substring(0, 2)}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-primary italic font-semibold mb-2">{role}</p>
      <div className="w-16 h-0.5 bg-primary mb-4 transition-all duration-300 group-hover:w-24"></div>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex space-x-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary transition-colors"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
