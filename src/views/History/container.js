import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';
import * as actions from '../../actions';

const Container = props =>
  <Component history={props.history} onMouseOver={(grid) => props.dispatch(actions.enableHighlight, grid)} />

export default branch({
  history: ["history"],
}, Container);
