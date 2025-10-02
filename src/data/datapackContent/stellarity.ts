export enum ObtentionType {
	CRAFTER = 'CRAFTER',
	DONJON_REWARD = 'DONJON_REWARD',
	BOSS = 'BOSS',
	MOB = 'MOB',
	PLACE = 'PLACE',
}

export interface ObtentionSource {
	type: ObtentionType;
	crafterName?: string;
	crafterIcon?: string;
	crafterIngredients?: Ingredient[];
	placeType?: string;
	name?: string;
	chance?: string;
}

export type Ingredient = {
	name: string;
	quantity: number;
};

export type Item = {
	name: string;
	description?: string;
	icon?: string;
	setbonus?: string;
	bonus?: string;
	malus?: string;
	obtention?: ObtentionSource[];
};

export type DatapackContent = {
	items?: Item[];
	outils?: Item[];
	armes?: Item[];
	armures?: Item[];
	biomes?: Item[];
	nourritures?: Item[];
	potions?: Item[];
};

const stellarityContent: DatapackContent = {
	items: [
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
	],

	outils: [
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
	],

	armes: [
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

	armures: [
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

	nourritures: [
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
						{ name: 'Wheat', quantity: 1},
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
		  description: `Consommer un Pho donne 13 points de faim et 20 points de saturation. Effets: Absorption (2:30), Force (2:30), Régénération (0:32).`,
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
		  description: `Consommer un Shepherd's Pie donne 20 points de faim et 20 points de saturation. Effets: Soin instantané III et Régénération II pendant 1min04.`,
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
		  description: 'Consommer un Prismatic Sushi donne 4 points de faim, 2,4 points de saturation et l\'effet Health Boost pendant 40 secondes.',
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
	],

	potions: [
		{
			name: 'Chorus Juice',
			description: 'Consommer un Chorus Juice donne Vitesse I et Saut amélioré I pendant 50 secondes.',
			bonus: 'Vitesse I et Saut amélioré I pendant 50 secondes.',
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
			description: 'Consommer une Blind Rage Potion donne Force III et Obscurité pendant 15 secondes.',
			bonus: 'Force III pendant 15s.',
			malus: 'Obscurité I pendant 15s.',
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
			description: 'Consommer une Blind Rage Potion Extra Time donne Force III et Obscurité pendant 22 secondes.',
			bonus: 'Force III pendant 22s.',
			malus: 'Obscurité I pendant 22s.',
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
			description: 'Consommer une Endurance Potion donne Résistance I pendant 2 minutes.',
			bonus: 'Résistance I pendant 2 minutes.',
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
			description: 'Consommer une Endurance Potion Extra Time donne Résistance I pendant 4 minutes.',
			bonus: 'Résistance I pendant 4 minutes.',
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
			description: 'Consommer une Endurance Potion II donne Résistance II pendant 1 minute.',
			bonus: 'Résistance II pendant 1 minute.',
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
			description: 'Consommer une Entanglement Potion donne Lenteur V pendant 11 secondes.',
			malus: 'Lenteur V pendant 11 secondes.',
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
			description: 'Consommer une Entanglement Potion Extra Time donne Lenteur V pendant 14 secondes.',
			malus: 'Lenteur V pendant 14 secondes.',
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
			description: 'Consommer une Entanglement Potion II donne Lenteur VI pendant 8 secondes.',
			malus: 'Lenteur VI pendant 8 secondes.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		  description: 'Effet à définir.',
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
		// ]
	]
};

export default stellarityContent;