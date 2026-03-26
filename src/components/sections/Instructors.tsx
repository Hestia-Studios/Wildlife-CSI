const instructors = [
    { abbr: "CSI", title: "Active CSI Investigators", role: "Current field practitioners" },
    { abbr: "FBI", title: "Retired FBI Agents", role: "Federal investigative experience" },
    { abbr: "NYPD", title: "Retired NYPD Sergeants", role: "Urban wildlife enforcement" },
    { abbr: "HOF", title: "Hall of Fame Inductees", role: "Nat. Law Enforcement Hall of Fame" },
    { abbr: "FWS", title: "Retired Federal Wildlife Agents", role: "U.S. Fish & Wildlife Service" },
    { abbr: "ME", title: "Medical Examiners", role: "Nationally recognized forensics" },
];

export function Instructors() {
    return (
        <section id="instructors" className="bg-[#0A0908] border-b border-[#1E1B16] px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-[#C4973A] text-xs font-medium uppercase tracking-widest mb-2">
                    Learn from the best
                </p>
                <h2 className="text-4xl font-medium text-[#F5EDD8] tracking-tight mb-3">
                    Our Instructors
                </h2>
                <p className="text-[#9A9080] text-sm max-w-lg mb-10 leading-relaxed">
                    Nationally recognized practitioners only — no academics, no theory-only faculty.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {instructors.map(({ abbr, title, role }) => (
                        <div
                            key={abbr}
                            className="border border-[#1E1B16] p-5 flex items-center gap-4 hover:border-[#2A2520] transition-colors"
                        >
                            <div className="w-11 h-11 border border-[#2A2520] bg-[#111009] flex items-center justify-center text-[#C4973A] text-xs font-medium tracking-wider shrink-0">
                                {abbr}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#F5EDD8] leading-snug">{title}</p>
                                <p className="text-xs text-[#9A9080] mt-0.5">{role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}