export type PartnerTier = "partner" | "gold" | "silver" | "bronze";

export interface Partner {
    name: string;
    tier: PartnerTier;
    link: string;
    logo?: string;
    descriptionKey?: string;
}

import dassault from "../assets/sponsor/dassault.png";
import ualg from "../assets/sponsor/ualg.png";
import ualgise from "../assets/sponsor/ualgise.png";
import ualgcria from "../assets/sponsor/ualgcria.png";
import ansys from "../assets/sponsor/ansys.png";
import aerofaro from "../assets/sponsor/aerofaro.png";
import celerator from "../assets/sponsor/celerator.png";
import cadflow from "../assets/sponsor/cadflow.png";
import cmloule from "../assets/sponsor/cmloule.png";
import cmportimao from "../assets/sponsor/cmportimao.png";
import autodromoalg from "../assets/sponsor/autodromoalg.png";
import solidworks from "../assets/sponsor/solidworks.png";

const partners: Partner[] = [
    {
        name: "UALG",
        tier: "gold",
        link: "https://www.ualg.pt/",
        logo: ualg,
        descriptionKey: "ualg",
    },
    {
        name: "CM Loulé",
        tier: "silver",
        link: "https://www.cm-loule.pt/",
        logo: cmloule,
        descriptionKey: "cm-loule",
    },
    {
        name: "CM Portimão",
        tier: "bronze",
        link: "https://www.cm-portimao.pt/",
        logo: cmportimao,
        descriptionKey: "cm-portimao",
    },
    {
        name: "Aeroporto de Faro",
        tier: "partner",
        link: "https://www.aeroportofaro.pt/pt/fao/home",
        logo: aerofaro,
        descriptionKey: "aeroporto-faro",
    },
    {
        name: "Dassault Systèmes",
        tier: "partner",
        link: "https://www.3ds.com/",
        logo: dassault,
        descriptionKey: "dassault",
    },
    {
        name: "Ansys / ESSS",
        tier: "partner",
        link: "https://www.ansys.com/",
        logo: ansys,
        descriptionKey: "ansys",
    },
    {
        name: "Autódromo Internacional do Algarve",
        tier: "partner",
        link: "https://www.autodromodoalgarve.com/",
        logo: autodromoalg,
        descriptionKey: "autodromo-algarve",
    },
    {
        name: "Cadflow",
        tier: "partner",
        link: "https://cadflow.pt/",
        logo: cadflow,
        descriptionKey: "cadflow",
    },
    {
        name: "Celerator",
        tier: "partner",
        link: "https://celerator.pt/",
        logo: celerator,
        descriptionKey: "celerator",
    },
    {
        name: "SOLIDWORKS",
        tier: "partner",
        link: "https://www.solidworks.com/",
        logo: solidworks,
        descriptionKey: "solidworks",
    },
    {
        name: "UALG CRIA",
        tier: "partner",
        link: "https://www.cria.pt/",
        logo: ualgcria,
        descriptionKey: "ualg-cria",
    },
    {
        name: "UALG ISE",
        tier: "partner",
        link: "https://www.ualg.pt/",
        logo: ualgise,
        descriptionKey: "ualg-ise",
    },
];

export default partners;