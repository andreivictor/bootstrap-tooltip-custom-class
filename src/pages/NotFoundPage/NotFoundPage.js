import React from 'react';
import PropTypes from 'prop-types';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <div className="d-flex h-100 align-items-center justify-content-center bg-white" data-testid="NotFoundPage">
    <div className="text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-3">Page not found</p>
      <p className="lead">
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  </div>
);

NotFoundPage.propTypes = {};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
