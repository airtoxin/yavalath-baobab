import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { roomActions } from '../../../actions';
import Component from './component';

const Container = ({ rooms, dispatch }) => (
  <Component
    onClick={name => dispatch(roomActions.addRoom, name)}
    rooms={rooms}/>
);

export default branch({
  rooms: ['rooms'],
}, Container);
