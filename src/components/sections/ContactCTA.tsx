"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
    name: z.string().min(2, "Name required"),
    email: z.string().email("Valid email required"),
    organization: z.string().optional(),
    message: z.string().optional(),
});

type ContactValues = z.infer<typeof schema>;

export function ContactCTA() {
    const form = useForm<ContactValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", organization: "", message: "" },
    });

    async function onSubmit(values: ContactValues) {
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(values),
        });
        if (res.ok) {
            toast.success("Received! We'll be in touch shortly.");
            form.reset();
        } else {
            toast.error("Something went wrong. Please try again.");
        }
    }


    return (
        <section id="register" className="bg-[#0A0908] border-t-2 border-[#C4973A] px-6 py-20">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-4xl font-medium text-[#F5EDD8] tracking-tight mb-3">
                    Ready to train?
                </h2>
                <p className="text-[#9A9080] text-sm leading-relaxed mb-10">
                    Whether you're law enforcement, a prosecutor, investigator, or engaged civilian —
                    the Wildlife CSI Academy is unlike anything else in the field.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#9A9080] text-xs uppercase tracking-widest">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Your full name"
                                            className="bg-[#111009] border-[#2A2520] text-[#F5EDD8] placeholder:text-[#4A4540] focus:border-[#C4973A] rounded-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#9A9080] text-xs uppercase tracking-widest">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="you@agency.gov"
                                            className="bg-[#111009] border-[#2A2520] text-[#F5EDD8] placeholder:text-[#4A4540] focus:border-[#C4973A] rounded-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        <FormField control={form.control} name="organization" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#9A9080] text-xs uppercase tracking-widest">
                                    Role / Organization <span className="text-[#4A4540]">(optional)</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Detective, Maricopa County Sheriff"
                                        className="bg-[#111009] border-[#2A2520] text-[#F5EDD8] placeholder:text-[#4A4540] focus:border-[#C4973A] rounded-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#9A9080] text-xs uppercase tracking-widest">
                                    Message <span className="text-[#4A4540]">(optional)</span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Any questions or specific training interests?"
                                        className="bg-[#111009] border-[#2A2520] text-[#F5EDD8] placeholder:text-[#4A4540] focus:border-[#C4973A] rounded-none min-h-[100px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full bg-[#C4973A] text-[#0A0908] text-xs font-medium uppercase tracking-widest py-3.5 hover:bg-[#D4A74A] transition-colors disabled:opacity-60"
                        >
                            {form.formState.isSubmitting ? "Submitting..." : "Submit Interest"}
                        </button>
                    </form>
                </Form>
            </div>
        </section>
    );
}