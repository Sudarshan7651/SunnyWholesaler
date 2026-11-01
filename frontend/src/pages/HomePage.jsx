import SectionTitle from '../components/common/SectionTitle';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import HeroImageSlider from '../components/home/HeroImageSlider';
import ShowroomImageSlider from '../components/home/ShowroomImageSlider';
import EnquiryForm from '../components/forms/EnquiryForm';
import { businessInfo, faqs } from '../data/siteContent';
import heroBackdrop from '../assets/latestArticals/image1.webp';

const reasons = [
  {
    number: '01',
    title: 'Self-Manufacturing Advantage',
    description: 'Self-manufacturing allows us to offer competitive pricing and quick turnaround times for bulk orders.',
  },
  {
    number: '02',
    title: 'Premium Young Fit shirts',
    description: 'Trend-setting plain, season special, floral, and custom-print articles for retail shelves.',
  },
  {
    number: '03',
    title: 'Superior fabric choices',
    description: 'Dobby cotton, Oxford, linen, satin, and waffle options across the shirt collection.',
  },
  {
    number: '04',
    title: 'Sizes for your customers',
    description: 'Standard wholesale size ratios span M, L, XL, and XXL. Confirm the article-specific ratio with us.',
  },
  
];

function HomePage() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-backdrop" aria-hidden="true">
          <img src={heroBackdrop} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Self Manufacturing & Wholesaler · Nashik</span>
            <h1>Premium wholesale apparel for growing <span>retailers.</span></h1>
            <p>
              Discover premium Young Fit men’s shirts and readymade garments for kids and junior
              boys. Explore quality fabrics, trend-setting designs, and wholesale bundles built
              for regional apparel retailers.
            </p>
            <div className="hero-actions">
              <a className="button button-whatsapp" href={businessInfo.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a className="button button-secondary" href="#enquiry">Request a callback</a>
            </div>
            <div className="hero-note">
              <span className="hero-note-dot" />
              Direct contact for current availability and order details
            </div>
          </div>
          <HeroImageSlider />
        </div>
        <div className="container hero-location-line">
          <span>Visit us at Ananta Arcade, Pathardi Phata</span>
          <a href={businessInfo.mapUrl} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Wholesale business details">
        <div className="container trust-strip-grid">
          <div><span className="trust-icon">01</span><strong>Retail wholesale</strong><small>For retailers and shopkeepers</small></div>
          <div><span className="trust-icon">02</span><strong>Manufacturer & wholesaler</strong><small>Featuring premium label Young Fit</small></div>
          <div><span className="trust-icon">03</span><strong>Bulk wholesale bundles</strong><small>Running color sets available</small></div>
          <div><span className="trust-icon">04</span><strong>Across Maharashtra</strong><small>Parcel delivery available</small></div>
        </div>
      </section>

      <section className="partner-section section-block alt-bg" id="about">
        <div className="container partner-layout">
          <div className="partner-intro">
            <SectionTitle
              eyebrow="Why Sunny Wholesaler"
              title="Wholesale apparel for your retail inventory"
              subtitle="Sunny Wholesaler, featuring Young Fit, supplies premium men’s shirts and readymade clothing for kids and junior boys."
            />
            <a className="button button-secondary" href={businessInfo.whatsapp} target="_blank" rel="noreferrer">
              Talk to our team
            </a>
          </div>
          <div className="reason-list">
            {reasons.map((reason) => (
              <article className="reason-item" key={reason.number}>
                <span>{reason.number}</span>
                <div><h3>{reason.title}</h3><p>{reason.description}</p></div>
                <b aria-hidden="true">↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showroom-section">
        <ShowroomImageSlider />
        <div className="showroom-copy">
          <span className="eyebrow">Your wholesale contact</span>
          <h2>Need the latest styles and pricing?</h2>
          <p>Message our Nashik team for the latest Young Fit articles, fabric details, color sets, size ratios, and wholesale ordering.</p>
          <a className="button button-whatsapp" href={businessInfo.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Start a WhatsApp chat
          </a>
          <a className="showroom-directions" href={businessInfo.mapUrl} target="_blank" rel="noreferrer">
            Visit us at Ananta Arcade, Nashik <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section-block faq-section" id="faq">
        <div className="container faq-layout">
          <SectionTitle
            eyebrow="Quick answers"
            title="Questions before you order?"
            subtitle="If you need details for a particular style or destination, contact us directly."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-card">
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block enquiry-section" id="enquiry">
        <div className="container enquiry-layout">
          <EnquiryForm />
          <div className="enquiry-copy shop-location-copy">
            <span className="eyebrow">Visit us in Nashik</span>
            <h2>Find our shop.</h2>
            <p>{businessInfo.address}</p>
            <div className="shop-location-map">
              <iframe
                src={businessInfo.mapEmbedUrl}
                title={`Map showing Sunny Wholesaler at ${businessInfo.address}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a className="shop-location-directions" href={businessInfo.mapUrl} target="_blank" rel="noreferrer">
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
