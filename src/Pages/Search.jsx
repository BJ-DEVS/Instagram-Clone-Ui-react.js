import { IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect } from "react";

const Search = ({ open, setOpen }) => {

  // Body scroll lock when open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        />
      )}

      {/* Drawer — left side on desktop, bottom sheet on mobile */}
      <div
        className={`
          fixed z-50 bg-[#0c0c0c] text-white transition-transform duration-300 ease-in-out

          /* Mobile: bottom sheet */
          bottom-0 left-0 right-0 rounded-t-3xl h-[85dvh]
          ${open ? "translate-y-0" : "translate-y-full"}

          /* Desktop: left side drawer */
          sm:top-0 sm:bottom-auto sm:right-auto sm:left-0
          sm:h-full sm:w-[360px] sm:rounded-none
          ${open ? "sm:translate-x-0 sm:translate-y-0" : "sm:-translate-x-full sm:translate-y-0"}
        `}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h1 className="text-lg font-semibold">Search</h1>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-full text-white/60 hover:text-white transition-colors"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Search Input */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2.5">
            <IoSearchOutline size={16} className="text-white/40 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white text-[15px] w-full placeholder:text-white/35"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Recent */}
        <div className="px-5 pt-1">
          <p className="text-[13px] text-white/45 mb-4">Recent</p>

          <div className="flex items-center justify-center mt-24">
            <p className="text-sm text-white/30">No recent searches.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;




