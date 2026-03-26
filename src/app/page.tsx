import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Curriculum } from "@/components/sections/Curriculum";
import { SampleCourse } from "@/components/sections/SampleCourse";
import { Instructors } from "@/components/sections/Instructors";
import { Locations } from "@/components/sections/Locations";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Curriculum />
            <SampleCourse />
            <Instructors />
            <Locations />
            <ContactCTA />
        </>
    );
}