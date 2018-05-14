import React, { Component, Fragment } from 'react';

import 'styles/home.scss'

class HomeContainer extends Component {
  render() {
    return (
      <div className="container-left-right center">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="flex-center skill-home font-geo">
              <h2>Design</h2>
            </div>
            
          </div>
           <div className="col-xs-12 col-sm-4">
            <ul class="logo-list">
              <li>
                A
              </li>
              <li>
                K
              </li>
              <li className="logo-img">
              <div className="ring-sm">
                
              </div>
                <img src="/assets/images/logo.png" alt=""/>
              </li>
              <li>
                S
              </li>
              <li>
                H
              </li>
            </ul>
          </div>
           <div className="col-xs-12 col-sm-4">
           <div className="flex-center skill-home font-geo">
            <h2>Development</h2>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
