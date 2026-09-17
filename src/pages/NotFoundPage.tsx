import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="section-label justify-center mb-6">
            <span className="h-px w-6 bg-accent" />
            Erreur 404
          </div>

          <h1 className="text-display font-bold text-primary mb-6">
            Page introuvable
          </h1>

          <p className="text-lg text-primary/60 leading-relaxed mb-10">
            La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil
            ou explorez les autres pages du site.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary group">
              <Home className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            <Link to="/contact" className="btn-secondary group">
              Me contacter
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
