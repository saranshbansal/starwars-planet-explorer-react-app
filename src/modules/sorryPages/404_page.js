/*
 * @sbansal
 * This is the default 404 page for the application.
 */
import React, {Component} from 'react';
import '../../assets/css/error-page.css';

class ErrorPage extends Component {
  render() {
    return (
      <div className="plain error-page-wrapper background-color">
        <div className="content-container">
          <div className="head-line secondary-text-color">{':('}</div>
          <div className="subheader primary-text-color">
            {'Looks like your spaceship'}
            <br /> {'is lost in the universe.'}
          </div>
          <hr />
          <div className="clearfix" />
          <div className="context primary-text-color">
            <p>{'Please try again. If you think something is broken, report a problem.'}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ErrorPage;
