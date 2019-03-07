import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router'
import './css/style.css';

// mounts the app to index.html #main
render(<Router />, document.querySelector('#main'));