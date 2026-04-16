import Link from "next/link";
import { IconArrowRight } from "../components/Icons";

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: 'calc(100vh - 350px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ 
          fontSize: '8rem', 
          lineHeight: '1',
          color: 'var(--primary)', 
          marginBottom: '1rem', 
          letterSpacing: '-0.05em' 
        }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          The page you are looking for may have been moved, deleted, or possibly never existed. Let's get you back on the right path.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <Link href="/" className="btn btn-primary">
            Return to Homepage <IconArrowRight />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
