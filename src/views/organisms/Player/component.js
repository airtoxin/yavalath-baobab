import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Switch from '../../molecules/Switch';
import styles from './styles.css';

function getIndex(manipulator, manipulators) {
  if (manipulator === manipulators.human) return 0;
  if (manipulator === manipulators.robot) return 1;
  return -1;
}

function getManipulator(index, manipulators) {
  if (index === 0) return manipulators.human;
  if (index === 1) return manipulators.robot;
  return null;
}

function Player({ manipulators, className, player, onChange }) {
  const labels = ["Human", "Robot"];

  return (
    <section className={`${className} ${styles.box}`}>
      <label className={styles.label} style={{backgroundColor: player.color}}>{player.name}</label>
      <Switch
        className={styles.switch}
        labels={labels}
        active={getIndex(player.manipulator, manipulators)}
        onChange={i => onChange(getManipulator(i, manipulators))}/>
    </section>
  );
}

export default branch({
  manipulators: ["constants", "manipulators"]
}, Player);
