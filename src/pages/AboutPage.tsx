import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Megaphone, PenTool, ClipboardList, Workflow, BarChart3, Lightbulb } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import CTA from '@/components/CTA';
import { skillCategories } from '@/data/skills';
import { siteImages } from '@/data/images';

const domains = [
  { icon: Code2, title: 'Développement web', description: 'Sites, applications et plateformes numériques.' },
  { icon: BarChart3, title: 'Analyse de données', description: 'Données web, tableaux de bord et prise de décision.' },
  { icon: Megaphone, title: 'Marketing digital', description: 'Stratégie, SEO, réseaux sociaux et campagnes.' },
  { icon: PenTool, title: 'UI/UX Design', description: 'Interfaces modernes et orientées utilisateur.' },
  { icon: Workflow, title: 'Automatisation', description: 'Automatisation des tâches et processus.' },
  { icon: ClipboardList, title: 'Gestion de projets', description: 'Planification, coordination et déploiement.' },
  { icon: Lightbulb, title: 'Conseil numérique', description: 'Analyse des besoins et solutions adaptées.' },
];

const methodSteps = [
  { number: '01', title: 'Comprendre', description: "Analyse du besoin, des objectifs et du contexte." },
  { number: '02', title: 'Concevoir', description: "Architecture, stratégie et expérience utilisateur." },
  { number: '03', title: 'Développer', description: "Création et mise en œuvre de la solution." },
  { number: '04', title: 'Optimiser', description: "Analyse, amélioration et accompagnement." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label mb-4">
                <span className="h-px w-6 bg-accent" />
                À propos
              </div>
              <h1 className="text-display font-bold text-primary text-balance mb-6">
                Consultant en solutions numériques
              </h1>
              <p className="text-lg text-primary/60 leading-relaxed">
                J'accompagne les entreprises, organisations et porteurs de projets dans la
                conception de solutions digitales, l'analyse de données et la mise en œuvre
                de projets numériques.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
                <img
                  src={siteImages.aboutPortrait}
                  alt="Rénato TCHOBO - Consultant en solutions numériques"
                  loading="lazy"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl border-2 border-accent/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mon parcours */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={siteImages.aboutJourney}
                  alt="Parcours professionnel de Rénato TCHOBO"
                  loading="lazy"
                  className="w-full h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <SectionTitle
                label="Mon parcours"
                title="Un parcours à la croisée du digital, de la donnée et du développement."
              />
              <div className="mt-6 space-y-4 text-base text-primary/60 leading-relaxed">
                <p>
                  Mon parcours combine communication, marketing digital, développement web,
                  analyse de données et gestion de projets numériques.
                </p>
                <p>
                  Cette polyvalence me permet d'aborder les projets sous différents angles :
                  compréhension du besoin, conception technique, analyse des données et stratégie
                  de déploiement.
                </p>
                <p>
                  Je travaille avec des entreprises, des organisations et des porteurs de projets
                  qui cherchent à structurer ou à faire évoluer leur présence numérique.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mes domaines d'intervention */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-content">
          <SectionTitle
            label="Domaines d'intervention"
            title="Mes domaines d'intervention"
            description="Un accompagnement sur l'ensemble du cycle d'un projet numérique."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-primary/10 bg-white p-6 card-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-600 mb-4">
                  <domain.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{domain.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ma manière de travailler */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
            <SectionTitle
              label="Méthode"
              title="Ma manière de travailler"
              description="Une approche structurée, orientée besoin et résultat."
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={siteImages.aboutMethod}
                  alt="Méthode de travail"
                  loading="lazy"
                  className="w-full h-[280px] lg:h-[320px] object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <span className="text-4xl font-bold text-accent/30 tabular-nums block mb-3">{step.number}</span>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mes compétences */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-content">
          <SectionTitle
            label="Compétences"
            title="Mes compétences"
            description="Des compétences complémentaires pour couvrir l'ensemble du cycle d'un projet numérique."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {skillCategories.map((category, i) => (
              <SkillCard key={category.title} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Le Shift */}
      <section id="le-shift" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
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
              <Link to="/contact" className="btn-primary group">
                Démarrer une conversation
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
                  src={siteImages.aboutShift}
                  alt="Le Shift - Univers de services numériques"
                  loading="lazy"
                  className="w-full h-[360px] lg:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl border-2 border-accent/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Parlons de votre projet."
        description="Chaque projet commence par la compréhension du besoin."
        buttonText="Démarrer une conversation"
        buttonTo="/contact"
        image={siteImages.contact}
      />
    </>
  );
}
