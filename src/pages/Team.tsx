import React from 'react';
import teamData from '../data/teamData';
import LeadershipSection from '../components/team/LeadershipSection';
import DepartmentLeadersSection from '../components/team/DepartmentLeadersSection';
import DepartmentsSection from '../components/team/DepartmentsSection';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TeamHero from '../components/Hero/TeamHero';
import JoinCTA from '../components/CTA/JoinCTA';

const TeamPage = () => {
  const leadership = teamData.filter(
    (m) => m.department === 'Team Leaders' || m.department === 'Chief Engineer'
  );
  const departmentLeaders = teamData.filter(
    (m) => m.department === 'Department Leaders'
  );
  const departments = [
    'Gestão e Finanças',
    'Vehicle Dynamics',
    'Power Train & Elétrica',
    'Chassi & Aerodinâmica',
    'Software & Informática',
  ];
  const departmentMembers = departments.map((dep) => ({
    name: dep,
    members: teamData.filter((m) => m.department === dep),
  }));

  return (
    <>
      <Header />
      <TeamHero />
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LeadershipSection leadership={leadership} />
          <DepartmentLeadersSection departmentLeaders={departmentLeaders} />
          <DepartmentsSection departmentMembers={departmentMembers} />
        </div>
      </div>
      <JoinCTA />
      <Footer />
    </>
  );
};

export default TeamPage;
