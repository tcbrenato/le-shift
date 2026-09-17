import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className={`section-label ${dark ? '!text-accent' : ''} mb-4 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="h-px w-6 bg-accent" />
          {label}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`text-heading font-bold text-balance ${dark ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-5 text-base leading-relaxed ${dark ? 'text-white/60' : 'text-primary/60'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
