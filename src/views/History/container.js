import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';
import { historyActions } from '../../actions';

const Container = props => (
  <Component
    history={props.history}
    onMouseEnter={grid => props.dispatch(historyActions.enableHighlight, grid)}
    onMouseLeave={grid => props.dispatch(historyActions.disableHighlight, grid)}
  />
);

export default branch({
  history: ['history'],
}, Container);
