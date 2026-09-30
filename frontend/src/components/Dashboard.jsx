import React, { useState } from 'react'

export default function Dashboard({ onOpenVideo }) {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <section id="how-it-works" className="bg-dark-950 py-24 md:py-32 border-y border-white/5">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12">
                {/* Section Label */}
                <p className="text-base md:text-lg font-semibold tracking-widest text-orange-500 uppercase mb-6">
                    See it in action
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 max-w-xl">
                        <h2 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 text-white text-left">
                            From chaos
                            <br />
                            to clarity.
                        </h2>
                        <p className="text-gray-400 text-lg lg:text-[19px] leading-relaxed mb-10 text-left">
                            InboxPilot connects the dots across your inbox, calendar, and tools to keep your day moving forward.
                        </p>
                        <button onClick={onOpenVideo} className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-400 font-bold text-lg group cursor-pointer uppercase tracking-wider">
                            <span>WATCH DEMO</span>
                            <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                                {/* Corrected Play Icon */}
                                <svg className="w-4 h-4 ml-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Right - Dashboard Preview */}
                    <div className="flex-1 w-full">
                        <div className="bg-dark-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500 text-sm">⚡</span>
                                    <span className="text-white text-sm font-semibold">InboxPilot</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-4">
                                    {['Overview', 'Emails', 'Tasks'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`text-sm tracking-wide transition-colors cursor-pointer ${activeTab === tab ? 'text-white font-semibold' : 'text-gray-500 hover:text-gray-300'}`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <button className="bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                    Refresh Sync
                                </button>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6">
                                {/* Sidebar + Main area */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Sidebar */}
                                    <div className="flex flex-row md:flex-col gap-1 md:min-w-[140px] overflow-x-auto pb-2 md:pb-0">
                                        <div className="hidden md:block text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Menu</div>
                                        {['Overview', 'Emails', 'Tasks', 'Calendar'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === tab
                                                    ? 'text-white bg-dark-600/50 shadow-inner'
                                                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                                    }`}
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeTab === tab ? 'bg-orange-500' : 'bg-gray-600'}`}></span>
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Main Content Area Container that reacts to tabs */}
                                    <div className="flex-1 transition-all duration-300 min-h-[220px]">
                                        {activeTab === 'Overview' && (
                                            <div>
                                                {/* Stats Row */}
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                                    <div className="bg-dark-700/50 rounded-xl p-4 border border-white/5">
                                                        <div className="text-xs text-gray-500 mb-1 font-medium tracking-wide w-full flex justify-between">Triaged <span className="text-orange-500 font-normal underline cursor-pointer hover:text-orange-400">View</span></div>
                                                        <div className="flex items-baseline gap-1">
                                                            <span className="text-3xl font-bold text-white tracking-tight">128</span>
                                                            <span className="text-orange-500 text-xs font-medium">VIPs</span>
                                                        </div>
                                                    </div>
                                                    <div className="bg-dark-700/50 rounded-xl p-4 border border-white/5">
                                                        <div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">Scheduled</div>
                                                        <div className="flex items-baseline gap-1">
                                                            <span className="text-3xl font-bold text-white tracking-tight">8</span>
                                                            <span className="text-orange-500 text-xs font-medium">events</span>
                                                        </div>
                                                    </div>
                                                    <div className="bg-dark-700/50 rounded-xl p-4 border border-white/5">
                                                        <div className="text-xs text-gray-500 mb-1 font-medium tracking-wide w-full flex justify-between">Tasks <button className="cursor-pointer font-bold text-white hover:text-orange-500">+</button></div>
                                                        <div className="flex items-baseline gap-1">
                                                            <span className="text-3xl font-bold text-white tracking-tight">23</span>
                                                            <span className="text-orange-500 text-xs font-medium">pending</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Recent Activity */}
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-300 mb-3 tracking-wide">Recent activity</h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                                            <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                                                                <span className="text-orange-500 text-sm">📅</span>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-white font-medium">Product workshop scheduled</p>
                                                                <p className="text-xs text-gray-500 mt-0.5">AI auto-negotiated slot to next Monday</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                                            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                                                                <span className="text-green-500 text-sm">✓</span>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-white font-medium">Sales inquiry sorted</p>
                                                                <p className="text-xs text-gray-500 mt-0.5">InboxPilot drafted a warm response automatically</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'Emails' && (
                                            <div className="bg-dark-700/30 rounded-xl h-full flex flex-col items-center justify-center py-12 border border-white/5 border-dashed">
                                                <span className="text-4xl mb-4">📧</span>
                                                <h3 className="text-white font-semibold mb-2">Inbox Zero Achieved</h3>
                                                <p className="text-gray-500 text-sm text-center max-w-xs">Your AI has proactively answered and triaged 42 unimportant threads today.</p>
                                                <button className="mt-6 text-sm text-orange-500 font-medium hover:text-orange-400 cursor-pointer">Open VIP Folder →</button>
                                            </div>
                                        )}

                                        {activeTab === 'Tasks' && (
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-300 mb-4 tracking-wide">Backlog Prioritized by AI</h4>
                                                {['Prepare Q4 deck', 'Approve marketing budget', 'Review design assets'].map((task, i) => (
                                                    <div key={i} className="flex items-center gap-4 bg-dark-700/50 p-3 rounded-lg border border-white/5 hover:border-orange-500/30 cursor-pointer transition-colors group">
                                                        <div className="w-5 h-5 rounded border border-gray-600 flex items-center justify-center group-hover:border-orange-500 transition-colors"></div>
                                                        <span className="text-sm font-medium text-white group-hover:text-orange-500 transition-colors">{task}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === 'Calendar' && (
                                            <div className="bg-dark-700/30 rounded-xl h-full flex flex-col items-center justify-center py-12 border border-white/5 border-dashed">
                                                <span className="text-4xl mb-4">⏱️</span>
                                                <h3 className="text-white font-semibold mb-2">You recovered 4 hours</h3>
                                                <p className="text-gray-500 text-sm text-center max-w-xs">AI guarded your deep-work block preventing 3 conflicting meetings from landing.</p>
                                                <button className="mt-6 text-sm text-orange-500 font-medium hover:text-orange-400 cursor-pointer">View Schedule →</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
