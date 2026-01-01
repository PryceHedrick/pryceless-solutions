import { m } from 'framer-motion';

const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // ease-out-expo
    }
  }
};

export function FadeIn({ 
  children, 
  delay = 0, 
  className = '',
  once = true,
  amount = 0.3 
}) {
  return (
    <m.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}

// Stagger container for children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function StaggerContainer({ children, className = '' }) {
  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <m.div variants={itemVariants} className={className}>
      {children}
    </m.div>
  );
}
