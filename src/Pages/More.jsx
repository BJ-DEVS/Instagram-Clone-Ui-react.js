import { useNavigate } from "react-router-dom";
import {
  FiSettings, FiActivity, FiBookmark, FiMoon,
  FiAlertTriangle, FiMessageCircle, FiUsers, FiLogOut
} from "react-icons/fi";

const menuItems = [
  { label: "Settings",          icon: FiSettings },
  { label: "Your activity",     icon: FiActivity },
  { label: "Saved",             icon: FiBookmark },
  { label: "Switch appearance", icon: FiMoon },
  { label: "Report a problem",  icon: FiAlertTriangle },
  { label: "Threads",           icon: FiMessageCircle },
  { label: "Switch accounts",   icon: FiUsers },
];

const More = () => {
  const navigate = useNavigate();
  const handleClose = () => navigate(-1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm px-0 sm:px-4"
      onClick={handleClose}
    >
      <div
        className="w-full sm:max-w-md bg-black text-white
                   rounded-t-3xl sm:rounded-3xl
                   ring-1 ring-white/10 overflow-hidden
                   pb-safe"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Drag handle — mobile only */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold tracking-tight">More</h2>
          <button
            onClick={handleClose}
            className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium
                       transition hover:bg-white/20 active:scale-95"
          >
            Close
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-3 py-3 space-y-0.5">
          {menuItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={handleClose}
              className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5
                         text-left transition hover:bg-white/10 active:bg-white/5"
            >
              <Icon
                size={22}
                className="text-white/70 group-hover:text-white transition-colors duration-200 shrink-0"
              />
              <span className="text-[15px] font-medium text-white/85 group-hover:text-white">
                {label}
              </span>
            </button>
          ))}

          {/* Divider */}
          <div className="my-1 border-t border-white/10" />

          {/* Log out — separate with red color */}
          <button
            onClick={handleClose}
            className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5
                       text-left transition hover:bg-red-500/10 active:bg-red-500/5"
          >
            <FiLogOut
              size={22}
              className="text-red-500 shrink-0"
            />
            <span className="text-[15px] font-medium text-red-500">
              Log out
            </span>
          </button>
        </div>

        {/* Bottom safe area for iOS */}
        <div className="h-4 sm:h-0" />
      </div>
    </div>
  );
};

export default More;
















