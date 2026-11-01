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

function randomIndex(excludeIndex = -1) {
  const choices = slides.map((_, index) => index).filter((index) => index !== excludeIndex);
  return choices[Math.floor(Math.random() * choices.length)];
}

function HeroImageSlider() {
  const [activeIndex, setActiveIndex] = useState(() => randomIndex());
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || motionPreference.matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => randomIndex(currentIndex));
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [paused]);

  const activeSlide = slides[activeIndex];

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
      <img
        key={activeSlide.src}
        className="hero-visual-image"
        src={activeSlide.src}
        alt={activeSlide.alt}
        loading="lazy"
        decoding="async"
      />
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
