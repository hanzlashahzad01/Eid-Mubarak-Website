import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Wishes = () => {
    const [name, setName] = useState('');
    const [wish, setWish] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const generateWish = () => {
        if (!name.trim()) return;

        const wishes = [
            `Eid Mubarak, ${name}! May your day be filled with joy and sweetness! 🍭`,
            `Wishing you a blessed Eid, ${name}. May all your prayers be answered! 🙏`,
            `Eid Mubarak, ${name}! Here's to a year of happiness and prosperity! 💰`,
            `Happy Eid, ${name}! May this special day bring you peace and love. ❤️`,
            `${name}, Eid Mubarak! May you celebrate this day with your loved ones. 👨‍👩‍👧‍👦`,
        ];

        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        setWish('');
        setIsTyping(true);

        // Simulating typing effect
        let index = 0;
        const interval = setInterval(() => {
            if (index <= randomWish.length) {
                setWish(randomWish.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#FACC15', '#22C55E', '#FFFFFF']
                });
            }
        }, 50);
    };

    return (
        <section id="wishes" className="py-20 relative bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-10 text-accent"
                >
                    Personalized Eid Wish 💌
                </motion.h2>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <input
                            type="text"
                            placeholder="Enter Name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && generateWish()}
                            className="flex-1 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all text-xl"
                        />
                        <button
                            onClick={generateWish}
                            className="bg-accent hover:bg-yellow-500 text-primary font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 text-xl"
                        >
                            Generate Wish ✨
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {wish && (
                            <motion.div
                                key={wish}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="min-h-[100px] flex items-center justify-center p-6 border-t border-white/10 mt-6"
                            >
                                <p className="text-2xl md:text-3xl font-heading text-accent leading-relaxed italic">
                                    "{wish}"
                                    {isTyping && <span className="inline-block w-1 h-8 bg-accent animate-pulse ml-2 pb-1"></span>}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Wishes;
