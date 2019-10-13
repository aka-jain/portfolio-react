import React, { Component, Fragment } from 'react';

import 'styles/home.scss'

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.renderCicle = this.renderCicle.bind(this);
    this.state = {};
  }

  renderCicle(element, index){
    console.log(element)
    return (
      <div key={index} className={`circle circle-${element.classIndex}`}></div>
    )
  }
  render() {

    let circles = [
      {
        index: 1,
        classIndex: 'left-one' 
      },
      {
        index: 2,
        classIndex: 'left-two' 
      },
      {
        index: 3,
        classIndex: 'left-three' 
      },
      {
        index: 4,
        classIndex: 'left-four' 
      },
      {
        index: 5,
        classIndex: 'left-five' 
      },
      {
        index: 2,
        classIndex: 'left-two' 
      },
      {
        index: 1,
        classIndex: 'left-one' 
      },
      {
        index: 2,
        classIndex: 'left-two' 
      }
    ]
    
    return (
      <div className="container-left-right center">
      
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="flex-center skill-home font-geo">

              <div className="circle-fill">
                {circles.map(this.renderCicle)}
              </div>

              <h2>Design</h2>
            </div>
            
          </div>
           <div className="col-xs-12 col-sm-4">
            <ul className="logo-list">
              <li>
                A
              </li>
              <li>
                K
              </li>
              <li className="logo-img">
              <div className="ring-sm">
                <div className="ring-inner-sm">
                </div>
              </div>
              <div className="ring-bg">
                <div className="ring-inner-bg">
                </div>
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
            <h2>&lt;Development/&gt;</h2>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
