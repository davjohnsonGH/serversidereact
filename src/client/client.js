// start up point for client side app
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';

ReactDOM.hydrate(<Home />, document.getElementById('root'));
