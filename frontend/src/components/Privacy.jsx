import React from 'react'

const features = [
    {
        icon: (
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        title: 'End-to-end encryption',
        description: 'Your data is encrypted in transit and at rest.',
    },
    {
        icon: (
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
        ),
        title: 'No training on your data',
        description: 'We never use your data to train our models.',
    },
    {
        icon: (
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: 'SOC 2 Type II compliant',
        description: 'Enterprise-grade security you can trust.',
    },
]

export default function Privacy() {
    return (
        <section id="privacy" className="bg-dark-900 py-24 md:py-32">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12">
                {/* Section Label */}
                <p className="text-base md:text-lg font-semibold tracking-widest text-orange-500 uppercase mb-8">
                    Privacy by design
                </p>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
                    {/* Left */}
                    <div className="flex-1 max-w-xl text-left">
                        <h2 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-12 text-white text-left">
                            Your data.
                            <br />
                            Your rules.
                        </h2>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-4 text-base text-gray-400">
                                <div className="w-14 h-14 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-semibold">SOC 2</div>
                                    <div className="text-gray-500 text-xs">TYPE II</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-base text-gray-400">
                                <div className="w-14 h-14 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">GDPR</span>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-semibold">GDPR</div>
                                    <div className="text-gray-500 text-xs">READY</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-base text-gray-400">
                                <div className="w-14 h-14 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">ISO</span>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-semibold">ISO 27001</div>
                                    <div className="text-gray-500 text-xs">CERTIFIED</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Feature List */}
                    <div className="flex-1 space-y-12">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-dark-700 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 scale-125 origion-top">
                                    {feature.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-white font-semibold text-2xl mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-lg lg:text-[19px] leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
