import { useEffect, useState } from 'react';
import storefrontView from '../../assets/sliderImages/image1.webp';
import ownerPortrait from '../../assets/sliderImages/image2.webp';
import teamPhoto from '../../assets/sliderImages/image3.webp';
import storefrontSign from '../../assets/sliderImages/image6.webp';
import shopEntrance from '../../assets/sliderImages/image5.webp';

const slides = [
  { src: storefrontView, alt: 'Sunny Wholesaler storefront inside Ananta Arcade' },
  { src: ownerPortrait, alt: 'Sunny Wholesaler team member showcasing a shirt' },
  { src: teamPhoto, alt: 'Sunny Wholesaler team at the Nashik shop' },
  { src: storefrontSign, alt: 'Sunny Manufacturing and Wholesaler storefront sign' },
  { src: shopEntrance, alt: 'Entrance to Sunny Wholesaler shop G13' },
];

function HeroImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || mediaQuery.matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [paused]);

  return (
    <div
      className="hero-visual"
      role="region"
      aria-label="Product photo slideshow"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-slider-track" aria-live="polite">
        {slides.map((slide, index) => (
          <div className={`hero-slider-slide ${index === activeIndex ? 'active' : ''}`} key={slide.src}>
            <img
              className="hero-visual-image"
              src={slide.src}
              alt={slide.alt}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="hero-visual-caption">
        <span>Sunny Wholesaler</span>
        <strong>For growing retail businesses</strong>

        <div className="hero-slider-dots" aria-label="Choose a product photo">
          {slides.map((slide, index) => (
            <button
              aria-label={`Show photo ${index + 1}: ${slide.alt}`}
              aria-pressed={index === activeIndex}
              className={`hero-slider-dot ${index === activeIndex ? 'active' : ''}`}
              key={slide.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroImageSlider;
