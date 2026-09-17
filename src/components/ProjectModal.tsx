import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, rotateX: -8, rotateY: 3, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotateX: 8, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1000 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-colors shadow-md"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">{project.title}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-2">
                    Contexte
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">{project.context}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-2">
                    Problème
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">{project.solution}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-lg bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3">
                      Fonctionnalités
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-primary/70">
                          <Check className="h-4 w-4 text-accent-600 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
