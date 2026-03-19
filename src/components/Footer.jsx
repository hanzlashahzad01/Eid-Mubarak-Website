import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const socialIcons = [
        { icon: FaGithub, name: 'GitHub', link: 'https://github.com/hanzlashahzad01/hanzlashahzad01' },
        { icon: FaLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/hanzla-shahzad' },
        { icon: FaInstagram, name: 'Instagram', link: 'https://www.instagram.com/codebuddy661?igsh=YzljYTk1ODg3Zg==' },
    ];

    return (
        <footer id="footer" className="bg-primary/90 border-t border-white/10 py-16 px-4 relative overflow-hidden">
            {/* Background sparkle effect */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-heading font-bold text-accent"
                >
                    Eid Mubarak <span className="inline-block animate-pulse">🌙✨</span>
                </motion.h3>

                <p className="text-xl text-gray-400 mt-4 max-w-xl mx-auto">
                    Sending you warm wishes on this blessed day. May your celebration be as bright as the crescent moon.
                </p>

                <div className="flex gap-10 mt-6 mb-10">
                    {socialIcons.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.3,
                                rotate: [0, -10, 10, 0],
                                color: "#FACC15"
                            }}
                            className="text-white/60 text-5xl transition-all duration-300 transform"
                            title={social.name}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 border-t border-white/10 pt-10 w-full"
                >
                    <p className="text-lg text-gray-300 font-body flex items-center gap-3">
                        Made with <FaHeart className="text-red-500 animate-bounce" /> by <span className="text-accent font-bold">Hanzla Shahzad</span>
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                        &copy; {new Date().getFullYear()} Eid Celebration | Hanzla Shahzad
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
