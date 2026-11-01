import { businessInfo } from '../../data/siteContent';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{businessInfo.name}</h3>
          <p>Premium men’s shirts and readymade garments for kids and junior boys, featuring Young Fit.</p>
          <a className="footer-whatsapp" href={businessInfo.whatsapp} target="_blank" rel="noreferrer">Chat with our team ↗</a>
          <div className="footer-socials">
          <a className="footer-whatsapp" href={businessInfo.instagram} target="_blank"> follow us on instagram ↗</a>
          </div>
        </div>   
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#about">Why Sunny</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#enquiry">Wholesale enquiry</a></li>
          </ul>
        </div>

        <div>
          <h4>Visit & contact</h4>
          <ul>
            <li><a href={`tel:${businessInfo.phone.replace(/[^\d+]/g, '')}`}>{businessInfo.phone}</a></li>
            <li><a href={businessInfo.mapUrl} target="_blank" rel="noreferrer">{businessInfo.address}</a></li>
            <li>{businessInfo.hours}</li>
            <li>{businessInfo.shipping}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</div>
    </footer>
  );
}

export default Footer;