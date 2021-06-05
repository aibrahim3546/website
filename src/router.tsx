import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// Components
import Spinner from './components/Loader/Spinner';
import Navbar from './components/Navbar/Navbar';

// Pages
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const EditCounterPage = lazy(() => import('./pages/Counter/EditCounterPage'));

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/edit" component={EditCounterPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
