import React from 'react';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseClasses = 'rounded font-bold';
  const sizeClasses = {
    small: 'py-1.5 px-4 text-xs',
    medium: 'py-2 px-5 text-sm',
    large: 'py-2.5 px-6 text-base',
  };
  const colorClasses = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${colorClasses}`;

  return (
    <button
      type="button"
      className={buttonClasses}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
