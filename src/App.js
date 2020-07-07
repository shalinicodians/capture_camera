import React, { Component } from 'react';
import './App.css';
import Camera from './camera';
import {Route,Redirect,Switch, Link} from 'react-router-dom';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div>
          <button className="btn btn-success" ><Link style={{color:'white',textDecoration:'none'}} to={`/camera`}>Open Camera</Link></button>
          <button className="btn btn-danger" ><Link style={{color:'white',textDecoration:'none'}} to={`/`}>Close Camera</Link></button>
        </div>
        <Switch>
          <Route path="/camera"><Camera/></Route>
          <Redirect from ="/" exact to=""/>
        </Switch>
      </div>
     );
  }
}
 
export default App;

//export default App;
