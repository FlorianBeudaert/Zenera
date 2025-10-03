import React from 'react';
import { Filter } from 'lucide-react';

export function SearchBar({
  value,
  onChange,
  onFilterClick,
  filterActive,
}: {
  value: string;
  onChange: (v: string) => void;
  onFilterClick: () => void;
  filterActive?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 bg-white border border-primary/30 rounded-lg px-3 py-2 shadow-md w-full md:w-96">
      <input
        type="text"
        placeholder="Rechercher un objet..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none text-gray-900 text-base"
      />
      <button
        type="button"
        data-filter-button="1"
        onMouseDown={e => {
          e.stopPropagation();
        }}
        onClick={e => {
          e.stopPropagation();
          onFilterClick();
        }}
        className={`p-2 rounded-full transition-colors ${filterActive ? 'bg-primary/10' : ''} hover:bg-primary/10`}
        aria-label="Ouvrir les filtres"
      >
        <Filter className={`w-5 h-5 ${filterActive ? 'text-primary' : 'text-gray-500'}`} />
      </button>
    </div>
  );
}