import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />,document.getElementById('root'));

//lets webpackHotMiddleware know to update this module
if (module.hot) {
  module.hot.accept();
}
