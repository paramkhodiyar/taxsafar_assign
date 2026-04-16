import Link from "next/link";
import { IconMail } from "../../components/Icons";

export default function Login() {
  return (
    <div className="section" style={{ minHeight: 'calc(100vh - 400px)', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{ width: '100%', maxWidth: '450px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem' }}>Welcome Back</h1>
            <p>Log in to your TaxSafar dashboard</p>
          </div>

          <form>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label className="form-label" style={{ margin: 0 }}>Password</label>
                <Link href="/forgot-password" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 500 }}>
                  Forgot password?
                </Link>
              </div>
              <input type="password" className="form-input" placeholder="••••••••" />
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="remember" style={{ width: '1rem', height: '1rem' }} />
              <label htmlFor="remember" style={{ fontSize: '0.875rem', color: 'var(--text-main)', cursor: 'pointer' }}>
                Remember for 30 days
              </label>
            </div>

            <button type="button" className="btn btn-primary" style={{ width: '100%', marginBottom: '1.5rem' }}>
              Sign In
            </button>

            <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Don't have an account? </span>
              <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Sign up instead
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
