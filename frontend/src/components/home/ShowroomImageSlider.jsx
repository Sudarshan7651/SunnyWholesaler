import { useEffect, useState } from 'react';

// 1. Automatically import all images from the latestArticals folder using Vite's glob import
const imageModules = import.meta.glob('../../assets/latestArticals/*.{png,jpg,jpeg,svg,webp}', { eager: true });

// 2. Map the imported modules into the slides array structure with automatic clean alt tags
const slides = Object.entries(imageModules).map(([path, module]) => {
  const fileNameWithExt = path.split('/').pop() || '';
  const fileName = fileNameWithExt.split('.').shift() || 'Shirt Photo';
  
  return {
    src: module.default,
    alt: fileName.replace(/[-_]/g, ' ') // Replaces dashes and underscores with spaces for readable alt text
  };
});

function ShowroomImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!slides || slides.length <= 1) return undefined;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || motionPreference.matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [paused]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="showroom-slider-empty" style={{ padding: '20px', textTransform: 'none', textAlign: 'center' }}>
        No images found in assets/youngFit directory. Verify folder path and file extensions.
      </div>
    );
  }

  return (
    <div
      className="showroom-slider"
      role="region"
      aria-label="Young Fit shirt photos"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div
        className="showroom-slider-track"
        aria-live="polite"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="showroom-slider-slide" key={slide.src}>
            <img className="showroom-image" src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <button
        className="showroom-slider-arrow showroom-slider-previous"
        type="button"
        onClick={showPrevious}
        aria-label="Show previous shirt photo"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        className="showroom-slider-arrow showroom-slider-next"
        type="button"
        onClick={showNext}
        aria-label="Show next shirt photo"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="showroom-slider-dots" aria-label="Choose a shirt photo">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            className={`showroom-slider-dot ${index === activeIndex ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1}: ${slide.alt}`}
            aria-pressed={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowroomImageSlider;
