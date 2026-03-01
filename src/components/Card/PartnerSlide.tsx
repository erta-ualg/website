import Sponsor from "./Sponsor";
import data from "../../data/Partners";

export default function PartnerSlide() {
    const sponsors = Object.values(data);

    // nao me orgulho nem um pouco disto, mas tambem nao estou a ver outra forma
    const repeated = [
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
    ];

    return (
        <>
            <style>{`
                @keyframes sponsor-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .sponsor-track {
                    animation: sponsor-scroll 60s linear infinite;
                }
                .sponsor-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative w-full max-w-6xl mx-auto overflow-hidden site-sponsor-track">
                <div
                    className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
                    style={{
                        background:
                            "linear-gradient(to right, var(--color-background), transparent)",
                    }}
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
                    style={{
                        background:
                            "linear-gradient(to left, var(--color-background), transparent)",
                    }}
                />

                <div className="sponsor-track flex w-max">
                    {repeated.map((sponsor, index) => (
                        <Sponsor
                            key={index}
                            imageSrc={sponsor.image}
                            link={sponsor.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
