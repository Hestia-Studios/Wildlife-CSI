import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="bg-[#0A0908] border-b border-[#1E1B16] px-6 pt-20 pb-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-6 h-px bg-[#C4973A]" />
                    <span className="text-[#C4973A] text-xs font-medium uppercase tracking-widest">
            Wildlife Crime Scene Investigation
          </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight max-w-3xl mb-5 text-[#F5EDD8]">
                    Train where wildlife crimes{" "}
                    <em className="not-italic text-[#C4973A]">actually</em> happen.
                </h1>

                <p className="text-[#9A9080] text-base md:text-lg max-w-xl leading-relaxed mb-10">
                    Immersive, hands-on wildlife crime investigation training for law
                    enforcement, CSIs, prosecutors, investigators, and engaged civilians —
                    inside zoos, wildlife parks, and real-world environments.
                </p>

                <div  className="relative w-full h-138 mb-10 border border-[#2A2520]">
                    <Image
                        src="/investigators-1.jpg"
                        alt="Wildlife crime scene training session"
                        fill
                    />
                </div>

                <div className="flex gap-3 flex-wrap">
                    <Link
                        href="#curriculum"
                        className="border border-[#3A342C] text-[#F5EDD8] text-xs uppercase tracking-widest px-7 py-3.5 hover:border-[#C4973A] transition-colors"
                    >
                        Explore Curriculum
                    </Link>
                    <Link
                        href="#register"
                        className="bg-[#C4973A] text-[#0A0908] text-xs font-medium uppercase tracking-widest px-7 py-3.5 hover:bg-[#D4A74A] transition-colors"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}