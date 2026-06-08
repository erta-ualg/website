import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import teamData from "../data/teamData";
import LeadershipSection from "../components/team/LeadershipSection";
import DepartmentLeadersSection from "../components/team/DepartmentLeadersSection";
import DepartmentsSection from "../components/team/DepartmentsSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TeamHero from "../components/Hero/TeamHero";
import JoinCTA from "../components/CTA/JoinCTA";
import SEO from "../hooks/useSEO";

const departments = [
  { sourceName: "Gestão / Finanças", translationKey: "team-page.departments.management" },
  { sourceName: "Marketing / Design", translationKey: "team-page.departments.marketing" },
  { sourceName: "Vehicle Dynamics", translationKey: "team-page.departments.vehicle-dynamics" },
  { sourceName: "Powertrain / Elétrica", translationKey: "team-page.departments.powertrain" },
  { sourceName: "Chassis / Aerodinâmica", translationKey: "team-page.departments.chassis-aero" },
  { sourceName: "Software / Informática", translationKey: "team-page.departments.software" },
];

const toDepartmentId = (department: string) =>
  department.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export default function TeamPage() {
  const { t } = useTranslation();
  const [search] = useState("");
  const [activeDepartment] = useState("all");

  const leadership = teamData.filter((member) =>
    member.department === "Team Leaders" || member.role.toLowerCase().includes("engenheiro chefe")
  );

  const departmentLeaders = teamData.filter((member) =>
    member.department !== "Team Leaders" && member.role.toLowerCase().includes("líder de departamento")
  );

  const filteredLeadership = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leadership.filter((member) => {
      if (!query) {
        return true;
      }

      return [member.name, member.role, member.descriptionPt, member.descriptionEn, member.department]
        .join(" ")
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
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [departmentLeaders, search]);

  const departmentMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return departments
      .filter((department) => activeDepartment === "all" || activeDepartment === department.sourceName)
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
            .join(" ")
            .toLowerCase()
            .includes(query);
        }),
      }))
      .filter((department) => department.members.length > 0);
  }, [activeDepartment, search, t]);

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
}
