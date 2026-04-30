import { useState } from 'react'

const notifications = [
  {
    id: 1,
    title: 'New Activity',
    description: 'New activity in your account. Someone tried to login from a new device.',
    date: 'Mar 17',
  },
  {
    id: 2,
    title: 'Post Comment',
    description: 'Someone commented on your post: "Great work on the UI!"',
    date: 'Mar 16',
  },
  {
    id: 3,
    title: 'New Like',
    description: 'Your post has a new like from 5 different users.',
    date: 'Mar 13',
  },
]

const Notification = () => {
  const [selected, setSelected] = useState(notifications[0])

  return (
    <div className='relative min-h-screen bg-slate-950 text-white'>
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-slate-950/95' />
      
      <div className='relative min-h-screen'>
        {/* Responsive Sidebar Container */}
        <div className='fixed right-0 top-0 z-50 h-full w-full border-l border-slate-800 bg-slate-950/98 p-4 md:p-6 shadow-2xl shadow-black/40 md:max-w-[420px] overflow-y-auto scrollbar-hide'>
          
          {/* Header Section */}
          <div className='flex flex-col gap-4 pb-6 sm:flex-row sm:items-center sm:justify-between'>
            <h1 className='text-2xl md:text-3xl font-semibold tracking-tight'>Notifications</h1>
            
            <div className='flex gap-2'>
              <button className='flex-1 sm:flex-none rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:border-slate-500'>
                All
              </button>
              <button className='flex-1 sm:flex-none rounded-full border border-slate-600 bg-transparent px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500'>
                Comments
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className='space-y-3'>
            {notifications.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`w-full rounded-2xl md:rounded-3xl border px-4 py-4 text-left transition ${
                  selected.id === item.id
                    ? 'border-slate-500 bg-slate-800 shadow-lg shadow-cyan-500/10'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-600 hover:bg-slate-900'
                }`}
              >
                <div className='flex items-start justify-between gap-3'>
                  <p className='text-xs md:text-sm font-semibold text-white leading-relaxed'>
                    {item.description}
                  </p>
                  <span className='whitespace-now80 text-[10px] text-slate-400'>
                    {item.date}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Hint Box (Optional for mobile) */}
          <div className='mt-8 hidden md:block rounded-3xl border border-slate-800 bg-slate-900/50 p-6 text-sm text-slate-400'>
            <p>Click any notification to show its detail here.</p>
          </div>

          {/* Details Section - Dynamic Height */}
          <div className='mt-6 rounded-2xl md:rounded-3xl border border-slate-800 bg-slate-900 p-5 md:p-6 mb-10'>
            <div className='flex items-center gap-2 mb-3'>
               <div className='h-2 w-2 rounded-full bg-cyan-500 animate-pulse'></div>
               <h2 className='text-lg font-semibold text-white'>{selected.title}</h2>
            </div>
            <p className='text-sm text-slate-300 leading-relaxed'>{selected.description}</p>
            <p className='mt-5 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold'>
              Received: {selected.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification





