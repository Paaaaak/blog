// components/Highlight.tsx
import React from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return (
    <span
      style={{
        backgroundColor: "#D4AF37",
        padding: "1px 3px",
        borderRadius: "3px",
      }}
    >
      {children}
    </span>
  );
};

export default Highlight;
