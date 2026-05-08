import fotoVicenteLamy from '../assets/team/fotoVicenteLamyERTA.jpg';
import fotoJanLeon from '../assets/team/fotoJanLeonERTA.png';
import fotoBarbaraPereira from '../assets/team/fotoBárbaraPereiraERTA.png';
import fotoCorinaSampaio from '../assets/team/fotoCorinaSampaioERTA.png';
import fotoBeatrizCorreia from '../assets/team/fotoBeatrizCorreiaERTA.png';
import fotoAlexandreSilva from '../assets/team/fotoAlexandreSilvaERTA.jpg';
import fotoRaquelNunes from '../assets/team/fotoRaquelNunesERTA.jpg'
import fotoDavidSilvestre from '../assets/team/fotoDavidSilvestreERTA.png';
import fotoAfonsoFigueiredo from '../assets/team/fotoAfonsoFigueiredoERTA.png';
import fotoDiogoFonseca from '../assets/team/fotoDiogoFonsecaERTA.png';
import fotoAndreCristina from '../assets/team/fotoAndréCristinaERTA.jpg';
import fotoGuilhermeSilvestre from '../assets/team/fotoGuilhermeSilvestreERTA.png';
import fotoBrunoFernandes from '../assets/team/fotoBrunoFernandesERTA.jpeg';
import fotoGumersindoCosta from '../assets/team/fotoGumersindoCostaERTA.jpeg';
import fotoGoncaloFigueiredo from '../assets/team/fotoGoncaloFigueiredoERTA.jpeg';
import fotoDavidSilva from '../assets/team/fotoDavidSilvaERTA.jpeg';
import fotoMiguelClaro from '../assets/team/fotoMiguelClaroERTA.jpeg';
import fotoChristianFarfan from '../assets/team/fotoChristianFarfanERTA.jpeg';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  descriptionPt: string;
  descriptionEn: string;
  photoUrl: string;
  linkedin: string;
  instagram: string;
}

