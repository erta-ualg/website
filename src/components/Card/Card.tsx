interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
    return (
        <div className="bg-surface rounded-lg shadow-md overflow-hidden hover:shadow-xl transition site-card">
            <img
                src={imageSrc}
                alt={title} /* TODO pensar no que meter no alt */
                className="w-full h-44 sm:h-48 md:h-52 object-cover site-card-image"
            />

            <div className="p-5 md:p-6 text-center site-card-body">
                <h3 className="text-xl font-semibold text-primary mb-2 site-card-title">
                    {title}
                </h3>
                <p className="text-text-secondary site-body">{description}</p>
            </div>
        </div>
    );
}
