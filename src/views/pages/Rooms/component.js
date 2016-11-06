import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';
import Button from '../../atoms/Button';
import Room from '../../organisms/Room';
import styles from './styles.css';

export default class Rooms extends Component {
  constructor() {
    super();
    this.state = { name: '' };
    this.id = uuid.v4();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <section>
          <label htmlFor={`roomname-${this.id}`} className={styles.center}>Room name</label>
          <input type="text" className="u-full-width" id={`roomname-${this.id}`} onChange={this.handleChange} value={this.state.name}/>
          <Button className="u-full-width" onClick={this.handleClick} disabled={this.state.name.length === 0}>Create new Room</Button>
        </section>

        <section className={styles.flex}>
          {Object.entries(this.props.rooms).map(([id, room]) => (
            <Room key={id} room={room} onClick={() => this.props.onSelectRoom(id)}/>
          ))}
        </section>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleClick() {
    this.props.onAddRoom(this.state.name);
    this.setState({ name: '' })
  }
}

Rooms.propTypes = {
  onAddRoom: PropTypes.func,
  onSelectRoom: PropTypes.func,
  rooms: PropTypes.object,
};
