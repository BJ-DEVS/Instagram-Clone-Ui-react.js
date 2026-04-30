import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Ye aapko Home page (/) par bhej dega
    navigate("/Home");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-between">
      
      {/* Main Container - Left & Right Columns */}
      <div className="flex-1 flex items-center justify-center p-6 gap-10">
        
        {/* Left Column - Content & Mockup */}
        <div className="hidden md:flex flex-col items-center bg-yellow-400 justify-center max-w-[1000px]">
          {/* Logo */}
          <h1 className="text-5xl font-extrabold mb-12 italic tracking-tighter">
            Instagram
          </h1>
          
          {/* Slogan Text from Image */}
          <p className="text-3xl font-bold text-center leading-snug mb-16 tracking-tight">
            See everyday moments from your <span className="text-[#FE8A1E]">close friends</span>.
          </p>

          {/* Instagram Phone Mockup with floating elements */}
          <div className="relative">
            <img 
              src="" 
              alt="Instagram Phone Mockup" 
              className="h-[520px] scale-110"
            />
            {/* Floating Heart Icon */}
            <div className="absolute top-[60px] left-[-30px] p-2 bg-[#FE3051] rounded-2xl shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            {/* Floating Emoji Bubble */}
            <div className="absolute bottom-[10%] right-[-10px] p-2.5 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg flex gap-1 items-center">
                 <span className='text-xs'>😍</span>
                 <span className='text-xs'>🤩</span>
                 <span className='text-xs'>🔥</span>
            </div>
            {/* Circular Avatar */}
            <div className="absolute bottom-[20%] left-[-20px] w-12 h-12 rounded-full border-4 border-black overflow-hidden shadow-2xl">
                 <img src="https://bit.ly/48G6WpL" alt="floating_user" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Column - Profile & Actions */}
        <div className="w-full max-w-[450px]space-y-8">

             <div className='flex justify-center'>
               <button className='p-2 rounded-full hover:bg-zinc-900 transition-colors'>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
               </button>
          </div>
          
          <div className="bg-black border border-zinc-800 p-8 flex flex-col items-center rounded-lg shadow-2xl">
            {/* Large User Avatar from Image */}
            <div className="relative w-28 h-28 rounded-full border-2 border-zinc-700 p-[3px] mb-6 overflow-hidden">
                <img 
                   src="https://via.placeholder.com/150" 
                   alt="code_scientist69" 
                   className="w-full h-full rounded-full object-cover grayscale opacity-80" 
                />
            </div>

            <p className="text-xl font-bold text-white mb-6 tracking-tight">
              code_scientist69
            </p>

            {/* Blue Actions */}
            <div className="w-full space-y-2 mb-8">
                <button 
                  onClick={handleContinue}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 rounded-xl text-sm transition"
                >
                    Continue
                </button>
                <button className="w-full border border-zinc-700 bg-zinc-900 text-white font-semibold py-2 rounded-xl text-sm transition hover:bg-zinc-800">
                    Use another profile
                </button>
            </div>

            {/* Secondary Actions */}
            <div className="w-full space-y-2.5 border-t border-zinc-800 pt-6 text-center">
                <button className="text-sky-500 font-bold text-[13px] hover:text-white transition">
                   Create new account
                </button>
                <div className="text-center text-[11px] text-zinc-600 font-semibold tracking-wide uppercase mt-6">
                    from Meta
                </div>
            </div>
          </div>
          
          {/* Settings Gear */}
         
        </div>
      </div>

      {/* Footer Section */}
      <div className='w-full text-center pb-6 flex flex-col items-center gap-4 px-4'>
        <div className='flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-zinc-500'>
          {["Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations", "Instagram Lite", "Threads", "Contact Uploading & Non-Users", "Meta Verified"].map((link) => (
            <a key={link} href="#" className='hover:underline'>{link}</a>
          ))}
        </div>
        
        <div className='flex items-center gap-2 text-[11px] text-zinc-500 font-medium uppercase tracking-wider'>
          <span>© 2026 INSTAGRAM FROM META</span>
        </div>
      </div>
    </div>
  );
};

export default Login;