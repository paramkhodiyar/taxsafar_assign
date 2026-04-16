'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconSearch, IconFileText, IconBuilding, IconShieldStatus } from './Icons';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0' }}>
      {/* Subtle Dot Pattern Background inspired by modern minimalist designs */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.4,
        backgroundImage: 'radial-gradient(circle at center, var(--border) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        zIndex: 0
      }} />

      {/* Subtle Gradient Glow (using very soft opacity to avoid breaking "no gradients" rule, but making it feel premium) - User said no glowing effects on buttons, background is fine for a modern feel, but let's stick to flat shapes just in case */}
      
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#e0e7ff', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
            Trusted by 10,000+ Businesses Nationwide
          </div>

          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', letterSpacing: '-0.03em', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', transform: mounted ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s' }}>
                We Provide Your
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', color: 'var(--primary)', transform: mounted ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}>
                Business Solutions.
              </span>
            </span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2.5rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            maxWidth: '90%'
          }}>
            Simplifying compliance, boosting profits, and tech-driven consultancy to help your business run smarter and faster.
          </p>

          <form style={{ 
            display: 'flex', 
            alignItems: 'center',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '50px',
            padding: '0.5rem 0.5rem 0.5rem 1.5rem',
            maxWidth: '500px',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)', // very subtle depth
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
          }}>
            <IconSearch />
            <input 
              type="text" 
              placeholder="Search services, filings etc..." 
              style={{ 
                flex: 1, 
                border: 'none', 
                outline: 'none', 
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                backgroundColor: 'transparent'
              }}
            />
            <button type="button" className="btn btn-primary" style={{ borderRadius: '50px', padding: '0.6rem 1.5rem' }}>
              Search
            </button>
          </form>

          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--text-muted)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
          }}>
            <strong>Popular:</strong> <span style={{ marginLeft: '0.5rem', display: 'inline-flex', gap: '1rem' }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Return Filing</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Registrations</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Compliances</span>
            </span>
          </div>
        </div>
        
        <div style={{ position: 'relative', height: '500px', width: '100%' }}>
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            position: 'absolute',
            inset: 0,
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            <Image 
              src="/hero-image.png" 
              alt="Professional accounting desk" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Floating animated elements representing the services (ReactBits style) */}
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: '-2rem',
            backgroundColor: 'var(--surface)',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 600,
            animation: mounted ? 'float 6s ease-in-out infinite' : 'none',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.5s ease 0.6s'
          }}>
            <div style={{ color: 'var(--primary)' }}><IconBuilding /></div>
            Registrations
          </div>

          <div style={{
            position: 'absolute',
            bottom: '4rem',
            right: '-1rem',
            backgroundColor: 'var(--surface)',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 600,
            animation: mounted ? 'float 7s ease-in-out infinite 1s' : 'none',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.5s ease 0.8s'
          }}>
            <div style={{ color: 'var(--secondary)' }}><IconShieldStatus /></div>
            Compliance
          </div>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '-3rem',
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--surface)',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 600,
            animation: mounted ? 'float 5s ease-in-out infinite 2s' : 'none',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.5s ease 1s'
          }}>
            <div style={{ color: 'var(--text-main)' }}><IconFileText /></div>
            Income Tax
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}
