import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="card" style={{backgroundColor:"#5699ba",width:"100vw", paddingLeft:"20vw",paddingRight:"20vw"}}>
            <div className="card-title">

            </div>
            <div className="card-body">
             

            <form>
            <div class="form-group">
    <label for="name1" style={{color:"#fff"}}>Name</label>
    <input type="text" class="form-control" id="name1" placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label for="email1" style={{color:"#fff"}}>Email address</label>
    <input type="email" class="form-control" id="email1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="contact1" style={{color:"#fff"}}>Contact</label>
    <input type="number" class="form-control" id="contact1" placeholder="Enter Contact"/>
  </div>
  <div class="form-group">
    <label for="Select1" style={{color:"#fff"}}>Status</label>
    <select class="form-control" id="Select1">
      <option>1. Corona Virus Positive</option>
      <option>2.Shows Symtoms</option>
      <option>3. Travel History Abroad</option>
      <option>4. Close Contact</option>
      <option>5. Normal User</option>
    </select>
  </div>
  <div class="form-group">
    <label for="lat1" style={{color:"#fff"}}>Latitude</label>
    <input type="string" class="form-control" id="lat1" placeholder="Enter Latitude"/>
  </div>
  <div class="form-group">
    <label for="long1" style={{color:"#fff"}}>Longitude</label>
    <input type="string" class="form-control" id="long1" placeholder="Enter Longitude"/>
  </div>
  <button type="submit"><b>Register Now</b></button>
  
  
</form>
</div>
</div>
        )
    }
}
