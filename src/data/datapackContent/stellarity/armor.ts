import { Item, ObtentionType } from '@/data/datapackTypes';

export const armor: Item[] = [
	{
		name: 'Hallowed Helmet',
		description: '+1 résistance au recul & +1 bloc de chute sûre.',
		bonus: '+1 résistance au recul, +1 bloc de chute sûre.',
		setbonus: 'Permet d’esquiver les attaques, annulant tous les dégâts et le recul.',
		icon: '/icons/stellarity/armor/hallowed_helmet.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Hallowed Ingot', quantity: 4 },
					{ name: 'Netherite Helmet', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Hallowed Chestplate',
		description: '+1 bloc de chute sûre, +1 résistance au recul & +15% vitesse d’attaque.',
		bonus: '+1 bloc de chute sûre, +1 résistance au recul, +15% vitesse d’attaque.',
		setbonus: 'Permet d’esquiver les attaques, annulant tous les dégâts et le recul.',
		icon: '/icons/stellarity/armor/hallowed_chestplate.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Hallowed Ingot', quantity: 4 },
					{ name: 'Netherite Chestplate', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Hallowed Leggings',
		description: '+25% vitesse en sneaking, +1 résistance au recul & +15% force de saut.',
		bonus: '+25% vitesse en sneaking, +1 résistance au recul, +15% force de saut.',
		setbonus: 'Permet d’esquiver les attaques, annulant tous les dégâts et le recul.',
		icon: '/icons/stellarity/armor/hallowed_leggings.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Hallowed Ingot', quantity: 4 },
					{ name: 'Netherite Leggings', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Hallowed Boots',
		description: '+10% vitesse, +0.5 hauteur de marche & +1 résistance au recul.',
		bonus: '+10% vitesse, +0.5 hauteur de marche, +1 résistance au recul.',
		setbonus: 'Permet d’esquiver les attaques, annulant tous les dégâts et le recul.',
		icon: '/icons/stellarity/armor/hallowed_boots.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Hallowed Ingot', quantity: 4 },
					{ name: 'Netherite Boots', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Champion Helmet',
		description: '+0.8 résistance au recul & +2.5% dégâts d’attaque.',
		bonus: '+0.8 résistance au recul, +2.5% dégâts d’attaque.',
		setbonus: 'La colère du dragon vous envahit, augmentant les dégâts à chaque coup consécutif !',
		icon: '/icons/stellarity/armor/champion_helmet.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Champion Ingot', quantity: 4 },
					{ name: 'Netherite Helmet', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Champion Chestplate',
		description: '+2.5% dégâts d’attaque, +0.8 résistance au recul & +15% vitesse d’attaque.',
		bonus: '+2.5% dégâts d’attaque, +0.8 résistance au recul, +15% vitesse d’attaque.',
		setbonus: 'La colère du dragon vous envahit, augmentant les dégâts à chaque coup consécutif !',
		icon: '/icons/stellarity/armor/champion_chestplate.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Champion Ingot', quantity: 4 },
					{ name: 'Netherite Chestplate', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Champion Leggings',
		description: '+2.5% dégâts d’attaque, +0.8 résistance au recul & +0.15 ratio balayage.',
		bonus: '+2.5% dégâts d’attaque, +0.8 résistance au recul, +0.15 ratio balayage.',
		setbonus: 'La colère du dragon vous envahit, augmentant les dégâts à chaque coup consécutif !',
		icon: '/icons/stellarity/armor/champion_leggings.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Champion Ingot', quantity: 4 },
					{ name: 'Netherite Leggings', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Champion Boots',
		description: '+2.5% dégâts d’attaque & +0.8 résistance au recul.',
		bonus: '+2.5% dégâts d’attaque, +0.8 résistance au recul.',
		setbonus: 'La colère du dragon vous envahit, augmentant les dégâts à chaque coup consécutif !',
		icon: '/icons/stellarity/armor/champion_boots.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Champion Ingot', quantity: 4 },
					{ name: 'Netherite Boots', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Helmet',
		description: 'Réduit la vitesse d’attaque et de déplacement de 3%.',
		malus: '-3% vitesse d’attaque & déplacement.',
		setbonus: 'Les Shulker Bullets traquent vos attaquants. Réduction de dégâts quand vous êtes entouré.',
		icon: '/icons/stellarity/armor/shulker_helmet.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Helmet', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Chestplate',
		description: 'Immunité à la Faiblesse. Réduit la vitesse d’attaque et de déplacement de 3%.',
		bonus: 'Immunité à la Faiblesse.',
		malus: '-3% vitesse d’attaque & déplacement.',
		setbonus: 'Les Shulker Bullets traquent vos attaquants. Réduction de dégâts quand vous êtes entouré.',
		icon: '/icons/stellarity/armor/shulker_chestplate.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Chestplate', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Leggings',
		description: 'Immunité à la Lévitation. Réduit la vitesse d’attaque et de déplacement de 3%.',
		bonus: 'Immunité à la Lévitation.',
		malus: '-3% vitesse d’attaque & déplacement.',
		setbonus: 'Les Shulker Bullets traquent vos attaquants. Réduction de dégâts quand vous êtes entouré.',
		icon: '/icons/stellarity/armor/shulker_leggings.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Leggings', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Shulker Boots',
		description: 'Réduit la vitesse d’attaque et de déplacement de 3%.',
		malus: '-3% vitesse d’attaque & déplacement.',
		setbonus: 'Les Shulker Bullets traquent vos attaquants. Réduction de dégâts quand vous êtes entouré.',
		icon: '/icons/stellarity/armor/shulker_boots.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Shulker Shell', quantity: 4 },
					{ name: 'Netherite Boots', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Floral Helmet',
		description: 'Réduit les dégâts de mêlée de 5%.',
		malus: '-5% dégâts de mêlée.',
		setbonus: `Tirer sur un ennemi fait éclore une fleur explosive (dégâts augmentent avec chaque flèche). Invisibilité en sneaking dans les hautes herbes.`,
		icon: '/icons/stellarity/armor/floral_helmet.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Cherry Leaves', quantity: 8 },
					{ name: 'Netherite Helmet', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Floral Chestplate',
		description: 'Flèches 25% plus rapides. -5% dégâts mêlée.',
		malus: '-5% dégâts de mêlée.',
		bonus: '+25% vitesse des flèches.',
		setbonus: `Tirer sur un ennemi fait éclore une fleur explosive (dégâts augmentent avec chaque flèche). Invisibilité en sneaking dans les hautes herbes.`,
		icon: '/icons/stellarity/armor/floral_chestplate.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Cherry Leaves', quantity: 8 },
					{ name: 'Netherite Chestplate', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Floral Leggings',
		description: '+10% dégâts flèches. -5% dégâts mêlée.',
		malus: '-5% dégâts de mêlée.',
		bonus: '+10% dégâts de flèches.',
		setbonus: `Tirer sur un ennemi fait éclore une fleur explosive (dégâts augmentent avec chaque flèche). Invisibilité en sneaking dans les hautes herbes.`,
		icon: '/icons/stellarity/armor/floral_leggings.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Cherry Leaves', quantity: 8 },
					{ name: 'Netherite Leggings', quantity: 1 },
				]
			}
		]
	},
	{
		name: 'Floral Boots',
		description: '-5% dégâts mêlée.',
		malus: '-5% dégâts de mêlée.',
		setbonus: `Tirer sur un ennemi fait éclore une fleur explosive (dégâts augmentent avec chaque flèche). Invisibilité en sneaking dans les hautes herbes.`,
		icon: '/icons/stellarity/armor/floral_boots.png',
		obtention: [
			{
				type: ObtentionType.CRAFTER,
				crafterName: 'Altar Of The Accursed',
				crafterIcon: '/icons/stellarity/block/altar_of_the_accursed.png',
				crafterIngredients: [
					{ name: 'Enderite Upgrade Smithing Template', quantity: 1 },
					{ name: 'Cherry Leaves', quantity: 8 },
					{ name: 'Netherite Boots', quantity: 1 },
				]
			}
		]
	},
],