// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional onClick handler
  className?: string;   // Optional custom class names
}

const button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` ${className?className:''}`}
      disabled={className?.includes('disabled')}
    >
      {text}
    </button>
  );
};

export default button;
