import React from 'react';

interface CategoryButtonProps {
  label: string;
  internalKey?: string;
  handleClick: (key: string) => void;
  active: Record<string, boolean>;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ handleClick, active, label, internalKey }) => {
  const key = internalKey ?? label;
  return (
    <button
      className={`skillbutton ${active[key] ? 'skillbutton-active' : ''}`}
      type="button"
      onClick={() => handleClick(key)}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
