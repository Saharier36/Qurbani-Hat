"use client";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState, useRef } from "react";

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 170, friction: 26 },
  });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <animated.div ref={targetRef} style={styles}>
      {children}
    </animated.div>
  );
};

export default ScrollAnimation;
