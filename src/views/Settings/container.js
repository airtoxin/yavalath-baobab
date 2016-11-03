import React, { Component } from 'react';
import Switch from 'react-toggleswitch';
import { branch } from 'baobab-react/higher-order';
import { start } from '../../actions/gameActions';
import Button from '../atoms/Button';

class Settings extends Component {
  render() {
    return (
      <div>
        <section>
          <p>Player 1</p>
          <Switch
            onValue="Human"
            offValue="Robot"
            width={200}
            background="gray" />
        </section>
        <section>
          <p>Player 2</p>
          <Switch
            onValue="Human"
            offValue="Robot"
            width={200}
            background="gray" />
        </section>
        <Button onClick={() => this.props.dispatch(start)}>start</Button>
      </div>
    );
  }
}

export default branch({

}, Settings);
