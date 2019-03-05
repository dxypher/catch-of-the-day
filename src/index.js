import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

// mounts the app to index.html #main
render(<App />, document.querySelector('#main'));