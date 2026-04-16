import { IconMail, IconPhone, IconBuilding } from "../../components/Icons";

export default function Contact() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <h1>Get In Touch</h1>
          <p>Have questions about our services or need expert tax advice? Reach out to our team of professionals.</p>
        </div>

        <div className="hero-grid">
          <div>
            <h3 style={{ marginBottom: '2rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ color: 'var(--primary)', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)', height: 'fit-content' }}>
                  <IconPhone />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>+91 97848 18899</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ color: 'var(--primary)', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)', height: 'fit-content' }}>
                  <IconMail />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>support@taxsafar.com</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>We typically reply within 24 hours</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ color: 'var(--primary)', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)', height: 'fit-content' }}>
                  <IconBuilding />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Office</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>TaxSafar Headquarters</p>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Corporate IT Park, Business Block</p>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
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
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" rows={4} placeholder="Type your message here..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
