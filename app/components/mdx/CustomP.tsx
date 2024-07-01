import React from "react";

const CustomP = (props: React.HTMLProps<HTMLParagraphElement>) => {
  return <p style={{ fontSize: '18px', lineHeight: '30px' }} {...props} />;
};

export default CustomP;
