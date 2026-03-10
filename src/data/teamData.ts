
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  description: string;
  photoUrl: string;
  linkedin: string;
  instagram: string;
}

const teamData: TeamMember[] = [
  // Team Leaders
  {
    id: 1,
    name: "Ana Leitao",
    role: "Team Leader",
    department: "Team Leaders",
    description: "Lidera a equipa com paixão e visão estratégica.",
    photoUrl: "https://ui-avatars.com/api/?name=Ana+Silva&background=random",
    linkedin: "https://www.linkedin.com/in/anasilva",
    instagram: "https://www.instagram.com/anasilva",
  },
  {
    id: 2,
    name: "Rui Rio",
    role: "Team Leader",
    department: "Team Leaders",
    description: "Coordena as operações e a comunicação interna.",
    photoUrl: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=random",
    linkedin: "https://www.linkedin.com/in/carlosmendes",
    instagram: "https://www.instagram.com/carlosmendes",
  },
  // Chief Engineer
  {
    id: 3,
    name: "Jose Socrates",
    role: "Chief Engineer",
    department: "Chief Engineer",
    description: "Responsável pela visão técnica e integração do veículo.",
    photoUrl: "https://ui-avatars.com/api/?name=Joana+Santos&background=random",
    linkedin: "https://www.linkedin.com/in/joanasantos",
    instagram: "https://www.instagram.com/joanasantos",
  },
  // Department Leaders
  {
    id: 4,
    name: "Carloes Moedas",
    role: "Gestão e Finanças Leader",
    department: "Department Leaders",
    description: "Líder do departamento de Gestão e Finanças.",
    photoUrl: "https://ui-avatars.com/api/?name=Pedro+Costa&background=random",
    linkedin: "https://www.linkedin.com/in/pedrocosta",
    instagram: "https://www.instagram.com/pedrocosta",
  },
  {
    id: 5,
    name: "Ana Gomes",
    role: "Vehicle Dynamics Leader",
    department: "Department Leaders",
    description: "Líder do departamento de Vehicle Dynamics.",
    photoUrl: "https://ui-avatars.com/api/?name=Sofia+Ferreira&background=random",
    linkedin: "https://www.linkedin.com/in/sofiaferreira",
    instagram: "https://www.instagram.com/sofiaferreira",
  },
  {
    id: 6,
    name: "Rui Pinto",
    role: "Power Train & Elétrica Leader",
    department: "Department Leaders",
    description: "Líder do departamento de Power Train & Elétrica.",
    photoUrl: "https://ui-avatars.com/api/?name=Rui+Almeida&background=random",
    linkedin: "https://www.linkedin.com/in/ruialmeida",
    instagram: "https://www.instagram.com/ruialmeida",
  },
  {
    id: 7,
    name: "Jose Socrates",
    role: "Chassi & Aerodinâmica Leader",
    department: "Department Leaders",
    description: "Líder do departamento de Chassi & Aerodinâmica.",
    photoUrl: "https://ui-avatars.com/api/?name=Mariana+Rodrigues&background=random",
    linkedin: "https://www.linkedin.com/in/marianarodrigues",
    instagram: "https://www.instagram.com/marianarodrigues",
  },
  {
    id: 8,
    name: "Mariana Mortagua",
    role: "Software & Informática Leader",
    department: "Department Leaders",
    description: "Líder do departamento de Software & Informática.",
    photoUrl: "https://ui-avatars.com/api/?name=Tiago+Goncalves&background=random",
    linkedin: "https://www.linkedin.com/in/tiagooncalves",
    instagram: "https://www.instagram.com/tiagooncalves",
  },
  // Gestão e Finanças
  {
    id: 9,
    name: "Antonio Costa",
    role: "Membro",
    department: "Gestão e Finanças",
    description: "Apoio na gestão de recursos e planeamento financeiro.",
    photoUrl: "https://ui-avatars.com/api/?name=Ines+Martins&background=random",
    linkedin: "https://www.linkedin.com/in/inesmartins",
    instagram: "https://www.instagram.com/inesmartins",
  },
  {
    id: 10,
    name: "Antonio Guterres",
    role: "Membro",
    department: "Gestão e Finanças",
    description: "Responsável pelas parcerias e patrocínios.",
    photoUrl: "https://ui-avatars.com/api/?name=Bruno+Fernandes&background=random",
    linkedin: "https://www.linkedin.com/in/brunofernandes",
    instagram: "https://www.instagram.com/brunofernandes",
  },
  // Vehicle Dynamics
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 11 + i,
    name: `Membro VD ${i + 1}`,
    role: "Membro",
    department: "Vehicle Dynamics",
    description: "Focado na suspensão, direção e travagem.",
    photoUrl: `https://ui-avatars.com/api/?name=Membro+VD${i + 1}&background=random`,
    linkedin: "#",
    instagram: "#",
  })),
  // Power Train & Elétrica
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 16 + i,
    name: `Membro PT&E ${i + 1}`,
    role: "Membro",
    department: "Power Train & Elétrica",
    description: "Desenvolvimento do motor e sistema elétrico.",
    photoUrl: `https://ui-avatars.com/api/?name=Membro+PTE${i + 1}&background=random`,
    linkedin: "#",
    instagram: "#",
  })),
  // Chassi & Aerodinâmica
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 21 + i,
    name: `Membro CA ${i + 1}`,
    role: "Membro",
    department: "Chassi & Aerodinâmica",
    description: "Design e fabrico do chassi e componentes aerodinâmicos.",
    photoUrl: `https://ui-avatars.com/api/?name=Membro+CA${i + 1}&background=random`,
    linkedin: "#",
    instagram: "#",
  })),
  // Software & Informática
  ...Array.from({ length: 3 }, (_, i) => ({
    id: 26 + i,
    name: `Membro SI ${i + 1}`,
    role: "Membro",
    department: "Software & Informática",
    description: "Desenvolvimento de software embarcado e telemetria.",
    photoUrl: `https://ui-avatars.com/api/?name=Membro+SI${i + 1}&background=random`,
    linkedin: "#",
    instagram: "#",
  })),
];

export default teamData;
