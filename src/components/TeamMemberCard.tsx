import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from '../data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const { t, i18n } = useTranslation();
  const { name, role, photoUrl, linkedin, instagram, department, descriptionPt, descriptionEn } = member;

  const activeLanguage = i18n.resolvedLanguage || i18n.language;
  const localizedDescription = activeLanguage.startsWith('pt') ? descriptionPt : descriptionEn;
  const cardCopy = localizedDescription.trim() || descriptionPt;

  const hasLinkedin = Boolean(linkedin && linkedin !== '#');
  const hasInstagram = Boolean(instagram && instagram !== '#');
  const roleLower = role?.toLowerCase() || '';
  const isPlainMember = roleLower === 'membro' || roleLower === 'member';
  const displayRole = isPlainMember ? '' : role;

  return (
    <article className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--site-card-border)] bg-[color:var(--site-surface-strong)] transition duration-500 group-hover:z-10 group-hover:border-[color:var(--site-accent)] group-hover:shadow-[0_0_60px_rgba(34,211,238,0.14)]">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={photoUrl}
            alt={`Foto de ${name}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-slate-950 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-cyan-300/40 bg-slate-950/70 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[color:var(--site-accent)] backdrop-blur">
            {department}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 transition-all duration-500 group-hover:translate-y-[-4px]">
          <div className="space-y-1">
            <h3 className="text-lg font-black uppercase tracking-[0.08em] text-white">{name}</h3>
            {displayRole && (
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">{displayRole}</p>
            )}
          </div>
          {cardCopy && (
            <p className="max-h-0 overflow-hidden text-xs leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
              {cardCopy}
            </p>
          )}
          {(hasLinkedin || hasInstagram) && (
            <div className="flex items-center gap-2 pt-1">
              {hasLinkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
                  aria-label={t('team-page.card.linkedin', { name })}
                >
                  <FaLinkedin size={16} />
                </a>
              )}
              {hasInstagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
                  aria-label={t('team-page.card.instagram', { name })}
                >
                  <FaInstagram size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;
