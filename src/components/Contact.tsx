import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download, CheckCircle, XCircle, Github, Linkedin, Share2, ArrowUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        message: string;
        type: 'success' | 'error';
    }>({ show: false, message: '', type: 'success' });
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const showNotification = (message: string, type: 'success' | 'error') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification(prev => ({ ...prev, show: false }));
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formRef.current) return;
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            throw new Error('Missing EmailJS configuration');
        }
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setFormData({
                from_name: '',
                reply_to: '',
                message: ''
            });

            showNotification('Message sent successfully!', 'success');
        } catch (error) {
            console.error('Error sending email:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                Let's
                                <span className="block mt-2 text-white/60">Connect</span>
                            </motion.h2>
                            <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mb-8" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-white/70 text-lg leading-relaxed font-light">
                                Have a question or want to know more about me? Feel free to reach out through the contact form or connect with me on social media.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl" />
                            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-white/20 focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="reply_to"
                                            value={formData.reply_to}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-white/20 focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-white/20 focus:outline-none transition-colors h-32 resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 bg-gradient-to-r from-[#4B79A1] to-[#283E51] text-white rounded-lg hover:from-[#5889B5] hover:to-[#324B61] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl" />
                                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4">
                                            <Mail className="w-6 h-6 text-white/70 mt-1" />
                                            <div>
                                                <h3 className="text-xl font-light text-white mb-1">Email</h3>
                                                <p className="text-white/70">vincentnw24@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-6 h-6 text-white/70 mt-1" />
                                            <div>
                                                <h3 className="text-xl font-light text-white mb-1">Location</h3>
                                                <p className="text-white/70">Seattle, Washington</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-6 h-6 text-white/70 mt-1">
                                                <Share2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-light text-white mb-1">Socials</h3>
                                                <div className="flex gap-4">
                                                    <motion.a
                                                        href="#"
                                                        className="text-white/70 hover:text-white transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Github className="w-6 h-6" />
                                                    </motion.a>
                                                    <motion.a
                                                        href="#"
                                                        className="text-white/70 hover:text-white transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Linkedin className="w-6 h-6" />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 z-50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>

            {notification.show && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className={`fixed bottom-5 right-5 flex items-center space-x-2 px-6 py-3 rounded-lg shadow-lg ${
                        notification.type === 'success' ? 'bg-white/10 border border-white/20' : 'bg-white/10 border border-white/20'
                    }`}
                >
                    {notification.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-white/70" />
                    ) : (
                        <XCircle className="w-5 h-5 text-white/70" />
                    )}
                    <span className="text-white/70 font-light">{notification.message}</span>
                </motion.div>
            )}
        </section>
    );
};

export default Contact;