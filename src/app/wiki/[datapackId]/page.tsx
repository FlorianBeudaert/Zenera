'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { ObtentionType } from '@/data/datapackContent/stellarity';
import stellarityContent from '@/data/datapackContent/stellarity';
import { datapacks } from '@/data/datapacks';
import { Skull, Swords, MapPin, FlaskConical, Award, BookOpen } from 'lucide-react';

const datapackContents: Record<string, typeof stellarityContent> = {
	stellarity: stellarityContent,
};

export default function WikiDatapackPage({ params }: { params: Promise<{ datapackId: string }> }) {
	const { datapackId } = React.use(params);

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
													className="img-minecraft mb-5 shadow-lg rounded-lg p-1 object-contain max-h-60 bg-gray-300 border border-gray-400"
												/>
											) : null}
											<h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{item.name}</h3>
											<p className="text-gray-600 text-center mb-3">
												{item.description?.split('\n').map((line, i) => (
													<span key={i}>
														{line}
														<br />
													</span>
												))}
											</p>
											{item.setbonus && (
												<div className="text-sm text-blue-700 bg-blue-100 rounded px-3 py-1 mb-2 w-full">
													Full Set : {item.setbonus}
												</div>
											)}
											{item.bonus && (
												<div className="text-sm text-green-700 bg-green-100 rounded px-3 py-1 mb-2 w-full">
													Bonus: {item.bonus}
												</div>
											)}
											{item.malus && (
												<div className="text-sm text-red-700 bg-red-100 rounded px-3 py-1 mb-2 w-full">
													Malus: {item.malus}
												</div>
											)}

										</div>
										<div className="w-full mt-4">
											{item.obtention && (
												<div className="text-sm text-primary mt-2 text-center font-medium bg-primary/10 rounded px-3 py-2 w-full">
													<span className="font-semibold block mb-2 text-base">Obtention :</span>
													<ul className="mt-1 space-y-2">
														{item.obtention.map((src, i) => {
															return (
																<li key={i} className="flex flex-col bg-white rounded-lg p-3 border border-primary/20 shadow-sm">
																	<div className="flex items-center gap-2 mb-1">
																		{src.type === ObtentionType.CRAFTER && (
																			<>
																				{src.crafterIcon ? (
																					<img
																						src={src.crafterIcon}
																						alt={src.crafterName}
																						className="inline-block w-5 h-5 object-contain"
																					/>
																				) : (
																					<FlaskConical className="inline-block w-5 h-5 text-green-700" />
																				)}
																				<span className="ml-1 font-semibold">{src.crafterName}</span>
																			</>
																		)}
																		{src.type === ObtentionType.BOSS && (
																			<>
																				<Skull className="inline-block w-5 h-5 text-red-700" />
																				<span className="ml-1">{src.name}</span>
																				{src.chance && (
																					<span className="ml-1 text-xs text-gray-500">({src.chance})</span>
																				)}
																			</>
																		)}
																		{src.type === ObtentionType.MOB && (
																			<>
																				<Swords className="inline-block w-5 h-5 text-gray-700" />
																				<span className="ml-1">{src.name}</span>
																				{src.chance && (
																					<span className="ml-1 text-xs text-gray-500">({src.chance})</span>
																				)}
																			</>
																		)}
																		{src.type === ObtentionType.PLACE && (
																			<>
																				<MapPin className="inline-block w-5 h-5 text-blue-700" />
																				<span className="ml-1">
																					{src.placeType && `${src.placeType} : `}{src.name}
																				</span>
																			</>
																		)}
																		{src.type === ObtentionType.DONJON_REWARD && (
																			<>
																				<Award className="inline-block w-5 h-5 text-yellow-600" />
																				<span className="ml-1">Récompense de donjon</span>
																			</>
																		)}
																	</div>
																	{src.type === ObtentionType.CRAFTER && src.crafterIngredients && (
																		<ul className="mt-2 mb-1 text-left text-gray-800 w-full max-w-xs mx-auto">
																			{src.crafterIngredients.map((ing, j) => (
																				<li key={j} className="py-1 flex items-center gap-2">
																					<span className="font-semibold text-primary">{ing.quantity}x</span>
																					<span>{ing.name}</span>
																				</li>
																			))}
																		</ul>
																	)}
																</li>
															);
														})}
													</ul>
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