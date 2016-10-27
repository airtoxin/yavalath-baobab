import React from 'react';
import lodash from 'lodash';
import { branch } from 'baobab-react/higher-order';
import Grid from '../Grid';
import Highlight from '../Highlight';
import { boardActions } from '../../actions';

const Board = props => {
  const Grids = lodash.flatten(
      props.board.map(row => row.filter(o => o.state !== null).map(({ x, y, gridX, gridY, state, occupiedPlayer }) => {
      const { gridStates, gridSize } = props;
      const fill =
        state === gridStates.empty ? "white" :
        state === gridStates.occupied ? occupiedPlayer.color :
        "black"; // black is error...
      const clickHandler = () => props.dispatch(boardActions.play, gridX, gridY);

      return <Grid key={`${gridX}-${gridY}`} x={x} y={y} size={gridSize} fill={fill} onClick={clickHandler} />
    }))
  );

  return (
    <svg width={800} height={800}>
      {Grids}
      <Highlight />
    </svg>
  );
};

export default branch({
  gridStates: ["constants", "gridStates"],
  gridSize: ["game", "constants", "gridSize"],
}, Board);
