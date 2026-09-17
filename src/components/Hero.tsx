import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteImages } from '@/data/images';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="section-label mb-6">
              <span className="h-px w-6 bg-accent" />
              Consultant en solutions numériques
            </div>

            <h1 className="text-display font-bold text-primary text-balance">
              Je conçois des solutions numériques qui font{' '}
              <span className="text-accent-600">avancer</span> vos projets.
            </h1>

            <p className="mt-6 text-lg text-primary/60 leading-relaxed max-w-xl">
              J'accompagne les entreprises, organisations et porteurs de projets dans la
              conception de solutions digitales, l'analyse de données et la mise en œuvre
              de projets numériques.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/services" className="btn-primary group">
                Découvrir mes services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary group">
                Parler de mon projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
              <img
                src={siteImages.hero}
                alt="Consultant en solutions numériques travaillant sur ordinateur"
                className="w-full h-[400px] lg:h-[520px] object-cover"
                loading="eager"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -left-5 lg:-left-8 bg-white rounded-xl shadow-lg shadow-primary/10 p-4 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary">Solutions numériques</p>
                <p className="text-[10px] text-primary/50">Concevoir. Analyser. Transformer.</p>
              </div>
            </motion.div>

            <div className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl border-2 border-accent/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
