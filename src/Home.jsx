import React from 'react';
import Sidebar from './Sidebar.jsx'; 
import web from "../src/images/rocket.jpg";

const Home = () =>{
  return(
    <React.Fragment>
             <Sidebar
              name="Grow your business with"
             imgsrc={web} visit="/service"
             btname="Get Started"
             />
    </React.Fragment>
  );
};

export default Home;
