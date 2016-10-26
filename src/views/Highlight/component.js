import React from 'react';
import { PointyToppedHex } from 'react-hex';

export default ({ highlight }) => (
  highlight === null ? null :
  <PointyToppedHex x={highlight.x} y={highlight.y} size={30} fill={highlight.occupiedPlayer.color} />
);
