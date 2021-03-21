import React,{useState} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contact = () =>{
  const [data,setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    message:'',
  });

  const InputEvent = (event) => {
    const {name,value} = event.target;

    setData((preVal) => {
      return {
         ... preVal,
         [name]:value,
      }
    })
  };
  const formSubmit = (e) => {
     e.preventDefault();
     alert(`My name is ${data.fullname}.My phone number is ${data.phone}.My Email is ${data.email}.Message ${data.message}`);
  };
  return(
    <React.Fragment>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
             <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                      <form onSubmit={formSubmit}>
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text"
   class="form-control"
 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
     placeholder="enter full name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="text"
   class="form-control" 
  
   name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="mobile number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <input type="email" 
  class="form-control"
  
   name="email"
   value={data.email}
   onChange={InputEvent}
    placeholder="email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" 
  
  name="message"
  value={data.message}
  onChange={InputEvent}
   rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>
                    </div>
                </div>
             </div>
             
    </React.Fragment>
  );
};

export default Contact;