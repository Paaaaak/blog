import React from "react";

const CustomBlockquote = (props: React.HTMLProps<HTMLQuoteElement>) => {
  const style = {
    backgroundColor: "hsla(220, 1%, 40%, 0.568)",
    padding: "10px",
    marginBottom: "5px",
  };

  return <blockquote style={style} {...props} />;
};

export default CustomBlockquote;
