import React from 'react';
import Sidebar from './Sidebar.jsx'; 
import web from "../src/images/rocket.jpg";

const Home = () =>{
  return(
    <React.Fragment>
               <Sidebar
              name="Grow your business with"
             imgsrc={web}
             btname="Contact"
             butname="Service"
             bttname="About"
             link="./contact"
             link1="./service"
             link2="./about"
             />
    </React.Fragment>
  );
};

export default Home;
