import React from "react";

const blockquote = (props: React.HTMLProps<HTMLQuoteElement>) => {
  const style = {
    backgroundColor: "hsla(220, 1%, 40%, 0.568)",
    padding: "20px 10px",
    marginBottom: "5px",
    borderRadius: "5px",
    borderLeft: "3px solid #996515",
  };

  return <blockquote style={style} {...props} />;
};

export default blockquote;
