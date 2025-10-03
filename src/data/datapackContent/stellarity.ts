import { DatapackContent } from '@/data/datapackTypes';
import { items } from '@/data/datapackContent/stellarity/items';
import { weapons } from '@/data/datapackContent/stellarity/weapons';
import { tools } from '@/data/datapackContent/stellarity/tools';
import { armor } from '@/data/datapackContent/stellarity/armor';
import { food } from '@/data/datapackContent/stellarity/food';
import { potions } from '@/data/datapackContent/stellarity/potions';

const stellarityContent: DatapackContent = {
	items,
	armes: weapons,
	outils: tools,
	armures: armor,
	nourritures: food,
	potions,
};
export default stellarityContent;
