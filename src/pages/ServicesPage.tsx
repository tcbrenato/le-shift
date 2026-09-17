import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import { services } from '@/data/services';
import { siteImages } from '@/data/images';

export default function ServicesPage() {
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
              Services
            </div>
            <h1 className="text-display font-bold text-primary text-balance mb-6">
              Des solutions numériques pensées pour vos objectifs.
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed">
              Un accompagnement complet, de la conception à la mise en œuvre, adapté à chaque besoin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28">
        <div className="container-content space-y-20 lg:space-y-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start scroll-mt-24`}
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-600">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-bold text-primary/10 tabular-nums">{service.number}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-base text-primary/60 leading-relaxed mb-8">{service.longDescription}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3">
                        Besoins couverts
                      </h3>
                      <ul className="space-y-2">
                        {service.needs.map((need) => (
                          <li key={need} className="flex items-start gap-2 text-sm text-primary/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/30 mt-2 shrink-0" />
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3">
                        Ce qui est proposé
                      </h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-2 text-sm text-primary/70">
                            <Check className="h-4 w-4 text-accent-600 mt-0.5 shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3">
                      Processus
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {service.process.map((step, j) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-lg bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                            {step}
                          </span>
                          {j < service.process.length - 1 && (
                            <ArrowRight className="h-3 w-3 text-primary/30" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" className="btn-primary group">
                      Demander un accompagnement
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={siteImages.aboutSkills}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-[320px] lg:h-[400px] object-cover"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl border-2 border-accent/30 -z-10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTA
        title="Un besoin spécifique à explorer ?"
        description="Parlons-en pour identifier la solution la plus adaptée à votre contexte."
        buttonText="Demander un accompagnement"
        buttonTo="/contact"
        image={siteImages.contact}
      />
    </>
  );
}
