import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TileContent from './components/TileContent'
import Reactbottom from './components/Reactbottom'
import Reactheader from './components/Reactheader'
import { BrowserRouter as Router, Link ,Route} from 'react-router-dom';
let a=[1,2,3];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <TileContent></TileContent>
          <Router>
          <Link to='/Reactbottom'>Reactbottom</Link>
          <Route path="/Reactbottom" component={Reactbottom} />
          </Router>
          <Reactheader data={a}/>
        <hr />
      </div> 
    );
  }
}
export default App;
