"use client"
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IconPhone, IconMail, IconMenu } from './Icons';

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <IconMail /> support@taxsafar.com
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <IconPhone /> +91 97848 18899
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontWeight: 500, marginRight: '0.25rem' }}>Follow us:</span>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Link href="#" aria-label="Instagram" style={{ display: 'flex', transition: 'color 0.2s', color: 'inherit' }} onMouseOver={e => e.currentTarget.style.color = '#E1306C'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}><FaInstagram size={18} /></Link>
              <Link href="#" aria-label="Facebook" style={{ display: 'flex', transition: 'color 0.2s', color: 'inherit' }} onMouseOver={e => e.currentTarget.style.color = '#1877F2'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}><FaFacebook size={18} /></Link>
              <Link href="#" aria-label="LinkedIn" style={{ display: 'flex', transition: 'color 0.2s', color: 'inherit' }} onMouseOver={e => e.currentTarget.style.color = '#0A66C2'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}><FaLinkedin size={18} /></Link>
              <Link href="#" aria-label="Twitter" style={{ display: 'flex', transition: 'color 0.2s', color: 'inherit' }} onMouseOver={e => e.currentTarget.style.color = '#000000ff'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}><FaXTwitter size={18} /></Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
            <Image
              src="/taxsafarlogo.png"
              alt="TaxSafar Logo"
              width={160}
              height={45}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <div className="nav-links" style={{ flex: '2', display: 'flex', justifyContent: 'center', gap: '2.5rem' }}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="nav-links" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/login" className="nav-link">Login</Link>
            <Link href="/signup" className="nav-link" style={{ fontWeight: 600 }}>Register</Link>
            <Link href="/login" className="btn btn-secondary" style={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}>
              Partner login
            </Link>
          </div>

          <button className="btn btn-outline mobile-menu-btn" style={{ display: 'none' }}>
            <IconMenu />
          </button>
        </div>
      </nav>
    </>
  );
}
