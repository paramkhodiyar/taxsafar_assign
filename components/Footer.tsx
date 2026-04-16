import Link from 'next/link';
import { IconMail, IconPhone } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="nav-brand" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              TAX<span>safar</span>
            </Link>
            <p style={{ maxWidth: '300px' }}>
              Simplifying compliance, boosting profits, and tech-driven consultancy to help your business run smarter and faster.
            </p>
            <div className="flex gap-4" style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-2"><IconPhone /> +91 97848 18899</span>
            </div>
            <div className="flex gap-4" style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-2"><IconMail /> support@taxsafar.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/partner">Partner Program</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/registrations">Registrations</Link></li>
              <li><Link href="/services/gst">GST & Income Tax</Link></li>
              <li><Link href="/services/virtual-office">Virtual Office</Link></li>
              <li><Link href="/services/accounting">Accounting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/refunds">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} TaxSafar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
