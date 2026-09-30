import React from 'react'

export default function Hero({ onOpenWaitlist }) {
    return (
        <section className="relative bg-dark-900 pt-32 pb-16 overflow-hidden">
            {/* Background glowing effect */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto w-full px-8 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                {/* Left Content */}
                <div className="flex-1 z-10 lg:pr-8 w-full max-w-2xl text-left">
                    <h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 text-white text-left">
                        Your inbox.
                        <br />
                        On <span className="text-orange-500">autopilot.</span>
                    </h1>

                    <p className="text-gray-400 text-lg lg:text-[19px] max-w-[420px] mb-10 leading-relaxed text-left">
                        InboxPilot is an autonomous AI agent that manages email triage, calendar scheduling, and task backlogs—so you can focus on what matters.
                    </p>

                    {/* Email Input + CTA (Connected Shape) */}
                    <div className="flex w-full max-w-[440px] bg-[#0a0a0a] border border-white/10 rounded-[12px] p-1 mb-8 shadow-2xl">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent px-5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
                        />
                        <button onClick={onOpenWaitlist} className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-3.5 rounded-[10px] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2">
                            Join waitlist →
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-4">
                        {/* Avatar Stack */}
                        <div className="flex -space-x-3">
                            {['#ff5c00', '#e85500', '#ff8a47', '#cc4a00'].map((color, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-[3px] border-dark-900 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden bg-gray-800"
                                    style={{ zIndex: 5 - i }}
                                >
                                    {/* Mock image for avatars */}
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}&backgroundColor=transparent')` }} />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs text-gray-500 leading-[1.4] text-left">
                            <span className="text-white font-medium">1,240+ professionals</span>
                            <br />
                            on the waitlist.
                        </div>
                    </div>
                </div>

                {/* Right - Hero Image Area */}
                <div className="flex-1 relative z-10 w-full flex justify-end mt-12 lg:mt-0">
                    <div className="relative w-full max-w-[650px] flex items-center justify-end">
                        <img
                            src="/Hero image.png"
                            alt="InboxPilot AI Agent"
                            className="w-full h-auto object-contain rounded-[32px] drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
