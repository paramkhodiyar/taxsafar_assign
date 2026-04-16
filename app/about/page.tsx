import Image from "next/image";

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1>About TaxSafar</h1>
            <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
              We are a team of passionate Chartered Accountants, Company Secretaries, and Legal Professionals dedicated to simplifying compliance for businesses across India.
            </p>
            <p>
              Founded on the principles of transparency, speed, and accuracy, TaxSafar has grown to become a trusted partner for over 10,000+ businesses. Our cloud-centric approach ensures you have real-time access to your company's vital statistics and compliance status.
            </p>
            
            <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>10k+</div>
                <div style={{ color: 'var(--text-muted)' }}>Happy Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>50+</div>
                <div style={{ color: 'var(--text-muted)' }}>Expert Professionals</div>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Our Mission</h3>
            <p style={{ marginBottom: '2rem' }}>
              To empower entrepreneurs by taking the complexity out of legal, tax, and compliance requirements, enabling them to focus entirely on growth and innovation.
            </p>
            <h3 style={{ marginBottom: '1.5rem' }}>Our Vision</h3>
            <p>
              To become the most reliable, tech-driven financial consultancy platform in the nation, bridging the gap between rigorous legal requirements and everyday business reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
