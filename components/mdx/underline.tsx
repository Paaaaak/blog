import React from "react";

interface UnderlineProps {
  children: React.ReactNode;
}

const Underline: React.FC<UnderlineProps> = ({ children }) => {
  return (
    <span
      style={{
        borderBottom: "2px solid #D4AF37",
        display: "inline",
      }}
    >
      {children}
    </span>
  );
};

export default Underline;
