import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './components/pages/dashboard'
import Auth from './components/pages/Auth'
import Routine from './components/pages/routine'


//hi tim <3
// hi rishi <3 


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/routine" exact component={Routine} />
      </Router>
      
    </div>
  );
}

export default App;
