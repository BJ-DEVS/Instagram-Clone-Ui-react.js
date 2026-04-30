import { useEffect, useState } from "react";
import axios from "axios";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from "react-icons/fi";

const CLIENT_ID = "516c6037";
const PEXELS_API_KEY = "UoAyVElmD4Ux08S0fym9kyPrvL1IniP4yXVRhWjUn700sjA6Kk55oSC7";

const Hero = () => {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trackRes = await axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=10`);
        const videoRes = await axios.get("https://api.pexels.com/videos/popular?per_page=10", {
          headers: { Authorization: PEXELS_API_KEY },
        });
        setPosts(trackRes.data.results);
        setVideos(videoRes.data.videos);
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };
    fetchData();
  }, []);

  return (
    /* md:pl-20 se desktop sidebar ke liye jagah banegi. Mobile par ye 0 hogi. */
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-6 md:py-10 md:pl-20 lg:pl-0 transition-all duration-300">
      
      {/* Feed Container - Mobile par full width, Desktop par fixed max-width */}
      <div className="w-full max-w-[100%] sm:max-w-[470px] space-y-8 px-0 sm:px-4">
        
        {posts.map((post, index) => {
          const videoUrl = videos[index]?.video_files?.find((v) => v.quality === "hd")?.link || 
                           videos[index]?.video_files?.[0]?.link;

          return (
            <div key={index} className="border-b border-gray-900 sm:border-none pb-8">
              
              {/* Post Header */}
              <div className="flex items-center justify-between px-3 sm:px-1 mb-3">
                <div className="flex items-center gap-3">
                  {/* User Profile Avatar */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-black border-[2px] border-black overflow-hidden">
                       <img src={post.image} alt="user" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-white hover:text-gray-400 cursor-pointer">
                      {post.artist_name.toLowerCase().replace(/\s+/g, "_")}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-500">{post.releasedate || "Original Audio"}</span>
                  </div>
                </div>
                <FiMoreHorizontal className="text-white cursor-pointer" size={18} />
              </div>

              {/* Video Post Content - Responsive Height */}
              <div className="relative w-full aspect-square sm:aspect-auto sm:max-h-[580px] bg-zinc-950 sm:rounded-md overflow-hidden border-y sm:border border-gray-800 flex items-center justify-center shadow-lg">
                {videoUrl ? (
                  <video
                    src={videoUrl}
                    className="w-full h-full object-cover sm:object-contain"
                    loop muted autoPlay playsInline
                  />
                ) : (
                  <div className="h-60 w-full bg-zinc-900 animate-pulse flex items-center justify-center text-gray-700">
                    Loading Media...
                  </div>
                )}
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center justify-between py-2 px-3 sm:px-1">
                <div className="flex items-center gap-4">
                  <FiHeart className="text-2xl sm:text-[26px] hover:text-red-500 cursor-pointer transition" />
                  <FiMessageCircle className="text-2xl sm:text-[26px] hover:text-gray-400 cursor-pointer transition" />
                  <FiSend className="text-2xl sm:text-[26px] hover:text-gray-400 cursor-pointer transition" />
                </div>
                <FiBookmark className="text-2xl sm:text-[26px] hover:text-cyan-500 cursor-pointer transition" />
              </div>

              {/* Likes & Caption Section */}
              <div className="px-3 sm:px-1 space-y-1">
                <p className="text-sm font-bold text-white">14,209 likes</p>
                <div className="text-sm text-white leading-5">
                  <span className="font-extrabold mr-2 cursor-pointer">
                    {post.artist_name.toLowerCase()}
                  </span>
                  <span className="text-gray-200">{post.name} — Modern Web UI Experience. 💻🔥</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 cursor-pointer hover:text-gray-400 transition">
                  View all 128 comments
                </p>
                <p className="text-[10px] text-gray-600 uppercase font-semibold">2 hours ago</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;









