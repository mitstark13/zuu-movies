import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';

import Homepage from './components/Homepage'
import MoviePage from './components/MoviePage'

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Homepage}/>
        <Route path="/movie/:id" component={MoviePage} />
    </Router>,
  document.getElementById('root')
);
