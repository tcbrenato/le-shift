import {
  Code2,
  LayoutGrid,
  BarChart3,
  Megaphone,
  PenTool,
  Workflow,
  ClipboardList,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
  needs: string[];
  deliverables: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: 'developpement-web',
    number: '01',
    icon: Code2,
    title: 'Développement web',
    shortDescription: "Création de sites web, applications et plateformes numériques.",
    longDescription:
      "Conception et développement de sites web, applications et plateformes numériques sur mesure, adaptés aux besoins spécifiques de chaque projet.",
    needs: [
      "Site vitrine ou institutionnel",
      "Plateforme e-commerce",
      "Application web métier",
      "Refonte ou évolution d'un site existant",
    ],
    deliverables: [
      "Architecture et développement front-end / back-end",
      "Intégration responsive et optimisation des performances",
      "Mise en ligne et maintenance",
    ],
    process: ['Analyse des besoins', 'Conception technique', 'Développement', 'Tests et mise en ligne'],
  },
  {
    id: 'solutions-gestion',
    number: '02',
    icon: LayoutGrid,
    title: 'Solutions de gestion',
    shortDescription: "Plateformes pour gérer les stocks, ventes, clients, finances, documents et activités.",
    longDescription:
      "Conception de plateformes et outils numériques pour centraliser et optimiser la gestion des activités d'une organisation.",
    needs: [
      "Gestion des stocks et des ventes",
      "Suivi des clients et fournisseurs",
      "Gestion documentaire",
      "Tableaux de bord d'activité",
    ],
    deliverables: [
      "Conception de la plateforme sur mesure",
      "Intégration des modules de gestion",
      "Formation et accompagnement",
    ],
    process: ['Cadrage fonctionnel', 'Conception de la plateforme', 'Déploiement', 'Accompagnement'],
  },
  {
    id: 'analyse-donnees',
    number: '03',
    icon: BarChart3,
    title: 'Analyse de données',
    shortDescription: "Analyse des données web et digitales, tableaux de bord et aide à la prise de décision.",
    longDescription:
      "Collecte, analyse et visualisation des données web et digitales pour aider les organisations à prendre des décisions éclairées.",
    needs: [
      "Mise en place du tracking et des outils d'analyse",
      "Création de tableaux de bord",
      "Analyse des performances digitales",
      "Recommandations stratégiques",
    ],
    deliverables: [
      "Configuration des outils d'analyse (GA4, Looker Studio, Power BI)",
      "Tableaux de bord et rapports visuels",
      "Analyse et recommandations",
    ],
    process: ['Identification des KPIs', 'Configuration des outils', 'Analyse', 'Restitution'],
  },
  {
    id: 'marketing-digital',
    number: '04',
    icon: Megaphone,
    title: 'Marketing digital',
    shortDescription: "Stratégie digitale, réseaux sociaux, SEO, campagnes et visibilité en ligne.",
    longDescription:
      "Élaboration et exécution de stratégies digitales pour accroître la visibilité, l'engagement et la croissance en ligne.",
    needs: [
      "Stratégie de présence digitale",
      "Gestion des réseaux sociaux",
      "Optimisation SEO",
      "Campagnes publicitaires en ligne",
    ],
    deliverables: [
      "Audit et stratégie digitale",
      "Calendrier éditorial et création de contenu",
      "Gestion de campagnes (Facebook Ads, Google Ads)",
      "Suivi et optimisation",
    ],
    process: ['Audit digital', 'Stratégie', 'Exécution', 'Optimisation continue'],
  },
  {
    id: 'ui-ux-design',
    number: '05',
    icon: PenTool,
    title: 'UI/UX Design',
    shortDescription: "Conception d'interfaces modernes, intuitives et orientées utilisateur.",
    longDescription:
      "Conception d'interfaces utilisateur modernes et intuitives, centrées sur l'expérience et l'atteinte des objectifs métier.",
    needs: [
      "Conception d'une nouvelle interface",
      "Amélioration de l'expérience utilisateur",
      "Design system et cohérence visuelle",
      "Prototypage et tests",
    ],
    deliverables: [
      "Wireframes et maquettes (Figma)",
      "Design system et composants",
      "Prototypes interactifs",
    ],
    process: ['Recherche utilisateur', 'Wireframing', 'Design visuel', 'Prototypage'],
  },
  {
    id: 'automatisation',
    number: '06',
    icon: Workflow,
    title: 'Automatisation',
    shortDescription: "Automatisation des tâches et processus grâce aux outils numériques.",
    longDescription:
      "Mise en place de solutions d'automatisation pour réduire les tâches manuelles et optimiser les processus internes.",
    needs: [
      "Automatisation de tâches répétitives",
      "Synchronisation entre outils",
      "Workflows et notifications automatiques",
      "Gain de productivité",
    ],
    deliverables: [
      "Audit des processus manuels",
      "Conception et mise en place des automatisations",
      "Documentation et formation",
    ],
    process: ['Audit des processus', 'Conception', 'Mise en place', 'Suivi'],
  },
  {
    id: 'gestion-projets',
    number: '07',
    icon: ClipboardList,
    title: 'Gestion de projets numériques',
    shortDescription: "Planification, coordination, suivi et déploiement de projets digitaux.",
    longDescription:
      "Coordination de bout en bout de projets numériques : planification, suivi, coordination des parties prenantes et déploiement.",
    needs: [
      "Pilotage d'un projet digital",
      "Coordination entre équipes techniques et métier",
      "Suivi de planning et de budget",
      "Déploiement et mise en production",
    ],
    deliverables: [
      "Planification et cadrage du projet",
      "Coordination et suivi",
      "Reporting et communication",
    ],
    process: ['Cadrage', 'Planification', 'Exécution et suivi', 'Déploiement'],
  },
  {
    id: 'conseil',
    number: '08',
    icon: Lightbulb,
    title: 'Conseil en solutions numériques',
    shortDescription: "Analyse des besoins et proposition de solutions adaptées.",
    longDescription:
      "Accompagnement des organisations dans l'identification de leurs besoins numériques et la proposition de solutions adaptées.",
    needs: [
      "Audit des besoins numériques",
      "Choix d'outils et de technologies",
      "Stratégie de transformation numérique",
      "Recommandations sur mesure",
    ],
    deliverables: [
      "Audit et analyse des besoins",
      "Recommandations et feuille de route",
      "Accompagnement à la mise en œuvre",
    ],
    process: ['Diagnostic', 'Recommandations', 'Feuille de route', 'Accompagnement'],
  },
];
