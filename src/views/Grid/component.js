import React from 'react';
import { PointyToppedHex } from 'react-hex';

export default ({ x, y, size, fill, onClick }) => (
  <PointyToppedHex
    x={x}
    y={y}
    size={size}
    fill={fill}
    stroke="black"
    onClick={onClick}
  />
);
