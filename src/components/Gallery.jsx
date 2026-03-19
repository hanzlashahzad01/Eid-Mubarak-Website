import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { id: 1, title: 'Eid Gathering', emoji: '🕌' },
        { id: 2, title: 'Traditional Foods', emoji: '🥘' },
        { id: 3, title: 'Family Gifts', emoji: '🎁' },
        { id: 4, title: 'Eid Celebration', emoji: '🌙' },
        { id: 5, title: 'Community Prayer', emoji: '🤲' },
        { id: 6, title: 'Sweets & Joy', emoji: '🍭' },
    ];

    return (
        <section id="gallery" className="py-20 relative bg-primary/30 backdrop-blur-md border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-16 text-accent"
                >
                    Eid Celebration Gallery 📸
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                            className="relative group bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm cursor-pointer overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
                        >
                            {/* Overlay with zoom effect simulation */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                            <div className="text-9xl mb-4 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl">
                                {img.emoji}
                            </div>

                            <div className="absolute bottom-6 left-0 right-0 z-20 text-center transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-2xl font-bold text-accent shadow-sm">{img.title}</p>
                                <p className="text-sm text-gray-300 mt-1 uppercase tracking-widest">Explore Joy</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
