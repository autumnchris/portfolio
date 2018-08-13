import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('./stylesheets/reset.scss');
require('./stylesheets/style.scss');

ReactDOM.render(<App />, document.getElementById('app'));
