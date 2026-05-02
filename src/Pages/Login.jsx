

// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   // State to toggle between Login and Register
//   const [isRegister, setIsRegister] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Yahan aap apna backend logic ya Firebase add kar sakte hain
//     // Filhal hum direct login karwa rahe hain
//     if(email && password) {
//       onLogin();
//     } else {
//       alert("Please fill all fields");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       {/* Main Container reference from image_984438.png */}
//       <div className="w-full max-w-[350px] flex flex-col items-center">
        
//         <div className="w-full bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-3xl p-8 shadow-2xl flex flex-col items-center text-white border border-white/10">
          
//           {/* Instagram Branding */}
//           <h1 className="text-4xl font-serif mb-8 mt-4 italic font-bold tracking-tighter">
//             Instagram
//           </h1>

//           <form onSubmit={handleSubmit} className="w-full space-y-3">
//             {/* Conditional Full Name field for Register */}
//             {isRegister && (
//                <input
//                type="text"
//                placeholder="Full Name"
//                className="w-full p-3 bg-white/10 backdrop-blur-md text-white text-xs rounded-lg border border-white/20 focus:outline-none focus:border-white transition-all placeholder:text-gray-300"
//                required
//              />
//             )}

//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email address"
//               className="w-full p-3 bg-white/10 backdrop-blur-md text-white text-xs rounded-lg border border-white/20 focus:outline-none focus:border-white transition-all placeholder:text-gray-300"
//               required
//             />
            
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full p-3 bg-white/10 backdrop-blur-md text-white text-xs rounded-lg border border-white/20 focus:outline-none focus:border-white transition-all placeholder:text-gray-300"
//               required
//             />

//             {!isRegister && (
//               <p className="text-[10px] text-right font-medium cursor-pointer hover:underline opacity-80">
//                 Forgotten password?
//               </p>
//             )}

//             <button 
//               type="submit"
//               className="w-full bg-white text-black hover:bg-gray-200 transition-all py-2.5 rounded-xl font-bold text-sm mt-4 shadow-lg active:scale-95"
//             >
//               {isRegister ? "Sign Up" : "Log In"}
//             </button>
//           </form>

//           {/* Divider Line */}
//           <div className="flex items-center w-full my-8">
//             <div className="flex-1 h-[1px] bg-white/20"></div>
//             <p className="px-3 text-[10px] font-bold uppercase tracking-widest opacity-60">OR</p>
//             <div className="flex-1 h-[1px] bg-white/20"></div>
//           </div>

//           {/* Toggle Between Login/Register */}
//           <div className="text-center">
//             <p className="text-xs opacity-90">
//               {isRegister ? "Already have an account?" : "Don't have an account?"}
//               <button 
//                 onClick={() => setIsRegister(!isRegister)}
//                 className="ml-1 font-bold hover:underline underline-offset-4"
//               >
//                 {isRegister ? "Log In" : "Sign Up"}
//               </button>
//             </p>
//           </div>

//           {/* Bottom Border Decorative Line as seen in watermarked_img_12749156007209490570.png */}
//           <div className="w-20 h-1 bg-white/30 rounded-full mt-10"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      // --- REGISTER LOGIC ---
      const userData = {
        email: email,
        password: password,
        fullName: fullName
      };
      // Browser ki memory mein save kar rahe hain
      localStorage.setItem(email, JSON.stringify(userData));
      alert("Registration Successful! Ab login karein.");
      setIsRegister(false); // Register ke baad login page par le jao
    } else {
      // --- LOGIN LOGIC ---
      const savedUser = localStorage.getItem(email);
      
      if (savedUser) {
        const user = JSON.parse(savedUser);
        // Password check ho raha hai yahan
        if (user.password === password) {
          onLogin(); // Agar password match kar gaya to login ho jayega
        } else {
          alert("Your Passowrd is Wrong! Try again.");
        }
      } else {
        alert("This email is not registered. firstly you sign up .");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4  bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-none  shadow-2xl">
      <div className="w-full max-w-[350px] flex flex-col items-center">
        
        {/* White box jaisa image_98257b.png mein hai */}
        <div className="w-full bg-white rounded-sm p-8 shadow-md flex flex-col items-center text-gray-800 border border-gray-300">
          
          <h1 className="text-4xl font-serif mb-8 mt-4 italic font-bold tracking-tighter text-black">
            Instagram
          </h1>

          <form onSubmit={handleSubmit} className="w-full space-y-2">
            {isRegister && (
               <input
               type="text"
               placeholder="Full Name"
               value={fullName}
               onChange={(e) => setFullName(e.target.value)}
               className="w-full p-2 bg-gray-50 text-xs rounded-sm border border-gray-300 focus:outline-none focus:border-gray-400"
               required
             />
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full p-2 bg-gray-50 text-xs rounded-sm border border-gray-300 focus:outline-none focus:border-gray-400"
              required
            />
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 bg-gray-50 text-xs rounded-sm border border-gray-300 focus:outline-none focus:border-gray-400"
              required
            />

            <button 
              type="submit"
              className="w-full bg-[#0095f6] hover:bg-[#1877f2] text-white transition-all py-1.5 rounded font-bold text-sm mt-3"
            >
              {isRegister ? "Sign Up" : "Log In"}
            </button>
          </form>

          <div className="flex items-center w-full my-5">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="px-4 text-xs font-bold text-gray-500 uppercase">OR</p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <p className="text-xs text-[#385185] font-semibold cursor-pointer">
            {isRegister ? "By signing up, you agree to our Terms" : "Forgot password?"}
          </p>
        </div>

        {/* Bottom Box for Toggle */}
        <div className="w-full bg-white mt-3 p-5 border border-gray-300 text-center">
          <p className="text-sm text-gray-800">
            {isRegister ? "Have an account?" : "Don't have an account?"}
            <button 
              onClick={() => setIsRegister(!isRegister)}
              className="ml-1 font-bold text-[#0095f6] hover:underline"
            >
              {isRegister ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;