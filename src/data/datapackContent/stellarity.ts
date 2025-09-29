export type Ingredient = {
    name: string;
    quantity: number;
  };

  export type Item = {
    name: string;
    description?: string;
    icon?: string;
    ingredients?: Ingredient[];
    bonus?: string;
    obtention?: string;
  };

  export type DatapackContent = {
    items?: Item[];
    outils?: Item[];
    armes?: Item[];
    armures?: Item[];
    biomes?: Item[];
  };

  const stellarityContent: DatapackContent = {
    items: [
      {
        name: 'Chorus Plating',
        description: 'Matériel utile pour la fabrication de certains objets.',
        icon: '/icons/stellarity/items/chorus_plating.png',
        ingredients: [
          { name: 'Iron Ingot', quantity: 1 },
          { name: 'Popped chorus fruit', quantity: 2 },
        ],
        obtention: `Altar of the Accursed & Donjon Reward.`,
      },
      {
        name: 'Enderite Upgrade Smithing Template',
        description: 'Matériel utile pour la fabrication de certains objets. Peut se dupliquer !',
        icon: '/icons/stellarity/items/enderite_upgrade_smithing_template.png',
        ingredients: [
          { name: 'Enderite Upgade Smithing Template', quantity: 1 },
          { name: 'Purpur Block', quantity: 9 },
          { name: 'Enderite Shards', quantity: 5 },
        ],
        obtention: `Altar of the Accursed & Donjon Reward.`,
      },
      {
        name: 'Endonomicon',
        description: 'Livre des recette utilisable via le mod mais ne fonctionne pas avec le datapack.',
        icon: '/icons/stellarity/items/endonomicon.png',
        ingredients: [
          { name: 'Enchanted Book', quantity: 1 },
        ],
        obtention: `Altar of the Accursed.`,
      },
      {
        name: 'Book of Jinx',
        description: `Un clic droit fait apparaître un nuage rose lent qui grossit durant 2 sec. Les ennemis pris dans le nuage auront l'effet de malédiction pendant 10 secondes, réduisant leur défense de 25 %.`,
        icon: '/icons/stellarity/items/book_of_jinx.png',
        ingredients: [
          { name: 'Book', quantity: 1 },
          { name: 'Chorus Plating', quantity: 8 },
          { name: 'Enderite Shards', quantity: 10 },
        ],
        obtention: `Altar of the Accursed.`,
      },
      {
        name: 'Grand Tome of Teleportation',
        description: `Un clic droit lance une étincelle lente qui téléporte l'utilisateur vers le premier bloc touché. L'étincelle dure 3 secondes et peut être guidée en inclinant la tête.`,
        icon: '/icons/stellarity/items/book_of_conveyance.png',
        ingredients: [
          { name: 'Book', quantity: 1 },
          { name: 'Ender Pearl', quantity: 16 },
          { name: 'Enderite Shards', quantity: 32 },
        ],
        obtention: `Altar of the Accursed.`,
      },
      {
        name: 'Satchel of Voids',
        description: `Permet d'avoir un Alter of the Accursed portable sous forme de cercle magique.`,
        icon: '/icons/stellarity/items/satchel_of_voids.png',
        ingredients: [
          { name: 'Bundle', quantity: 1 },
          { name: 'Nether Star', quantity: 2 },
          { name: 'Enderite Shards', quantity: 64 },
          { name: 'Starlight Soot', quantity: 64 },
          { name: 'Netherite Ingot', quantity: 4 },
        ],
        obtention: `Altar of the Accursed.`,
      },
    ],

    outils: [
      {
        name: 'Shulker Pickaxe',
        description: 'Mine plus vite qu’une pioche en netherite.',
        bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
        icon: '/icons/stellarity/tools/shulker_pickaxe.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Pickaxe', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Shulker Axe',
        description: 'Coupe plus vite qu’une hache en netherite.',
        bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
        icon: '/icons/stellarity/tools/shulker_axe.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Axe', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Shulker Shovel',
        description: 'Creuse plus vite qu’une pelle en netherite.',
        bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
        icon: '/icons/stellarity/tools/shulker_shovel.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Shovel', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Shulker Hoe',
        description: 'Houes plus rapide, mais peu utile.',
        bonus: 'Tenir l’outil donne Hâte I: +10% vitesse de minage/attaque.',
        icon: '/icons/stellarity/tools/shulker_hoe.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Hoe', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
    ],
    armes: [
      {
        name: 'Shulker Sword',
        description: `Fait plus de dégats qu'une épée en netherite`,
        icon: '/icons/stellarity/weapons/shulker_sword.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Sword', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Spectral Fury',
        description: 'Tire une lueur spectrale à la place de la flèche si chargée 1,5s avec des flèches spectrales. La lueur poursuit les ennemis proches, peut traverser jusqu’à 3 cibles et inflige des dégâts décroissants à chaque ennemi touché.',
        icon: '/icons/stellarity/weapons/spectral_fury.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Sharanga', quantity: 1 },
          { name: 'Phantom Membrane', quantity: 8 },
          { name: 'Diamond', quantity: 3 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Sandstorm Trident',
        description: 'Lancer un trident de tempête de sable invoque une soufflerie qui peut être utilisée pour déplacer des entités.',
        icon: '/icons/stellarity/weapons/sandstorm_trident.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Trident', quantity: 1 },
          { name: 'Breeze Rod', quantity: 2 },
          { name: 'Sand Rune', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Tamaris',
        description: 'Permet d’exécuter instantanément les ennemis faibles (santé <25%) en se faufilant, dans un rayon de 10 blocs. Un cooldown de 11s s’applique si la cible possède un Totem ou la protection sacrée.',
        icon: '/icons/stellarity/weapons/tamaris.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Wither Skeleton Skull', quantity: 1 },
          { name: 'Enderite Shards', quantity: 8 },
          { name: 'Netherite Sword', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Crest of The End',
        description: 'Bouclier qui permet de stocker une partie des dégâts bloqués et d’augmenter la prochaine attaque jusqu’à +45%. Bloquer une attaque de hache déclenche une explosion infligeant 14 dégâts et applique Jinx aux ennemis proches.',
        ingredients: [
          { name: 'Shield', quantity: 1 },
          { name: 'Netherite Ingot', quantity: 1 },
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
    ],
    armures: [
      {
        name: 'Hallowed Helmet',
        description: 'Augmente la distance de chute sûre de 1 bloc.',

        icon: '/icons/stellarity/armor/hallowed_helmet.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Hallowed Ingot', quantity: 4 },
          { name: 'Netherite Helmet', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Hallowed Chestplate',
        description: 'Augmente la distance de chute sûre de 1 bloc.',

        icon: '/icons/stellarity/armor/hallowed_chestplate.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Hallowed Ingot', quantity: 4 },
          { name: 'Netherite Chestplate', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Hallowed Leggings',
        description: 'Augmente la force du saut de 15% et la vitesse en sneaking de 25%.',
        icon: '/icons/stellarity/armor/hallowed_leggings.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Hallowed Ingot', quantity: 4 },
          { name: 'Netherite Leggings', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Hallowed Boots',
        description: `Augmente la vitesse de déplacement de 10% et la hauteur de marche de 0,5.`,
        bonus: 'Bonus de set complet : Protection sacrée pendant 5s après dégâts, feu et eau 8s, boost vitesse temporaire, esquive (cd 25s).',
        icon: '/icons/stellarity/armor/hallowed_boots.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Hallowed Ingot', quantity: 4 },
          { name: 'Netherite Boots', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Champion Helmet',
        description: 'Augmente les dégâts de 10%.',
        icon: '/icons/stellarity/armor/champion_helmet.png',
        ingredients: [
          { name: 'Champion Ingot', quantity: 4 },
          { name: 'Netherite Helmet', quantity: 1 },
        ],
        obtention: 'Altar of Champions.',
      },
      {
        name: 'Champion Chestplate',
        description: 'Augmente les dégâts de 10%.',
        icon: '/icons/stellarity/armor/champion_chestplate.png',
        ingredients: [
          { name: 'Champion Ingot', quantity: 4 },
          { name: 'Netherite Chestplate', quantity: 1 },
        ],
        obtention: 'Altar of Champions.',
      },
      {
        name: 'Champion Leggings',
        description: 'Augmente les dégâts de 10%.',
        icon: '/icons/stellarity/armor/champion_leggings.png',
        ingredients: [
          { name: 'Champion Ingot', quantity: 4 },
          { name: 'Netherite Leggings', quantity: 1 },
        ],
        obtention: 'Altar of Champions.',
      },
      {
        name: 'Champion Boots',
        description: 'Augmente les dégâts de 10%.',
        bonus: 'Bonus de set complet : Jusqu’à +40% de dégâts en enchaînant les attaques (stack 6% par coup, 3s).',
        icon: '/icons/stellarity/armor/champion_boots.png',
        ingredients: [
          { name: 'Champion Ingot', quantity: 4 },
          { name: 'Netherite Boots', quantity: 1 },
        ],
        obtention: 'Altar of Champions.',
      },
      {
        name: 'Shulker Helmet',
        description: 'Immunité à la Lévitation et Wither.',
        icon: '/icons/stellarity/armor/shulker_helmet.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Helmet', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Shulker Chestplate',
        description: 'Immunité à la Lévitation et Wither.',
        icon: '/icons/stellarity/armor/shulker_chestplate.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Chestplate', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Shulker Leggings',
        description: 'Immunité à la Lévitation et Wither.',
        icon: '/icons/stellarity/armor/shulker_leggings.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Leggings', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Shulker Boots',
        description: 'Immunité à la Lévitation et Wither.',
        bonus: `Set complet : 50% de chance d’invoquer 3 Shulker Bullets alliés (4 dégâts + Lévitation II). Immunité Lévitation/Wither. Résistance I si entouré de 4+ mobs.`,
        icon: '/icons/stellarity/armor/shulker_boots.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Shulker Shell', quantity: 4 },
          { name: 'Netherite Boots', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Floral Helmet',
        description: 'Réduit les dégâts de mêlée de 5%.',
        icon: '/icons/stellarity/armor/floral_helmet.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Cherry Leaves', quantity: 8 },
          { name: 'Netherite Helmet', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Floral Chestplate',
        description: 'Flèches 25% plus rapides. -5% dégâts mêlée.',
        icon: '/icons/stellarity/armor/floral_chestplate.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Cherry Leaves', quantity: 8 },
          { name: 'Netherite Chestplate', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Floral Leggings',
        description: '+10% dégâts flèches. -5% dégâts mêlée.',
        icon: '/icons/stellarity/armor/floral_leggings.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Cherry Leaves', quantity: 8 },
          { name: 'Netherite Leggings', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
      {
        name: 'Floral Boots',
        description: '-5% dégâts mêlée.',
        bonus: `Set complet : Tirer sur un ennemi fait éclore une fleur explosive (dégâts augmentent avec chaque flèche). Invisibilité en sneaking dans les hautes herbes.`,
        icon: '/icons/stellarity/armor/floral_boots.png',
        ingredients: [
          { name: 'Enderite Upgrade Smithing Template', quantity: 1 },
          { name: 'Cherry Leaves', quantity: 8 },
          { name: 'Netherite Boots', quantity: 1 },
        ],
        obtention: 'Altar of the Accursed.',
      },
    ],
  };

  export default stellarityContent;