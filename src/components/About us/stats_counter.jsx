import React, { useEffect, useState, useRef } from 'react';
import backgroundImage from '/assets/Home_Page/statsbg.png'; // Adjust path if needed

const stats = [
  { value: 50, suffix: '+', label: 'Faculty' },
  { value: 100, suffix: '+', label: 'Students' },
  { value: 60, suffix: '+', label: 'Publications' },
  { value: 80, suffix: '+', label: 'Projects' },
];

const StatsCounter = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(stat => stat.label === 'Projects' ? 0 : stat.value));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observerInstance.unobserve(entry.target);

          const duration = 3000; // slower duration
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts(prev =>
              stats.map(stat =>
                stat.label === 'Projects' || stat.label === 'Students'
                  ? Math.floor(stat.value * progress)
                  : stat.value
              )
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="w-[1171px] h-[296px] mx-auto rounded-[16px] relative overflow-hidden text-white font-sans"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#11215599]/60" />
      <div className="relative flex items-center justify-around h-full">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="text-center">
              <div className="text-[85px] font-semibold font-poppins">
                {Math.floor(counts[index])}{stat.suffix}
              </div>
              <div className="text-[34px] font-medium font-poppins">{stat.label}</div>
            </div>
            {index < stats.length - 1 && (
              <div className="h-14 w-[2px] bg-white" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;