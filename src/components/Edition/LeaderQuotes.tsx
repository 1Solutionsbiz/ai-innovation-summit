import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const LeaderQuotes: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the quote blocks from right to left when they enter the viewport
            gsap.fromTo(
                ".quote-block",
                {
                    opacity: 0,
                    x: 100,  // Initially positioned 100px from the right
                },
                {
                    opacity: 1,
                    x: 0,  // Final position (normal position)
                    duration: 1,
                    stagger: 1,  // Stagger the animation of each quote-block
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",  // Trigger when top of the container is at 80% of viewport
                        end: "top 40%",    // End the animation when the top of the container is 30% from the viewport
                        toggleActions: "play none reverse none",  // Play on enter, reverse on leave
                        markers: false,    // Set to true if you want to debug the trigger points
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

                <div className="quote-block bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
                    <div className="flex items-start gap-4">
                        <img
                            src="/edition/leaders/mukesh-jain.png"
                            alt="Mukesh Jain"
                            className="quote-image w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg mb-3">
                                “When we talk of digital transformation, it is not just about
                                applications or being digital, it is about how we leverage data
                                and the power of data to be able to get more value.”
                            </p>
                            <p className="font-semibold font-orbitron text-xl ">Mukesh Jain</p>
                            <p className="text-sm text-gray-400">
                                CTO and VP - Leading Ai Based Innovation @ Capgemini
                            </p>
                        </div>
                    </div>
                </div>

                <div className="quote-block bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-start gap-4">
                        <img
                            src="/edition/leaders/amit-joshi.png"
                            alt="Amit Joshi"
                            className="quote-image w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg mb-3">
                                “When you talk about building an Ai kind of a solution, it
                                really depends on the data being considered, consumed and
                                injected into the solution for correct prediction and generation
                                of data-oriented solution.”
                            </p>
                            <p className="font-semibold text-xl font-orbitron">Amit Joshi</p>
                            <p className="text-sm text-gray-400">
                                CISO Cement Business, Adani Enterprises
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeaderQuotes;
