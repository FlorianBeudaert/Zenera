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