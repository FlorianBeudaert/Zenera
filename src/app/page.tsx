import Link from 'next/link';
import { Book, Sparkles, Download } from 'lucide-react';

const stats = [
  { value: '25', label: 'Datapacks sur le serveur' },
  { value: '1', label: 'ModPack sur le launcher' },
  { value: '1.0.0', label: 'Version du launcher' },
  { value: '2025', label: 'Année de création' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-hover/10 to-primary/20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bienvenue sur le
            <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary-hover bg-clip-text">
              Zanera Wiki
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Le wiki pour avoir des informations sur les datapacks de la survie Minecraft des Girlsss et
            la possibilité de télécharger le launcher minecraft custom pour y jouer facilement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" href="/wiki">
              <Book className="w-5 h-5 mr-2" />
              Explorer le wiki
            </Link>
						<Link
							className="bg-gradient-to-r from-primary to-primary-hover text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
							href="/download"
						>
							<Sparkles className="w-5 h-5 mr-2" />
							Télécharger le launcher
						</Link>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Launcher Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary-hover/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-7 h-7 text-primary" />
            Informations sur le launcher
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Le launcher Minecraft custom vous permet de rejoindre facilement le serveur actuel et futur, avec
            des ModPacks préinstallé. Il seras régulièrement mis à jour avec de nouvelles versions et
            modpacks.
          </p>
          <ul className="text-left mb-8 mx-auto max-w-md space-y-3">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full" />
              Installation automatique des modpacks
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full" />
              Mises à jour régulières
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full" />
              Launcher en version crackée
            </li>
          </ul>
					<Link
						className="bg-gradient-to-r from-primary to-primary-hover text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow inline-flex items-center"
						href="/download"
					>
						<Download className="w-5 h-5 mr-2" />
						Télécharger le launcher
					</Link>
        </div>
      </section>
    </div>
  );
}