import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import PostsList from './posts/PostsList'
import SubmitPost from './SubmitPost'
import {Switch, Route, NavLink} from "react-router-dom"
import {ButtonGroup, Button} from '@material-ui/core'
import './App.css';

const App = () => {
  const forwardLink = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)
  const location = useSelector(state => state.router.location)
  let [state, setState] = useState({
    filter: 'default',
    sort: 'default'
  })


  return (
    <div className="page">
      <header>
        <h1><span role="img" aria-label="Ghost emoji">👻</span> Ghost Post</h1>
        {location.pathname === "/submit" && 
          <Button 
            color="primary"
            varient="contained"
            component={forwardLink}
            to="/"
            style={{height:'30px', marginLeft:10}}
            className="MuiButton-contained MuiButton-containedPrimary"
          >Home</Button>
        }
        {location.pathname === "/" && 
          <Button
            component={forwardLink}
            to="/submit"
            style={{height:'30px', marginLeft:10}}
            className="MuiButton-contained MuiButton-containedPrimary"
          >New Post</Button>
        }
      </header>
      <div className="content">
        {/* Sorting and filtering is handled in App so it persists when you navigate back from SubmitPost */}
        {location.pathname === "/" &&
          <div className="btn-group-wrap">
            <div className="btn-group">
              <h3>Sort:</h3>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{height:'30px'}}>
                <Button disabled={state.sort === 'default'} onClick={(e) => setState({...state, sort:'default'})}>Default</Button>
                <Button disabled={state.sort === 'votes'} onClick={(e) => setState({...state, sort:'votes'})}>Votes</Button>
              </ButtonGroup>
            </div>
            <div className="btn-group">
              <h3>Filter:</h3>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{height:'30px'}}>
                <Button disabled={state.filter === 'default'} onClick={(e) => setState({...state, filter:'default'})}>Default</Button>
                <Button disabled={state.filter === 'boasts'} onClick={(e) => setState({...state, filter:'boasts'})}>Boasts</Button>
                <Button disabled={state.filter === 'roasts'} onClick={(e) => setState({...state, filter:'roasts'})}>Roasts</Button>
              </ButtonGroup>
            </div>
          </div>
        }
        <Switch>
          <Route exact path="/" component={() => <PostsList viewState={state}/>} />
          <Route exact path="/submit" component={SubmitPost} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
