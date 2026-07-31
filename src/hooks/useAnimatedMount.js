import { useEffect, useRef } from 'react';

/**
 * useAnimatedMount
 * Applies staggered fade-up animation to immediate children of the ref element.
 *
 * @param {number} staggerMs - delay between each child (default 70ms)
 * @returns React ref to attach to the container
 */
export function useAnimatedMount(staggerMs = 70) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const children = Array.from(ref.current.children);
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.animation = 'none';
      // Force reflow
      void child.offsetHeight;
      child.style.animationDelay = `${i * staggerMs}ms`;
      child.style.animation = 'fadeUp 0.4s ease forwards';
    });
  }, [staggerMs]);

  return ref;
}
