import React from "react";

const CustomUl = (props: React.HTMLProps<HTMLUListElement>) => {
  return <ul style={{ margin: '1rem 0', padding: '1rem', listStyleType: 'none', border: `1px solid gray`, borderRadius: '10px' }} {...props} />;
};

export default CustomUl;
