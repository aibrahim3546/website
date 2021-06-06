import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/Home/HomePage';

const Router: React.FC = () => (
  <HashRouter basename="/">
    <div>
      <Navbar />
      <div style={{ minHeight: '100%', marginBottom: 160 }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  </HashRouter>
);

export default Router;
