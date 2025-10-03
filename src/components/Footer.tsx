import { Book } from 'lucide-react';

const sections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Wiki', href: '/wiki' },
      { label: 'Launcher', href: '/download' },
    ],
  },
  {
    title: 'Communauté',
    links: [
      { label: 'Portfolio', href: 'https://portfolio-florian-beudaert.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/FlorianBeudaert' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Zanera Wiki</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Le wiki pour avoir des informations sur les datapacks pour les survie Minecraft des chicken Nuggets.
            </p>
          </div>
          {sections.map(section => (
            <div key={section.title}>
              <h4 className="font-semibold mb-2 text-base">{section.title}</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Zanera Wiki. Sans droits d’auteur, partage libre</p>
        </div>
      </div>
    </footer>
  );
}