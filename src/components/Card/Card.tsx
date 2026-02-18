interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
    return (
        <div className="bg-surface rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
                src={imageSrc}
                alt={title} /* TODO pensar no que meter no alt */
                className="w-full h-48 object-cover"
            />

            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                    {title}
                </h3>
                <p className="text-text-secondary">{description}</p>
            </div>
        </div>
    );
}
