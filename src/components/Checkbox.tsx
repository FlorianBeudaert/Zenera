import React from 'react';

export function Checkbox({
  checked,
  onChange,
  label,
  className = '',
  ...props
}: {
  checked: boolean;
  onChange: () => void;
  label?: string;
  className?: string;
}) {
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer select-none ${className}`}>
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-5 h-5 border-2 border-primary/40 rounded-md bg-white checked:bg-primary checked:border-primary transition-all duration-150"
          {...props}
        />
        <span className="pointer-events-none absolute left-0 top-0 w-5 h-5 flex items-center justify-center">
          {checked && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
      </span>
      {label && <span className="text-gray-800">{label}</span>}
    </label>
  );
}