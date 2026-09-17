import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import CTA from '@/components/CTA';
import { blogArticles } from '@/data/articles';
import { siteImages } from '@/data/images';

const categories = ['Tous', 'Digital', 'Data', 'Développement', 'Marketing', 'UI/UX', 'Transformation numérique'] as const;
type Category = (typeof categories)[number];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');

  const filteredArticles =
    activeCategory === 'Tous'
      ? blogArticles
      : blogArticles.filter((a) => a.categoryFilter === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-50">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="section-label mb-4">
              <span className="h-px w-6 bg-accent" />
              Blog
            </div>
            <h1 className="text-display font-bold text-primary text-balance mb-6">
              Réflexions sur le digital, la donnée et le développement.
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed">
              Des articles sur la transformation numérique, l'analyse de données, le développement
              web et le marketing digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <LayoutGrid className="h-4 w-4 text-primary/40 mr-1" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-btn px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'text-primary/60 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <BlogCard key={article.slug} article={article} index={i} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm text-primary/40">Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Une question, un projet ?"
        description="N'hésitez pas à me contacter pour en discuter."
        buttonText="Parler de mon projet"
        buttonTo="/contact"
        image={siteImages.blog1}
      />
    </>
  );
}
