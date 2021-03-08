import React, { useState } from 'react';
import { Avatar } from './Avatar';

export function AvatarSelector({ avatarNum, setAvatarNum }) {
  const increase = val => {
    let count = avatarNum;
    count += val;
    if (count < 0) {
      count = 71;
    } else if (count > 71) {
      count = 0;
    }
    setAvatarNum(count);
  };

  return (
    <div className="avatar-container">
      <button
        onClick={() => increase(-1)}
        type="button"
      >&#10094;</button>
      <Avatar
        diameter={150}
        avatar={avatarNum}
      />
      <button
        onClick={() => increase(1)}
        type="button"
      >&#10095;</button>
    </div>
  );
}