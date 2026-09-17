import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import CTA from '@/components/CTA';
import { projects } from '@/data/projects';
import { siteImages } from '@/data/images';
import type { Project } from '@/data/projects';

const filters = ['Tous', 'Web', 'Applications', 'Data', 'Marketing', 'UI/UX', 'Solutions numériques'] as const;
type Filter = (typeof filters)[number];

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.categoryFilter === activeFilter);

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
              Réalisations
            </div>
            <h1 className="text-display font-bold text-primary text-balance mb-6">
              Des projets conçus pour répondre à des besoins concrets.
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed">
              Une sélection de projets illustrant mon approche : comprendre le besoin, concevoir
              la solution et accompagner la mise en œuvre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <LayoutGrid className="h-4 w-4 text-primary/40 mr-1" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-btn px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'text-primary/60 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm text-primary/40">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Un projet en tête ?"
        description="Parlons-en pour le concrétiser ensemble."
        buttonText="Démarrer une conversation"
        buttonTo="/contact"
        image={siteImages.process}
      />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
