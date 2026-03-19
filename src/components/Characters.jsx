import React from 'react';
import { motion } from 'framer-motion';

const Characters = () => {
    return (
        <section id="characters" className="py-20 relative bg-primary/20 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-16 text-accent"
                >
                    Eid Greetings from Us <span className="inline-block animate-bounce">❤️</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-40 px-4">
                    {/* Male Character */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
                        >
                            <img
                                src="/male.png"
                                alt="Male Character"
                                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -top-8 -right-4 sm:-top-12 sm:-right-12 bg-white text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-2xl rounded-bl-none shadow-xl font-bold border-2 border-secondary text-sm sm:text-lg whitespace-nowrap z-20"
                        >
                            Eid Mubarak! 🕌✨
                        </motion.div>
                    </motion.div>

                    {/* Female Character */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
                        >
                            <img
                                src="/female.png"
                                alt="Female Character"
                                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-105 transition-transform"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="absolute -top-8 -left-4 sm:-top-12 sm:-left-12 bg-white text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-2xl rounded-br-none shadow-xl font-bold border-2 border-accent text-sm sm:text-lg whitespace-nowrap z-20"
                        >
                            Wishing you Joy! 🌙❤️
                        </motion.div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-2xl font-bold text-gray-400 italic"
                >
                    "Eid Mubarak from us! May your heart stay full of love."
                </motion.p>
            </div>
        </section>
    );
};

export default Characters;
