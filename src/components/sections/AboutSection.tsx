import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="h-[80vh] bg-[#f0d6b2] text-[#8a5f30] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 h-full w-full">
                <div className="relative w-full h-full self-start">
                    <Image
                        src="/images/left-about.png"
                        alt="Maritime Illustration"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6 text-center text-lg md:text-2xl leading-relaxed">
                    <div className="flex justify-center">
                        <Image
                            src="/images/erb.png"
                            alt="Ilustratívny erb"
                            width={300}
                            height={300}
                            className="mb-4"
                        />
                    </div>
                    <p>
                        Keď večné mestá ešte iba dýchali z pergamenov a mapy niesli mená zabudnuté, v krajoch moravských povstal dom — Domus Koco.
                    </p>
                    <p>
                        Nie je to len rod, ale pamäť. Nie len meno, ale znamenie. Miesto, kde brat pri bratovi nesie znak a prísahu, či je na mori, vo veži, alebo pri stole.
                    </p>
                    <p>
                        Vedľa domu vzniklo bratstvo. Nie pre slávu, ale pre smer. Spája tých, čo kráčajú, kreslia mapy, zapisujú cesty a nesú pamäť krajín – ale i tých, čo ponúkajú plavby, sprievod, znalosti ciest a tovar, ktorý prekročil hranice mnohých morí. Je to bratstvo slova i obchodu, stôl pre pútnikov i trh pre kupcov.
                    </p>
                    <p>
                        Voláme sa Fraternitas Aurati Compassi – Bratstvo Zlatého Kompasa. Založené na spomienke, na ceste a na dôvere medzi tými, čo hľadajú viac než len prístav alebo zisk.
                    </p>
                    <p>
                        Tento dom nevznikol, aby vládol, ale aby zapisoval. Nešíri sa vojskom, ale slovom. Kdekoľvek sa jeden z nás zastaví a vloží do zeme kameň či myšlienku, tam sa zjaví jeho odtlačok.
                    </p>
                    <p>
                        Domus Koco — nie stavba, ale úmysel. Nie múr, ale smer.
                    </p>
                </div>
                <div className="relative w-full h-full self-start">
                    <Image
                        src="/images/right-about.png"
                        alt="Genealogical Illustration"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}