import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  children: string | string[];
  className?: string;
  animationDuration?: number;
};

export default function TextReveal({
  children,
  className = 'text-4xl font-bold text-white',
  animationDuration = 1.2,
}: TextRevealProps) {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: animationDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, [animationDuration]);

  const content = Array.isArray(children) ? children : [children];

  return (
    <div className="space-y-24">
      {content.map((text, i) => (
        <div
          key={i}
          ref={(el) => { textRefs.current[i] = el; }}
          className={`${className} opacity-0`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
