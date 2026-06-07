import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import type { TeamMember } from "../data/teamData";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { t, i18n } = useTranslation();
  const { name, role, photoUrl, linkedin, instagram, department, descriptionPt, descriptionEn } = member;
  const activeLanguage = i18n.resolvedLanguage || i18n.language;
  const localizedDescription = activeLanguage.startsWith("pt") ? descriptionPt : descriptionEn;
  const cardCopy = localizedDescription.trim() || descriptionPt;

  return (
    <article className="group team-member-card site-card flex h-full flex-col overflow-hidden text-center">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={photoUrl}
          alt={`Foto de ${name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="team-member-card-overlay absolute inset-0" />
        <div className="team-member-department-chip absolute left-4 top-4 rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
          {department}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 text-left">
        <div className="space-y-1">
          <h3 className="site-heading text-2xl">{name}</h3>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--site-accent)]">{role}</p>
        </div>

        <p className="site-body flex-1">{cardCopy}</p>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-member-social-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--site-card-border)] text-[var(--site-text)] hover:-translate-y-0.5 hover:border-[color:var(--site-accent)]"
            aria-label={t("team-page.card.linkedin", { name })}
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="team-member-social-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--site-card-border)] text-[var(--site-text)] hover:-translate-y-0.5 hover:border-[color:var(--site-accent)]"
            aria-label={t("team-page.card.instagram", { name })}
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
