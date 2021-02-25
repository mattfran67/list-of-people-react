import React, { useState } from 'react';

export function ShowContainer({ children }) {
  const [showContent, setShowContent] = useState(true);

  const handleClick = () => setShowContent(!showContent);
 
  return (
    <div>
      <h3 onClick={handleClick}>
        Pessoas {showContent ? <span>&#9662;</span> : <span>&#9656;</span>}
      </h3>
      {showContent && children}
    </div>
  );
}