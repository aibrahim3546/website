import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import HomePage from './pages/Home/HomePage';

const Router: React.FC = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
