export type PartnerTier = "partner" | "gold";

export interface Partner {
    name: string;
    tier: PartnerTier;
    link: string;
    logo?: string;
}

import dassault from "../assets/sponsor/dassault.png";
import ualg from "../assets/sponsor/ualg.png";
import ualgise from "../assets/sponsor/ualgise.png";
import ualgcria from "../assets/sponsor/ualgcria.png";
import ansys from "../assets/sponsor/ansys.png";
import aerofaro from "../assets/sponsor/aerofaro.png";

const partners: Partner[] = [
    {
        name: "Dassault Systèmes",
        tier: "partner",
        link: "https://www.3ds.com/",
        logo: dassault,
    },
    {
        name: "UALG",
        tier: "gold",
        link: "https://www.ualg.pt/",
        logo: ualg,
    },
    {
        name: "UALG ISE",
        tier: "partner",
        link: "https://www.ualg.pt/",
        logo: ualgise,
    },
    {
        name: "CRIA",
        tier: "partner",
        link: "https://www.cria.pt/",
        logo: ualgcria,
    },
    {
        name: "Ansys",
        tier: "partner",
        link: "https://www.ansys.com/",
        logo: ansys,
    },
    {
        name: "Aeroporto de Faro",
        tier: "partner",
        link: "https://www.aeroportofaro.pt/pt/fao/home",
        logo: aerofaro,
    },
];

export default partners;