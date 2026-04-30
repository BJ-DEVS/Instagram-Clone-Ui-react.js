import { useState } from "react";

const INIT_MESSAGES = [
  { id: 1, text: "Bhai kya haal hai? 👋", sent: false, time: "10:30" },
  { id: 2, text: "Bilkul theek yaar! Tum batao 😄", sent: true, time: "10:31" },
  { id: 3, text: "Kal milne ka plan hai? ☕", sent: false, time: "10:32" },
  { id: 4, text: "Haan zaroor! Shaam ko milte hain 🤝", sent: true, time: "10:33" },
  { id: 5, text: "Perfect! 5 baje chai peete hain 😊", sent: false, time: "10:34" },
];

const Msge = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState(INIT_MESSAGES);
  const [showChat, setShowChat] = useState(false); // Mobile toggle ke liye

  const sendMsg = () => {
    if (!input.trim()) return;
    setChat((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-black text-white md:ml-20 overflow-hidden">
      
      {/* Left Sidebar - Inbox List */}
      <div className={`${showChat ? "hidden" : "flex"} w-full md:flex md:w-80 border-r border-neutral-800 flex-col`}>
        
        {/* Sidebar Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <span className="text-white font-semibold text-lg">faraz_official</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </div>

        {/* Chat List */}
        <div className="flex flex-col overflow-y-auto flex-1 pb-20 md:pb-0">
          {[
            { name: "Ali Raza", msg: "Kal milte hain!", time: "2m", unread: 2 },
            { name: "Sara Khan", msg: "Theek hai yaar 😊", time: "10m", unread: 0 },
            { name: "Ahmed Bhai", msg: "Send kar dena file", time: "1h", unread: 1 },
            { name: "Zara", msg: "Haha 😂 bilkul sahi", time: "3h", unread: 0 },
            { name: "Usman", msg: "Okay done ✅", time: "1d", unread: 0 },
          ].map((user, i) => (
            <div 
              key={i} 
              onClick={() => setShowChat(true)} // Mobile par chat kholne ke liye
              className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 cursor-pointer active:bg-neutral-800"
            >
              <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-black border-2 border-black overflow-hidden" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold truncate">{user.name}</span>
                  <span className="text-xs text-neutral-500">{user.time}</span>
                </div>
                <p className="text-xs text-neutral-400 truncate">{user.msg}</p>
              </div>
              {user.unread > 0 && (
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white bg-red-500">
                  {user.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right - Chat Window */}
      <div className={`${showChat ? "flex" : "hidden"} flex-1 md:flex flex-col h-full bg-black relative`}>

        {/* Chat Header */}
        <div className="px-5 py-3 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Back Button for Mobile */}
            <button onClick={() => setShowChat(false)} className="md:hidden text-white mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-neutral-700" />
            <div>
              <p className="font-semibold text-sm">Ali Raza</p>
              <p className="text-[10px] text-green-500">Active now</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
             <svg className="hidden sm:block" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92V21a2 2 0 01-2.18 2A19.79 19.79 0 013.07 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L10.09 10a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z" /></svg>
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 pb-24 md:pb-4">
          {chat.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-2 ${msg.sent ? "flex-row-reverse" : ""}`}>
              <div
                className={`px-4 py-2 max-w-[75%] sm:max-w-xs text-sm text-white ${
                  msg.sent
                    ? "rounded-[18px_18px_4px_18px] bg-blue-600"
                    : "rounded-[18px_18px_18px_4px] bg-neutral-800"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-neutral-600 text-[10px] mb-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Input Bar - Fixed at bottom for mobile */}
        <div className="p-4 bg-black border-t border-neutral-800 md:relative absolute bottom-0 w-full">
          <div className="flex items-center gap-3 bg-neutral-900 rounded-full px-4 py-2 border border-neutral-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMsg()}
              placeholder="Message..."
              className="bg-transparent text-sm outline-none w-full"
            />
            <button onClick={sendMsg} className="text-blue-500 font-bold text-sm">Send</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Msge;








