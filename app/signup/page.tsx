import Link from "next/link";
import { IconMail, IconBuilding } from "../../components/Icons";

export default function Signup() {
  return (
    <div className="section" style={{ minHeight: 'calc(100vh - 400px)', display: 'flex', alignItems: 'center', padding: '3rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem' }}>Create Account</h1>
            <p>Start managing your compliance effortlessly</p>
          </div>

          <form>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" placeholder="John" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" placeholder="Doe" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Business Name</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  <IconBuilding />
                </div>
                <input type="text" className="form-input" placeholder="Company Ltd." style={{ paddingLeft: '3rem' }} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  <IconMail />
                </div>
                <input type="email" className="form-input" placeholder="you@company.com" style={{ paddingLeft: '3rem' }} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" placeholder="Create a strong password" />
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Must be at least 8 characters long
              </p>
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <input type="checkbox" id="terms" style={{ width: '1rem', height: '1rem', marginTop: '0.25rem' }} />
              <label htmlFor="terms" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', cursor: 'pointer', lineHeight: '1.4' }}>
                I agree to the <Link href="/terms" style={{ color: 'var(--primary)' }}>Terms of Service</Link> and <Link href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</Link>.
              </label>
            </div>

            <button type="button" className="btn btn-primary" style={{ width: '100%', marginBottom: '1.5rem', marginTop: '1rem' }}>
              Create Account
            </button>

            <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Already have an account? </span>
              <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
