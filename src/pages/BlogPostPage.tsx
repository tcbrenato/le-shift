import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogArticles } from '@/data/articles';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const dateStr = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const relatedArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-content max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary/60 hover:text-accent-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-600 mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl lg:text-4xl font-bold text-primary text-balance mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-primary/40 mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {dateStr}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime} de lecture
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl mb-10">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>

            <div className="space-y-6">
              {article.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="text-base text-primary/70 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-content max-w-4xl">
          <h2 className="text-xl font-bold text-primary mb-8">Continuer la lecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-white p-5 card-hover"
              >
                <div className="overflow-hidden rounded-xl shrink-0">
                  <img
                    src={related.image}
                    alt={related.title}
                    loading="lazy"
                    className="w-24 h-24 object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-accent-600">{related.category}</span>
                  <h3 className="text-sm font-bold text-primary mt-1 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center text-xs font-medium text-primary/60">
                    Lire
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
