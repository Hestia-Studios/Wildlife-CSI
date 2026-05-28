import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Curriculum } from "@/components/sections/Curriculum";
import { SampleCourse } from "@/components/sections/SampleCourse";
import { Instructors } from "@/components/sections/Instructors";
import { Locations } from "@/components/sections/Locations";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {ImageGallery} from "@/components/sections/ImageGallery";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <div className="max-w-6xl mx-auto px-6 py-16">
                <ImageGallery images={[
                    { src: "/employee-2.jpg", alt: "Investigators examining a wildlife crime scene" },
                    { src: "/crime-scene.jpg", alt: "Instructor demonstrating evidence collection techniques" },
                    { src: "/giraffe-sunset.jpg", alt: "Students practicing crime scene documentation" },

                ]}

                autoPlay={6000}

                />
            </div>
            <Curriculum />



            <SampleCourse />
            <Instructors />
            <Locations />
            <ContactCTA />
        </>
    );
}