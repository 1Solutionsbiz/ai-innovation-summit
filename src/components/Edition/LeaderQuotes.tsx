import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

type Quote = {
    image: string;
    name: string;
    title: string;
    quote: string;
};

interface LeaderQuotesProps {
    quotes: Quote[];
}

const LeaderQuotes: React.FC<LeaderQuotesProps> = ({ quotes }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".quote-block",
                {
                    opacity: 0,
                    x: isMobile ? 30 : 100, // less x on mobile
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "top 40%",
                        toggleActions: "play none reverse none",
                        markers: false,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-black text-white py-16 px-4">
            <div className="container mx-auto max-w-4xl" ref={containerRef}>
                <h2 className="text-center font-orbitron font-bold mb-12 text-2xl sm:text-3xl lg:text-5xl">
                    What Leaders have to say?
                </h2>

                {quotes.map((quoteItem, index) => (
                    <div
                        key={index}
                        className="quote-block bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg mb-8"
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <img
                                src={quoteItem.image}
                                alt={quoteItem.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-base sm:text-lg mb-2 sm:mb-3">“{quoteItem.quote}”</p>
                                <p className="font-semibold font-orbitron text-lg sm:text-xl">{quoteItem.name}</p>
                                <p className="text-sm text-gray-400">{quoteItem.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LeaderQuotes;
