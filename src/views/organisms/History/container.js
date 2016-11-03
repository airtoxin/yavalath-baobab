import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';
import { historyActions } from '../../../actions';

const Container = ({ history, dispatch }) => (
  <Component
    history={history}
    onHistoryBack={() => dispatch(historyActions.historyBack)}
    onHistoryForward={() => dispatch(historyActions.historyForward)}
    onMouseEnter={grid => dispatch(historyActions.enableHighlight, grid)}
    onMouseLeave={grid => dispatch(historyActions.disableHighlight, grid)}
  />
);

export default branch({
  history: ['history'],
}, Container);
