import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './HomePage.scss';
import Bootstrap4LogoOutline
  from '../../assets/images/bootstrap4-logo-outline.svg';
import Bootstrap4Logo from '../../assets/images/bootstrap4-logo.svg';
import Bootstrap5Logo from '../../assets/images/bootstrap5-logo.svg';

const HomePage = () => (
  <div className="HomePage d-grid" data-testid="HomePage">

    <div className="d-flex align-items-center justify-content-center p-4 overflow-hidden">
      <Link to="bootstrap3" className="HomePage-link py-1 px-3 text-decoration-none text-center text-bootstrap-3">
        <img src={Bootstrap4Logo} className="HomePage-link__img" alt="logo" />
        <h3 className="HomePage-link__title mt-2 mb-0">Bootstrap 3</h3>
      </Link>
    </div>
    <div className="d-flex align-items-center justify-content-center bg-bootstrap-4 shadow p-4 overflow-hidden">
      <Link to="bootstrap4" className="HomePage-link py-1 px-3 text-decoration-none text-center text-white">
        <img src={Bootstrap4LogoOutline} className="HomePage-link__img" alt="logo" />
        <h3 className="HomePage-link__title mt-2 mb-0">Bootstrap 4</h3>
      </Link>
    </div>
    <div className="d-flex align-items-center justify-content-center p-4 overflow-hidden">
      <Link to="bootstrap5" className="HomePage-link py-1 px-3 text-decoration-none text-center text-bootstrap-5">
        <img src={Bootstrap5Logo} className="HomePage-link__img" alt="logo" />
        <h3 className="HomePage-link__title mt-2 mb-0">Bootstrap 5</h3>
      </Link>
    </div>

  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
