import { Github, Linkedin, Mail, Code2, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: Github, href: 'https://github.com/izyns', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vnw', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vincentnw24@gmail.com', label: 'Email' }
];

const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-24 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Main Content */}
                <div className="max-w-7xl mx-auto">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.h3
                                className="text-4xl font-light text-white tracking-tight"
                                whileHover={{ scale: 1.02 }}
                            >
                                Vincent
                                <span className="block mt-1 text-white/60">Wirawan</span>
                            </motion.h3>
                            <p className="text-white/70 text-lg leading-relaxed font-light">
                                A recent Computer Science & Software Engineering graduate from the University of Washington with a strong foundation in backend development and software engineering.
                                Proven track record through internships and projects, always eager to embrace new technologies and challenges.
                            </p>
                            <div className="flex items-center gap-2 text-white/50 text-sm">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                                <span>and</span>
                                <Coffee className="w-4 h-4 text-amber-500" />
                            </div>
                        </motion.div>

                        {/* Links Section */}
                        <div className="grid grid-cols-2 gap-12">
                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-xl font-light text-white mb-6">Quick Links</h3>
                                <ul className="space-y-4">
                                    {quickLinks.map((link, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="relative"
                                        >
                                            <a
                                                href={link.href}
                                                className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                                            >
                                                <span className="h-px w-4 bg-white/10 group-hover:w-6 group-hover:bg-white/20 transition-all" />
                                                {link.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h3 className="text-xl font-light text-white mb-6">Connect</h3>
                                <ul className="space-y-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="relative"
                                        >
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/70 hover:text-white transition-colors flex items-center gap-3 group"
                                            >
                                                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                                    <link.icon className="w-4 h-4" />
                                                </span>
                                                {link.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        className="pt-8 border-t border-white/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2 text-white/50 text-sm">
                                <Code2 className="w-4 h-4" />
                                <p>© {currentYear} Vincent Wirawan. All rights reserved.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <link.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}