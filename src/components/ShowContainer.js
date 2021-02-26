import React, { useState } from 'react';

export function ShowContainer({ children, title }) {
  const [showContent, setShowContent] = useState(true);

  const handleClick = () => setShowContent(!showContent);
 
  return (
    <div>
      <h3
        onClick={handleClick}
        style={{cursor: 'pointer'}}
        className="card-header header-color">
        {title} {showContent ? <span>&#9662;</span> : <span>&#9656;</span>}
      </h3>
      {showContent && children}
    </div>
  );
}