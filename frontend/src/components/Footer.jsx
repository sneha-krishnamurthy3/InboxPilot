import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark-950 border-t border-white/5 py-8">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-white font-bold text-sm">
                    <span className="text-orange-500">⚡</span>
                    <span>InboxPilot</span>
                </a>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <a href="#privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
                    <a href="#about" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">About</a>
                    <a href="#contact" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Contact</a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-600">
                    © 2026 InboxPilot. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
