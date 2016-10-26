import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';
import * as actions from '../../actions';

const Container = props => (
  <Component
    history={props.history}
    onMouseEnter={(grid) => props.dispatch(actions.enableHighlight, grid)}
    onMouseLeave={(grid) => props.dispatch(actions.disableHighlight, grid)}
  />
);

export default branch({
  history: ["history"],
}, Container);
