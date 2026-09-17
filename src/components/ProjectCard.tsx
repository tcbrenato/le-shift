import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = forwardRef<HTMLButtonElement, ProjectCardProps>(function ProjectCard(
  { project, index, onClick },
  ref
) {
  return (
    <motion.button
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      onClick={onClick}
      className="group text-left rounded-2xl overflow-hidden bg-white border border-primary/10 card-hover cursor-pointer w-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-primary/60 leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <span className="text-link group/link inline-flex">
          Voir le projet
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
        </span>
      </div>
    </motion.button>
  );
});

export default ProjectCard;
