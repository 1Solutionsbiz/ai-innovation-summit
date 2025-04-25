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
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".quote-block",
                {
                    opacity: 0,
                    x: 100,
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
                <h2 className="lg:text-5xl md:text-3xl sm:text-2xl font-orbitron font-bold text-center mb-12">
                    What Leaders have to say?
                </h2>

                {quotes.map((quoteItem, index) => (
                    <div key={index} className="quote-block bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
                        <div className="flex items-start gap-4">
                            <img
                                src={quoteItem.image}
                                alt={quoteItem.name}
                                className="quote-image w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-lg mb-3">“{quoteItem.quote}”</p>
                                <p className="font-semibold font-orbitron text-xl">{quoteItem.name}</p>
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
