import React from "react";

const CustomCode = (props: React.HTMLProps<HTMLPreElement>) => {
  const CustomCodeStyle = {
    color: "white",
    marginBottom: "10px",
  };

  return <code style={CustomCodeStyle} {...props} />;
};

export default CustomCode;
