import React from 'react'
import ReactDOM from 'react-dom';
import Survey from './SmcSurvey.js'

let start = 'Start Here';

function doSurvey() {
  if (/^Start Here/i.test(start)) {
    start = 'Restart';
  }

  ReactDOM.render(<Survey/>, document.getElementById("survey"));
}

const Home = () => (
  <div className="page-container">
    <img className="main-logo" src='/icons/logo.png' />
    <div className='jumbotron'>
      <div className="header-items-container">
        <h3 className="display-3">Get help putting food on the table</h3>
        <p className="lead">See which Food Programs you are eligible for...</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button" onClick={doSurvey}>{start}</a>
        </p>
        <hr className="my-4" />
      </div>
      <div className="lead">
        <div id="survey"></div>
      </div>
    </div>
  </div>
)

export default Home
