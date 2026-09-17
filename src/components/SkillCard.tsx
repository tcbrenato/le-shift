import { motion } from 'framer-motion';
import { Code2, Database, PenTool, Megaphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SkillCategory } from '@/data/skills';

const icons: LucideIcon[] = [Code2, Database, PenTool, Megaphone];

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const Icon = icons[index] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-primary/10 bg-white p-7"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-600">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="text-base font-bold text-primary">{category.title}</h3>
      </div>

      <ul className="space-y-2.5">
        {category.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2.5 text-sm text-primary/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
