export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryFilter: 'Digital' | 'Data' | 'Développement' | 'Marketing' | 'UI/UX' | 'Transformation numérique';
  date: string;
  image: string;
  readTime: string;
  content: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'transformation-numerique-pme',
    title: 'La transformation numérique des PME : par où commencer ?',
    excerpt:
      "Identifier les premiers leviers de la transformation numérique pour une petite ou moyenne organisation.",
    category: 'Transformation numérique',
    categoryFilter: 'Transformation numérique',
    date: '2026-08-12',
    image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min',
    content: [
      "La transformation numérique n'est pas un projet ponctuel, c'est un processus continu. Pour une PME, il s'agit d'identifier les premiers leviers concrets : digitaliser une tâche manuelle, mettre en place un outil de suivi, ou créer une présence en ligne professionnelle.",
      "L'erreur la plus fréquente consiste à vouloir tout digitaliser en même temps. Il est plus efficace de commencer par un besoin précis, de mesurer l'impact de la solution, puis d'étendre progressivement.",
      "Les premiers chantiers sont souvent la présence en ligne (site web, réseaux sociaux), la gestion des données (tableaux de bord, suivi d'activité) et l'automatisation des tâches répétitives.",
      "L'accompagnement par un consultant permet de cadrer les besoins, de choisir les bons outils et d'éviter les investissements inutiles.",
    ],
  },
  {
    slug: 'analyse-donnees-web-pour-debutants',
    title: 'Analyse de données web : les indicateurs essentiels à suivre',
    excerpt:
      "Quelles métriques privilégier pour comprendre le comportement des utilisateurs sur un site web ?",
    category: 'Data',
    categoryFilter: 'Data',
    date: '2026-07-28',
    image: 'https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '6 min',
    content: [
      "L'analyse de données web consiste à collecter, mesurer et interpréter les données de fréquentation et de comportement sur un site ou une application.",
      "Les indicateurs de base incluent le trafic (nombre de visiteurs), les sources de trafic (organic, direct, social, referral), le taux de rebond et la durée de session.",
      "Au-delà des chiffres bruts, l'objectif est de comprendre le parcours utilisateur : comment les visiteurs arrivent, ce qu'ils font sur le site, et pourquoi ils repartent.",
      "Des outils comme GA4, Looker Studio ou Power BI permettent de centraliser et de visualiser ces données dans des tableaux de bord clairs.",
    ],
  },
  {
    slug: 'bonnes-pratiques-developpement-web',
    title: 'Bonnes pratiques pour un développement web propre et maintenable',
    excerpt:
      "Architecture, composants, performance : les principes qui rendent un projet web durable.",
    category: 'Développement',
    categoryFilter: 'Développement',
    date: '2026-07-10',
    image: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '7 min',
    content: [
      "Un projet web maintenable commence par une architecture claire : séparation des responsabilités, composants réutilisables et conventions de nommage cohérentes.",
      "La performance doit être prise en compte dès la conception : optimisation des images, lazy loading, et minimisation des ressources chargées.",
      "L'accessibilité n'est pas optionnelle : structure sémantique HTML, contrastes suffisants, navigation clavier et textes alternatifs pour les images.",
      "Enfin, la documentation et les tests permettent de garantir que le projet reste évolutif et compréhensible par d'autres développeurs.",
    ],
  },
  {
    slug: 'seo-fondamentaux-referencement',
    title: 'SEO : les fondamentaux du référencement naturel',
    excerpt:
      "Comprendre les piliers du référencement naturel pour améliorer la visibilité d'un site web.",
    category: 'Marketing',
    categoryFilter: 'Marketing',
    date: '2026-06-22',
    image: 'https://images.pexels.com/photos/15555796/pexels-photo-15555796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min',
    content: [
      "Le référencement naturel (SEO) repose sur trois piliers : le contenu, la technique et l'autorité.",
      "Le contenu doit être pertinent, structuré avec des balises sémantiques correctes (H1, H2, H3) et répondre aux intentions de recherche des utilisateurs.",
      "La technique inclut la vitesse de chargement, la compatibilité mobile, la structure des URL et l'absence d'erreurs d'exploration.",
      "L'autorité se construit avec le temps grâce aux liens entrants de qualité et à une présence digitale cohérente.",
    ],
  },
  {
    slug: 'ui-ux-principes-design',
    title: 'UI/UX : 5 principes pour concevoir des interfaces efficaces',
    excerpt:
      "Hiérarchie visuelle, cohérence, feedback : les principes qui font la différence.",
    category: 'UI/UX',
    categoryFilter: 'UI/UX',
    date: '2026-06-05',
    image: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '4 min',
    content: [
      "La hiérarchie visuelle guide l'œil de l'utilisateur : taille, couleur et espacement permettent de hiérarchiser l'information.",
      "La cohérence est essentielle : un design system garantit que les composants sont uniformes sur toute l'interface.",
      "Le feedback visuel (hover, transitions, états) informe l'utilisateur que ses actions sont prises en compte.",
      "L'espacement et la respiration visuelle réduisent la charge cognitive et améliorent la lisibilité.",
      "Enfin, l'accessibilité doit être intégrée dès la conception, pas ajoutée a posteriori.",
    ],
  },
  {
    slug: 'automatisation-processus-entreprise',
    title: "L'automatisation des processus : gagner du temps et de la fiabilité",
    excerpt:
      "Comment identifier et automatiser les tâches répétitives au sein d'une organisation.",
    category: 'Digital',
    categoryFilter: 'Digital',
    date: '2026-05-18',
    image: 'https://images.pexels.com/photos/38984789/pexels-photo-38984789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min',
    content: [
      "L'automatisation consiste à confier à des outils numériques les tâches répétitives et chronophages effectuées manuellement.",
      "La première étape est d'identifier les processus les plus répétitifs : envoi d'emails, saisie de données, génération de rapports, synchronisation entre outils.",
      "Les outils d'automatisation permettent de créer des workflows qui se déclenchent automatiquement selon des conditions définies.",
      "Au-delà du gain de temps, l'automatisation améliore la fiabilité en réduisant les erreurs humaines et en garantissant la cohérence des résultats.",
    ],
  },
];
