import Link from "next/link";
import { IconArrowRight } from "../../../components/Icons";

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Format the slug for display
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <Link href="/">Home</Link>
          <IconArrowRight />
          <Link href="/services">Services</Link>
          <IconArrowRight />
          <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{title}</span>
        </div>
        
        <div className="hero-grid" style={{ alignItems: 'flex-start' }}>
          <div>
            <h1>{title}</h1>
            <p style={{ fontSize: '1.25rem' }}>
              Professional and expert-led services customized to align with your specific {title.toLowerCase()} requirements, allowing you to focus on your core business growth.
            </p>
            
            <div style={{ marginTop: '3rem' }}>
              <h2>What we provide</h2>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                {['End-to-end documentation support', 'Dedicated expert consultation', '100% compliance with latest laws', 'Priority processing available'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card" style={{ backgroundColor: 'var(--surface)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Request Service</h3>
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="you@company.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 00000 00000" />
              </div>
              <div className="form-group" style={{ display: 'none' }}>
                <input type="hidden" value={title} />
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Consult an Expert</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
