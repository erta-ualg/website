import { useTranslation } from "react-i18next";
import type { TeamMember } from "../../data/teamData";
import TeamMemberCard from "../TeamMemberCard";

interface LeadershipSectionProps {
  leadership: TeamMember[];
}

export default function LeadershipSection({ leadership }: LeadershipSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="site-panel team-section-shell">
      <div className="mb-8 flex flex-col gap-3">
        <p className="section-eyebrow">{t("team-page.leadership.eyebrow")}</p>
        <h3 className="site-heading team-category-title text-3xl">{t("team-page.leadership.title")}</h3>
        <p className="site-body max-w-2xl">
          {t("team-page.leadership.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
