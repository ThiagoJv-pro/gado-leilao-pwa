import { Gavel, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from '../assets/logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A3A2B] border-t border-border mt-16">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} className="object-cover h-36"/>
            </div>
            <p className="text-sm text-[#F5EEDD]">
              A maior plataforma de leilões agropecuários do Brasil, conectando compradores e vendedores com segurança e transparência.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Leilões Ativos
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Calendário
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Meus Lances
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Informações</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[#F5EEDD]">
                <Phone className="h-4 w-4 text-accent" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-[#F5EEDD]">
                <Mail className="h-4 w-4 text-accent" />
                <span>contato@leilaorural.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-[#F5EEDD]">
                <MapPin className="h-4 w-4 text-accent" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
            
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#F5EEDD] hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
