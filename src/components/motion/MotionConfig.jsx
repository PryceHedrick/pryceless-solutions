import { LazyMotion, domAnimation } from 'framer-motion';

// Wrap app in LazyMotion for tree-shaking
export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
