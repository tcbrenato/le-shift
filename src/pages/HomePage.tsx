import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Search,
  PencilRuler,
  Code,
  TrendingUp,
  Code2,
  Database,
  PenTool,
  Megaphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import SkillCard from '@/components/SkillCard';
import CTA from '@/components/CTA';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { siteImages } from '@/data/images';
import type { Project } from '@/data/projects';

const methodSteps = [
  { number: '01', title: 'Comprendre', description: "Analyse du besoin et des objectifs.", icon: Search as LucideIcon },
  { number: '02', title: 'Concevoir', description: "Architecture, stratégie et expérience utilisateur.", icon: PencilRuler as LucideIcon },
  { number: '03', title: 'Développer', description: "Création et mise en œuvre de la solution.", icon: Code as LucideIcon },
  { number: '04', title: 'Optimiser', description: "Analyse, amélioration et accompagnement.", icon: TrendingUp as LucideIcon },
];

const aboutHighlights = [
  { label: 'Développement', icon: Code2 },
  { label: 'Analyse de données', icon: Database },
  { label: 'Marketing digital', icon: Megaphone },
  { label: 'Gestion de projets', icon: PenTool },
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const homeProjects = projects.slice(0, 4);

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label mb-4">
                <span className="h-px w-6 bg-accent" />
                À propos de moi
              </div>
              <h2 className="text-heading font-bold text-primary text-balance mb-6">
                Transformer les besoins en solutions numériques.
              </h2>
              <p className="text-base text-primary/60 leading-relaxed mb-4">
                Je suis Rénato TCHOBO, consultant en solutions numériques. Mon parcours combine
                communication, marketing digital, développement web, analyse de données et gestion
                de projets numériques.
              </p>
              <p className="text-base text-primary/60 leading-relaxed mb-8">
                Je conçois des solutions adaptées aux besoins réels des entreprises et organisations,
                en alliant compréhension du métier, rigueur technique et sens du résultat.
              </p>
              <Link to="/a-propos" className="btn-secondary group">
                En savoir plus
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {aboutHighlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-600">
                      <item.icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
                <img
                  src={siteImages.about}
                  alt="Professionnels collaborant sur un projet numérique"
                  loading="lazy"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl border-2 border-accent/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <SectionTitle
            label="Services"
            title="Des solutions numériques pensées pour vos objectifs."
            description="Un accompagnement complet, de la conception à la mise en œuvre, adapté à chaque besoin."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="container-content relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <SectionTitle
                dark
                label="Méthode"
                title="Ma façon de travailler"
                description="Une approche structurée en 4 étapes, de la compréhension du besoin à l'optimisation continue."
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={siteImages.method}
                  alt="Réunion et travail sur projet numérique"
                  loading="lazy"
                  className="w-full h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-white/10 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {methodSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent relative z-10">
                      <step.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl font-bold text-white/15 tabular-nums">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>

                  {i < methodSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 h-px w-6 bg-accent/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionTitle
              label="Réalisations"
              title="Des projets conçus pour répondre à des besoins concrets."
            />
            <Link to="/realisations" className="text-link group shrink-0">
              Voir toutes les réalisations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-content">
          <SectionTitle
            label="Compétences"
            title="Un profil à la croisée du digital, de la donnée et du développement."
            description="Des compétences complémentaires pour couvrir l'ensemble du cycle d'un projet numérique."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {skillCategories.map((category, i) => (
              <SkillCard key={category.title} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Le Shift Section */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="container-content relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label !text-accent mb-4">
                <span className="h-px w-6 bg-accent" />
                La marque
              </div>
              <h2 className="text-display font-bold text-white mb-4">Le Shift</h2>
              <p className="text-lg text-accent font-semibold italic mb-6">
                Passer d'un besoin à une solution.
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-8">
                Le Shift est l'univers de services numériques porté par Rénato TCHOBO. Il rassemble
                une approche orientée conception, données, technologie et stratégie pour accompagner
                les projets dans leur transformation numérique.
              </p>
              <Link to="/a-propos#le-shift" className="btn-primary group">
                Découvrir Le Shift
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={siteImages.shift}
                  alt="Le Shift - Univers de services numériques"
                  loading="lazy"
                  className="w-full h-[360px] lg:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl border-2 border-accent/30 -z-10" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="text-xs font-bold text-primary">Le Shift</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process / Start a conversation */}
      <CTA
        title="Vous avez une idée, un besoin ou un problème à résoudre ?"
        description="Parlons-en. Chaque projet commence par la compréhension du besoin."
        buttonText="Démarrer une conversation"
        buttonTo="/contact"
        image={siteImages.process}
      />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
