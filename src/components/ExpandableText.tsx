import React, { Children, useState } from "react";

interface Props {
  Children: string;
  maxChars?: number;
}
const ExpandableText = ({ Children, maxChars = 500 }: Props) => {
    const[isExpanded, setExpanded] = useState(false);
  if (Children.length <= maxChars) return <p>{Children}</p>;
  const text = isExpanded ? Children :  Children.substring(0, maxChars);
  return <p>{text} ...<button onClick={()=> setExpanded(!isExpanded)}>{isExpanded ? 'Less':'More'}</button></p>;
};

export default ExpandableText;






