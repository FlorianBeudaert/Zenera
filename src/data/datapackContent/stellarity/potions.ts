import { Item, ObtentionType } from '@/data/datapackTypes';

export const potions: Item[] = [
	{
		name: 'Chorus Juice',
		description: 'Boire un Chorus Juice donne Vitesse I et Saut amélioré I pendant 50 secondes.',
		bonus: 'Vitesse I et Saut amélioré I pendant 50 secondes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Chorus Fruit', quantity: 2 },
					{ name: 'Bottle', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Blind Rage Potion',
		description: 'Boire une Blind Rage Potion donne Force III et Obscurité pendant 15 secondes.',
		bonus: 'Force III pendant 15s.',
		malus: 'Obscurité I pendant 15s.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Fleshy Piranha', quantity: 1 },
					{ name: 'Glowstone Dust', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Nether Wart', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Blind Rage Potion Extra Time',
		description: 'Boire une Blind Rage Potion Extra Time donne Force III et Obscurité pendant 22 secondes.',
		bonus: 'Force III pendant 22s.',
		malus: 'Obscurité I pendant 22s.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Blind Rage Potion', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Endurance Potion',
		description: 'Boire une Endurance Potion donne Résistance I pendant 2 minutes.',
		bonus: 'Résistance I pendant 2 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Iron Ingot', quantity: 1 },
					{ name: 'Popped Chorus Fruit', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Endurance Potion Extra Time',
		description: 'Boire une Endurance Potion Extra Time donne Résistance I pendant 4 minutes.',
		bonus: 'Résistance I pendant 4 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Endurance Potion', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Endurance Potion II',
		description: 'Boire une Endurance Potion II donne Résistance II pendant 1 minute.',
		bonus: 'Résistance II pendant 1 minute.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Endurance Potion', quantity: 1 },
					{ name: 'Glowstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Entanglement Potion',
		description: 'Jeter une Entanglement Potion donne Lenteur V pendant 11 secondes.',
		malus: 'Lenteur V pendant 11 secondes.',
		icon: '/icons/vanilla/potions/splash_water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Overgrown Cod', quantity: 1 },
					{ name: 'Gunpowder', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Entanglement Potion Extra Time',
		description: 'Jeter une Entanglement Potion Extra Time donne Lenteur V pendant 14 secondes.',
		malus: 'Lenteur V pendant 14 secondes.',
		icon: '/icons/vanilla/potions/splash_water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Entanglement Potion', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Entanglement Potion II',
		description: 'Jeter une Entanglement Potion II donne Lenteur VI pendant 8 secondes.',
		malus: 'Lenteur VI pendant 8 secondes.',
		icon: '/icons/vanilla/potions/splash_water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Entanglement Potion', quantity: 1 },
					{ name: 'Glowstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Frost Cloud Potion',
		description: 'Zone de particules empêchant de bouger les entités à l’intérieur.',
		malus: 'Lenteur dans la zone d’effet.',
		icon: '/icons/vanilla/potions/lingering_water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Frost Minnow', quantity: 1 },
					{ name: 'Packed Ice', quantity: 3 },
				]
			},
		]
	},
	{
		name: 'Hellfire Treader Potion',
		description: 'Boire une Hellfire Treader Potion donne Vitesse I et Résistance au feu pendant 4 minutes.',
		bonus: 'Vitesse I et Résistance au feu pendant 4 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Flarefin Koi', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Sugar', quantity: 1 },
					{ name: 'Nether Wart', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Hellfire Treader Potion Extra Time',
		description: 'Boire une Hellfire Treader Potion Extra Time donne Vitesse I et Résistance au feu pendant 8 minutes.',
		bonus: 'Vitesse I et Résistance au feu pendant 8 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Hellfire Treader Potion', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Hellfire Treader Potion II',
		description: 'Boire une Hellfire Treader Potion II donne Vitesse II et Résistance au feu pendant 2 minutes.',
		bonus: 'Vitesse II et Résistance au feu pendant 2 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Hellfire Treader Potion', quantity: 1 },
					{ name: 'Glowstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Lifeforce Potion',
		description: "Boire une Lifeforce Potion donne l'effet Bonus de vie I pendant 3 minutes.",
		bonus: 'Bonus de vie I pendant 3 minutes. (+2 cœurs)',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Prismite', quantity: 1 },
					{ name: 'Starlight Soot', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Lifeforce Potion Extra Time',
		description: 'Boire une Lifeforce Potion Extra Time donne l\'effet Bonus de vie I pendant 6 minutes.',
		bonus: 'Bonus de vie I pendant 6 minutes. (+2 cœurs)',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Lifeforce Potion', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Lifeforce Potion II',
		description: 'Boire une Lifeforce Potion II donne l\'effet Bonus de vie II pendant 1 minute 30 secondes.',
		bonus: 'Bonus de vie II pendant 1 minute 30 secondes. (+4 cœurs)',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Lifeforce Potion', quantity: 1 },
					{ name: 'Glowstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Spelunker Potion',
		description: 'Boire une Spelunker Potion donne Vision nocturne et Célérité I pendant 3 minutes.',
		bonus: 'Vision nocturne et Célérité I pendant 3 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Red/Brown Mushroom', quantity: 1 },
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Gold Ingot', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Spelunker Potion Extra Time',
		description: 'Boire une Spelunker Potion Extra Time donne Vision nocturne et Célérité pendant 6 minutes.',
		bonus: 'Vision nocturne et Célérité I pendant 6 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Spelunker Potion', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Spelunker Potion II',
		description: 'Boire une Spelunker Potion II donne Vision nocturne et Célérité II pendant 1 minute 30 secondes.',
		bonus: 'Vision nocturne et Célérité II pendant 1 minute 30 secondes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Spelunker Potion', quantity: 1 },
					{ name: 'Glowstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Luck Potion',
		description: 'Boire une Luck Potion donne Chance pendant 5 minutes.',
		bonus: 'Chance pendant 5 minutes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
					{ name: 'Short Grass', quantity: 2 },
					{ name: 'Diamond', quantity: 1 },
				]
			},
		]
	},
	{
		name: "Poseidon's Nectar",
		description: "Boire un Poseidon's Nectar donne Force de conduit, Absorption et Grâce du dauphin pendant 6 minutes 30 secondes.",
		bonus: 'Force de conduit, Absorption et Grâce du dauphin pendant 6 minutes 30 secondes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Bubblefish', quantity: 1 },
					{ name: 'Nautilus Shell', quantity: 1 },
					{ name: 'Prismarine Shard', quantity: 1 },
					{ name: 'Honey Bottle', quantity: 1 },
					{ name: 'Kelp', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Red Potion',
		description: 'Buvez cette potion si vous tenez à mourrir...',
		malus: 'La mort dans les 5 secondes qui suivent.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Wither Rose', quantity: 1 },
					{ name: 'Wither Skeleton Skull', quantity: 1 },
					{ name: 'Red Dye', quantity: 1 },
					{ name: 'Sweet Berries', quantity: 1 },
					{ name: 'Nether Wart Block', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Regeneraga',
		description: 'Boire une Regeneraga donne Soin instantané II & Régénération III pendant 7 secondes.',
		bonus: 'Soin instantané II & Régénération III pendant 7 secondes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Crimson Tigerfish', quantity: 1 },
					{ name: 'Prismite', quantity: 1 },
					{ name: 'Glistering Melon Slice', quantity: 1 },
					{ name: 'Ghast Tear', quantity: 1 },
					{ name: 'Nether Wart', quantity: 1 },
					{ name: 'Glass Bottle', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Regeneraga Extra Time',
		description: 'Boire une Regeneraga Extra Time donne Soin instantané II & Régénération III pendant 10 secondes.',
		bonus: 'Soin instantané II & Régénération III pendant 10 secondes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Regeneraga', quantity: 1 },
					{ name: 'Redstone Dust', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Regeneraga II',
		description: 'Boire une Regeneraga II donne Soin instantané II & Régénération V pendant 3 secondes.',
		bonus: 'Soin instantané II & Régénération V pendant 3 secondes.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Regeneraga', quantity: 1 },
					{ name: 'Starlight Soot', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Royal Jelly',
		description: 'Une potion divine qui soigne.',
		bonus: 'Absorption I pendant 1 minute & retire tous les effets négatifs.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Honey Bottle', quantity: 1 },
					{ name: 'Starlight Soot', quantity: 1 },
					{ name: 'Amethyst Shard', quantity: 2 },
				]
			},
		]
	},
	{
		name: 'Royal Jelly II',
		description: 'Une potion divine qui soigne encore plus.',
		bonus: 'Absorption II pendant 30 secondes & retire tous les effets négatifs.',
		icon: '/icons/vanilla/potions/water_bottle.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Royal Jelly', quantity: 1 },
					{ name: 'Starlight Soot', quantity: 1 },
				]
			},
		]
	},
]