import { Item, ObtentionType } from '@/data/datapackTypes';

export const tools: Item[] = [
	{
		name: 'Shulker Pickaxe',
		description: 'Mine plus vite qu’une pioche en netherite.',
		bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
		icon: '/icons/stellarity/tools/shulker_pickaxe.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Pickaxe', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Axe',
		description: 'Coupe plus vite qu’une hache en netherite.',
		bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
		icon: '/icons/stellarity/tools/shulker_axe.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Axe', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Shovel',
		description: 'Creuse plus vite qu’une pelle en netherite.',
		bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
		icon: '/icons/stellarity/tools/shulker_shovel.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Shovel', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Hoe',
		description: 'Houes plus rapide, mais peu utile.',
		bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
		icon: '/icons/stellarity/tools/shulker_hoe.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Hoe', quantity: 1 },
				]
			}
		]
	},
];