import React from 'react'

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: 'For getting started',
        features: [
            'Up to 100 emails/day',
            'Basic triage',
            'Scale anywhere',
        ],
        cta: 'Join waitlist',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$12',
        period: 'per seat / month',
        features: [
            'Unlimited emails',
            'Unlimited triage',
            'Priority support',
        ],
        cta: 'Join waitlist',
        popular: true,
    },
    {
        name: 'Team',
        price: '$24',
        period: 'per seat / month',
        features: [
            'Everything in Pro',
            'Dedicated support',
            'Enhanced security',
        ],
        cta: 'Join waitlist',
        popular: false,
    },
]

export default function Pricing({ onOpenWaitlist }) {
    return (
        <section id="pricing" className="bg-dark-950 py-24 md:py-32 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12">
                {/* Section Label */}
                <p className="text-base md:text-lg font-semibold tracking-widest text-orange-500 uppercase mb-6">
                    Simple pricing
                </p>

                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                    {/* Left */}
                    <div className="flex-1 max-w-xl text-left">
                        <h2 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 text-white text-left">
                            Start free.
                            <br />
                            Scale when
                            <br />
                            you're ready.
                        </h2>
                        <p className="text-gray-400 text-lg lg:text-[19px] leading-relaxed mb-10 text-left">
                            Join the waitlist and get early access.
                        </p>
                        <button onClick={onOpenWaitlist} className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer">
                            Join waitlist →
                        </button>
                    </div>

                    {/* Right - Pricing Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative bg-dark-800 border rounded-3xl p-8 flex flex-col ${plan.popular
                                    ? 'border-orange-500/40'
                                    : 'border-white/5'
                                    }`}
                            >
                                {/* Popular Badge Removed */}

                                {/* Plan Name */}
                                <h3 className="text-white font-semibold text-2xl mb-4">{plan.name}</h3>

                                {/* Price */}
                                <div className="mb-2">
                                    <span className="text-5xl lg:text-6xl font-bold text-white">{plan.price}</span>
                                </div>
                                <p className="text-gray-500 text-base mb-8">{plan.period}</p>

                                {/* Divider */}
                                <div className="border-t border-white/5 mb-8"></div>

                                {/* Features */}
                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-base text-gray-300">
                                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={onOpenWaitlist}
                                    className={`w-full py-4 rounded-full text-base font-semibold transition-all duration-200 cursor-pointer ${plan.popular
                                        ? 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25'
                                        : 'bg-dark-600 hover:bg-dark-500 text-white border border-white/10'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
