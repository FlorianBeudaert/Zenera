import { datapacks } from '@/data/datapacks';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function WikiDatapackChoice() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/10 to-primary-hover/20 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Choisissez un Datapack
        </h1>
        <p className="text-xl text-gray-600">
          Sélectionnez le datapack dont vous souhaitez consulter le wiki.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {datapacks.map((dp) => (
          <Link
            key={dp.id}
            href={`/wiki/${dp.id}`}
            className="group bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-primary/20"
          >
            <BookOpen className="w-10 h-10 text-primary mb-4 group-hover:text-primary-hover transition-colors" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary">
              {dp.name}
            </h2>
            <p className="text-gray-600 text-center">{dp.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}