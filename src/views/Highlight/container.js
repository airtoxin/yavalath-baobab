import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

const Container = props => <Component highlight={props.highlight} />

export default branch({
  highlight: ["highlight"],
}, Container);
