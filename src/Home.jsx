import React from 'react';
import Sidebar from './Sidebar.jsx'; 
import web from "../src/images/rocket.jpg";

const Home = () =>{
  return(
    <React.Fragment>
             <Sidebar
              name="Grow your business with"
             imgsrc={web} visit="/service"
             btname="Contact"
       link="./contact"
             />
    </React.Fragment>
  );
};

export default Home;
