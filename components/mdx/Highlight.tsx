// components/Highlight.tsx
import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <span style={{ background: 'yellow' }}>{children}</span>;
};

export default Highlight;
