import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Sidebar = (props) =>{
  return(
    <React.Fragment>
           <section id="header" className="d-flex align-items-center">
              <div className="container-fluid ">
                 <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">

                           <h1>{props.name}
                             <strong className="brand-name">The Developer</strong>
                             </h1>
                           <h2 className="my-3">
                             We are the team of talented developer
                             </h2>
                                <div className="mt-3">
                               <a href={props.link} className="btn-get-started">{props.btname}</a>
                               
                           </div>
                           <div className="mt-3">
                               <a href={props.link1} className="btn-get-started">{props.butname}</a>
                               
                           </div>
                           <div className="mt-3">
                               <a href={props.link2} className="btn-get-started">{props.bttname}</a>
                               
                           </div>
                       </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                 <img src={props.imgsrc}
                  className="img-fluid animated"
                 alt="home img"/>
              </div>
             </div>
             </div>
                 </div>
              </div>  
           </section>
    </React.Fragment>
  );
};

export default Sidebar;
