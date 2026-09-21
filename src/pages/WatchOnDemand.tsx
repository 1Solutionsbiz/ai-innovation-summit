import { Play } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/gurugram_final/Footer";
import RedesignNavigation from "@/components/gurugram_final/RedesignNavigation";
import { watchVideos } from "@/data/watchVideos";

const getYoutubeThumbnail = (link: string) => {
    const videoId = link.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&/]+)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

/*
    {
        city: 'Bengaluru 2025',
        imageName: 'mumbai25',
        videoLinks: [
            "https://youtu.be/drYtFmjo3vE?feature=shared",
            "https://youtu.be/ER-8Lmp1G08?feature=shared",
            "https://youtu.be/Wv8-atWSgjU?feature=shared",
            "https://youtu.be/bXZDTUKKlWQ?feature=shared",
            "https://youtu.be/aDkRMPjUkC8?feature=shared",
            "https://youtu.be/zGk_zzPK98o?feature=shared",
            "https://youtu.be/L6T3HXP2zHU?feature=shared",
            "https://youtu.be/i3_ciFPnrrE?feature=shared",
            "https://youtu.be/i3_ciFPnrrE?feature=shared",
            "https://youtu.be/mKWMoV77GPU?feature=shared",
            "https://youtu.be/rwCFMYyqBAE",
        ],
    },
    {
        city: 'Bengaluru 2024',
        imageName: 'bangaluru',
        videoLinks: [
            'https://www.youtube.com/watch?v=wBaEOg_21bM',
            'https://www.youtube.com/watch?v=UozBEohA7Qg',
            'https://www.youtube.com/watch?v=hY7Axj-B7jo',
            'https://www.youtube.com/watch?v=WVaRQYI-ROI',
            'https://www.youtube.com/watch?v=hQlpZrvsdZ4',
            'https://www.youtube.com/watch?v=3lvxHZ4TG0Y',
            'https://www.youtube.com/watch?v=twjvz-eNo-8',
        ],
    },
    {
        city: 'Mumbai 2024',
        imageName: 'mumbai',
        videoLinks: [
            'https://www.youtube.com/watch?v=glzVZO7u7rY',
            'https://www.youtube.com/watch?v=udD6TSasVGE',
            'https://www.youtube.com/watch?v=PZ3mbxs4Mx4',
            'https://youtu.be/Ob8fN8ox0aQ?list=TLGGKAfd5aznV9AyMzA0MjAyNQ',
            'https://youtu.be/QDXYOeRKOa0?list=TLGGZudhCP6fE98yMzA0MjAyNQ',
            'https://youtu.be/RA3ujjieS5U?list=TLGGLWh9HrQ4t_cyMzA0MjAyNQ',
            'https://youtu.be/VmpLIrGSooo?list=TLGGIlODjU8dzfQyMzA0MjAyNQ',
            'https://youtu.be/2LMzP3kCzqQ?list=TLGGM4JUFuMnrOEyMzA0MjAyNQ',
            'https://youtu.be/5lJ0Y8xHfX8?list=TLGGG55aGMO-tewyMzA0MjAyNQ',
            'https://youtu.be/enCwuw4Az8g?list=TLGGLTlYnhS6D7cyMzA0MjAyNQ',
            'https://youtu.be/x6l9CRqgdoY?list=TLGGusPJqiJvaqMyMzA0MjAyNQ',
            'https://youtu.be/yru8hzRPU6k?list=TLGGXh6w5rapJssyMzA0MjAyNQ',
            'https://youtu.be/ekCyjZq0q7U?list=TLGGjqw6Kye3KkQyMzA0MjAyNQ',
            'https://youtu.be/f9FT0ffJujo?list=TLGGIkZHhJ5aZ9MyMzA0MjAyNQ',
            'https://youtu.be/kTa_Gn0rUqk?list=TLGGTdqBnjuXu0MyMzA0MjAyNQ',
            'https://youtu.be/VTQiS82jPwc?list=TLGGNN2ez95RcPUyMzA0MjAyNQ',
            'https://youtu.be/lVCjTm5sSKI?list=TLGGGUkzoIINyAQyMzA0MjAyNQ',
        ],
    },
    {
        city: 'Delhi NCR 2024',
        imageName: 'gurugram',
        videoLinks: [
            'https://www.youtube.com/watch?v=nNL8q-FzTJY',
            'https://youtu.be/8xY2-fVdkMc',
            'https://www.youtube.com/watch?v=gz5LfjyRBM0',
            'https://www.youtube.com/watch?v=oWnCSnK35kU&list=TLGG2hVAM1ls04YyMzA0MjAyNQ',
        ],
    },
]; */



const WatchOnDemand = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (
        <div className="min-h-screen bg-[#050B22] text-white">
            <RedesignNavigation />

            <main className="px-4 pb-16 pt-32 sm:px-[6rem] md:pt-40">
                <div className="mx-auto max-w-[1500px]">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-3 text-[18px] text-[#EF3340]">On-Demand Content</p>
                        <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                            Ideas That Inspire.
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                            Explore every session, keynote, and conversation from the AI Innovation Summit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {watchVideos.map((video) => (
                            <Link
                                key={video.id}
                                to={`/watch?id=${encodeURIComponent(video.id)}`}
                                className="group rounded-[14px] bg-[#000128] p-1 transition-colors duration-300 hover:bg-[#022158]"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-black">
                                    <img
                                        src={video.image ?? getYoutubeThumbnail(video.link)}
                                        alt={video.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
                                    <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110">
                                        <Play size={17} className="ml-0.5 text-[#050B22]" fill="currentColor" />
                                    </div>
                                </div>
                                <h2 className="px-2 pb-3 pt-3 text-base font-bold leading-snug text-white">
                                    {video.title}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WatchOnDemand;
