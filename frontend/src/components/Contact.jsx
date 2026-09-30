import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="bg-dark-950 py-24 md:py-32 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 text-center text-white">
                <p className="text-base md:text-lg font-semibold tracking-widest text-orange-500 uppercase mb-8">
                    Get in Touch
                </p>
                <h2 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-12 max-w-4xl mx-auto text-white">
                    Let's shift the way you work.
                </h2>
                <div className="flex items-center justify-center gap-6">
                    <a href="mailto:hello@inboxpilot.example.com" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer">
                        Email Us
                    </a>
                    <a href="#" className="bg-dark-800 hover:bg-dark-700 text-white text-lg font-semibold px-8 py-4 rounded-full border border-white/10 transition-all duration-200 cursor-pointer">
                        Twitter / X
                    </a>
                </div>
            </div>
        </section>
    )
}
