const blocks = [
    {
        num: "01",
        title: "Wildlife Crimes & Protected Species",
        items: ["Protected and endangered species crimes", "Zoo-related investigations", "Wildlife crimes in media & film"],
    },
    {
        num: "02",
        title: "Agricultural & Plant Crimes",
        items: ["Farm-based crime investigations", "Working animals and livestock", "Illegal plant harvesting & trafficking"],
    },
    {
        num: "03",
        title: "Field Operations",
        items: ["Farm animal crime scenes", "Plant evidence identification", "Outdoor crime scene challenges"],
    },
    {
        num: "04",
        title: "Wildlife Forensics & Necropsies",
        items: ["Forensic necropsies", "Cause & manner of death", "DNA species identification"],
    },
    {
        num: "05",
        title: "CSI in the Field",
        items: ["Snare & trap identification", "Poison residue analysis", "Trafficking indicators"],
    },
    {
        num: "06",
        title: "Wildlife Intelligence",
        items: ["Intelligence unit operations", "Psychology of a poacher", "Wildlife law enforcement"],
    },
    {
        num: "07",
        title: "Law Enforcement & Support Animals",
        items: ["Sworn officers & specialty units", "Mounted horses & K9 units", "Support animals in courts"],
    },
    {
        num: "08",
        title: "Border, Transportation & Inspections",
        items: ["Border inspections & interdictions", "TSA-related trafficking cases", "Interstate wildlife crime"],
    },
    {
        num: "09",
        title: "Advanced Field Investigations",
        items: ["Clandestine grave searches", "Animal track identification", "Poacher campsite operations"],
    },
];

export function Curriculum() {
    return (
        <section id="curriculum" className="bg-[#0A0908] border-b border-[#1E1B16] px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-[#C4973A] text-xs font-medium uppercase tracking-widest mb-2">
                    What we teach
                </p>
                <h2 className="text-4xl font-medium text-[#F5EDD8] tracking-tight mb-3">
                    This is not a lecture.
                </h2>
                <p className="text-[#9A9080] text-sm max-w-lg mb-10 leading-relaxed">
                    Nine curriculum blocks reflecting the full scope of real wildlife crime investigations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-[#1E1B16] border border-[#1E1B16]">
                    {blocks.map(({ num, title, items }) => (
                        <div key={num} className="p-6 bg-[#0A0908] hover:bg-[#0E0D0B] transition-colors">
              <span className="text-xs font-medium text-[#C4973A] tracking-widest block mb-2">
                {num}
              </span>
                            <h3 className="text-sm font-medium text-[#F5EDD8] mb-3">{title}</h3>
                            <ul className="space-y-1.5">
                                {items.map((item) => (
                                    <li key={item} className="text-xs text-[#9A9080] flex gap-2 leading-relaxed">
                                        <span className="mt-1.5 w-3 h-px bg-[#C4973A] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}