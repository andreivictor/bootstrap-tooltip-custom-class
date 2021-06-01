import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Bootstrap3 from './components/Bootstrap3/Bootstrap3';
import Bootstrap4 from './components/Bootstrap4/Bootstrap4';
import Bootstrap5 from './components/Bootstrap5/Bootstrap5';

import Bootstrap4Logo from './assets/images/bootstrap4-logo.svg';
import Bootstrap4LogoOutline from './assets/images/bootstrap4-logo-outline.svg';
import Bootstrap5Logo from './assets/images/bootstrap5-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>

        <div className="Foo vh-100 d-flex flex-column flex-lg-row">

          <div className="col-lg-4 p-0 flex-fill bg-light">
            <div className="d-flex align-items-center h-100 justify-content-center">
              <Link to="bootstrap3" className="FooLink text-center text-decoration-none text-bootstrap">
                <img src={Bootstrap4Logo} className="App-logo" alt="logo" />
                <p className="mt-2 mb-0">
                  Bootstrap 3
                </p>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 p-0 flex-fill bg-bootstrap">
            <div className="d-flex align-items-center flex-column h-100 justify-content-center">
              <Link to="bootstrap4" className="FooLink text-center text-decoration-none text-white">
                <img src={Bootstrap4LogoOutline} className="App-logo" alt="logo" />
                <p className="mt-2 mb-0">
                  Bootstrap 4
                </p>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 p-0 flex-fill bg-light">
            <div className="d-flex align-items-center flex-column h-100 justify-content-center">
              <Link to="bootstrap5" className="FooLink text-center text-decoration-none text-bootstrap-5">
                <img src={Bootstrap5Logo} className="App-logo" alt="logo" />
                <p className="mt-2 mb-0">
                  Bootstrap 5
                </p>
              </Link>
            </div>
          </div>

        </div>

        {/*<div className="d-md-flex h-md-100 align-items-center">*/}

        {/*  <Switch>*/}
        {/*    <Route path="/bootstrap3">*/}
        {/*      <Bootstrap3 />*/}
        {/*    </Route>*/}
        {/*    <Route path="/bootstrap4">*/}
        {/*      <Bootstrap4 />*/}
        {/*    </Route>*/}
        {/*    <Route path="/bootstrap5">*/}
        {/*      <Bootstrap5 />*/}
        {/*    </Route>*/}
        {/*  </Switch>*/}

        {/*</div>*/}

      </Router>
    </div>
  );
}

export default App;
