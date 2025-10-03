import { Item, ObtentionType } from '@/data/datapackTypes';

export const weapons: Item[] = [
	{
		name: 'Shulker Sword',
		description: `Fait plus de dégats qu'une épée en netherite`,
		icon: '/icons/stellarity/weapons/shulker_sword.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Sword', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Spectral Fury',
		description: 'Tire une lueur spectrale à la place de la flèche si chargée 1,5s avec des flèches spectrales. La lueur poursuit les ennemis proches, peut traverser jusqu’à 3 cibles et inflige des dégâts décroissants à chaque ennemi touché.',
		icon: '/icons/stellarity/weapons/spectral_fury.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Sharanga', quantity: 1 },
					{ name: 'Phantom Membrane', quantity: 8 },
					{ name: 'Diamond', quantity: 3 },
				]
			}
		]
	},
	{
		name: 'Sandstorm Trident',
		description: 'Lancer un trident de tempête de sable invoque une soufflerie qui peut être utilisée pour déplacer des entités.',
		icon: '/icons/stellarity/weapons/sandstorm_trident.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Trident', quantity: 1 },
					{ name: 'Breeze Rod', quantity: 2 },
					{ name: 'Sand Rune', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Tamaris',
		description: 'Permet d’exécuter instantanément les ennemis faibles (santé <25%) en se faufilant, dans un rayon de 10 blocs. Un cooldown de 11s s’applique si la cible possède un Totem ou la protection sacrée.',
		icon: '/icons/stellarity/weapons/tamaris.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Wither Skeleton Skull', quantity: 1 },
					{ name: 'Enderite Shards', quantity: 8 },
					{ name: 'Netherite Sword', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Crest of The End',
		description: 'Bouclier qui permet de stocker une partie des dégâts bloqués et d’augmenter la prochaine attaque jusqu’à +45%. Bloquer une attaque de hache déclenche une explosion infligeant 14 dégâts et applique Jinx aux ennemis proches.',
		icon: '/icons/stellarity/weapons/crest_of_the_end.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Shield', quantity: 1 },
					{ name: 'Netherite Ingot', quantity: 1 },
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Starstruck Shield',
		description: 'Prendre des dégâts fait tomber 3 étoiles autour du joueur, infligeant 4 coeurs (50% pénétration d’armure) chacune. Les étoiles ignorent l’immunité et fonctionnent même en grotte.\n\n Obtenable à 33% sur l’Impératrice de Lumière, uniquement si tuée dans l’End ou l’Overworld de nuit.',
		obtention: [
			{ type: ObtentionType.BOSS, name: 'Empress of Light', chance: '33%' }
		]
	},
	{
		name: 'Copper Elektra Shield',
		description: `Accumule une charge toutes les 7s (14s pour la dernière). S'accroupir libère la charge: inflige 4 cœurs aux ennemis touchés et te projette de 7 blocs en avant. Dissipe les projectiles de shulker. Les creepers touchés ont 25% de chance d'être chargés.`,
		obtention: [
			{
				type: ObtentionType.MOB,
				name: 'Vindicator (Stronghold)',
				chance: '8%'
			},
			{
				type: ObtentionType.PLACE,
				placeType: 'End Village',
				name: 'Armorer Villager'
			}
		]
	},
],