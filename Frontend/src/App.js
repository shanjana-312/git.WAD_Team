import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import login from './components/pages/login';
import Posts from './components/pages/Posts';
import Upload from './components/pages/Upload';
import FindJobs from './components/pages/FindJobs';
import Funds from './components/pages/Funds';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={login} />
          <Route path="/posts" component={Posts} />
          <Route path="/upload" component={Upload} />
          <Route path="/findjobs" component={FindJobs} />
          <Route path="/funds" component={Funds} />

        </Switch>
      </Router>
    </>
  );
}
export default App;