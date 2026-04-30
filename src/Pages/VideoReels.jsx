

import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "UoAyVElmD4Ux08S0fym9kyPrvL1IniP4yXVRhWjUn700sjA6Kk55oSC7";

export default function VideoReels() {
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    axios.get("https://api.pexels.com/videos/popular?per_page=10", {
      headers: { Authorization: API_KEY },
    })
    .then((res) => setVideos(res.data.videos))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black scrollbar-hide">
      {videos.map((video) => (
        <div key={video.id} className="h-screen w-full snap-start flex items-center justify-center bg-black relative">
          
          {/* Reel Container */}
          <div className="relative w-full h-full sm:h-[92vh] sm:max-w-[420px] bg-[#080808] sm:rounded-xl overflow-hidden shadow-2xl">
            <video
              src={video.video_files[0].link}
              className="h-full w-full object-cover"
              autoPlay loop muted playsInline
            />

            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-600 border border-white/20" />
                <p className="text-sm font-bold text-white">{video.user.name}</p>
                <button className="ml-2 text-xs font-bold border border-white/50 px-2 py-0.5 rounded">Follow</button>
              </div>
              <p className="text-sm text-white/90">Amazing API Integration Experience! 🚀 #react #pexels</p>
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-3 bottom-20 flex flex-col items-center gap-5 text-white">
              <div className="flex flex-col items-center">
                <button className="text-2xl drop-shadow-lg">❤️</button>
                <span className="text-[10px] font-bold">12K</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-2xl drop-shadow-lg">💬</button>
                <span className="text-[10px] font-bold">450</span>
              </div>
              <button className="text-2xl">✈️</button>
              <button className="text-2xl">🔖</button>
              <button className="text-xl">⋯</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}