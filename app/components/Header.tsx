'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* Logo - Brand colors: teal + orange matching clinic identity */}
                <Link href="/" className="logo flex items-center gap-2 no-underline">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white text-sm font-black tracking-tight leading-none"
                        style={{ backgroundColor: '#1a5c6b', letterSpacing: '-0.5px' }}>
                        <span style={{ fontSize: '8px', lineHeight: '1.1', textAlign: 'center' }}>NA<br/>NUM</span>
                    </span>
                    <span className="text-xl font-black tracking-tight" style={{ color: '#1a5c6b' }}>
                        청라나눔내과
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="main-nav">
                    <Link href="/blog" className="nav-link">건강정보</Link>
                    <a href="https://map.naver.com/p/search/청라나눔내과의원" target="_blank" rel="noopener noreferrer" className="nav-link">오시는 길</a>
                </nav>
            </div>
        </header>
    );
}
