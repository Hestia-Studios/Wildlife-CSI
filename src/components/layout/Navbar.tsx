import Link from "next/link";
import Image from "next/image";

const links = [
    { label: "Training", href: "#training" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Instructors", href: "#instructors" },
    { label: "Locations", href: "#locations" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-[#0A0908] border-b border-[#1E1B16]">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3">
                    <Image src = "/logo.png" alt="Wildlife CSI Academy Logo" width={42} height={42} className="object-contain" />
                    <div className="leading-tight">
            <span className="block text-sm font-medium text-[#F5EDD8] tracking-wide">
              Wildlife CSI Academy
            </span>
                        <span className="block text-[10px] text-[#9A9080] uppercase tracking-widest">
              Training Program
            </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-sm text-[#9A9080] hover:text-[#F5EDD8] transition-colors tracking-wide"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#register"
                    className="bg-[#C4973A] text-[#0A0908] text-xs font-medium uppercase tracking-widest px-5 py-2.5 hover:bg-[#D4A74A] transition-colors"
                >
                    Register Now
                </Link>
            </div>
        </header>
    );
}