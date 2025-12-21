import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative py-20 px-6 md:px-12 bg-[#0a0a0f] border-t border-white/10">
            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3
                            className="text-3xl mb-4 text-primary"
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontWeight: 700
                            }}
                        >
                            Digital Glass
                        </h3>
                        <p className="text-slate-400 mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                            Crafting immersive digital experiences for luxury brands and high-value assets.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {["Headless Commerce", "Geospatial Intelligence", "Immersive 3D", "Digital Strategy", "VR Experiences"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {["About Us", "Portfolio", "Case Studies", "Careers", "Blog"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                            Get in Touch
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                                <span>hello@digitalglass.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                                <span>New York, NY<br />San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                        © 2025 Digital Glass. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-slate-500 hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-500 hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
