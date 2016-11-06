import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { roomActions } from '../../../actions';
import Component from './component';

const Container = ({ rooms, dispatch }) => (
  <Component
    onAddRoom={name => dispatch(roomActions.createRoom, name)}
    onSelectRoom={roomId => dispatch(roomActions.joinRoom, roomId)}
    rooms={rooms}/>
);

export default branch({
  rooms: ['rooms'],
}, Container);
