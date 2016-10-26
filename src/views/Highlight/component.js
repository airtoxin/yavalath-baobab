import React from 'react';
import { PointyToppedHex } from 'react-hex';

export default ({ x, y, fill, fillOpacity }) => 
  <PointyToppedHex x={x} y={y} size={30} fill={fill} fillOpacity={fillOpacity} />;
