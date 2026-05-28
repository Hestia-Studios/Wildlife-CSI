import Image from "next/image";
const phases = [
    {
        n: "Phase 01",
        title: "Wildlife Crime Scenarios",
        desc: "Scene approach, safety protocols, documentation, and photography techniques.",
    },
    {
        n: "Phase 02",
        title: "Realistic Crime Environments",
        desc: "Evidence location, handling, chain of custody, and team-based mock scenes using real fur, bones, and scat.",
    },
    {
        n: "Phase 03",
        title: "Live Animal Encounters",
        desc: "Safari and/or animal encounter reinforcing the connection between investigation and conservation.",
    },
];

export function SampleCourse() {
    return (
        <section className="bg-[#0E0D0B] border-b border-[#1E1B16] px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-[#C4973A] text-xs font-medium uppercase tracking-widest mb-2">
                    Courses
                </p>
                <h2 className="text-4xl font-medium text-[#F5EDD8] tracking-tight mb-3">
                    Crime Scene Search & Evidence Collection
                </h2>
                <p className="text-[#9A9080] text-sm max-w-lg mb-10 leading-relaxed">
                    Our flagship course uses a triangular instructional approach. Certificates awarded at completion.
                </p>

                <div className="border border-[#2A2520] p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {phases.map(({ n, title, desc }) => (
                            <div key={n} className="border border-[#1E1B16] p-5">
                <span className="text-[10px] text-[#C4973A] font-medium uppercase tracking-widest block mb-2">
                  {n}
                </span>
                                <h3 className="text-sm font-medium text-[#F5EDD8] mb-2">{title}</h3>
                                <p className="text-xs text-[#9A9080] leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Image placeholder for course imagery */}
                    <div className="w-full h-128 bg-[#111009] border border-[#2A2520] flex items-center justify-center">

                        <Image src={"/crime-scene-2.jpg"} alt="Sample course imagery" className="object-cover w-full h-full" width={500} height={400}/>

                    </div>
                </div>
            </div>
        </section>
    );
}