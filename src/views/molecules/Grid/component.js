import React from 'react';
import { PointyToppedHex } from 'react-hex';

export default function ({
  x, y, size, fill, onClick,
}) {
  return (
    <PointyToppedHex
      x={x}
      y={y}
      size={size}
      fill={fill}
      stroke="black"
      onClick={onClick}
    />
  );
}
