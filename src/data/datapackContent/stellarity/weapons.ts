import { Item, ObtentionType } from '@/data/datapackTypes';

export const weapons: Item[] = [
  // ÉPÉES
  {
    name: 'Shulker Sword',
    description: `Épée supérieure à la netherite.

- Dégâts accrus
- Obtenable uniquement via l'autel maudit`,
    bonus: `Dégâts accrus.`,
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
    name: 'Tamaris',
    description: `Exécute instantanément les ennemis faibles (santé <25%) en se faufilant dans un rayon de 10 blocs.

- Cooldown de 11s si la cible a un Totem ou la protection sacrée`,
    bonus: `Exécution instantanée des cibles faibles.`,
    malus: `Cooldown si la cible est protégée.`,
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
    name: 'Dragonblade',
    description: `Épée légendaire post-Dragon infligeant de lourds dégâts.

- Après 3 attaques, assène un coup de poing dévastateur
- Projette, perce l’armure, étourdit la cible`,
    bonus: `Coup spécial dévastateur, 40% pénétration d’armure, étourdit et affaiblit.`,
    malus: `Un seul exemplaire par monde, délai entre deux coups spéciaux.`,
    icon: '/icons/stellarity/weapons/dragonblade.png',
    obtention: [
      {
        type: ObtentionType.PLACE,
        placeType: 'Altar of the Accursed',
        name: 'Apparaît après la première défaite de l’Ender Dragon'
      }
    ]
  },
  {
    name: 'Frigid Harvester',
    description: `Épée évolutive obtenable sur les Strays de l’End (biomes de glace, 1%).

- Tuer des créatures augmente définitivement ses dégâts (plus sur les mobs puissants)
- 4 paliers: chaque palier réduit la vitesse d’attaque et de déplacement, mais augmente la puissance et modifie l’apparence

- Incassable au palier 4
- Capacités passives déblocables`,
    bonus: `Dégâts progressifs, capacités passives, incassable au palier 4.`,
    malus: `Vitesse d’attaque et de déplacement réduites à chaque palier.`,
    icon: '/icons/stellarity/weapons/invicon_harvester.png',
    obtention: [
      {
        type: ObtentionType.MOB,
        name: 'Stray (biome de glace de l\'End, 1% de chance)'
      }
    ]
  },
  {
    name: 'Prismember',
    description: `Épée post-Impératrice: attaque tournoyante en s’accroupissant (8 cœurs, 30% pénétration d’armure).

- Applique Inferno Prismatique 3s (+1s/niveau d’Aspect Feu) à tous les ennemis proches
- Cooldown de 1s entre chaque attaque tournoyante`,
    bonus: `Attaque tournoyante de zone, applique Inferno Prismatique.`,
    malus: `Cooldown de 1s entre chaque attaque tournoyante.`,
    icon: '/icons/stellarity/weapons/prismember.png',
    obtention: [
      {
        type: ObtentionType.BOSS,
        name: 'Empress of Light (dans l’End ou Overworld de nuit)',
        chance: '25%'
      }
    ]
  },
  {
    name: 'Stellar Striker',
    description: `Épée accumulant des étoiles au fil du temps (0,6%/s).

Toucher: +2%/coup, tuer: +3%.

À 10%, 20%, 45%, 70% et 100%: gagne une étoile.

S'accroupir: tire toutes les étoiles atteintes (légère poursuite, 9 cœurs/étoile dont 6 en zone, 50% pénétration d’armure).

Barre bloquée 6s après le tir.`,
    bonus: `Accumule et tire des étoiles à distance (dégâts élevés, 50% pénétration d’armure, zone, poursuite légère).`,
    malus: `Barre bloquée 6s après le tir.`,
    icon: '/icons/stellarity/weapons/stellar_striker.png',
    obtention: [
      {
        type: ObtentionType.PLACE,
        placeType: 'End Village',
        name: 'Échange maître avec armurier: 1 épée en or + 64 Enderite Shards'
      }
    ]
  },

  // DAGUES/FAUX
  {
    name: 'The Beginning & The End',
    description: `Paire de dagues capables d’attirer les Esprits à chaque attaque (50%).

- Si les deux sont équipées: téléportation à l’Esprit, attaque de zone et buff temporaire

- Main secondaire: The Beginning: +1 dégât, The End: +5% vitesse`,
    bonus: `Téléportation, slash de zone (5 cœurs, 100% pénétration), +4 cœurs absorption, +3 dégâts, +35% vitesse 4s.

Main secondaire: The Beginning: +1 dégât, The End: +5% vitesse.`,
    malus: `Un seul Esprit par zone, délai de 22s pour réattirer.`,
    icon: '/icons/stellarity/weapons/the_beginning.png',
    obtention: [
      {
        type: ObtentionType.DONJON_REWARD,
        name: 'Coffres sinistre d\'End City, donjons de l\'End'
      },
      {
        type: ObtentionType.PLACE,
        placeType: 'Pêche dans le Néant',
        name: 'Caisse ender (Void fishing)'
      }
    ]
  },
  {
    name: 'Starless Scythe',
    description: `Faux rare trouvable dans les coffres sinistres d’End City.

- Attaque en balayage (60% dégâts de base)
- Chaque ennemi touché soigne le joueur de 5% des dégâts infligés

- Enchantements spéciaux:
 - Efficacité: inflige Infirmité
 - Fortune: +2% soin/niveau
 - Toucher de soie: Régénération 3s après un kill`,
    bonus: `Soin sur chaque ennemi touché, effets d’enchantements spéciaux.`,
    malus: `Balayage inflige moins de dégâts (60%).`,
    icon: '/icons/stellarity/weapons/starless_scythe.png',
    obtention: [
      {
        type: ObtentionType.DONJON_REWARD,
        name: 'Coffres sinistres d\'End City'
      }
    ]
  },

  // TRIDENT
  {
    name: 'Sandstorm Trident',
    description: `Lancer le trident invoque une soufflerie.

- Déplace les entités sur son passage
- Utilisable uniquement via l'autel maudit`,
    bonus: `Peut déplacer les entités avec la soufflerie.`,
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

  // ARCS/ARBALETTES
  {
    name: 'Spectral Fury',
    description: `Tire une lueur spectrale à la place de la flèche (si chargée 1,5s avec flèches spectrales).

- La lueur poursuit les ennemis proches
- Traverse jusqu’à 3 cibles
- Inflige des dégâts décroissants à chaque cible touchée`,
    bonus: `Projectiles poursuivants, traversent 3 ennemis, dégâts de zone.`,
    malus: `Dégâts décroissants à chaque cible touchée.`,
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
    name: 'Call of the Void',
    description: `Arc post-Dragon tirant des flèches du Néant.

- Flèches explosent à l’impact (dégâts de zone, applique Voided I)
- Flèches: +8% vitesse, +8% dégâts
- Éclats: 4 cœurs dans un rayon de 3,6 blocs`,
    bonus: `Dégâts de zone, applique Voided I, projectiles plus rapides.`,
    icon: '/icons/stellarity/weapons/call_of_the_void.png',
    obtention: [
      {
        type: ObtentionType.MOB,
        name: 'Voided Skeleton',
        chance: '0,04%'
      }
    ]
  },
  {
    name: 'Sharanga',
    description: `Arc pré-Dragon transformant les flèches spectrales en carreaux spectraux.

- +12% dégâts
- +30% vitesse
- Trajectoire droite
- Perce jusqu’à 3 ennemis

- 25% de chance de ne pas consommer la flèche (50% avec Infinité)
- Sert à crafter le Spectral Fury`,
    bonus: `Carreaux spectraux puissants, perce-armure.`,
    malus: `Aucun effet négatif direct.`,
    icon: '/icons/stellarity/weapons/sharanga.png',
    obtention: [
      {
        type: ObtentionType.MOB,
        name: 'Illusioner (Stronghold)',
        chance: '9% → 18% (Looting 0 → III)'
      }
    ]
  },
  {
    name: 'Prismatic Punch',
    description: `Arbalète post-Impératrice transformant les flèches en Prismatic Blasts.

- Vitesse initiale: 16 blocs/s
- Accélère de 4,8 blocs/s² jusqu’à 120 blocs/s
- Trajectoire droite, explosion à l’impact (zone, sans détruire de blocs)`,
    bonus: `Projectiles accélérants, explosions de zone, ignorent la gravité.`,
    malus: `Aucun effet négatif direct.`,
    icon: '/icons/stellarity/weapons/prismatic_punch.png',
    obtention: [
      {
        type: ObtentionType.BOSS,
        name: 'Empress of Light (dans l’End ou Overworld de nuit)',
        chance: '50%'
      }
    ]
  },

  // HACHES/MARTEAUX
  {
    name: 'Kaleidoscope',
    description: `Hache post-Impératrice se charge en main (0 à 100 en 7,5s).

- Attaquer libère l’énergie stockée: décharge explosive de zone, brûle les ennemis
- Si charge <33, rien ne se passe
- Être blessé réduit la charge de 50%

- Dégâts et durée du feu augmentent avec la charge
- Incassable, immunisée feu/lave/explosions/cactus
- Non réparable à l’enclume`,
    bonus: `Décharge explosive de zone, dégâts et brûlure évolutifs, incassable, immunisée feu/lave/explosions.`,
    malus: `Charge perdue en cas de blessure, non réparable à l’enclume, obtention très difficile.`,
    icon: '/icons/stellarity/weapons/kaleidoscope.png',
    obtention: [
      {
        type: ObtentionType.BOSS,
        name: 'Empress of Light (Overworld de jour uniquement)',
        chance: '100%'
      }
    ]
  },
  {
    name: 'Fluffy Hammer of Justice',
    description: `Marteau post-Impératrice pouvant être lancé.

Obtenable auprès de l’Impératrice de la Lumière (30% de chance).

Clic droit: lance le marteau dans les airs, infligeant des dégâts à toutes les entités dans un rayon de 40 blocs avant de revenir au joueur.

Peut aussi être utilisé comme une arme normale: 15 cœurs de dégâts, cooldown de 0,2.

La capacité de lancer n’a aucun cooldown.`,
    bonus: `Peut être lancé sans cooldown, dégâts de zone à distance.`,
    malus: `Aucun effet négatif direct.`,
    icon: '/icons/stellarity/weapons/fluffy_hammer.png',
    obtention: [
      {
        type: ObtentionType.BOSS,
        name: 'Empress of Light',
        chance: '30%'
      }
    ]
  },

  // BOUCLIERS
  {
    name: 'Crest of The End',
    description: `Bouclier stockant une partie des dégâts bloqués pour augmenter la prochaine attaque (jusqu’à +45%).

- Bloquer une attaque de hache déclenche une explosion (14 dégâts)
- Applique Jinx à l’attaquant`,
    bonus: `Stockage de dégâts, explosion et Jinx sur blocage de hache.`,
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
    description: `Prendre des dégâts fait tomber 3 étoiles autour du joueur.

- 4 cœurs par étoile
- 50% pénétration d’armure chacune
- Les étoiles ignorent l’immunité
- Fonctionne même en grotte`,
    bonus: `Étoiles infligeant de lourds dégâts, ignorent l’immunité.`,
    obtention: [
      { type: ObtentionType.BOSS, name: 'Empress of Light', chance: '33%' }
    ]
  },
  {
    name: 'Copper Elektra Shield',
    description: `Accumule une charge toutes les 7s (14s pour la dernière).

- S'accroupir libère la charge: inflige 4 cœurs et te projette de 7 blocs en avant
- Dissipe les projectiles de shulker
- Les creepers touchés ont 25% de chance d’être chargés`,
    bonus: `Projection, dissipation de projectiles, charge de creepers.`,
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
  }
];