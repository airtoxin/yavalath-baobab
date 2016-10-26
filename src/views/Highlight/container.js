import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

const Container = ({ highlight }) => highlight === null ?
  null : <Component x={highlight.x} y={highlight.y} fill="white" fillOpacity="0.5" />

export default branch({
  highlight: ["highlight"],
}, Container);
