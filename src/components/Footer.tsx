import { Mail, Phone, Instagram } from "lucide-react";

// Icône TikTok personnalisée
const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-green text-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <a href="/#hero" className="flex items-center space-x-2">
              <img src="/images/logo-couleurs.svg" alt="MamSitter" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm leading-relaxed font-poppins">
              Accompagnement post-partum bienveillant pour les mamans.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mam_sitter/" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@mamsitter" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-poppins uppercase tracking-wide">Pour les mamans</h3>
            <ul className="space-y-2 text-sm font-lato">
              <li><a href="/#services" className="hover:text-sand transition-colors">Nos forfaits</a></li>
              <li><a href="/#cta" className="hover:text-sand transition-colors">Réserver</a></li>
              <li><a href="/profil-mamasitter" className="hover:text-sand transition-colors">Profil MamaSitter</a></li>
              <li><a href="/messagerie" className="hover:text-sand transition-colors">Messagerie</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-poppins uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3 text-sm font-lato">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@mamsitter.com" className="hover:text-sand transition-colors">hello@mamsitter.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/33616418216" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">+33 6 16 41 82 16</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-beige/70 font-poppins">
            © 2026 MamSitter. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm font-lato">
            <a href="#" className="hover:text-sand transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-sand transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-sand transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
