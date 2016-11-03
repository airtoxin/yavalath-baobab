import React from 'react';
import lodash from 'lodash';
import { branch } from 'baobab-react/higher-order';
import Grid from '../../molecules/Grid';
import Highlight from '../../organisms/Highlight';
import { boardActions } from '../../../actions';

const Board = (props) => {
  const Grids = lodash.flatten(
    props.board.map(row => row.filter(o => o.state !== null)
      .map(({ x, y, gridX, gridY, state, occupiedPlayer }) => {
        const { gridStates, gridSize } = props;
        const fill =
          state === gridStates.empty ? 'white' : // eslint-disable-line no-nested-ternary
          state === gridStates.occupied ? occupiedPlayer.color :
          'black'; // black is error...
        const clickHandler = () => {
          if (props.turnPlayer.manipulator === props.human) {
            props.dispatch(boardActions.play, gridX, gridY);
          }
        };

        return (
          <Grid
            key={`${gridX}-${gridY}`}
            x={x}
            y={y}
            size={gridSize}
            fill={fill}
            onClick={clickHandler}
          />
        );
      }
    ))
  );

  return (
    <svg width={800} height={800}>
      {Grids}
      <Highlight />
    </svg>
  );
};

export default branch({
  board: ['board'],
  gridStates: ['constants', 'gridStates'],
  gridSize: ['game', 'constants', 'gridSize'],
  turnPlayer: ['turnPlayer'],
  human: ['constants', 'manipulators', 'human'],
}, Board);
