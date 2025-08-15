import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <Link href="/">MyCompany</Link>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/case-studies">Case Studies</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;