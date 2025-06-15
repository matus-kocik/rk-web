import Image from "next/image";

type ProfileImageProps = {
    src: string;
    alt: string;
};

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
    return (
        <div className="relative w-48 h-48">
            <Image
                src={src}
                alt={alt}
                width={192}
                height={192}
                className="rounded-full object-cover shadow-lg mb-4"
                priority
            />
        </div>
    );
};