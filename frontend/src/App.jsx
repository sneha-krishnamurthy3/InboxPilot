import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Dashboard from './components/Dashboard'
import Privacy from './components/Privacy'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-dark-900 relative">
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Pillars />
      <Dashboard onOpenVideo={() => setIsVideoOpen(true)} />
      <Privacy />
      <Pricing onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <About />
      <Contact />
      <Footer />

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-dark-800 border border-white/10 rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsWaitlistOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-6">
              <span className="text-orange-500 text-3xl mb-2 block">⚡</span>
              <h3 className="text-2xl font-bold text-white mb-2">Join the waitlist</h3>
              <p className="text-gray-400 text-sm">Be the first to know when InboxPilot launches.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Saved to waitlist!'); setIsWaitlistOpen(false); }} className="space-y-4">
              <input
                autoFocus
                type="email"
                required
                placeholder="Secure your spot with email..."
                className="w-full bg-dark-900 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer"
              >
                Get early access
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200" onClick={() => setIsVideoOpen(false)}>
          <div className="w-full max-w-5xl aspect-video bg-dark-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white cursor-pointer z-10 p-2 bg-black/50 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg">Product tour video placeholder</p>
              <p className="text-gray-500 text-sm mt-2">The full demo video would play here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
