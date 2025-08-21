import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

const ScrollFadeUp = ({ children }: Props) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.fromTo(
      elRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div ref={elRef}>{children}</div>
  );
};

export default ScrollFadeUp;
