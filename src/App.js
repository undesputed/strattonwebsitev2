import React from 'react';
import './assets/main.scss';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from "./pages/landingPage";
import BookVideosPage from "./pages/bookVideos";
import AboutUsPage from "./pages/aboutUs";

import Navigation from "./components/navigation";
import Header from "./components/contactHeader"

import * as ROUTES from './routes';

function App() {
  return (
    <Router>
      <Header/>
      <contactHeader/>
      <Navigation/>
      <div>
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route path={ROUTES.ABOUTUS} Component={AboutUsPage}/>
        <Route path={ROUTES.BOOKVIDESO} Component={BookVideosPage}/>
      </div>
    </Router>
  );
}

export default App;
