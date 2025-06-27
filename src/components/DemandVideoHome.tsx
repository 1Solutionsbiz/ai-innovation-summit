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
        
        { image: "/edition/9-mumbai.png", link: "https://youtu.be/5lJ0Y8xHfX8?list=TLGGG55aGMO-tewyMzA0MjAyNQ" },
        { image: "/edition/10-mumbai.png", link: "https://youtu.be/enCwuw4Az8g?list=TLGGLTlYnhS6D7cyMzA0MjAyNQ" },
        { image: "/edition/11-mumbai.png", link: "https://youtu.be/x6l9CRqgdoY?list=TLGGusPJqiJvaqMyMzA0MjAyNQ" },
        { image: "/edition/12-mumbai.png", link: "https://youtu.be/yru8hzRPU6k?list=TLGGXh6w5rapJssyMzA0MjAyNQ" },
        { image: "/edition/13-mumbai.png", link: "https://youtu.be/ekCyjZq0q7U?list=TLGGjqw6Kye3KkQyMzA0MjAyNQ" },
        { image: "/edition/14-mumbai.png", link: "https://youtu.be/f9FT0ffJujo?list=TLGGIkZHhJ5aZ9MyMzA0MjAyNQ" },
        { image: "/edition/15-mumbai.png", link: "https://youtu.be/kTa_Gn0rUqk?list=TLGGTdqBnjuXu0MyMzA0MjAyNQ" },
        { image: "/edition/16-mumbai.png", link: "https://youtu.be/VTQiS82jPwc?list=TLGGNN2ez95RcPUyMzA0MjAyNQ" },
        { image: "/edition/17-mumbai.png", link: "https://youtu.be/lVCjTm5sSKI?list=TLGGGUkzoIINyAQyMzA0MjAyNQ" },
        { image: "/edition/1-gurugram.png", link: "https://www.youtube.com/watch?v=nNL8q-FzTJY" },
        { image: "/edition/2-gurugram.png", link: "https://youtu.be/8xY2-fVdkMc" },
        { image: "/edition/3-gurugram.png", link: "https://www.youtube.com/watch?v=gz5LfjyRBM0" },
        { image: "/edition/4-gurugram.png", link: "https://www.youtube.com/watch?v=oWnCSnK35kU&list=TLGG2hVAM1ls04YyMzA0MjAyNQ" },
        { image: "/edition/1-bangaluru.png", link: "https://www.youtube.com/watch?v=wBaEOg_21bM" },
        { image: "/edition/2-bangaluru.png", link: "https://www.youtube.com/watch?v=UozBEohA7Qg" },
        { image: "/edition/3-bangaluru.png", link: "https://www.youtube.com/watch?v=hY7Axj-B7jo" },
        { image: "/edition/4-bangaluru.png", link: "https://www.youtube.com/watch?v=WVaRQYI-ROI" },
        { image: "/edition/5-bangaluru.png", link: "https://www.youtube.com/watch?v=hQlpZrvsdZ4" },
        { image: "/edition/6-bangaluru.png", link: "https://www.youtube.com/watch?v=3lvxHZ4TG0Y" },
        { image: "/edition/7-bangaluru.png", link: "https://www.youtube.com/watch?v=twjvz-eNo-8" },
    ];

    return (
        <div className="py-8 bg-black top-10">
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
