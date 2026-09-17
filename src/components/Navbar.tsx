import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-white/40 backdrop-blur-sm py-5'
        }`}
      >
        <nav className="container-content flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Accueil">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm transition-transform group-hover:scale-105">
              LS
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-bold text-primary tracking-tight">LE SHIFT</span>
              <span className="text-[10px] font-medium text-primary/50 tracking-wide uppercase">
                Studio de solutions numériques
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link to="/contact" className="btn-primary text-xs">
              Parlons de votre projet
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-primary hover:bg-primary/5 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10">
                <span className="text-sm font-bold text-primary">Menu</span>
                <button
                  className="flex items-center justify-center h-10 w-10 rounded-lg text-primary hover:bg-primary/5 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-4 text-lg font-semibold border-b border-primary/5 transition-colors ${
                        isActive(link.path) ? 'text-accent-600' : 'text-primary hover:text-accent-600'
                      }`}
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto px-6 pb-8">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