const avatarFor = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
const emailLink = (email: string) => (email ? `mailto:${email.trim()}` : "#");

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Vicente Lamy",
    role: "Team Leader",
    department: "Team Leaders",
    descriptionPt: "Direção geral da equipa. Engenharia Mecânica. Membro desde 30/10/2025.",
    descriptionEn: "Overall team management. Mechanical Engineering. Member since 30/10/2025.",
    photoUrl: fotoVicenteLamy,
    linkedin: "https://www.linkedin.com/in/vicente-lamy-384422268",
    instagram: "https://www.instagram.com/vicentelamy/",
  },
  {
    id: 2,
    name: "Jan Leon Sousa",
    role: "Team Leader",
    department: "Team Leaders",
    descriptionPt: "Direção geral da equipa. Engenharia Mecânica. Membro desde 30/10/2025.",
    descriptionEn: "Overall team management. Mechanical Engineering. Member since 30/10/2025.",
    photoUrl: fotoJanLeon,
    linkedin: "https://www.linkedin.com/in/jan-leon-99544039a/",
    instagram: "https://www.instagram.com/jan.fe.leon/",
  },
  {
    id: 3,
    name: "Bárbara Pereira",
    role: "Líder de Departamento",
    department: "Gestão / Finanças",
    descriptionPt: "Engenharia Informática. Membro desde 04/01/2026. Departamento secundário: Marketing.",
    descriptionEn: "Computer Engineering. Member since 04/01/2026. Secondary department: Marketing.",
    photoUrl: fotoBarbaraPereira,
    linkedin: "https://www.linkedin.com/in/bárbara-pereira-955949361",
    instagram: "https://www.instagram.com/barbara_p.23/",
  },
  {
    id: 4,
    name: "Corina Sampaio",
    role: "Membro",
    department: "Gestão / Finanças",
    descriptionPt: "Gestão de Empresas. Membro desde 04/01/2026.",
    descriptionEn: "Business Management. Member since 04/01/2026.",
    photoUrl: fotoCorinaSampaio,
    linkedin: emailLink("a84280@ualg.pt"),
    instagram: emailLink("corisampaio05@gmail.com"),
  },
  {
    id: 5,
    name: "Beatriz Correia",
    role: "Líder de Departamento",
    department: "Marketing / Design",
    descriptionPt: "Marketing. Membro desde 04/01/2026.",
    descriptionEn: "Marketing. Member since 04/01/2026.",
    photoUrl: fotoBeatrizCorreia,
    linkedin: emailLink("a89332@ualg.pt"),
    instagram: emailLink("beatriizsiilvac@gmail.com"),
  },
  {
    id: 6,
    name: "Raquel Nunes",
    role: "Membro",
    department: "Marketing / Design",
    descriptionPt: "Engenharia Informática. Membro desde 30/10/2025.",
    descriptionEn: "Computer Engineering. Member since 30/10/2025.",
    photoUrl: fotoRaquelNunes,
    linkedin: emailLink("a83883@ualg.pt"),
    instagram: "https://www.instagram.com/rach.el.108/",
  },
  {
    id: 7,
    name: "Diogo Fonseca",
    role: "Líder de Departamento",
    department: "Powertrain / Elétrica",
    descriptionPt: "Engenharia Eletrotécnica e de Computadores. Membro desde 04/01/2026.",
    descriptionEn: "Electrical and Computer Engineering. Member since 04/01/2026.",
    photoUrl: fotoDiogoFonseca,
    linkedin: emailLink("a91031@ualg.pt"),
    instagram: emailLink("fonsecadiogo215@gmail.com"),
  },
  {
    id: 8,
    name: "Gonçalo Pacheco",
    role: "Membro",
    department: "Powertrain / Elétrica",
    descriptionPt: "Engenharia Eletrotécnica e de Computadores. Membro desde 04/01/2026.",
    descriptionEn: "Electrical and Computer Engineering. Member since 04/01/2026.",
    photoUrl: avatarFor("Gonçalo Pacheco"),
    linkedin: emailLink("a89296@ualg.pt"),
    instagram: emailLink("Goncalo_pacheco@outlook.com"),
  },
  {
    id: 9,
    name: "Alexandre Silva",
    role: "Membro",
    department: "Powertrain / Elétrica",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026.",
    photoUrl: fotoAlexandreSilva,
    linkedin: emailLink("a89282@ualg.pt"),
    instagram: emailLink("alexandreescolavirtual@gmail.com"),
  },
  {
    id: 10,
    name: "Bernardo Martins",
    role: "Membro",
    department: "Powertrain / Elétrica",
    descriptionPt: "Engenharia Eletrotécnica e de Computadores. Membro desde 09/03/2026.",
    descriptionEn: "Electrical and Computer Engineering. Member since 09/03/2026.",
    photoUrl: avatarFor("Bernardo Martins"),
    linkedin: "https://www.linkedin.com/in/bernardo-martins-58438a3b6/",
    instagram: "https://www.instagram.com/_beni_m23/",
  },
  {
    id: 11,
    name: "David Silvestre",
    role: "Líder de Departamento",
    department: "Software / Informática",
    descriptionPt: "Engenharia Informática. Membro desde 30/10/2025. Departamento secundário: Marketing / Design.",
    descriptionEn: "Computer Engineering. Member since 30/10/2025. Secondary department: Marketing / Design.",
    photoUrl: fotoDavidSilvestre,
    linkedin: emailLink("a83938@ualg.pt"),
    instagram: "https://www.instagram.com/daviid.sil/",
  },
  {
    id: 12,
    name: "Afonso Figueiredo",
    role: "Membro",
    department: "Software / Informática",
    descriptionPt: "Engenharia de Sistemas e Tecnologias Informáticas. Membro desde 04/01/2026.",
    descriptionEn: "Systems and Computer Technologies Engineering. Member since 04/01/2026.",
    photoUrl: fotoAfonsoFigueiredo,
    linkedin: "https://www.linkedin.com/in/afonso-figueiredo-195a3515a/",
    instagram: "https://www.instagram.com/afonsof.12/",
  },
  {
    id: 13,
    name: "Bruno Fernandes",
    role: "Membro",
    department: "Software / Informática",
    descriptionPt: "Engenharia Informática. Membro desde 17/02/2026.",
    descriptionEn: "Computer Engineering. Member since 17/02/2026.",
    photoUrl: fotoBrunoFernandes,
    linkedin: "https://www.linkedin.com/in/brnfrnnds/",
    instagram: "https://www.instagram.com/brnfrnds",
  },
  {
    id: 14,
    name: "David Silva",
    role: "Líder de Departamento",
    department: "Vehicle Dynamics",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026.",
    photoUrl: fotoDavidSilva,
    linkedin: "https://www.linkedin.com/in/david-silva",
    instagram: "https://www.instagram.com/david._silvaa_",
  },
  {
    id: 15,
    name: "André Cristina",
    role: "Membro",
    department: "Vehicle Dynamics",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026. Departamento secundário: Chassis / Aerodinâmica.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026. Secondary department: Chassis / Aerodynamics.",
    photoUrl: fotoAndreCristina,
    linkedin: "https://www.linkedin.com/in/andré-cristina-8383a03a3/",
    instagram: "https://www.instagram.com/_driny___/",
  },
  {
    id: 16,
    name: "Guilherme Silvestre",
    role: "Membro",
    department: "Vehicle Dynamics",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026.",
    photoUrl: fotoGuilhermeSilvestre,
    linkedin: emailLink("a83798@ualg.pt"),
    instagram: "https://www.instagram.com/guilhermecsilvestre?igsh=MWFnczZwemdxYmFlcA%3D%3D&utm_source=qr",
  },
  {
    id: 17,
    name: "Gumersindo Costa",
    role: "Stand by",
    department: "Vehicle Dynamics",
    descriptionPt: "Técnico de Manutenção Automóvel. Estado atual: stand by.",
    descriptionEn: "Automotive Maintenance Technician. Current status: on standby.",
    photoUrl: fotoGumersindoCosta,
    linkedin: emailLink("a94137@ualg.pt"),
    instagram: "#",
  },
  {
    id: 18,
    name: "Afonso Rodrigues",
    role: "Membro",
    department: "Vehicle Dynamics",
    descriptionPt: "Engenharia Mecânica. Membro desde 17/02/2026.",
    descriptionEn: "Mechanical Engineering. Member since 17/02/2026.",
    photoUrl: avatarFor("Afonso Rodrigues"),
    linkedin: emailLink("a79464@ualg.pt"),
    instagram: emailLink("afonsobeloromao@gmal.com"),
  },
  {
    id: 19,
    name: "Mateo Achá",
    role: "Membro",
    department: "Vehicle Dynamics",
    descriptionPt: "Engenharia Mecânica. Membro desde 17/02/2026.",
    descriptionEn: "Mechanical Engineering. Member since 17/02/2026.",
    photoUrl: avatarFor("Mateo Achá"),
    linkedin: emailLink("a91337@ualg.pt"),
    instagram: "https://www.instagram.com/mateo.acha?utm_source=qr",
  },
  {
    id: 20,
    name: "Gonçalo Figueiredo",
    role: "Engenheiro Chefe e Líder de Departamento",
    department: "Chassis / Aerodinâmica",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026.",
    photoUrl: fotoGoncaloFigueiredo,
    linkedin: "https://www.linkedin.com/in/gon%C3%A7alo-figueiredo-a27481160/",
    instagram: "https://www.instagram.com/goncalo.figueiredoo?igsh=dmNxOXlydmowcTJt&utm_source=qr",
  },
  {
    id: 21,
    name: "Miguel Claro",
    role: "Membro",
    department: "Chassis / Aerodinâmica",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026.",
    photoUrl: fotoMiguelClaro,
    linkedin: emailLink("a93547@ualg.pt"),
    instagram: emailLink("miguelclaro128@gmail.com"),
  },
  {
    id: 22,
    name: "Christian Farfan",
    role: "Membro",
    department: "Chassis / Aerodinâmica",
    descriptionPt: "Engenharia Mecânica. Membro desde 04/01/2026.",
    descriptionEn: "Mechanical Engineering. Member since 04/01/2026.",
    photoUrl: fotoChristianFarfan,
    linkedin: "https://www.linkedin.com/in/christian-farfan-roca-02461a2a5",
    instagram: "https://www.instagram.com/christian_farfan25/",
  },
  {
    id: 23,
    name: "Afonso Inez",
    role: "Membro",
    department: "Chassis / Aerodinâmica",
    descriptionPt: "Engenharia Mecânica. Membro desde 17/02/2026.",
    descriptionEn: "Mechanical Engineering. Member since 17/02/2026.",
    photoUrl: avatarFor("Afonso Inez"),
    linkedin: emailLink("a88362@ualg.pt"),
    instagram: emailLink("afonsoinez@gmail.com"),
  },
];

export default teamData;
