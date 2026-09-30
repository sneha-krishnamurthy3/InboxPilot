import React from 'react'

export default function About() {
    return (
        <section id="about" className="bg-dark-900 py-24 md:py-32 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12">
                <p className="text-base md:text-lg font-semibold tracking-widest text-orange-500 uppercase mb-8">
                    Our Mission
                </p>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start text-left">
                    <div className="flex-1 max-w-xl">
                        <h2 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-12 text-white text-left">
                            Built for
                            <br />
                            focus.
                        </h2>
                    </div>
                    <div className="flex-1 mt-8 lg:mt-0 text-left">
                        <p className="text-gray-400 text-lg lg:text-[19px] leading-relaxed mb-8">
                            InboxPilot was founded on a simple premise: your time is too valuable to spend managing your schedule.
                        </p>
                        <p className="text-gray-400 text-lg lg:text-[19px] leading-relaxed">
                            We are building the first autonomous AI agent that effectively acts as a Chief of Staff, seamlessly organizing your chaos into clarity while keeping your negotiations, VIP priorities, and ideas strictly private.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
