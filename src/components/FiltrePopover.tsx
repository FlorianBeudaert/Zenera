import React from 'react';
import { X } from 'lucide-react';
import { Checkbox } from './Checkbox';

export function FiltrePopover({
 categories,
 selected,
 onChange,
 open,
 onClose,
 crafters = [],
 selectedCrafters = [],
 onCraftersChange,
}: {
 categories: string[];
 selected: string[];
 onChange: (cats: string[]) => void;
 open: boolean;
 onClose: () => void;
 crafters?: string[];
 selectedCrafters?: string[];
 onCraftersChange?: (crafters: string[]) => void;
}) {
 const toggleCat = (cat: string) => {
	 onChange(
		 selected.includes(cat)
			 ? selected.filter(c => c !== cat)
			 : [...selected, cat]
	 );
 };

 const toggleCrafter = (crafter: string) => {
	 if (!onCraftersChange) return;
	 onCraftersChange(
		 selectedCrafters.includes(crafter)
			 ? selectedCrafters.filter(c => c !== crafter)
			 : [...selectedCrafters, crafter]
	 );
 };

 if (!open) return null;

 return (
	 <div
		 className="absolute z-30 right-0 lg:left-0 mt-7 w-80 max-w-[calc(100vw-1rem)] bg-white border border-primary/20 rounded-2xl shadow-2xl"
	 >
		 <div className="flex items-center justify-between p-4 pb-3">
			 <span className="font-semibold text-lg text-primary">Filtres</span>
			 <button
				 onClick={onClose}
				 className="p-1 rounded-full hover:bg-primary/10 transition-colors"
				 aria-label="Fermer"
			 >
				 <X className="w-5 h-5 text-gray-400 hover:text-primary" />
			 </button>
		 </div>

		 <div className="max-h-80 overflow-y-auto px-4 pb-4">
			 <div className="space-y-4">
				 <div>
					 <h3 className="font-medium text-gray-800 mb-2 text-sm uppercase tracking-wide">
						 Catégories
					 </h3>
					 <div className="space-y-1">
						 {categories.map(cat => (
							 <Checkbox
								 key={cat}
								 checked={selected.includes(cat)}
								 onChange={() => toggleCat(cat)}
								 label={cat.charAt(0).toUpperCase() + cat.slice(1)}
								 className="w-full py-2 px-2 hover:bg-primary/5 rounded-lg transition"
							 />
						 ))}
					 </div>
				 </div>

				 {crafters.length > 0 && onCraftersChange && (
					 <div className="border-t border-primary/10 pt-4">
						 <h3 className="font-medium text-gray-800 mb-2 text-sm uppercase tracking-wide">
							 Crafters
						 </h3>
						 <div className="space-y-1">
							 {crafters.map(crafter => (
								 <Checkbox
									 key={crafter}
									 checked={selectedCrafters.includes(crafter)}
									 onChange={() => toggleCrafter(crafter)}
									 label={crafter}
									 className="w-full py-2 px-2 hover:bg-primary/5 rounded-lg transition"
								 />
							 ))}
						 </div>
					 </div>
				 )}
			 </div>
		 </div>
	 </div>
 );
}