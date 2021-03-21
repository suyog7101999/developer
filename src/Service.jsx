import React from 'react';
import web1 from "../src/images/website.jpg";
import app from "../src/images/app.jpg";
import digital from "../src/images/digital.jpg";
import marketting from "../src/images/marketting.jpg";
import software from "../src/images/2.jpg";
import android from "../src/images/android.jpg";


const Service = () =>{
  return(
    <React.Fragment>
          <div className="my-5">
              <h1 className="text-center">Our Services</h1>
          </div>
          <div className="container-fluid mb-10">
             <div className="row">
                <div className="col-10 mx-auto">
                     <div className="row gy-12">
                     <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src={web1} class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">Website Development</h5>
                       
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src={app} class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">ios Development</h5>
                    
          
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src={digital} class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">Digital Marketting</h5>
                      
          
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src={marketting} class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">Marketting</h5>
            
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src={software} class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">Software Development</h5>
                  
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src={android} class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">Android Development</h5>

  </div>
</div>

                         </div>
                         
 
 
                     </div>      
                </div>
             </div>
 </div>
    </React.Fragment>
  );
};

export default Service;