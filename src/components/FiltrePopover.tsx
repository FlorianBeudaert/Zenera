import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Checkbox } from './Checkbox';
import { formatLabel, obtentionLabelMap } from '@/utils/formatLabel';

export function FiltrePopover({
  categories,
  selected,
  onChange,
  open,
  onClose,
  crafters = [],
  selectedCrafters = [],
  onCraftersChange,
  obtentionTypes = [],
  selectedObtentionTypes = [],
  onObtentionChange,
}: {
  categories: string[];
  selected: string[];
  onChange: (cats: string[]) => void;
  open: boolean;
  onClose: () => void;
  crafters?: string[];
  selectedCrafters?: string[];
  onCraftersChange?: (crafters: string[]) => void;
  obtentionTypes?: string[];
  selectedObtentionTypes?: string[];
  onObtentionChange?: (types: string[]) => void;
}) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      let clickedFilterButton = false;
      let node = event.target as Node | null;
      while (node) {
        if (node instanceof HTMLElement && node.dataset && node.dataset.filterButton !== undefined) {
          clickedFilterButton = true;
          break;
        }
        node = (node as HTMLElement).parentElement;
      }
      if (clickedFilterButton) return;

      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onClose]);

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

  const toggleObtention = (type: string) => {
    if (!onObtentionChange) return;
    onObtentionChange(
      selectedObtentionTypes.includes(type)
        ? selectedObtentionTypes.filter(t => t !== type)
        : [...selectedObtentionTypes, type]
    );
  };

  if (!open) return null;

  return (
    <div
      ref={popoverRef}
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

      <div className="max-h-65 overflow-y-auto px-4 pb-4">
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
                  label={formatLabel(cat)}
                  className="w-full py-2 px-2 hover:bg-primary/5 rounded-lg transition"
                />
              ))}
            </div>
          </div>

          {obtentionTypes.length > 0 && onObtentionChange && (
            <div className="border-t border-primary/10 pt-4">
							<h3 className="font-medium text-gray-800 mb-2 text-sm uppercase tracking-wide">
								Types d&apos;obtention
							</h3>
              <div className="space-y-1">
                {obtentionTypes.map(type => (
                  <Checkbox
                    key={type}
                    checked={selectedObtentionTypes.includes(type)}
                    onChange={() => toggleObtention(type)}
                    label={formatLabel(type, obtentionLabelMap)}
                    className="w-full py-2 px-2 hover:bg-primary/5 rounded-lg transition"
                  />
                ))}
              </div>
            </div>
          )}

          {crafters.length > 0 && onCraftersChange && (
            <div className="border-t border-primary/10 pt-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm uppercase tracking-wide">
                Artisans
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