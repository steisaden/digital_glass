"use client";

import React from "react";
import NextImage from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "@/app/page";
import { GlassCard } from "./GlassCard";

const projects: Project[] = [
    {
        title: "Goddess Care Co",
        category: "E-Commerce Automation",
        industry: "Wellness commerce",
        image: "/gcc_assets/gcc-admin-dashboard-overview.png",
        previewVideo: "/gcc_assets/gcc-admin-dashboard-walkthrough.mov",
        description: "Custom storefront, booking flow, and admin systems built to support lead capture, order management, and content operations in one stack.",
        problem: "The business needed a storefront and booking experience that felt premium while still handling product sales, yoga scheduling, and content updates without silent technical failures.",
        solution: "We built a conversion-focused commerce experience with resilient data handling, automated content workflows, and a booking system connected to the wider operating stack.",
        results: "The client gained a faster lead-to-booking path, fewer operational bottlenecks, and a more reliable storefront for daily sales and scheduling.",
        outcomeHeadline: "A more reliable lead-to-booking and commerce workflow.",
        resultMetrics: [
            "100% uptime for sanitized Contentful data streams",
            "Content and booking updates revalidated every 60 seconds",
            "Sub-16ms interface interactions across key UI flows",
        ],
        metrics: [
            {
                value: "100%",
                label: "Sanitized data uptime",
                detail: "Contentful data streams kept running after infrastructure hardening.",
            },
            {
                value: "60s",
                label: "Refresh window",
                detail: "Content and booking updates are revalidated every 60 seconds.",
            },
            {
                value: "<16ms",
                label: "UI response target",
                detail: "Key interactions were tuned for fast, fluid usage across the storefront.",
            },
        ],
        placeholderMetrics: [
            "[Placeholder] +22% more qualified booking requests in the first 60 days",
            "[Placeholder] 12 hours per week saved by reducing manual content and booking coordination",
        ],
        cta: "See how this works for your business",
        year: "2024",
        gallery: [
            { type: "image", src: "/gcc_assets/gcc-admin-dashboard-overview.png", alt: "Admin Dashboard Overview" },
            { type: "video", src: "/gcc_assets/gcc-admin-dashboard-walkthrough.mov", alt: "Admin Dashboard Walkthrough" },
            { type: "video", src: "/gcc_assets/gcc-admin-dashboard-walkthrough_blog.mov", alt: "Blog Management Walkthrough" },
            { type: "image", src: "/gcc_assets/gcc-amazon-product-entry-form.png", alt: "Amazon Product Entry" },
            { type: "image", src: "/gcc_assets/gcc-amazon-product-fetcher.png", alt: "Amazon Product Fetcher" },
            { type: "image", src: "/gcc_assets/gcc-blog-post-management.png", alt: "Blog Post Management" },
            { type: "image", src: "/gcc_assets/gcc-product-management.png", alt: "Product Management" },
            { type: "image", src: "/gcc_assets/gcc-sales-analytics-overview.png", alt: "Sales Analytics" },
            { type: "image", src: "/gcc_assets/gcc-social-media-accounts.png", alt: "Social Media" },
            { type: "image", src: "/gcc_assets/gcc-vercel-deployment-status.png", alt: "Vercel Deployment" },
            { type: "image", src: "/gcc_assets/gcc-yoga-availability-calendar.png", alt: "Yoga Calendar" },
            { type: "image", src: "/gcc_assets/gcc-yoga-service-selector-dropdown.png", alt: "Yoga Service Selector" },
            { type: "image", src: "/gcc_assets/gcc-yoga-services-management.png", alt: "Yoga Services" },
        ],
    },
    {
        title: "Monumentaal",
        category: "Lead Generation Marketplace",
        industry: "Home services",
        image: "/monumentaal_assets/monumentaal-storefront.png",
        previewVideo: "/monumentaal_assets/monumentaal-walkthrough.mov",
        description: "Editorial marketplace designed to capture homeowner demand, route inquiries to specialists, and support specialist onboarding through paid subscriptions.",
        problem: "The client needed a trust-first marketplace that could attract qualified homeowners, educate them through service pages, and convert specialists into paying partners.",
        solution: "We built localized service landing pages, a multi-step lead capture funnel, and Stripe subscription onboarding for specialist acquisition.",
        results: "The platform created a clearer path from search traffic to qualified inquiries while reducing manual intake work for both sides of the marketplace.",
        outcomeHeadline: "A clearer path from search demand to qualified homeowner inquiries.",
        resultMetrics: [
            "Localized service pages built for SEO-driven demand capture",
            "Multi-step lead funnel for higher-intent inquiries",
            "Stripe onboarding flow for specialist subscriptions",
        ],
        metrics: [
            {
                value: "SEO",
                label: "Demand capture layer",
                detail: "Localized service pages were structured to attract and qualify search traffic.",
            },
            {
                value: "Multi-step",
                label: "Lead qualification flow",
                detail: "The inquiry journey collects higher-intent information before handoff.",
            },
            {
                value: "Stripe",
                label: "Specialist onboarding",
                detail: "Subscription onboarding reduces friction for provider acquisition.",
            },
        ],
        placeholderMetrics: [
            "[Placeholder] +35% more qualified homeowner leads from organic traffic",
            "[Placeholder] 20% faster specialist onboarding from first visit to subscription",
        ],
        cta: "See how this works for your business",
        year: "2024",
        gallery: [
            { type: "image", src: "/monumentaal_assets/monumentaal-storefront.png", alt: "Monumentaal Storefront" },
            { type: "video", src: "/monumentaal_assets/monumentaal-walkthrough.mov", alt: "Platform Walkthrough" },
            { type: "image", src: "/monumentaal_assets/monumentaal-collection-modal.png", alt: "Collection Modal" },
            { type: "image", src: "/monumentaal_assets/monumentaal-product-detail.png", alt: "Service Detail" },
            { type: "image", src: "/monumentaal_assets/monumentaal-checkout.png", alt: "Stripe Onboarding" },
            { type: "image", src: "/monumentaal_assets/monumentaal-admin-dashboard.png", alt: "Dashboard" },
        ],
    },
    {
        title: "Internal Ops Automation",
        category: "Custom Automation Build",
        industry: "Service operations",
        image: "/gcc_assets/gcc-sales-analytics-overview.png",
        description: "Custom dashboards and workflow automations designed to reduce repetitive admin work and centralize day-to-day decision making.",
        problem: "Operators were juggling disconnected tools, manual updates, and repetitive admin tasks that slowed down response times and reporting.",
        solution: "We centralized operational data into custom dashboards, connected recurring tasks to automation flows, and surfaced the metrics teams need to act faster.",
        results: "The business gained tighter visibility into sales activity, lower manual workload, and a more dependable operating system for scale.",
        outcomeHeadline: "Less admin drag and faster access to the data operators need.",
        resultMetrics: [
            "Centralized analytics and admin visibility",
            "Fewer repeated manual handoffs across operations",
            "Faster access to sales and workflow data",
        ],
        metrics: [
            {
                value: "1 view",
                label: "Centralized visibility",
                detail: "Sales and workflow data were brought into one operating interface.",
            },
            {
                value: "Fewer handoffs",
                label: "Manual work reduced",
                detail: "Automation removed repeated copy-paste and routing tasks.",
            },
            {
                value: "Faster access",
                label: "Operator decision speed",
                detail: "Teams can act without waiting on scattered systems or reports.",
            },
        ],
        placeholderMetrics: [
            "[Placeholder] 15 hours saved per week across operations and reporting",
            "[Placeholder] 18% lower admin cost on repeated internal workflows",
        ],
        cta: "See how this works for your business",
        year: "2024",
    },
];

