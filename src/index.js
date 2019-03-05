import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import './css/style.css';

// mounts the app to index.html #main
render(<StorePicker />, document.querySelector('#main'));