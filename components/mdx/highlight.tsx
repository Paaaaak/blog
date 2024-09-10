// components/Highlight.tsx
import React from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return (
    <span style={{ border: "1px solid white", padding: "3px" }}>
      {children}
    </span>
  );
};

export default Highlight;
