import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import { start } from '../../actions/gameActions';
import Button from '../atoms/Button';
import Switch from '../atoms/Switch';
import { gameActions } from '../../actions';

class Settings extends Component {
  getIndex(manipulator) {
    // TODO: logic
    if (manipulator === this.props.manipulators.human) return 0;
    if (manipulator === this.props.manipulators.robot) return 1;
    return -1;
  }

  getManipulator(index) {
    // TODO: logic
    if (index === 0) return this.props.manipulators.human;
    if (index === 1) return this.props.manipulators.robot;
    return null;
  }

  render() {
    const PlayerManip = this.props.players.map((player, i) => {
      const activeIndex = this.getIndex(player.manipulator);

      return (
        <section key={i}>
          <p>Player {i}</p>
          <Switch
            labels={["Human", "Robot"]}
            active={activeIndex}
            onChange={nextIdx => this.props.dispatch(gameActions.setManipulator, player.id, this.getManipulator(nextIdx))}/>
        </section>
      );
    });

    return (
      <div>
        {PlayerManip}
        <Button onClick={() => this.props.dispatch(start)}>start</Button>
      </div>
    );
  }
}

export default branch({
  players: ["players"],
  manipulators: ["constants", "manipulators"],
}, Settings);
