# Zenera

Zenera est un site web Next.js permettant de documenter, explorer et configurer des datapacks Minecraft personnalisés, comme Stellarity. Il propose une interface moderne pour consulter les objets, armes, armures, nourritures, potions, etc. de chaque datapack, avec leurs recettes et méthodes d'obtention.

## Prérequis

- Node.js 18 ou plus (https://nodejs.org/)
- npm (installé avec Node.js)

## Installation

1. Clonez le dépôt ou placez-vous dans le dossier du projet.
2. Installez les dépendances :

```bash
npm install
```

## Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur http://localhost:3000

## Lancer en production

```bash
npm run build
npm start
```

## Structure du projet

- `src/data/datapacks.ts` : liste des datapacks disponibles (id, nom, description)
- `src/data/datapackTypes.ts` : types TypeScript pour structurer les contenus (items, armes, etc.)
- `src/data/datapackContent/` : dossier contenant les contenus détaillés de chaque datapack (ex : `stellarity.ts`)
- `public/icons/` : icônes et images utilisées pour les items, armes, etc.
- `src/components/` : composants React réutilisables (Header, Footer, SearchBar...)
- `src/app/` : pages Next.js (dont la page wiki)

## Ajouter ou modifier un datapack

1. Ajoutez une entrée dans `src/data/datapacks.ts` avec un nouvel id, nom et description.
2. Créez un fichier dans `src/data/datapackContent/` (ex : `nouveauDatapack.ts`) qui exporte un objet conforme au type `DatapackContent`.
3. Ajoutez les fichiers détaillés (items, armes, etc.) dans un sous-dossier si besoin (voir exemple `stellarity/`).
4. Ajoutez les icônes correspondantes dans `public/icons/`.
5. Importez et référencez le contenu dans le fichier principal du datapack.

## Exemple de structure d'un item

```typescript
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
}
```

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou tout hébergeur supportant Next.js.

- Pour Vercel :
  1. Poussez le code sur GitHub.
  2. Connectez le repo sur https://vercel.com/ et suivez les instructions.

## FAQ

**Comment ajouter une image d'item ?**
Placez l'image dans `public/icons/[nomDatapack]/[type]/` et référencez-la dans le champ `icon` de l'item.

**Comment ajouter un nouveau type de contenu ?**
Ajoutez le type dans `DatapackContent` et créez le fichier correspondant dans le dossier du datapack.

**Comment contribuer ?**
En me faisant des retours sur les fonctionnalités, en signalant des bugs ou en proposant des améliorations.

## Liens utiles
- [Documentation Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

---

Pour toute question, contactez moi via Discord : **starwolf5000**
