import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.scss'

class AppDemo extends Component {
  render() {
    return (
      <div styleName="root">
        <h1 styleName="title">App Demo</h1>
        <div styleName="webpack"></div>
      </div>
    )
  }
}

export default CSSModules(AppDemo, styles);
