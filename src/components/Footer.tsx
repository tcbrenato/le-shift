import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { navLinks, contactInfo } from '@/data/site';
import { services } from '@/data/services';

const footerServices = services.slice(0, 5);

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary font-bold text-sm">
                R
              </span>
              <span className="text-sm font-bold tracking-tight">Rénato TCHOBO</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Consultant en solutions numériques
            </p>
            <p className="text-sm text-accent font-semibold italic">
              Concevoir. Analyser. Transformer.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-white/70 hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href={`tel:${contactInfo.whatsappRaw}`} className="text-sm text-white/70 hover:text-accent transition-colors">
                  {contactInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-white/70 hover:text-accent transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-white/70">{contactInfo.location}</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 hover:border-accent hover:text-accent transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Rénato TCHOBO. Tous droits réservés.
          </p>
          <Link
            to="/contact"
            className="text-xs text-white/40 hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            Le Shift — Univers de services numériques
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