interface TheCollectionProps {
    onProjectSelect: (project: Project) => void;
    onContactClick: () => void;
}

export function TheCollection({ onProjectSelect, onContactClick }: TheCollectionProps) {
    return (
        <section id="client-results" className="relative py-28 px-6 md:px-12 bg-transparent">
            <div className="absolute inset-0 section-overlay opacity-50" />

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}>
                        Client Results
                    </p>
                    <h2
                        className="text-4xl md:text-6xl mb-6 text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Real-world builds framed around business outcomes
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                        Each case study shows the problem, the system Digital Glass built, and the measurable or operational result created for the client.
                    </p>
                    <p className="text-slate-500 text-sm max-w-3xl mx-auto mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                        Bracketed figures below are placeholder case-study slots. Replace them with client-approved numbers before publishing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75, delay: index * 0.12 }}
                        >
                            <GlassCard className="h-full overflow-hidden !p-0 hover:bg-white/[0.05] transition-all duration-500">
                                <div className="relative h-64">
                                    {project.previewVideo ? (
                                        <video
                                            src={project.previewVideo}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <NextImage
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E15] via-[#0D0E15]/20 to-transparent" />
                                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                                        <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs uppercase tracking-wider text-white">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs uppercase tracking-wider text-slate-300">
                                            {project.industry}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-7">
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        <div>
                                            <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm">{project.description}</p>
                                        </div>
                                        <button
                                            onClick={() => onProjectSelect(project)}
                                            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 hover:bg-white/[0.1] transition-colors"
                                            aria-label={`Open ${project.title} case study`}
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </button>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3">
                                            <p className="text-sm text-primary uppercase tracking-[0.2em] mb-2">Outcome</p>
                                            <p className="text-slate-100 leading-relaxed">{project.outcomeHeadline}</p>
                                        </div>
                                        <div>
                                            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">Problem</p>
                                            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                                        </div>
                                        <div>
                                            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">Solution</p>
                                            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                                        </div>
                                        <div>
                                            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">Results</p>
                                            <p className="text-slate-300 text-sm leading-relaxed">{project.results}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                        {project.metrics.map((metric) => (
                                            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                                <p className="text-xl text-white mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                                                    {metric.value}
                                                </p>
                                                <p className="text-xs uppercase tracking-[0.18em] text-primary mb-2">{metric.label}</p>
                                                <p className="text-xs text-slate-400 leading-relaxed">{metric.detail}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.resultMetrics.map((metric) => (
                                            <span key={metric} className="px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4 mb-6">
                                        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Case Study Metric Slots</p>
                                        <div className="space-y-2">
                                            {project.placeholderMetrics.map((metric) => (
                                                <p key={metric} className="text-sm text-slate-300 leading-relaxed">
                                                    {metric}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onProjectSelect(project)}
                                        className="group inline-flex items-center gap-2 text-primary hover:text-amber-300 transition-colors font-semibold"
                                        style={{ fontFamily: "var(--font-sans)" }}
                                    >
                                        {project.cta}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        onClick={onContactClick}
                        className="px-8 py-4 glass-panel hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-300 inline-flex items-center gap-3"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                    >
                        Book a Consultation
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
