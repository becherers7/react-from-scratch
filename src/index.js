import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />,document.getElementById('root'));

module.hot.accept('./components/App.js', () => {
     const NextRootContainer = require('./components/App.js').default;
     render(<NextRootContainer />, document.getElementById('root'));
})
