import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';
import { historyActions } from '../../actions';

const Container = props =>
  <Component onClick={() => props.dispatch(historyActions.historyForward)} />;

export default branch({}, Container);
