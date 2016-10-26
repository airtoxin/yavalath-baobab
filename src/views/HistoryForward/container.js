import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';
import * as actions from '../../actions';

const Container = props =>
  <Component onClick={() => props.dispatch(actions.historyForward)} />

export default branch({}, Container);
