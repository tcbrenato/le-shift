export interface Project {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'Web' | 'Applications' | 'Data' | 'Marketing' | 'UI/UX' | 'Solutions numériques';
  shortDescription: string;
  image: string;
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'plateforme-gestion-stock',
    title: 'Plateforme de gestion de stock',
    category: 'Solutions numériques',
    categoryFilter: 'Solutions numériques',
    shortDescription: 'Plateforme web pour la gestion centralisée des stocks, ventes et approvisionnements.',
    image: 'https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=1200',
    context:
      "Une structure commerciale cherchait à centraliser la gestion de ses stocks et de ses ventes, jusque-là suivis manuellement.",
    problem:
      "Le suivi manuel entraînait des erreurs, des ruptures de stock et une visibilité limitée sur l'activité réelle.",
    solution:
      "Conception d'une plateforme web sur mesure permettant le suivi des stocks, des ventes et des approvisionnements en temps réel.",
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Tableau de bord en temps réel',
      'Gestion des entrées et sorties de stock',
      'Suivi des ventes',
      'Alertes de réapprovisionnement',
    ],
  },
  {
    id: 'site-institutionnel',
    title: 'Site institutionnel',
    category: 'Web',
    categoryFilter: 'Web',
    shortDescription: "Site web institutionnel moderne pour une organisation de services.",
    image: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1200',
    context:
      "Une organisation souhaitait moderniser sa présence en ligne avec un site institutionnel professionnel.",
    problem:
      "L'ancien site était obsolète, non responsive et ne reflétait pas l'image professionnelle de l'organisation.",
    solution:
      "Conception d'un site web moderne, responsive et optimisé pour le référencement, avec une architecture de contenu claire.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      'Design responsive et moderne',
      'Optimisation SEO',
      'Architecture de contenu claire',
      'Formulaire de contact fonctionnel',
    ],
  },
  {
    id: 'dashboard-data',
    title: 'Tableau de bord analytique',
    category: 'Data',
    categoryFilter: 'Data',
    shortDescription: "Tableau de bord interactif pour le suivi et l'analyse des données digitales.",
    image: 'https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&w=1200',
    context:
      "Une organisation souhaitait visualiser ses données d'activité dans un tableau de bord centralisé.",
    problem:
      "Les données étaient dispersées dans plusieurs outils, rendant l'analyse et la prise de décision difficiles.",
    solution:
      "Création d'un tableau de bord interactif connecté aux sources de données, avec indicateurs clés et visualisations.",
    technologies: ['Looker Studio', 'GA4', 'Google Sheets', 'Power BI'],
    features: [
      'Indicateurs clés de performance',
      'Visualisations interactives',
      'Filtres et segments',
      'Rapports automatisés',
    ],
  },
  {
    id: 'application-web-gestion',
    title: 'Application web de gestion',
    category: 'Applications',
    categoryFilter: 'Applications',
    shortDescription: 'Application web pour la gestion des clients et des activités.',
    image: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&w=1200',
    context:
      "Une entreprise avait besoin d'un outil pour gérer ses clients et son activité au quotidien.",
    problem:
      "La gestion des clients était effectuée sur tableur, sans centralisation ni suivi structuré.",
    solution:
      "Développement d'une application web de gestion de la relation client avec suivi des interactions et historique.",
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    features: [
      'Gestion des contacts clients',
      'Suivi des interactions',
      "Tableau de bord d'activité",
      'Export de données',
    ],
  },
  {
    id: 'projet-ui-ux',
    title: 'Conception UI/UX',
    category: 'UI/UX',
    categoryFilter: 'UI/UX',
    shortDescription: "Refonte complète de l'interface d'une plateforme existante.",
    image: 'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1200',
    context:
      "Une plateforme existante nécessitait une refonte de son interface pour améliorer l'expérience utilisateur.",
    problem:
      "L'interface était dense, peu intuitive et le parcours utilisateur générait de la friction.",
    solution:
      "Refonte complète de l'interface avec une approche centrée utilisateur : wireframes, design system et prototypes.",
    technologies: ['Figma', 'Design System', 'Prototypage', 'Tests utilisateur'],
    features: [
      'Wireframes et maquettes',
      'Design system cohérent',
      'Prototypes interactifs',
      'Guide de composants',
    ],
  },
  {
    id: 'strategie-marketing-digital',
    title: 'Stratégie marketing digital',
    category: 'Marketing',
    categoryFilter: 'Marketing',
    shortDescription: "Élaboration et exécution d'une stratégie digitale multi-canal.",
    image: 'https://images.pexels.com/photos/6476192/pexels-photo-6476192.jpeg?auto=compress&cs=tinysrgb&w=1200',
    context:
      "Une organisation souhaitait structurer sa présence digitale et accroître sa visibilité en ligne.",
    problem:
      "La présence digitale était désorganisée, sans stratégie ni suivi de performance.",
    solution:
      "Élaboration d'une stratégie digitale complète : audit, calendrier éditorial, gestion des réseaux sociaux et campagnes.",
    technologies: ['Facebook Ads', 'Google Ads', 'SEO', 'Social Media'],
    features: [
      'Audit digital complet',
      'Calendrier éditorial',
      'Gestion des campagnes publicitaires',
      'Suivi et optimisation continue',
    ],
  },
];
