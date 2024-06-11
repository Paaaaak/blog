// components/Highlight.tsx
import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <div style={{ backgroundColor: 'yellow', height: '100px' }}>{children}</div>;
};

export default Highlight;
