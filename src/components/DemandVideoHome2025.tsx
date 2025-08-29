import MovingImageGrid from "./MovingImageGrid"; // Assuming the component is in the same folder
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const DemandVideoHome: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/watch-on-demand');
    };
    // Sample data for images and links
    const formattedData = [
        
        { image: "/edition/1-mumbai25.png", link: "https://youtu.be/drYtFmjo3vE?feature=shared" },
        { image: "/edition/2-mumbai25.png", link: "https://youtu.be/ER-8Lmp1G08?feature=shared" },
        { image: "/edition/3-mumbai25.png", link: "https://youtu.be/Wv8-atWSgjU?feature=shared" },
        { image: "/edition/4-mumbai25.png", link: "https://youtu.be/bXZDTUKKlWQ?feature=shared" },
        { image: "/edition/5-mumbai25.png", link: "https://youtu.be/aDkRMPjUkC8?feature=shared" },
        { image: "/edition/6-mumbai25.png", link: "https://youtu.be/zGk_zzPK98o?feature=shared" },
        { image: "/edition/7-mumbai25.png", link: "https://youtu.be/L6T3HXP2zHU?feature=shared" },
        { image: "/edition/8-mumbai25.png", link: "https://youtu.be/i3_ciFPnrrE?feature=shared" },
        { image: "/edition/9-mumbai25.png", link: "https://youtu.be/i3_ciFPnrrE?feature=shared" },
        { image: "/edition/10-mumbai25.png", link: "https://youtu.be/mKWMoV77GPU?feature=shared" },
        { image: "/edition/11-mumbai25.png", link: "https://youtu.be/rwCFMYyqBAE" },
        
    ];

    return (
        <div className="py-8 bg-black top-10 singhaniya">
            {/* Heading */}
            <h2 className="text-center font-orbitron text-white  font-bold text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-8 pt-10  top-20">
            Watch On-Demand Videos
            </h2>

            {/* Moving Image Grid Component */}
            <MovingImageGrid formattedData={formattedData} color="bg-black" />

            {/* View All Button */}
            <div className="text-center mt-8">
                <button
                    onClick={handleClick}
                    className="bg-neon-purple text-white px-6 py-3 rounded-lg text-lg font-bold transition duration-300 hover:bg-purple-600"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default DemandVideoHome;
