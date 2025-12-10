import { Outlet, Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Heart, Menu, X } from 'lucide-react';
import { ScrollToTop } from './ScrollToTop';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-ice">
      <ScrollToTop />
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary-blue">
            Veterinária Santa Luzia
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/clinica">A Clínica</NavLink>
            <NavLink to="/especialidades">Especialidades</NavLink>
            <NavLink to="/estrutura">Estrutura</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-dark hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/clinica" onClick={() => setIsMobileMenuOpen(false)}>A Clínica</MobileNavLink>
                <MobileNavLink to="/especialidades" onClick={() => setIsMobileMenuOpen(false)}>Especialidades</MobileNavLink>
                <MobileNavLink to="/estrutura" onClick={() => setIsMobileMenuOpen(false)}>Estrutura</MobileNavLink>
                <MobileNavLink to="/contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</MobileNavLink>
                
                {/* Quick actions for mobile */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <a href="tel:11999999999" className="flex items-center gap-2 text-primary-coral font-bold">
                    <Phone size={18} /> (11) 99999-9999
                  </a>
                  <Link to="/contato" className="bg-primary-blue text-white px-6 py-3 rounded-full font-bold text-center">
                    Agendar Consulta
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <footer className="bg-neutral-dark text-white relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue via-primary-green to-primary-gold" />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Veterinária <span className="text-primary-gold">Santa Luzia</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Centro de excelência veterinária com atendimento 24h, especialistas renomados e tecnologia de ponta para cuidar de quem você ama.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary-gold mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link to="/clinica" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre a Clínica</Link></li>
                <li><Link to="/especialidades" className="text-gray-400 hover:text-white transition-colors text-sm">Especialidades</Link></li>
                <li><Link to="/estrutura" className="text-gray-400 hover:text-white transition-colors text-sm">Nossa Estrutura</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-sm">Fale Conosco</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary-gold mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400 text-sm">Emergência 24h</span></li>
                <li><span className="text-gray-400 text-sm">Cirurgia Avançada</span></li>
                <li><span className="text-gray-400 text-sm">Diagnóstico por Imagem</span></li>
                <li><span className="text-gray-400 text-sm">Internação UTI</span></li>
                <li><span className="text-gray-400 text-sm">Medicina Felina</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary-gold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Phone size={16} className="text-primary-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold">(11) 99999-9999</p>
                    <p className="text-gray-400">Emergência 24h</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="text-primary-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">contato@santaluzia.vet.br</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-primary-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Rua das Camélias, 123<br/>Jardim das Flores, SP</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Clock size={16} className="text-primary-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">24 horas, todos os dias</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Veterinária Santa Luzia. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-primary-coral fill-current" /> para quem ama pets
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={clsx(
        "text-sm font-semibold transition-colors duration-200 hover:text-primary-coral",
        isActive ? "text-primary-blue" : "text-neutral-gray"
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={clsx(
        "text-lg font-semibold py-2 transition-colors duration-200",
        isActive ? "text-primary-blue" : "text-neutral-dark hover:text-primary-blue"
      )}
    >
      {children}
    </Link>
  );
}

