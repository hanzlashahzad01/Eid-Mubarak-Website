import React from 'react';
import { motion } from 'framer-motion';

const Stickers = () => {
    const stickers = [
        { emoji: '🌙', name: 'Moon', color: 'bg-accent/20' },
        { emoji: '🕌', name: 'Mosque', color: 'bg-secondary/20' },
        { emoji: '🎁', name: 'Gifts', color: 'bg-red-400/20' },
        { emoji: '🐐', name: 'Goat', color: 'bg-gray-400/20' },
        { emoji: '🥘', name: 'Biryani', color: 'bg-orange-400/20' },
        { emoji: '🏮', name: 'Lantern', color: 'bg-yellow-400/20' },
    ];

    return (
        <section id="stickers" className="py-20 relative bg-primary/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-16 text-secondary"
                >
                    Eid Stickers Celebration <span className="inline-block animate-spin-slow">✨</span>
                </motion.h2>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-8">
                    {stickers.map((sticker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                boxShadow: "0px 0px 30px rgba(250, 204, 21, 0.4)"
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`p-6 sm:p-10 rounded-2xl sm:rounded-3xl ${sticker.color} border border-white/10 backdrop-blur-lg flex flex-col items-center justify-center gap-3 sm:gap-4 cursor-pointer select-none`}
                        >
                            <span className="text-4xl sm:text-6xl filter drop-shadow-lg">{sticker.emoji}</span>
                            <p className="text-white font-bold opacity-60 text-xs sm:text-sm tracking-widest">{sticker.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stickers;
