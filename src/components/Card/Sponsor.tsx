interface SponsorProps {
    imageSrc: string;
    link: string;
    alt?: string;
}

export default function Sponsor({ imageSrc, link }: SponsorProps) {
    return (
        <div className="px-8">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
            >
                <img
                    src={imageSrc}
                    // TODO alt aqui?
                    className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
            </a>
        </div>
    );
}
