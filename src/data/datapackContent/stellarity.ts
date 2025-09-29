export type Ingredient = {
    name: string;
    quantity: number;
  };

  export type Item = {
    name: string;
    description?: string;
    icon?: string;
    ingredients?: Ingredient[];
    obtention?: string;
  };

  export type DatapackContent = {
    items?: Item[];
    armes?: Item[];
    armures?: Item[];
    biomes?: Item[];
  };

  const stellarityContent: DatapackContent = {
    items: [
      {
        name: 'Chorus Plating',
        description: 'Matériel utile pour la fabrication de certains objets.',
        icon: '/icons/stellarity/chorus_plating.png',
        ingredients: [
          { name: 'Iron Ingot', quantity: 1 },
          { name: 'Popped chorus fruit', quantity: 2 },
        ],
        obtention: `Altar of the Accursed & Donjon Reward.`,
      },
      {
        name: 'Enderite Upgrade Smithing Template',
        description: 'Matériel utile pour la fabrication de certains objets. Peut se dupliquer !',
        icon: '/icons/stellarity/enderite_upgrade_smithing_template.png',
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
        icon: '/icons/stellarity/endonomicon.png',
        ingredients: [
          { name: 'Enchanted Book', quantity: 1 },
        ],
        obtention: `Altar of the Accursed.`,
      },
      {
        name: 'Book of Jinx',
        description: '????',
        icon: '/icons/stellarity/book_of_jinx.png',
        ingredients: [
          { name: 'Book', quantity: 1 },
          { name: 'Chorus Plating', quantity: 8 },
          { name: 'Enderite Shards', quantity: 10 },
        ],
        obtention: `Altar of the Accursed.`,
      },
      {
        name: 'Book of Conveyance',
        description: '????',
        icon: '/icons/stellarity/book_of_conveyance.png',
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
        icon: '/icons/stellarity/satchel_of_voids.png',
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
  };

  export default stellarityContent;