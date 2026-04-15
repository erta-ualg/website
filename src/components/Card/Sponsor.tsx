interface SponsorProps {
    imageSrc: string;
    link: string;
    displayName?: string;
}

export default function Sponsor({ imageSrc, link, displayName }: SponsorProps) {
    return (
        <div className="px-4 sm:px-6 md:px-8 site-sponsor">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
            >
                <img
                    src={imageSrc}
                    alt={displayName || "Sponsor"}
                    className="h-10 sm:h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300 site-sponsor-logo"
                />
            </a>
        </div>
    );
}
