import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Server, AppWindow, Brain, Database, Cloud, Cpu, Globe, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const skills = {
    frontend: ['React'],
    backend: ['Node.js', 'MongoDB'],
    languages: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'],
    other: ['Git', 'OpenCV', 'PyTorch', 'Figma']
};

export default function About() {
    const [activeTab, setActiveTab] = useState('education');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
            </div>

            <motion.div
                ref={containerRef}
                style={{ opacity, y, scale }}
                className="container mx-auto relative z-10"
            >
                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-start justify-between gap-12"
                    >
                        {/* Title and Description */}
                        <div className="md:w-1/2">
                            <motion.h2
                                className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight"
                                whileHover={{ scale: 1.02 }}
                            >
                                About
                                <span className="block mt-2 text-white/60">Me</span>
                            </motion.h2>
                            <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mb-8" />
                        </div>

                        {/* Profile Section */}
                        <div className="md:w-1/2 flex items-start gap-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-white/0 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />
                                <img
                                    src="/file.jpg"
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover object-top relative ring-4 ring-white/10"
                                />
                            </motion.div>
                            <div className="flex-1">
                                <motion.p
                                    className="text-white/70 text-lg leading-relaxed font-light"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >
                                    I'm a <span className="text-white">Computer Science & Software Engineering graduate</span> from the University of Washington, passionate about building innovative software solutions. I focus in backend development, with hands-on experience in software engineering through my internships and projects.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline Section */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Tab Navigation */}
                        <div className="md:w-1/4 sticky top-8">
                            <div className="flex md:flex-col gap-4">
                                {['education', 'experience'].map((tab) => (
                                    <motion.button
                                        key={tab}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-6 py-4 rounded-xl font-light transition-all duration-300 relative group text-left w-full ${
                                            activeTab === tab
                                                ? 'bg-white/10 text-white'
                                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                                        }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        <span className="relative z-10 capitalize text-lg">{tab}</span>
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="md:w-3/4">
                            <div className="relative">
                                {activeTab === 'education' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-12"
                                    >
                                        {/* UIUC */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="relative group"
                                        >
                                            <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            <div className="relative">
                                                <div className="flex items-baseline gap-4 mb-4">
                                                    <span className="text-2xl font-light text-white/90">2025 - 2026</span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                                </div>
                                                <h4 className="text-xl font-light text-white mb-2">Master's of Computer Science</h4>
                                                <p className="text-white/50">University of Illinois Urbana Champaign</p>
                                            </div>
                                        </motion.div>

                                        {/* UW */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="relative group"
                                        >
                                            <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            <div className="relative">
                                                <div className="flex items-baseline gap-4 mb-4">
                                                    <span className="text-2xl font-light text-white/90">2022 - 2024</span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                                </div>
                                                <h4 className="text-xl font-light text-white mb-2">Bachelor of Computer Science & Software Engineering</h4>
                                                <p className="text-white/50">University of Washington</p>
                                            </div>
                                        </motion.div>

                                        {/* Edmonds */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="relative group"
                                        >
                                            <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            <div className="relative">
                                                <div className="flex items-baseline gap-4 mb-4">
                                                    <span className="text-2xl font-light text-white/90">2020 - 2022</span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                                </div>
                                                <h4 className="text-xl font-light text-white mb-2">Associate of Science</h4>
                                                <p className="text-white/50">Edmonds College</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {activeTab === 'experience' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-12"
                                    >
                                        {/* Indocyber */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="relative group"
                                        >
                                            <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            <div className="relative">
                                                <div className="flex items-baseline gap-4 mb-4">
                                                    <span className="text-2xl font-light text-white/90">2024</span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                                </div>
                                                <h4 className="text-xl font-light text-white mb-2">Software Engineer Intern</h4>
                                                <p className="text-white/50 mb-3">Indocyber Global Teknologi</p>
                                                <p className="text-white/40 leading-relaxed">
                                                    Collaborated with a team of 15 developers to build and develop a financial document processing software.
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Hackathon */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="relative group"
                                        >
                                            <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            <div className="relative">
                                                <div className="flex items-baseline gap-4 mb-4">
                                                    <span className="text-2xl font-light text-white/90">2023</span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                                </div>
                                                <h4 className="text-xl font-light text-white mb-2">Hackathon</h4>
                                                <p className="text-white/50 mb-3">UCLA</p>
                                                <p className="text-white/40 leading-relaxed">
                                                    Created a platform for global collaboration in education, including a virtual study environment with chatrooms and file sharing.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <motion.div
                                key={category}
                                className="group relative"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-6">
                                        {category === 'frontend' && <AppWindow className="w-6 h-6 text-white/70" />}
                                        {category === 'backend' && <Server className="w-6 h-6 text-white/70" />}
                                        {category === 'languages' && <Code2 className="w-6 h-6 text-white/70" />}
                                        {category === 'other' && <Cpu className="w-6 h-6 text-white/70" />}
                                        <h3 className="text-xl font-light text-white capitalize">{category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                onHoverStart={() => setHoveredSkill(skill)}
                                                onHoverEnd={() => setHoveredSkill(null)}
                                            >
                                                {skill}
                                                {hoveredSkill === skill && (
                                                    <motion.span
                                                        className="absolute -inset-1 bg-white/10 rounded-full blur"
                                                        layoutId="skillHover"
                                                    />
                                                )}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
