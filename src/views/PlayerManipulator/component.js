import React from 'react';
import Switch from '../atoms/Switch';

export default function PlayerManipulator({ id, activeIndex, onChange }) {
  return (
    <section>
      <label>Player {id}</label>
      <Switch
        labels={["Human", "Robot"]}
        active={activeIndex}
        onChange={onChange}/>
    </section>
  );
}
