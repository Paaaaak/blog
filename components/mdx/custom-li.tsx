import React from "react";

const CustomLi = (props: React.HTMLProps<HTMLLIElement>) => {
  return <li style={{ fontSize: '18px', marginBottom: '1rem' }} {...props} />;
};

export default CustomLi;
