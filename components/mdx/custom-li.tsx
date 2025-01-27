import React from "react";

const CustomLi = (props: React.HTMLProps<HTMLLIElement>) => {
  const liStyle = {
    lineHeight: "30px",
    fontSize: "18px",
  };

  return <li style={liStyle} {...props} />;
};

export default CustomLi;
