import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MovingImageGridProps {
    formattedData: { image: string, link: string }[];
    color?: string;
}

const MovingImageGrid: React.FC<MovingImageGridProps> = ({ formattedData, color = "bg-neon-purple" }) => {
    const stripRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null); // Ref for pinning container

    useEffect(() => {
        if (!stripRef.current || !sectionRef.current) {
            console.log("Refs not set:", {
                stripRef: stripRef.current,
                sectionRef: sectionRef.current,
            });
            return;
        }

        // console.log("Formatted Data:", formattedData);

        // Calculate total width for animation
        const imageWidth = 320 + 32; // w-80 (320px) + mx-4 (32px)
        const totalImages = formattedData.length; // Only original images
        const totalWidth = imageWidth * totalImages;

        // Set initial position
        gsap.set(stripRef.current, { x: 0 });

        // Animate images to move one by one
        gsap.to(stripRef.current, {
            x: -(totalWidth - window.innerWidth), // Move to show the last image
            ease: "none", // Linear animation for smooth scrolling
            scrollTrigger: {
                trigger: sectionRef.current, // Pin the entire section
                // pin: true, // Pin the section
                start: "top 30%", // Start pinning when section top hits 30% from viewport top
                end: `+=${totalWidth - window.innerWidth}`, // Stop when last image is in view
                scrub: 1, // Smooth scrolling
                // markers: true, // Enable for debugging
                invalidateOnRefresh: true, // Recalculate on resize
            },
        });
    }, [formattedData]);

    const renderImages = () => {
        return formattedData.map((data, index) => (
            <div key={`original-${index}`} className="mx-4 flex-shrink-0">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                        src={data.image}
                        alt={`Image ${index + 1}`}
                        className="w-80 h-150 object-contian" // Increased height
                        onError={() => console.error(`Failed to load image: ${data.image}`)}
                    />

                </a>
            </div>
        ));
    };

    if (!formattedData || formattedData.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <div ref={sectionRef} className={`${color} overflow-hidden h-96 flex flex-col pt-[30px]`}> {/* 30px top padding */}
            <div ref={stripRef} className="whitespace-nowrap flex">
                {renderImages()}
            </div>
        </div>
    );
};

export default MovingImageGrid;