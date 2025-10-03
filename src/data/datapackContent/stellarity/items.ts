import { Item, ObtentionType } from '@/data/datapackTypes';

export const items: Item[] = [
	{
		name: 'Chorus Plating',
		description: 'Matériel utile pour la fabrication de certains objets.',
		icon: '/icons/stellarity/items/chorus_plating.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Iron Ingot', quantity: 1 },
					{ name: 'Popped chorus fruit', quantity: 2 },
				]
			},
			{ type: ObtentionType.DONJON_REWARD }
		]
	},
	{
		name: 'Enderite Upgrade Smithing Template',
		description: 'Matériel utile pour la fabrication de certains objets. Peut se dupliquer !',
		icon: '/icons/stellarity/items/enderite_upgrade_smithing_template.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgade Smithing Template', quantity: 1 },
					{ name: 'Purpur Block', quantity: 9 },
					{ name: 'Enderite Shards', quantity: 5 },
				]
			},
			{ type: ObtentionType.DONJON_REWARD }
		]
	},
	{
		name: 'Endonomicon',
		description: 'Livre des recette utilisable via le mod mais ne fonctionne pas avec le datapack.',
		icon: '/icons/stellarity/items/endonomicon.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enchanted Book', quantity: 1 }
				]
			}
		]
	},
	{
		name: 'Book of Jinx',
		description: `Un clic droit fait apparaître un nuage rose lent qui grossit durant 2 sec. Les ennemis pris dans le nuage auront l'effet de malédiction pendant 10 secondes, réduisant leur défense de 25 %.`,
		icon: '/icons/stellarity/items/book_of_jinx.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Book', quantity: 1 },
					{ name: 'Chorus Plating', quantity: 8 },
					{ name: 'Enderite Shards', quantity: 10 },
				]
			}
		]
	},
	{
		name: 'Grand Tome of Teleportation',
		description: `Un clic droit lance une étincelle lente qui téléporte l'utilisateur vers le premier bloc touché. L'étincelle dure 3 secondes et peut être guidée en inclinant la tête.`,
		icon: '/icons/stellarity/items/book_of_conveyance.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Book', quantity: 1 },
					{ name: 'Ender Pearl', quantity: 16 },
					{ name: 'Enderite Shards', quantity: 32 },
				]
			}
		]
	},
	{
		name: 'Satchel of Voids',
		description: `Permet d'avoir un Alter of the Accursed portable sous forme de cercle magique.`,
		icon: '/icons/stellarity/items/satchel_of_voids.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Bundle', quantity: 1 },
					{ name: 'Nether Star', quantity: 2 },
					{ name: 'Enderite Shards', quantity: 64 },
					{ name: 'Starlight Soot', quantity: 64 },
					{ name: 'Netherite Ingot', quantity: 4 },
				]
			}
		]
	},
	{
		name: 'Experience Bottle',
		description: `Donne 10 niveaux d'expérience à l'utilisation.`,
		icon: '/icons/stellarity/items/experience_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Lapis Lazuli', quantity: 2 },
				]
			},
			{ type: ObtentionType.DONJON_REWARD }
		]
	}
];
