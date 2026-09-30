import React, { useState } from 'react'

export default function Navbar({ onOpenWaitlist }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-3 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
                    <span className="text-orange-500 text-xl">⚡</span>
                    <span>InboxPilot</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Product</a>
                    <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">How it works</a>
                    <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy</a>
                    <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
                    <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">About</a>
                </div>

                {/* CTA Button */}
                <button
                    onClick={onOpenWaitlist}
                    className="hidden md:inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer"
                >
                    Join waitlist →
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-dark-800 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
                    <a href="#features" className="text-sm text-gray-400 hover:text-white">Product</a>
                    <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white">How it works</a>
                    <a href="#privacy" className="text-sm text-gray-400 hover:text-white">Privacy</a>
                    <a href="#pricing" className="text-sm text-gray-400 hover:text-white">Pricing</a>
                    <a href="#about" className="text-sm text-gray-400 hover:text-white">About</a>
                    <button onClick={onOpenWaitlist} className="inline-flex items-center justify-center gap-1 bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer">
                        Join waitlist →
                    </button>
                </div>
            )}
        </nav>
    )
}
