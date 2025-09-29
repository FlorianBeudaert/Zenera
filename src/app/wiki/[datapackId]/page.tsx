import { notFound } from 'next/navigation';
import stellarityContent from '@/data/datapackContent/stellarity';
import { datapacks } from '@/data/datapacks';
import { BookOpen } from 'lucide-react';

const datapackContents: Record<string, typeof stellarityContent> = {
  stellarity: stellarityContent,
};

export default function WikiDatapackPage({ params }: { params: { datapackId: string } }) {
  const { datapackId } = params;
  const datapack = datapacks.find(dp => dp.id === datapackId);
  const content = datapackContents[datapackId];

  if (!datapack || !content) return notFound();

  return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white/60 to-primary-hover/20 py-20 px-2">
          <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3 drop-shadow-lg">
                  <BookOpen className="w-12 h-12 text-primary"/>
                  {datapack.name}
              </h1>
              <p className="text-xl text-gray-700 mb-2">{datapack.description}</p>
          </div>
          <div className="max-w-7xl mx-auto space-y-16">
              {Object.entries(content).map(([type, items]) => (
                  items && items.length > 0 && (
                      <section key={type}>
                          <h2 className="text-3xl font-bold text-primary mb-8 capitalize tracking-wide drop-shadow">
                              {type}
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                              {items.map((item, idx) => (
                                  <div
                                      key={idx}
                                      className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col justify-between items-center border border-primary/10 transition-transform hover:-translate-y-2 hover:shadow-2xl h-full"
                                  >
                                      <div className="flex flex-col items-center w-full">
                                          {item.icon ? (
                                              <img
                                                  src={item.icon}
                                                  alt={item.name}
                                                  className="img-minecraft mb-5 shadow-lg rounded-lg p-1"
                                              />
                                          ) : null}
                                          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{item.name}</h3>
                                          <p className="text-gray-600 text-center mb-3">{item.description}</p>
                                            {item.bonus && (
                                                <div
                                                    className="text-sm text-green-700 bg-green-100 rounded px-3 py-1 mb-2 w-full">
                                                    Bonus: {item.bonus}
                                                </div>
                                            )}
                                      </div>
                                      <div className="w-full mt-4">
                                          {item.ingredients && (
                                              <ul className="text-left text-gray-700 bg-primary/5 rounded-lg p-3 w-full mb-2">
                                                  {item.ingredients.map((ing, i) => (
                                                      <li key={i} className="pl-2">
                                                          <span
                                                              className="font-semibold text-primary">{ing.quantity}x</span> {ing.name}
                                                      </li>
                                                  ))}
                                              </ul>
                                          )}
                                          {item.obtention && (
                                              <div
                                                  className="text-sm text-primary mt-2 text-center font-medium bg-primary/10 rounded px-3 py-2 w-full">
                                                  Obtention: {item.obtention}
                                              </div>
                                          )}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </section>
                  )
              ))}
          </div>
      </div>
  );
}