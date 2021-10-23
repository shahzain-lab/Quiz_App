import React from 'react';
import ReactDom from 'react-dom';
//APP
import App from './App';
// service worker
import * as serviceworker from './serviceworker';


ReactDom.render(<App />, document.getElementById('root'));

serviceworker.register();