export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const stagger = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};
