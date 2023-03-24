import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Bootstrap3Page, Bootstrap4Page, Bootstrap5Page, HomePage, NotFoundPage  } from './pages';
import './App.scss';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App d-grid">

        <header className="navbar navbar-expand-md navbar-dark navbar--bootstrap shadow sticky-top">
          <nav className="container-fluid">
            <Link to="/" className="navbar-brand">Bootstrap Tooltip Custom Class</Link>
            <Routes>
              <Route path="/bootstrap3"
                     element={<Link to="/">Back from 3</Link>}>
              </Route>
              <Route path="/bootstrap4"
                     element={<Link to="/">Back from 4</Link>}>
              </Route>
              <Route path="/bootstrap5"
                     element={<Link to="/">Back from 5</Link>}>
              </Route>
            </Routes>
          </nav>
        </header>

        {/*<ForkMeOnGithub></ForkMeOnGithub>*/}

        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/bootstrap3" element={<Bootstrap3Page />} />
            <Route path="/bootstrap4" element={<Bootstrap4Page />} />
            <Route path="/bootstrap5" element={<Bootstrap5Page />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
