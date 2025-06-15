import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <Image
                src="/images/rk-hero.png"
                alt="Hero background"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                priority
            />
            <div className="absolute inset-0 flex flex-col justify-start items-start text-[#f0d6b2] text-left px-6 pt-12 max-w-6xl">
                <div className="bg-gradient-to-b from-[#8a5f30]/80 to-transparent px-4 py-2 rounded mb-2">
                    <h1 className="text-xl md:text-6xl mb-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] ">
                        Domus Koco & Fraternitas Aurati Compassi
                    </h1>
                </div>
                <div className="bg-gradient-to-b from-[#8a5f30]/80 to-transparent px-4 py-2 rounded">
                    <h2 className="text-xl md:text-2xl italic mb-0 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.4)]">
                        Dom Koco a Bratstvo Zlatého Kompasu
                    </h2>
                </div>
            </div>
        </section>
    );
}