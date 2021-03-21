import React from 'react';



const Card = () =>{
  return(
    <React.Fragment>
          <div className="my-5">
              <h1 className="text-center"></h1>
          </div>
          <div className="container-fluid mb-5">
             <div className="row">
                <div className="col-10 mx-auto">
                     <div className="row gy-4">
                         <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                              <img src="" class="card-img-top" alt=""/>
                               <div class="card-body">
                             <h5 class="card-title">Card title</h5>
                       <p class="card-text">Some quick example</p>
                   <NavLink to="#" class="btn btn-primary">
              Go somewhere
            </NavLink>
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

export default Card;