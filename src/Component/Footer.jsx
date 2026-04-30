

import React, { useState } from 'react';

const suggestions = [
  { id: 1, name: 'BÂHÄWÄL ÇHÂÑÑÂR', details: 'Followed by mubeen_7254' },
  { id: 2, name: 'Ann Townend', details: 'Following benatiaa52 + 35 m' },
  { id: 3, name: 'Penelope Lowes', details: 'Following benatiaa52 + 36 m' },
  { id: 4, name: 'Cold was prime', details: 'Following benatiaa52 + 34 m' },
  { id: 5, name: 'tyson.metcalfe', details: 'Following benatiaa52 + 36 m' },
];

const Avatar = ({ name, size = 'md' }) => {
  const sizes = { sm: 'h-8 w-8 text-[10px]', md: 'h-11 w-11 text-base' };
  return (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px] shrink-0`}>
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-white">
        {name[0].toUpperCase()}
      </div>
    </div>
  );
};

const Footer = () => {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (id) =>
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:block fixed right-[4%] xl:right-[8%] 2xl:right-[12%] top-10 w-[300px] xl:w-[320px] text-white">
        
        {/* Current user */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar name="C" />
            <div>
              <p className="text-sm font-semibold">code_scientist69</p>
              <p className="text-xs text-[#737373]">Code_Scientist</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-[#0095f6] hover:text-white transition">
            Switch
          </button>
        </div>

        {/* Suggested header */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#737373]">Suggested for you</p>
          <button className="text-xs font-semibold text-white hover:text-[#737373] transition">
            See all
          </button>
        </div>

        {/* Suggestions */}
        <SuggestionList
          suggestions={suggestions}
          followed={followed}
          onToggle={toggleFollow}
        />

        <FooterLinks />
      </aside>

      {/* ── Mobile bottom bar (suggested pill row) ── */}
      <div className="hidden lg:hidden fixed bottom-16 left-0 right-0 z-30 px-4 pb-2">
        <div className="bg-[#1c1c1c] rounded-2xl p-3 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-[#737373]">Suggested</p>
            <button className="text-[11px] font-semibold text-[#0095f6]">See all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {suggestions.map((user) => (
              <div key={user.id} className="flex flex-col items-center gap-1.5 shrink-0 w-16">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold text-white">
                    {user.name[0].toUpperCase()}
                  </div>
                </div>
                <p className="text-[10px] text-white text-center w-full truncate leading-tight">
                  {user.name.split(' ')[0]}
                </p>
                <button
                  onClick={() => toggleFollow(user.id)}
                  className={`text-[10px] font-semibold px-3 py-0.5 rounded-full transition ${
                    followed[user.id]
                      ? 'bg-white/10 text-white'
                      : 'bg-[#0095f6] text-white'
                  }`}
                >
                  {followed[user.id] ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const SuggestionList = ({ suggestions, followed, onToggle }) => (
  <div className="mt-4 space-y-4">
    {suggestions.map((user) => (
      <div key={user.id} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={user.name} size="sm" />
          <div>
            <p className="text-sm font-semibold hover:underline cursor-pointer truncate max-w-[140px]">
              {user.name}
            </p>
            <p className="text-[11px] text-[#737373] truncate max-w-[140px]">
              {user.details}
            </p>
          </div>
        </div>
        <button
          onClick={() => onToggle(user.id)}
          className={`text-xs font-semibold transition ${
            followed[user.id]
              ? 'text-white/60 hover:text-white'
              : 'text-[#0095f6] hover:text-white'
          }`}
        >
          {followed[user.id] ? 'Following' : 'Follow'}
        </button>
      </div>
    ))}
  </div>
);

const FooterLinks = () => (
  <div className="mt-8">
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {['Meta','About','Blog','Jobs','Help','API','Privacy','Terms','Locations','Meta Verified'].map((link) => (
        <a key={link} href="#" className="text-[11px] text-[#737373] hover:underline">
          {link} ·
        </a>
      ))}
    </div>
    <p className="mt-3 text-[11px] text-[#737373] uppercase tracking-wide">
      © 2026 Instagram from Meta
    </p>
  </div>
);

export default Footer;











