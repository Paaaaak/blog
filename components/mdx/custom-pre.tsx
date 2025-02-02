import React from "react";
import Background from "../background";

const CustomPre = (props: React.HTMLProps<HTMLPreElement>) => {
  const CustomPreStyle = {
    background: "rgb(77 83 86 / 30%)",
    padding: "10px 20px",
    margin: "10px 0 20px 0",
    fontSize: "15px",
    lineHeight: "1.5",
    borderRadius: "5px",
  };

  return <pre style={CustomPreStyle} {...props} />;
};

export default CustomPre;
