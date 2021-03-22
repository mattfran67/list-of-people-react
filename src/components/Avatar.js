import React from 'react';
import avatars from '../Avatars-min.jpg';

export function Avatar({ diameter, avatar }) {
  const style = {
    backgroundImage: `url(${avatars})`,
    backgroundSize: diameter * 9,
    backgroundPosition: `${-diameter * (avatar % 9)}px
      ${-diameter * Math.floor(avatar / 9)}px`,
    width: diameter,
    height: diameter,
    borderRadius: '50%'
  };

  return <div style={style}></div>;
}