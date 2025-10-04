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
		name: 'Book of Light',
		description: `Un livre de soutien qui crée une aura de soin autour de l'utilisateur, conférant Régénération II et Résistance I à tous les joueurs à proximité, et dissipe Faiblesse et Lenteur.

Clic droit: crée une aura de 5,5 blocs de rayon pendant 17s. 48s de recharge entre deux auras.`,
		bonus: `Aura de soin: Régénération II, Résistance I, dissipe Faiblesse et Lenteur pour tous les joueurs dans un rayon de 5,5 blocs pendant 17s.`,
		icon: '/icons/stellarity/items/book_of_light.png',
		obtention: [
			{
				type: ObtentionType.MOB,
				name: 'Evoker (Stronghold)',
				chance: '15% → 21% (Looting 0 → III)'
			},
			{
				type: ObtentionType.PLACE,
				placeType: 'End Village',
				name: 'Échange avec Bibliothécaire'
			}
		]
	},
	{
		name: 'Book of Obstruct',
		description: `Un livre de sort qui crée un mur de shulker devant l'utilisateur.

Clic droit: fait apparaître un mur devant soi. Après 10 secondes, le mur explose.`,
		bonus: `Mur de shulker protecteur invoqué devant le joueur, explose après 10 secondes.`,
		icon: '/icons/stellarity/items/book_of_obstruct.png',
		obtention: [
			{
				type: ObtentionType.DONJON_REWARD,
				name: 'Coffres de bibliothèque de Stronghold'
			},
			{
				type: ObtentionType.PLACE,
				placeType: 'End Village',
				name: 'Échange maître avec Bibliothécaire'
			}
		]
	},
	{
		name: 'Book of Updraft',
		description: `Un livre de sort qui propulse son utilisateur vers le haut et lui permet de planer librement pendant quelques secondes.

Clic droit: donne un boost vertical d'environ 22,5 blocs, puis permet de planer pendant 7s. Après la fin du vol, Slow Falling jusqu'à l'atterrissage. Le vol peut être annulé en s'accroupissant.

Cooldown de 16s après l'atterrissage.`,
		bonus: `Énorme saut vertical, vol plané libre 7s, puis Chute lente jusqu'au sol. Contrôle total du vol, annulation possible en s'accroupissant.`,
		icon: '/icons/stellarity/items/book_of_updraft.png',
		obtention: [
			{
				type: ObtentionType.MOB,
				name: 'Evoker (Stronghold)',
				chance: '15% → 21% (Looting 0 → III)'
			},
			{
				type: ObtentionType.PLACE,
				placeType: 'End Village',
				name: 'Échange avec Bibliothécaire'
			}
		]
	},
	{
	  name: 'Tome of Return',
	  description: `Un grimoire de téléportation qui ramène instantanément l'utilisateur à son point de réapparition.
	
	Maintenir clic droit et rester immobile pendant 10 secondes téléporte au point de spawn.
	
	Cooldown de 3 minutes.`,
	  bonus: `Téléportation sûre vers le point de réapparition après 10s d'incantation.`,
	  icon: '/icons/stellarity/items/book_of_return.png',
	  obtention: [
	    {
	      type: ObtentionType.DONJON_REWARD,
	      name: 'Coffres de trésor d\'End City, donjons de l\'End'
	    }
	  ]
	},
	{
		name: "Enderman's Hand",
		description: `Porte-bonheur post-Dragon augmentant la portée d'interaction avec les blocs de 3 cases.

Permet de casser, poser ou interagir avec des blocs à distance accrue.`,
		bonus: `+3 blocs de portée d'interaction sur les blocs.`,
		icon: '/icons/stellarity/items/endermans_hand.png',
		obtention: [
			{
				type: ObtentionType.MOB,
				name: 'Enderman',
				chance: '10%'
			}
		]
	},
	{
		name: 'Life Crystal',
		description: `Porte-bonheur post-Dragon: régénération croissante (I à IV) tant qu’on reste immobile.

Bouger ou subir des dégâts réinitialise le bonus (court délai avant réactivation).`,
		bonus: `Régénération I à IV tant qu’on reste immobile.`,
		malus: `Bouger ou être blessé réinitialise la régénération et applique un délai (0,5s).`,
		icon: '/icons/stellarity/items/ender_insignia.png',
		obtention: [
			{
				type: ObtentionType.BOSS,
				name: 'Ender Dragon',
				chance: '66%'
			}
		]
	},
	{
		name: 'Duskberry',
		description: `Porte-bonheur post-Dragon: +12% dégâts, +10% vitesse, +4% vitesse d’attaque, Vision nocturne tant qu’il est tenu.

Manger ou traverser un buisson: malédiction (Obscurité, Lenteur, Fatigue minière, Faiblesse, Nausée 36s).`,
		bonus: `+12% dégâts, +10% vitesse, +4% vitesse d’attaque, Vision nocturne permanente en main.`,
		malus: `Manger: Obscurité, Lenteur, Fatigue minière, Faiblesse, Nausée 36s. Traverser le buisson: mêmes malus. Renard: empoisonné à 1,5 PV.`,
		icon: '/icons/stellarity/items/duskberry.png',
		obtention: [
			{
				type: ObtentionType.PLACE,
				placeType: 'End City Ship (The Hallow)',
				name: 'Coffres',
				chance: '57,14%'
			}
		]
	},
	{
		name: 'Soaring Insignia',
		description: `Porte-bonheur utilitaire: permet de voler comme en créatif (agilité limitée).
	
	Vol activé en sneaky + regard vers le haut. Sneak + haut/bas: monter/descendre. Relâcher sneak: vol stationnaire.
	
	Toucher le sol, un liquide ou changer d’objet arrête le vol.`,
		bonus: `Vol créatif limité, activation simple, vol stationnaire.`,
		icon: '/icons/stellarity/items/soaring_insignia.png',
		obtention: [
			{
				type: ObtentionType.BOSS,
				name: 'Empress of Light (End ou Overworld de nuit)',
				chance: '20%'
			},
			{
				type: ObtentionType.BOSS,
				name: 'Empress of Light (Overworld de jour)',
				chance: '100%'
			}
		]
	},
	{
	  name: 'Prismatic Pearl',
	  description: `Perle post-Impératrice à usage infini: se lance comme une Ender Pearl, revient après 5s.
	
	Vole 25% plus vite et plus loin, laisse une traînée arc-en-ciel.`,
	  bonus: `Usage infini, 25% portée et vitesse en plus, traînée arc-en-ciel.`,
	  icon: '/icons/stellarity/items/prismatic_pearl.png',
	  obtention: [
	    {
	      type: ObtentionType.BOSS,
	      name: 'Empress of Light (End ou Overworld de nuit)',
	      chance: '33%'
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
	},
];
