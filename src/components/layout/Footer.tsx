import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#080706] border-t border-[#1E1B16]">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#9A9080]">
                    &copy; {new Date().getFullYear()} Wildlife CSI Academy. All rights reserved.
                </p>
                <nav className="flex gap-6">
                    {["Privacy", "Terms", "Contact"].map((label) => (
                        <Link
                            key={label}
                            href={`/${label.toLowerCase()}`}
                            className="text-xs text-[#9A9080] hover:text-[#F5EDD8] transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}