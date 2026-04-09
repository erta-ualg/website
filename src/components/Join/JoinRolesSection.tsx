import SectionHeader from "../Common/SectionHeader";

export interface JoinRole {
    title: string;
    description: string;
    skills: string[];
}

interface JoinRolesSectionProps {
    title: string;
    subtitle: string;
    roles: JoinRole[];
}

export default function JoinRolesSection({
    title,
    subtitle,
    roles,
}: JoinRolesSectionProps) {
    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader title={title} subtitle={subtitle} />
                <div className="join-roles-grid">
                    {roles.map((role) => (
                        <article className="join-role-card" key={role.title}>
                            <h3 className="spec-title">{role.title}</h3>
                            <p className="site-body">{role.description}</p>
                            <ul className="join-skill-list">
                                {role.skills.map((skill) => (
                                    <li key={skill} className="site-fact-chip">{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
