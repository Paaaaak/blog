import React from "react";

const CustomH2 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const h1Style = {
    color: "white",
    fontSize: "22px",
    marginTop: "20px",
    marginBottom: "10px",
  };

  return <h1 style={h1Style} {...props} />;
};

export default CustomH2;
