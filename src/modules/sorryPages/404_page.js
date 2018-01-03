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
            {'Looks like we are having'}
            <br /> {'some server issues.'}
          </div>
          <hr />
          <div className="clearfix" />
          <div className="context primary-text-color">
            <p>{'Go back to the previous page and try again. If you think something is broken, report a problem.'}</p>
          </div>
          <div className="buttons-container">
            <a className="border-button" href="http://www.gartner.com/technology/site-index.jsp">{'Visit Sitemap'}</a>
          </div>
        </div>
      </div>
    );
  }
}
export default ErrorPage;
