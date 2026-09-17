import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/data/site';

const contactMethods = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contactInfo.whatsapp,
    href: `https://wa.me/${contactInfo.whatsappRaw.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
];

export default function ContactPage() {
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
              Contact
            </div>
            <h1 className="text-display font-bold text-primary text-balance mb-6">
              Parlons de votre projet.
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed">
              Chaque projet commence par la compréhension du besoin. Décrivez votre projet,
              je vous recontacte rapidement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-xl font-bold text-primary mb-6">Mes coordonnées</h2>

              <div className="space-y-4 mb-8">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-5 card-hover group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-600 transition-colors group-hover:bg-accent group-hover:text-primary">
                      <method.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary/40 uppercase tracking-wide">{method.label}</p>
                      <p className="text-sm font-semibold text-primary">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-600">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-primary/40 uppercase tracking-wide">Localisation</p>
                  <p className="text-sm font-semibold text-primary">{contactInfo.location}</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-primary p-6">
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Préférez un appel direct ? Contactez-moi aux horaires suivantes :
                </p>
                <p className="text-sm font-semibold text-white">Lundi — Vendredi</p>
                <p className="text-sm text-accent">08h00 — 18h00 (GMT+1)</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-primary/10 bg-white p-6 lg:p-8">
                <h2 className="text-xl font-bold text-primary mb-2">Décrivez votre projet</h2>
                <p className="text-sm text-primary/60 mb-8">
                  Remplissez le formulaire ci-dessous. Plus votre description est précise, plus
                  ma réponse sera pertinente.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
