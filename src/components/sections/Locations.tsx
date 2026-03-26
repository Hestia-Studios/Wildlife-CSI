const locations = [
    { name: "Georgia Safari Conservation Park", state: "Georgia" },
    { name: "Lake Tobias Wildlife Park", state: "Pennsylvania" },
    { name: "Out of Africa Wildlife Park", state: "Arizona" },
    { name: "Brannon Center", state: "Florida" },
    { name: "CrimeCon", state: "Las Vegas, NV" },
    { name: "Private Events", state: "Rhode Island + others" },
];

export function Locations() {
    return (
        <section id="locations" className="bg-[#0E0D0B] border-b border-[#1E1B16] px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-[#C4973A] text-xs font-medium uppercase tracking-widest mb-2">
                    Training Locations
                </p>
                <h2 className="text-4xl font-medium text-[#F5EDD8] tracking-tight mb-3">
                    Where we train
                </h2>
                <p className="text-[#9A9080] text-sm max-w-lg mb-10 leading-relaxed">
                    Sessions are held inside real wildlife environments — not conference rooms.
                </p>

                <div className="flex flex-wrap gap-3">
                    {locations.map(({ name, state }) => (
                        <div key={name} className="border border-[#2A2520] px-5 py-3 hover:border-[#C4973A] transition-colors cursor-default">
                            <p className="text-sm font-medium text-[#F5EDD8]">{name}</p>
                            <p className="text-xs text-[#9A9080] mt-0.5 uppercase tracking-wider">{state}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}