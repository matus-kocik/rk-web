import Image from "next/image";

type SocialLinkProps = {
    name: string;
    url: string;
    icon: string;
    info: string;
};

export const SocialLink = ({ name, url, icon, info }: SocialLinkProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
            <div className="relative w-24 h-24 mr-6">
                <Image
                    src={icon}
                    alt={`${name} logo`}
                    width={96}
                    height={96}
                />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {name}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">{info}</p>
            </div>
        </a>
    );
};