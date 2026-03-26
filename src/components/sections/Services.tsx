import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Settings, Pencil, Star } from "lucide-react";

const services = [
    {
        icon: Settings,
        title: "Engineering",
        description: "Full-stack web and mobile. React, .NET, Azure. We write the code and own the outcome.",
    },
    {
        icon: Pencil,
        title: "Design",
        description: "Product design, brand systems, and component libraries. Figma to production.",
    },
    {
        icon: Star,
        title: "Strategy",
        description: "Technical roadmaps, architecture reviews, and team augmentation when you need senior eyes.",
    },
];

export function Services() {
    return (
        <section id="services" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
            <p className="text-xs font-medium text-amber-600 uppercase tracking-widest mb-2">
                What we do
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-2">Services</h2>
            <p className="text-muted-foreground mb-10">
                End-to-end product work, from zero to launched and beyond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map(({ icon: Icon, title, description }) => (
                    <Card key={title} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                                <Icon className="h-4 w-4 text-amber-700" />
                            </div>
                            <CardTitle className="text-base">{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}