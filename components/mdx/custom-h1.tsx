import React from "react";

const CustomH1 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const h1Style = {
    color: "white",
    marginTop: "50px",
    marginBottom: "10px",
  };

  return <h1 style={h1Style} {...props} />;
};

export default CustomH1;
