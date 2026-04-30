import { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = "516c6037";
const PEXELS_API_KEY = "UoAyVElmD4Ux08S0fym9kyPrvL1IniP4yXVRhWjUn700sjA6Kk55oSC7";

export default function Reels() {
  const [tracks, setTracks] = useState([]);
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState({});
  const [commentsCount, setCommentsCount] = useState({});
  const [sharesCount, setSharesCount] = useState({});
  const [bookmarks, setBookmarks] = useState({});

 
  const toggleLike = (index) => {
    setLikes((prev) => {
      const current = prev[index] ?? { count: 12000, liked: false };
      return { ...prev, [index]: { count: current.count + (current.liked ? -1 : 1), liked: !current.liked } };
    });
  };

  const addComment = (index) => {
    setCommentsCount((prev) => ({ ...prev, [index]: (prev[index] ?? 356) + 1 }));
  };

  const shareReel = (index) => {
    setSharesCount((prev) => ({ ...prev, [index]: (prev[index] ?? 1044) + 1 }));
    if (navigator.clipboard) navigator.clipboard.writeText(window.location.href).catch(() => {});
  };

  const toggleBookmark = (index) => {
    setBookmarks((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=10`)
      .then((res) => setTracks(res.data.results));
    axios.get("https://api.pexels.com/videos/popular?per_page=10", { headers: { Authorization: PEXELS_API_KEY } })
      .then((res) => setVideos(res.data.videos));
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black scrollbar-hide">
      {tracks.map((track, index) => {
        const video = videos[index];
        const videoUrl = video?.video_files?.find((v) => v.quality === "hd")?.link || video?.video_files?.[0]?.link;

        return (
          <div key={index} className="h-screen w-full snap-start relative flex items-center justify-center bg-black overflow-hidden">
            
            {/* Main Wrapper: Desktop par Side-by-Side, Mobile par Stacked */}
            <div className="relative flex flex-row items-end sm:items-center gap-0 sm:gap-6 w-full h-full sm:h-auto sm:justify-center">
              
              {/* Video Container */}
              <div className="relative w-full h-full sm:w-[350px] sm:h-[90vh] sm:max-h-[790px] sm:rounded-lg overflow-hidden shadow-2xl bg-zinc-900">
                {videoUrl && (
                  <video
                    src={videoUrl}
                    className="h-full w-full object-cover"
                    autoPlay loop muted playsInline
                  />
                )}

                {/* Mobile Info Overlay (Visible only on mobile) */}
                <div className="absolute left-4 bottom-20 sm:hidden text-white z-10">
                   <h3 className="font-bold">@{track.artist_name?.toLowerCase().replace(/\s+/g, "")}</h3>
                   <p className="text-sm opacity-80">{track.name}</p>
                </div>
              </div>

              {/* Sidebar Controls: Mobile par Overlay, Desktop par Side mein */}
              <div className="absolute right-4 bottom-24 sm:static flex flex-col items-center gap-4 sm:gap-5 text-white z-20">
                <div className="flex flex-col items-center">
                  <button onClick={() => toggleLike(index)} className={`text-2xl sm:text-3xl transition active:scale-125 ${likes[index]?.liked ? "text-red-500" : "text-white"}`}>
                    ❤
                  </button>
                  <span className="text-[10px] sm:text-xs">{(likes[index]?.count ?? 12000).toLocaleString()}</span>
                </div>

                <div className="flex flex-col items-center">
                  <button onClick={() => addComment(index)} className="text-2xl sm:text-3xl active:scale-125">💬</button>
                  <span className="text-[10px] sm:text-xs">{(commentsCount[index] ?? 356).toLocaleString()}</span>
                </div>

                <div className="flex flex-col items-center">
                  <button onClick={() => shareReel(index)} className="text-2xl sm:text-3xl active:scale-125">🔁</button>
                  <span className="text-[10px] sm:text-xs">{(sharesCount[index] ?? 1044).toLocaleString()}</span>
                </div>

                <button className="text-2xl sm:text-3xl">✈️</button>
                
                <button onClick={() => toggleBookmark(index)} className="text-2xl sm:text-3xl">
                  {bookmarks[index] ? "🔖" : "📌"}
                </button>
                
                <button className="hidden sm:block text-3xl">⋯</button>
              </div>
            </div>

            {/* Desktop Bottom Info (Hidden on Mobile) */}
            <div className="hidden sm:block absolute left-10 bottom-10 text-white max-w-[300px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="font-semibold">@{track.artist_name?.toLowerCase().replace(/\s+/g, "")}</span>
                <span className="text-[10px] border border-white/30 px-2 py-1 rounded-full uppercase">Follow</span>
              </div>
              <p className="text-sm opacity-90">{track.name}</p>
            </div>

            <audio src={track.audio} autoPlay loop />
          </div>
        );
      })}
    </div>
  );
}





