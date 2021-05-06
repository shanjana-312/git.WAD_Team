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
import Footer from './components/Footer';
import Report from './components/Report';
import Experience from './components/Experience';
import Contactus from './components/Contactus';

import { CookiesProvider } from 'react-cookie'
import Faq from './components/Faq';
function App() {
  return (
    <>
      <CookiesProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={login} />
            <Route path="/posts" component={Posts} />
            <Route path="/upload" component={Upload} />
            <Route path="/findjobs" component={FindJobs} />
            <Route path="/funds" component={Funds} />
            <Route path="/report" component={Report} />
            <Route path="/experience" component={Experience} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/faq" component={Faq} />

          </Switch>
          <Footer />
        </Router>
      </CookiesProvider>
    </>
  );
}
export default App;