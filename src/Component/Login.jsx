import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan aap apni authentication logic daal sakte hain
    console.log("Logging in...", { email, password });
    navigate('/Home'); // Login ke baad home par bhej dega
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      
      {/* Main Login Box */}
      <div className="w-full max-w-[350px] space-y-3">
        
        <div className="bg-black border border-zinc-800 p-10 flex flex-col items-center rounded-sm">
          {/* Logo Placeholder */}
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tighter italic">
            Instagram
          </h1>

          <form onSubmit={handleLogin} className="w-full space-y-2">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full bg-zinc-900 border border-zinc-800 text-white p-2 text-xs rounded-sm focus:outline-none focus:border-zinc-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-zinc-900 border border-zinc-800 text-white p-2 text-xs rounded-sm focus:outline-none focus:border-zinc-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button 
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-1.5 rounded-lg text-sm transition mt-4 disabled:opacity-50"
              disabled={!email || !password}
            >
              Log in
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-[1px] bg-zinc-800"></div>
              <span className="px-4 text-[13px] text-zinc-500 font-bold uppercase">OR</span>
              <div className="flex-1 h-[1px] bg-zinc-800"></div>
            </div>

            {/* Facebook Login Mockup */}
            <button type="button" className="w-full text-indigo-400 font-bold text-sm flex items-center justify-center gap-2">
              <span className="text-lg">f</span> Log in with Facebook
            </button>

            <a href="#" className="block text-center text-xs text-zinc-400 mt-4 hover:underline">
              Forgot password?
            </a>
          </form>
        </div>

        {/* Sign Up Box */}
        <div className="bg-black border border-zinc-800 p-6 text-center rounded-sm">
          <p className="text-sm text-white">
            Don't have an account? <span className="text-sky-500 font-bold cursor-pointer hover:underline">Sign up</span>
          </p>
        </div>

        {/* App Links Section */}
        <div className="text-center space-y-4">
          <p className="text-sm text-white">Get the app.</p>
          <div className="flex justify-center gap-2">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym_f00.png" alt="App Store" className="h-10 cursor-pointer" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6Q1asE7y.png" alt="Google Play" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Copy (Pichle wala footer yahan chhota karke use ho sakta hai) */}
      <div className="mt-16 text-[12px] text-zinc-500 flex flex-wrap justify-center gap-4 px-4 text-center">
        <span>Meta</span> <span>About</span> <span>Blog</span> <span>Jobs</span> <span>API</span>
        <span>Privacy</span> <span>Terms</span> <span>Locations</span> <span>Instagram Lite</span>
      </div>
    </div>
  );
};

export default Login;