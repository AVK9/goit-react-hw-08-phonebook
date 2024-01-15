import React from 'react';
import Icons from './icon.svg';

export const Icon = ({ id, className }) => (
  <svg className={className}>
    <use href={Icons + '#icon-' + id}></use>
  </svg>
);
