import { useEffect, useState } from "react";
import axios from "axios";

const PEXELS_API_KEY = "UoAyVElmD4Ux08S0fym9kyPrvL1IniP4yXVRhWjUn700sjA6Kk55oSC7";

const Explore = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pexels.com/videos/popular?per_page=12", { // Items thore barha diye hain grid ke liye
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      })
      .then((res) => setVideos(res.data.videos))
      .catch((err) => console.log(err));
  }, []);

  return (
    // md:ml-20 desktop navbar ke liye, pb-20 mobile bottom bar ke liye
    <div className="min-h-screen bg-black px-4 py-6 text-white md:ml-20 pb-20 md:pb-6">
      
      {/* Header Section */}
      <div className="mb-6 px-2">
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">Explore</h1>
        <p className="text-xs md:text-sm text-white/50">Trending videos from Pexels</p>
      </div>

      {/* Grid Layout: 
          1 column on Mobile, 
          2 columns on Tablet (sm), 
          3 columns on Laptop (lg) 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {videos.map((video) => {
          const videoUrl =
            video.video_files.find((file) => file.quality === "hd")?.link ||
            video.video_files[0]?.link;

          return (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl md:rounded-[28px] bg-zinc-900 shadow-lg h-[60vh] sm:h-[75vh] md:h-[80vh]"
            >
              <video
                src={videoUrl}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Info on Hover / Always visible on Mobile */}
              <div className="absolute bottom-4 left-4 right-4 text-white sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-bold">{video.user.name}</p>
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">HD</span>
                   <p className="text-[10px] text-white/70">Pexels • {video.duration}s</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;







