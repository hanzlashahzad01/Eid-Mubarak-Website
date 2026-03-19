import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-accent/40 rounded-full"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl md:text-9xl mb-8 filter drop-shadow-glow select-none"
                >
                    🌙
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold mb-4 gradient-text px-2"
                    style={{
                        background: 'linear-gradient(to right, #FACC15, #FFFFFF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Eid Mubarak <span className="inline-block animate-pulse">✨</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg sm:text-xl md:text-3xl text-gray-300 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto mb-10 font-body leading-relaxed px-4"
                >
                    Special Eid Mubarak Wishes <span className="text-accent font-bold">from Hanzla Shahzad</span> to you and your family! 🌙❤️
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <a
                        href="#wishes"
                        className="bg-secondary hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                    >
                        Send Wishes 💌
                    </a>
                </motion.div>
            </div>

            {/* Decorative stars / shapes */}
            <div className="absolute -bottom-10 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-0"></div>
        </section>
    );
};

export default Hero;
