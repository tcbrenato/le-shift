import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { BlogArticle } from '@/data/articles';

interface BlogCardProps {
  article: BlogArticle;
  index: number;
}

export default function BlogCard({ article, index }: BlogCardProps) {
  const dateStr = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-primary/10 card-hover"
    >
      <Link to={`/blog/${article.slug}`} className="block relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 text-xs text-primary/40 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {dateStr}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-primary/60 leading-relaxed mb-5 flex-1">
          {article.excerpt}
        </p>

        <Link
          to={`/blog/${article.slug}`}
          className="text-link group/link"
        >
          Lire l'article
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
