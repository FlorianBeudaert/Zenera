import { Item, ObtentionType } from '@/data/datapackTypes';

export const food: Item[] = [
	{
		name: 'Chorus Stew',
		description: 'Consommer un Chorus Stew donne 6 points de faim et 7,2 points de saturation.',
		icon: '/icons/stellarity/food/chorus_stew.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Bowl', quantity: 1 },
					{ name: 'Chorus Fruit', quantity: 1 },
					{ name: 'Chorus Flower', quantity: 1 },
				]
			},
			{ type: ObtentionType.DONJON_REWARD }
		]
	},
	{
		name: 'Golden Chorus Fruit',
		description: 'Nous ne connaissons pas encore les effets. À découvrir !',
		icon: '/icons/stellarity/food/golden_chorus_fruit.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Chorus Fruit', quantity: 1 },
					{ name: 'Gold Block', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Candied Chorus Fruit',
		description: 'Nous ne connaissons pas encore les effets. À découvrir !',
		icon: '/icons/stellarity/food/candied_chorus_fruit.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Chorus Fruit', quantity: 1 },
					{ name: 'Sugar', quantity: 2 },
				]
			},
		]
	},
	{
		name: 'Fried Chorus Fruit',
		description: 'Nous ne connaissons pas encore les effets. À découvrir !',
		icon: '/icons/stellarity/food/fried_chorus_fruit.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Chorus Fruit', quantity: 1 },
					{ name: 'Wheat', quantity: 1 },
					{ name: 'Blaze Powder', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Grilled Enderman Flesh',
		description: 'Nous ne connaissons pas encore les effets. À découvrir !',
		icon: '/icons/stellarity/food/grilled_enderman_flesh.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Enderman Flesh', quantity: 1 },
					{ name: 'Blaze Powder', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Frozen Carpaccio',
		description: 'Nous ne connaissons pas encore les effets. À découvrir !',
		icon: '/icons/stellarity/food/frozen_carpaccio.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Enderman Flesh', quantity: 1 },
					{ name: 'Ice', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Chorus Pie',
		description: 'Consommer un Chorus Pie donne 8 points de faim et 4,8 points de saturation.',
		icon: '/icons/stellarity/food/chorus_pie.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Chorus Fruit', quantity: 1 },
					{ name: 'Sugar', quantity: 1 },
					{ name: 'Ender Egg', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Pho',
		description: 'Consommer un Pho donne 13 points de faim et 20 points de saturation.',
		bonus: 'Absorption (2:30), Force (2:30), Régénération (0:32).',
		icon: '/icons/stellarity/food/pho.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Golden Chorus Fruit', quantity: 1 },
					{ name: 'Bowl', quantity: 1 },
					{ name: 'Grilled Enderman Flesh', quantity: 1 },
				]
			},
		]
	},
	{
		name: "Shepherd's Pie",
		description: "Consommer un Shepherd's Pie donne 20 points de faim et 20 points de saturation.",
		bonus: 'Soin instantané III, Régénération II (1min04).',
		icon: '/icons/stellarity/food/shepherds_pie.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Shulker Body', quantity: 1 },
					{ name: 'Golden Carrot', quantity: 1 },
					{ name: 'Baked Potato', quantity: 1 },
					{ name: 'Chorus Fruit', quantity: 2 },
				]
			},
			{
				type: ObtentionType.PLACE,
				placeType: 'End Village',
				name: 'End Villager (Maître)'
			}
		]
	},
	{
		name: 'Sushi',
		description: 'Consommer un Sushi donne 4 points de faim et 2,4 points de saturation.',
		icon: '/icons/stellarity/food/sushi.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Ender Koi', quantity: 1 },
					{ name: 'Dried Kelp', quantity: 1 },
				]
			},
		]
	},
	{
		name: 'Prismatic Sushi',
		description: "Consommer un Prismatic Sushi donne 4 points de faim et 2,4 points de saturation.",
		bonus: "Bonus de vie pendant 40 secondes.",
		icon: '/icons/stellarity/food/prismatic_sushi.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Cauldron Crafting',
				crafterIcon: '/icons/stellarity/block/cauldron_crafting.png',
				crafterIngredients: [
					{ name: 'Prismite', quantity: 1 },
					{ name: 'Dried Kelp', quantity: 1 },
				]
			},
		]
	},
];