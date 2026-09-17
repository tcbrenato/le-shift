import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonTo: string;
  image?: string;
  dark?: boolean;
}

export default function CTA({ title, description, buttonText, buttonTo, image, dark = false }: CTAProps) {
  return (
    <section className={`py-20 lg:py-28 ${dark ? 'bg-primary' : 'bg-gray-50'}`}>
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className={`section-label ${dark ? '!text-accent' : ''} mb-4`}>
              <span className="h-px w-6 bg-accent" />
              En route
            </div>
            <h2 className={`text-heading font-bold text-balance ${dark ? 'text-white' : 'text-primary'}`}>
              {title}
            </h2>
            {description && (
              <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-white/60' : 'text-primary/60'}`}>
                {description}
              </p>
            )}
            <div className="mt-8">
              <Link
                to={buttonTo}
                className={dark ? 'btn-primary' : 'btn-primary'}
              >
                {buttonText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="w-full h-[360px] lg:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border-2 border-accent/30 -z-10" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
