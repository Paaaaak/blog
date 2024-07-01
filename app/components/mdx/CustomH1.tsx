import React from "react";

const CustomH1 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  return <h1 style={{ background: 'red' }} {...props} />;
};

export default CustomH1;
