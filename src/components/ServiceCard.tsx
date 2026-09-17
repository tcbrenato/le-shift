import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group relative rounded-2xl border border-primary/10 bg-white p-7 card-hover"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:scale-110">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <span className="text-2xl font-bold text-primary/10 tabular-nums transition-colors group-hover:text-accent/30">
          {service.number}
        </span>
      </div>

      <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-sm text-primary/60 leading-relaxed mb-5">{service.shortDescription}</p>

      <Link
        to={`/services#${service.id}`}
        className="text-link group/link"
      >
        Découvrir
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
}
