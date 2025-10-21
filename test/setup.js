import React from 'react';
import PropTypes from 'prop-types';

// Polyfill for react-hex which uses React.PropTypes (removed in React 16+)
React.PropTypes = PropTypes;
