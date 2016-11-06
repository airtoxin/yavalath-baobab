import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { roomActions } from '../../../actions';
import Component from './component';

const Container = ({ rooms, dispatch }) => (
  <Component
    onAddRoom={name => dispatch(roomActions.addRoom, name)}
    onSelectRoom={id => dispatch(roomActions.startGame, id)}
    rooms={rooms}/>
);

export default branch({
  rooms: ['rooms'],
}, Container);
