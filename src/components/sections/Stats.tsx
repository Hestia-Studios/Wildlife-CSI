const stats = [
    { value: "6+", label: "Training locations nationwide" },
    { value: "9", label: "Curriculum blocks covered" },
    { value: "100%", label: "Hands-on field experience" },
    { value: "FBI", label: "Retired agents on faculty" },
];

export function Stats() {
    return (
        <div className="bg-[#0E0D0B] border-b border-[#1E1B16] grid grid-cols-2 md:grid-cols-4">
            {stats.map(({ value, label }, i) => (
                <div
                    key={label}
                    className={`px-8 py-6 ${i < stats.length - 1 ? "border-r border-[#1E1B16]" : ""}`}
                >
                    <div className="text-3xl font-medium text-[#C4973A] mb-1">{value}</div>
                    <div className="text-[10px] text-[#9A9080] uppercase tracking-widest leading-snug">
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
}