export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Développement web',
    skills: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'WordPress'],
  },
  {
    title: 'Data',
    skills: ['GA4', 'Looker Studio', 'Power BI', 'Analyse de données'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'Canva', 'Photoshop', 'UI/UX'],
  },
  {
    title: 'Marketing',
    skills: ['SEO', 'Social Media', 'Facebook Ads', 'Email Marketing', 'Stratégie digitale'],
  },
];
