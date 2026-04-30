import './index.css'
import Navbar from "./Component/Navbar.jsx"
import Home from "./Pages/Home.jsx"
import Reel from "./Pages/Reel.jsx"
import Msge from './Pages/Msge.jsx'
import Search from "./Pages/Search.jsx"
import Explore from "./Pages/Explore.jsx"
import Notification from "./Pages/Notification.jsx"
import Create from "./Pages/Create.jsx"
import Profile from "./Pages/Profile.jsx"
import More from "./Pages/More.jsx"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react";


// Messages Pill - Sirf Desktop/Tablet par dikhegi
function MessagesPill() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/Msge")}
      className="fixed bottom-6 right-6 hidden md:flex items-center gap-3 bg-neutral-800 rounded-full px-6 py-3 cursor-pointer hover:bg-neutral-700 transition-all z-50 shadow-lg border border-white/10"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
      <span className="text-white font-semibold text-sm">Messages</span>
    </div>
  );
}

function App() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <Router>
      {/* Container flex-col (mobile) aur md:flex-row (desktop) */}
      <div className="flex flex-col md:flex-row min-h-screen bg-black">
        
        {/* Sidebar/Navbar */}
        <Navbar setOpenSearch={setOpenSearch} openSearch={openSearch} />

        {/* Content Area: Mobile par ml-0 aur desktop par ml-20 */}
        <div className="flex-1 transition-all duration-300 ml-0 md:ml-20">
          
          {/* Main Routes */}
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Reel" element={<Reel />} />
              <Route path="/Msge" element={<Msge />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Explore" element={<Explore />} />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/Create" element={<Create />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/More" element={<More />} />
            </Routes>
          </div>

          {/* Messages Pill - Mobile par hide  */}
          <MessagesPill />

          {/* Search Overlay */}
          <Search open={openSearch} setOpen={setOpenSearch} />
          
        </div>
      </div>
    </Router>
  );
}

export default App;








// import './index.css'
// import Navbar from "./Component/Navbar.jsx"
// import Home from "./Pages/Home.jsx"
// import Reel from "./Pages/Reel.jsx"
// import Msge from './Pages/Msge.jsx'
// import Search from "./Pages/Search.jsx"
// import Explore from "./Pages/Explore.jsx"
// import Notification from "./Pages/Notification.jsx"
// import Create from "./Pages/Create.jsx"
// import Profile from "./Pages/Profile.jsx"
// import More from "./Pages/More.jsx"
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
// import { useState } from "react";
// import Login from './Pages/Login.jsx'

// // ✅ Alag component - Router ke andar render hoga
// function MessagesPill() {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate("/Msge")}
//       className=" fixed bottom-6 right-30 flex items-center gap-3 bg-neutral-800 rounded-full px-18 py-4 cursor-pointer hover:bg-neutral-700 transition-all z-50"
//     >
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//         <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
//       </svg>
//       <span className="text-white font-semibold text-base">Messages</span>
      
//     </div>
//   );
// }

// function App() {
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <Router>
//       <div className="flex">
//         <Navbar setOpenSearch={setOpenSearch} openSearch={openSearch} />

//         <div className="flex-1 ml-20 transition-all duration-300">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/Reel" element={<Reel />} />
//             <Route path="/Msge" element={<Msge />} />
//             <Route path="/Search" element={<Search />} />
//             <Route path="/Explore" element={<Explore />} />
//             <Route path="/Notification" element={<Notification />} />
//             <Route path="/Create" element={<Create />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="/More" element={<More />} />
//           </Routes>

//           {/* ✅ Pill yahan hai - Router ke andar */}
//           <MessagesPill />

//           <Search open={openSearch} setOpen={setOpenSearch} />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



