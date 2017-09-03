import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import createBrowserHistory from './history';

import Dashboard from '../containers/Dashboard';
import RepoListContainer from '../containers/RepoListContainer';
import OwnerDetailContainer from '../containers/OwnerDetailContainer';

export default (
  <Router history={history} >
    <div>
      <Route exact component={ Dashboard } path="/" />
      <Route exact path="/repo/:language" component={RepoListContainer}/>
      <Route path="/repo/owner/:name" component={OwnerDetailContainer}/>
    </div>
  </Router>
);
