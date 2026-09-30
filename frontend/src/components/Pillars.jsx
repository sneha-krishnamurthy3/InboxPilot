import React from 'react'

const pillars = [
    {
        number: '01',
        title: 'Smart Triage',
        description: 'AI prioritizes, replies, and organizes your emails so nothing important slips through.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
        ),
    },
    {
        number: '02',
        title: '1-Click Scheduling',
        description: 'Find the perfect time, lock the slot, and send invites—instantly.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Task Backlog',
        description: 'AI captures tasks, deduplicates, prioritizes, and keeps your backlog actionable.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
        ),
    },
]

export default function Pillars() {
    return (
        <section id="features" className="bg-dark-900 py-24 md:py-32">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12">
                {/* Section Label */}
                <p className="text-base md:text-lg font-semibold tracking-widest text-orange-500 uppercase mb-6">
                    AI that works while you do
                </p>

                {/* Heading */}
                <h2 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-20 lg:max-w-4xl text-white">
                    Three pillars. Zero clutter.
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.number}
                            className="group bg-dark-800 border border-white/5 rounded-3xl p-10 lg:p-12 hover:border-orange-500/20 transition-all duration-300 hover:bg-dark-700/50 flex flex-col"
                        >
                            {/* Number & Icon Badge */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="inline-flex items-center gap-2 bg-dark-600 rounded-full px-3 py-1">
                                    <span className="text-orange-500 text-xs font-bold">{pillar.number}</span>
                                </div>
                                <div className="text-orange-500 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                                    {pillar.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold mb-4">{pillar.title}</h3>

                            {/* Description */}
                            <p className="text-gray-400 text-lg lg:text-[19px] leading-relaxed mb-10 flex-grow">
                                {pillar.description}
                            </p>

                            {/* Arrow Link */}
                            <div className="text-orange-500 group-hover:translate-x-2 transition-transform duration-200 mt-auto text-xl">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
