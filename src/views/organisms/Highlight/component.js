import React from 'react';
import { PointyToppedHex } from 'react-hex';

export default function ({
  x, y, fill, fillOpacity,
}) {
  return <PointyToppedHex x={x} y={y} size={30} fill={fill} fillOpacity={fillOpacity} />;
}
