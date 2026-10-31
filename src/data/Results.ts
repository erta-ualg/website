import heroImage from "../assets/results/hero.webp";
import teamImage from "../assets/results/team.jpg";
import prepImage from "../assets/results/prep.jpg";
import ontrackImage from "../assets/results/ontrack.jpg";

export interface CompetitionEvent {
    id: "cost" | "business" | "design";
    rank: number;
}

export interface CompetitionGalleryItem {
    id: "team" | "prep" | "track";
    image?: string;
    altKey: string;
    captionKey: string;
}

export interface CompetitionResult {
    id: string;
    season: string;
    entries: number;
    carNumber: string;
    overallRank: number;
    heroImage: string;
    events: CompetitionEvent[];
    gallery: CompetitionGalleryItem[];
}

const results: CompetitionResult[] = [
    {
        id: "fspt26",
        season: "FSPT26",
        entries: 8,
        carNumber: "E125",
        overallRank: 8,
        heroImage,
        events: [
            { id: "cost", rank: 5 },
            { id: "business", rank: 6 },
            { id: "design", rank: 7 },
        ],
        gallery: [
            {
                id: "team",
                image: teamImage,
                altKey: "results-page.gallery.team-alt",
                captionKey: "results-page.gallery.team",
            },
            {
                id: "prep",
                image: prepImage,
                altKey: "results-page.gallery.prep-alt",
                captionKey: "results-page.gallery.prep",
            },
            {
                id: "track",
                image: ontrackImage,
                altKey: "results-page.gallery.track-alt",
                captionKey: "results-page.gallery.track",
            },
        ],
    },
];

export default results;
