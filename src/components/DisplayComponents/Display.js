import React, {useState} from "react";

const Display = () => {
  const [displayNum, setDisplayNum] = useState(0);
  return <div className="display">{displayNum}</div>;
};

export default Display;
