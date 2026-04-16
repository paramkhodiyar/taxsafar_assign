import Link from "next/link";
import { IconArrowRight, IconBuilding, IconFileText, IconShieldStatus } from "../../components/Icons";

export default function Services() {
  return (
    <div className="section">
      <div className="container">
        <h1>Our Services</h1>
        <p className="mb-4">Comprehensive compliance and consultancy solutions for your business.</p>
        
        <div className="services-grid" style={{ marginTop: '3rem' }}>
          {[
            { id: 'registrations', title: 'Company Registrations', icon: <IconBuilding />, desc: 'Start-to-finish company and LLP incorporation. GST, Trademark, and MSME registrations.' },
            { id: 'return-filing', title: 'Return Filing', icon: <IconFileText />, desc: 'Expert-led return filing across all tax types including GST, Income Tax, and TDS.' },
            { id: 'compliance', title: 'Consultancy & Compliance', icon: <IconShieldStatus />, desc: 'Business structuring, tax advisory, and ongoing legal compliance monitoring.' },
            { id: 'accounting', title: 'Accounting & Bookkeeping', icon: <IconFileText />, desc: 'Real-time cloud-based bookkeeping systems with data protection.' },
            { id: 'loans', title: 'Loan Assistance', icon: <IconBuilding />, desc: 'Expert help in choosing the best loan offers including Business and Personal Loans.' },
            { id: 'virtual-office', title: 'Virtual Office Facilities', icon: <IconShieldStatus />, desc: 'Professional address for registration purposes with pan-India presence.' }
          ].map((service) => (
            <div key={service.id} className="card service-card">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{service.desc}</p>
              <Link href={`/services/${service.id}`} className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Know More <IconArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
