"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
    aspectRatio?: "video" | "square" | "wide";
    autoPlay?: number; // interval in milliseconds, e.g. 4000
}

const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
};

export function ImageGallery({ images, aspectRatio = "video", autoPlay }: ImageGalleryProps) {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [loaded, setLoaded] = useState<Record<number, boolean>>({});
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const prev = useCallback(() => {
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    }, [images.length]);

    const next = useCallback(() => {
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, [images.length]);

    // Auto-play
    useEffect(() => {
        if (!autoPlay || paused || lightbox) return;
        intervalRef.current = setInterval(next, autoPlay);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoPlay, next, paused, lightbox]);

    // Reset interval when user manually navigates so it doesn't immediately jump
    const manualNav = useCallback((fn: () => void) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        fn();
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") manualNav(prev);
            if (e.key === "ArrowRight") manualNav(next);
            if (e.key === "Escape") setLightbox(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next, manualNav]);

    // Lock scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = lightbox ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightbox]);

    const goTo = (index: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setCurrent(index);
    };

    return (
        <>
            {/* Main Gallery */}
            <div
                className="w-full select-none"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >

                {/* Primary image frame */}
                <div className={`relative w-full ${aspectClasses[aspectRatio]} bg-[#0A0908] overflow-hidden group`}>
                    {images.map((img, i) => (
                        <div
                            key={img.src}
                            className={`absolute inset-0 transition-opacity duration-500 ${
                                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
                                priority={i === 0}
                            />
                            {!loaded[i] && (
                                <div className="absolute inset-0 bg-[#111009] animate-pulse" />
                            )}
                        </div>
                    ))}

                    {/* Gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                    {/* Caption */}
                    {images[current].caption && (
                        <p className="absolute bottom-4 left-5 text-xs text-[#F5EDD8]/80 tracking-wide pointer-events-none">
                            {images[current].caption}
                        </p>
                    )}

                    {/* Counter */}
                    <div className="absolute top-4 right-4 bg-black/50 px-2.5 py-1 text-[10px] text-[#F5EDD8]/70 tracking-widest uppercase">
                        {current + 1} / {images.length}
                    </div>

                    {/* Expand button */}
                    <button
                        onClick={() => setLightbox(true)}
                        className="absolute top-4 left-4 bg-black/50 p-2 text-[#F5EDD8]/70 hover:text-[#C4973A] transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Expand image"
                    >
                        <Expand size={14} />
                    </button>


                    {/* Prev / Next */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={() => manualNav(prev)}
                                className="absolute left-0 top-0 h-full w-16 flex items-center justify-start pl-3 text-[#F5EDD8]/0 hover:text-[#F5EDD8] hover:bg-black/20 transition-all"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => manualNav(next)}
                                className="absolute right-0 top-0 h-full w-16 flex items-center justify-end pr-3 text-[#F5EDD8]/0 hover:text-[#F5EDD8] hover:bg-black/20 transition-all"
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="flex gap-1.5 mt-1.5 overflow-x-auto scrollbar-none">
                        {images.map((img, i) => (
                            <button
                                key={img.src}
                                onClick={() => goTo(i)}
                                className={`relative flex-shrink-0 w-16 h-10 overflow-hidden transition-all ${
                                    i === current
                                        ? "ring-1 ring-[#C4973A] opacity-100"
                                        : "opacity-40 hover:opacity-70"
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                            >
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={() => setLightbox(false)}
                >
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] mx-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={images[current].src}
                                alt={images[current].alt}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {images[current].caption && (
                            <p className="text-center text-xs text-[#9A9080] mt-3 tracking-wide">
                                {images[current].caption}
                            </p>
                        )}

                        <button
                            onClick={() => setLightbox(false)}
                            className="absolute -top-10 right-0 text-[#9A9080] hover:text-[#F5EDD8] transition-colors"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() => manualNav(prev)}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-[#9A9080] hover:text-[#C4973A] transition-colors"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    onClick={() => manualNav(next)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-[#9A9080] hover:text-[#C4973A] transition-colors"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Progress bar keyframe */}
            <style>{`
        @keyframes grow {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
        </>
    );
}