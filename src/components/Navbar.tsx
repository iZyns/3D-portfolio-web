import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'about', label: 'About' },
    { name: 'projects', label: 'Projects' },
    { name: 'contact', label: 'Contact' }
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/izyns', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vnw', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vincentnw24@gmail.com', label: 'Email' }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navItems.map(item => ({
                id: item.name,
                element: document.getElementById(item.name)
            }));

            const currentSection = sections.find(section => {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            setActiveSection(currentSection ? currentSection.id : '');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="px-8 lg:px-16 mx-auto max-w-[1920px]">
                <div className="flex justify-between items-center">
                    <motion.a
                        href="#"
                        className="text-3xl font-light text-white relative group pl-4 tracking-wider"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        V<span className="text-white/50 mx-1">/</span>W
                        <motion.div
                            className="absolute -inset-1 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.2 }}
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12 pr-4">
                        <div className="flex space-x-12">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.name)}
                                    className={`relative px-3 py-2 text-sm font-light tracking-wide transition-colors ${
                                        activeSection === item.name
                                            ? 'text-white'
                                            : 'text-white/70 hover:text-white'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {activeSection === item.name && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-6 pl-12 border-l border-white/10">
                            {socialLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <item.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-white/70 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/5"
                        >
                            <div className="flex flex-col space-y-4 p-6">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.name)}
                                        className={`text-left px-4 py-2 rounded-lg transition-colors ${
                                            activeSection === item.name
                                                ? 'bg-white/10 text-white'
                                                : 'text-white/70 hover:bg-white/5 hover:text-white'
                                        }`}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <div className="flex space-x-4 px-4 pt-4 border-t border-white/10">
                                    {socialLinks.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/50 hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <item.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}