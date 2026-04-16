import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBuilding, IconFileText, IconShieldStatus } from "../components/Icons";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="section services-section">
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
            <h2>Our Services</h2>
            <Link href="/services" className="btn btn-outline">
              View All Services <IconArrowRight />
            </Link>
          </div>

          <div className="services-grid">
            <div className="card service-card">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <IconBuilding />
              </div>
              <h3>Company Registrations</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                Start-to-finish company and LLP incorporation. GST, Trademark, and MSME registrations.
              </p>
              <Link href="/services/registrations" className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Know More <IconArrowRight />
              </Link>
            </div>

            <div className="card service-card">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <IconFileText />
              </div>
              <h3>Return Filing</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                Expert-led return filing across all tax types including GST, Income Tax, and TDS.
              </p>
              <Link href="/services/return-filing" className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Know More <IconArrowRight />
              </Link>
            </div>

            <div className="card service-card">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <IconShieldStatus />
              </div>
              <h3>Consultancy & Compliance</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                Business structuring, tax advisory, and ongoing legal compliance monitoring.
              </p>
              <Link href="/services/compliance" className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Know More <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container hero-grid">
          <div>
            <h2>Why Choose TaxSafar?</h2>
            <p>
              We bring decades of professional financial experience directly into the cloud. Our dedicated experts handle your accounting, compliance, and legal needs with unparalleled accuracy.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--secondary)' }}><IconShieldStatus /></div>
                <div>
                  <strong style={{ display: 'block' }}>Data Protection</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Bank-grade encryption for all your documents.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--secondary)' }}><IconBuilding /></div>
                <div>
                  <strong style={{ display: 'block' }}>Expert CAs & Legal Teams</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Our professionals hold an A+ rating across the industry.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--secondary)' }}><IconFileText /></div>
                <div>
                  <strong style={{ display: 'block' }}>Timely Reports</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Automated workflows ensure zero delays.</span>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--background)', padding: '3rem', borderRadius: '8px' }}>
            <h3>Request a Call Back</h3>
            <p style={{ fontSize: '0.875rem' }}>Leave your details and a compliance expert will reach out to you within 24 hours.</p>
            <form style={{ marginTop: '2rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 00000 00000" />
              </div>
              <div className="form-group">
                <label className="form-label">Service Needed</label>
                <select className="form-input">
                  <option>Select a service</option>
                  <option>GST Registration</option>
                  <option>Income Tax Filing</option>
                  <option>Company Incorporation</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
