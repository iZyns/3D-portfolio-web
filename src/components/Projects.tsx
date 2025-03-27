import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Study Platform',
        description: 'A collaborative learning platform with real-time chat, file sharing, and project management features.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471',
        demo: 'https://gostudypal.com'
    },
    {
        title: 'AI Job Matcher',
        description: 'An intelligent job matching system that uses AI to connect candidates with relevant opportunities.',
        technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470',
        github: 'https://github.com/iZyns/Job-Scraper',
    },
    {
        title: 'Portfolio Website',
        description: 'A modern portfolio website built with React and Three.js, featuring 3D animations and interactive elements.',
        technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415',
        github: 'https://github.com/iZyns/3D-portfolio-web',
        demo: 'https://vincentw.dev'
    }
];

const Projects = () => {
    return (
        <section className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-start justify-between gap-12"
                    >
                        <div className="md:w-1/2">
                            <motion.h2
                                className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight"
                                whileHover={{ scale: 1.02 }}
                            >
                                Featured
                                <span className="block mt-2 text-white/60">Projects</span>
                            </motion.h2>
                            <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mb-8" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-white/70 text-lg leading-relaxed font-light">
                                A collection of my recent work showcasing my passion for building innovative software solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                                    {/* Image Section */}
                                    <div className="md:w-3/5 relative">
                                        <motion.div
                                            className="relative rounded-2xl overflow-hidden aspect-video group-hover:scale-[1.02] transition-transform duration-500"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <div className={`md:w-2/5 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                                        <div className="relative">
                                            <motion.div
                                                className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                whileHover={{ scale: 1.02 }}
                                            />
                                            <div className="relative space-y-6">
                                                <h3 className="text-3xl font-light text-white">{project.title}</h3>
                                                <p className="text-white/60 text-lg leading-relaxed">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-3">
                                                    {project.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex gap-6 pt-4">
                                                    {project.github && (
                                                        <motion.a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/link flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            <Github className="w-5 h-5" />
                                                            <span className="text-sm">View Code</span>
                                                        </motion.a>
                                                    )}
                                                    {project.demo && (
                                                        <motion.a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/link flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            <ExternalLink className="w-5 h-5" />
                                                            <span className="text-sm">View Project</span>
                                                        </motion.a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="max-w-7xl mx-auto mt-24 text-center">
                    <motion.a
                        href="https://github.com/izyns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Github className="w-5 h-5" />
                        <span className="text-lg font-light">View More Projects</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;