import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import * as THREE from 'three';

// Modern 3D Scene Component
const Scene = () => {
    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        if (!groupRef.current) return;

        const animate = () => {
            if (!groupRef.current) return;
            groupRef.current.rotation.y += 0.001;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} enablePan={false} />
            
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <pointLight position={[0, 0, 10]} intensity={0.8} />
            
            <fog attach="fog" args={['#000000', 5, 15]} />
            
            <group ref={groupRef}>
                {/* Modern Minimal Shapes */}
                <mesh position={[0, 0, 0]}>
                    <torusGeometry args={[1.5, 0.1, 32, 100]} />
                    <meshStandardMaterial 
                        color="#ffffff" 
                        metalness={0.8} 
                        roughness={0.2}
                        transparent
                        opacity={0.5}
                    />
                </mesh>
                
                <mesh position={[0, 0, 0]}>
                    <torusGeometry args={[1, 0.1, 32, 100]} />
                    <meshStandardMaterial 
                        color="#ffffff" 
                        metalness={0.8} 
                        roughness={0.2}
                        transparent
                        opacity={0.4}
                    />
                </mesh>

                {/* Floating Elements */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10,
                        ]}
                    >
                        <sphereGeometry args={[0.05, 16, 16]} />
                        <meshStandardMaterial 
                            color="#ffffff" 
                            transparent 
                            opacity={0.5}
                        />
                    </mesh>
                ))}

                {/* Decorative Lines */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <mesh
                        key={`line-${i}`}
                        position={[
                            (Math.random() - 0.5) * 8,
                            (Math.random() - 0.5) * 8,
                            (Math.random() - 0.5) * 8,
                        ]}
                    >
                        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                        <meshStandardMaterial 
                            color="#ffffff" 
                            transparent 
                            opacity={0.3}
                        />
                    </mesh>
                ))}
            </group>
        </>
    );
};

// Loading Component
const Loader = () => {
    const { progress } = useProgress();
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-32 h-32">
                <div className="w-full h-full border-4 border-white/20 rounded-full animate-spin border-t-white" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
};

// Main Hero Component
const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Modern Gradient Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_100%)]" />
            </div>

            {/* Light Accent Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Decorative Lines */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto w-full"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                        {/* Left Content */}
                        <div className="md:flex-1 text-left md:pt-20">
                            <motion.h1 
                                className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight relative"
                                style={{ y, opacity }}
                            >
                                <span className="relative inline-block">
                                    Vincent
                                    <span className="absolute -inset-1 bg-white/10 blur-xl rounded-full" />
                                </span>
                                <br />
                                <span className="relative inline-block md:ml-12">
                                    Wirawan
                                    <span className="absolute -inset-1 bg-white/10 blur-xl rounded-full" />
                                </span>
                            </motion.h1>
                            <motion.p 
                                className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide relative md:ml-24"
                                style={{ y, opacity }}
                            >
                                <span className="relative inline-block">
                                    Full Stack Developer
                                    <span className="absolute -inset-1 bg-white/10 blur-xl rounded-full" />
                                </span>
                            </motion.p>
                        </div>

                        {/* Right Content - 3D Scene */}
                        <div className="md:flex-1 w-full aspect-square md:translate-y-12">
                            <Canvas>
                                <Suspense fallback={null}>
                                    <Scene />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>
                    
                    {/* Social Links - Positioned at bottom left */}
                    <motion.div 
                        className="absolute bottom-20 left-4 md:left-8 flex flex-col gap-6"
                        style={{ y, opacity }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href="https://github.com/izyns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
                        </a>
                        <a
                            href="https://linkedin.com/in/vnw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
                        </a>
                        <a
                            href="mailto:vincentnw24@gmail.com"
                            className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
                        </a>
                    </motion.div>

                    {/* Scroll Indicator - Centered at bottom */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-6 h-10 border-2 border-white/40 rounded-full p-2 backdrop-blur-sm relative overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/0 animate-shimmer" />
                            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto relative z-10" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;