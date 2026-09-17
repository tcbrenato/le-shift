import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo } from '@/data/site';

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
};

const projectTypes = [
  'Site web',
  'Application web',
  'Plateforme de gestion',
  'Analyse de données',
  'Marketing digital',
  'UI/UX Design',
  'Automatisation',
  'Conseil',
  'Autre',
];

const budgets = [
  'Moins de 500 000 FCFA',
  '500 000 — 1 000 000 FCFA',
  '1 000 000 — 3 000 000 FCFA',
  'Plus de 3 000 000 FCFA',
  'À définir ensemble',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Veuillez indiquer votre nom.';
    if (!form.email.trim()) {
      newErrors.email = 'Veuillez indiquer votre email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Veuillez indiquer un email valide.';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Veuillez décrire votre projet.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Votre message est trop court.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mx-auto mb-5">
          <CheckCircle className="h-7 w-7 text-accent-600" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Demande envoyée</h3>
        <p className="text-sm text-primary/60 mb-6">
          Merci. Votre demande a bien été enregistrée. Je vous recontacte rapidement.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary"
        >
          Envoyer une autre demande
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Nom *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`input-field ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`input-field ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
            placeholder="Votre numéro"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-2">
            Type de projet
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            className="input-field cursor-pointer"
          >
            <option value="">Sélectionner...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-primary mb-2">
          Budget indicatif
        </label>
        <select
          id="budget"
          value={form.budget}
          onChange={(e) => handleChange('budget', e.target.value)}
          className="input-field cursor-pointer"
        >
          <option value="">Sélectionner...</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>{budget}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={5}
          className={`input-field resize-none ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
          placeholder="Décrivez votre projet ou votre besoin..."
        />
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full justify-center group">
        Envoyer ma demande
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-xs text-primary/40 text-center">
        En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de votre demande.
        Vos informations ne seront pas partagées. Contact direct : {contactInfo.email}
      </p>
    </form>
  );
}
