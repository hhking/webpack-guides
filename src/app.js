import React, { Component } from 'react';
import { render } from 'react-dom';

import AppDemo from './components/index.jsx';

var container = document.getElementById('app');

render(
    <AppDemo />,
    container
);
