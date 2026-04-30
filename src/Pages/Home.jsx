

import Hero from "../Component/Hero.jsx"
import Footer from "../Component/Footer.jsx"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Main Wrapper: 
          md:pl-20 (Left Navbar ke liye space)
          max-w-[935px] (Instagram ka standard content width)
      */}
      <div className="flex justify-center max-w-[1200px] mx-auto pt-8 px-4 md:pl-20 lg:pl-0">
        
        {/* Left Side: Hero/Posts Section */}
        <main className="w-full max-w-[630px] flex-shrink-0">
          <Hero />
        </main>

        {/* Right Side: Sidebar (Footer) 
            - lg:block: Sirf bari screen par dikhega
            - sticky: Scroll karte waqt apni jagah rahega
        */}
        <aside className="hidden lg:block w-[320px] ml-12 sticky top-8 h-fit">
          <Footer />
        </aside>

      </div>
    </div>
  )
}

export default Home