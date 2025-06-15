export default function FocusAreasSection() {
    const areas = [
        "Diplomacia",
        "Vojenská česť",
        "História rodu",
        "Aliancie a prísahy",
    ];

    return (
        <section className="py-10 bg-[#8a5f30] text-parchment text-center">
            <h2 className="text-3xl mb-10">Čomu sa venujeme</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
                {areas.map((title, index) => (
                    <div
                        key={index}
                        className="bg-parchment text-wine rounded-lg p-4 shadow-md hover:scale-105 transition transform"
                    >
                        <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4" />
                        <h3 className="text-xl">{title}</h3>
                        <p className="text-lg mt-2">Lorem ipsum dolor sit amet.</p>
                    </div>
                ))}
            </div>
        </section>
    );
  }