import React from 'react';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import App from './App';

const Rooted = root(tree, App);

render(<Rooted />, global.document.getElementById('app'));
