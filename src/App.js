import React from 'react';
import PostsList from './posts/PostsList'
import SubmitPost from './SubmitPost'
import {Switch, Route, NavLink} from "react-router-dom"
import './App.css';

const App = () => {

  return (
    <div className="page">
      <header>
        <h1><span role="img" aria-label="Ghost emoji">👻</span> Ghost Post</h1>
        <p><NavLink to="/">Home</NavLink> || <NavLink to="/submit">New Post</NavLink></p>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/submit" component={SubmitPost} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
