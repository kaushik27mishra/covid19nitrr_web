import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <form style={{width:"100vw", paddingLeft:"20vw",paddingRight:"20vw",color:"black",paddingTop:"10vh"}}>
            <div class="form-group">
    <label for="name1" >Name</label>
    <input type="text" class="form-control" id="name1" placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label for="email1" >Email address</label>
    <input type="email" class="form-control" id="email1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="contact1" >Contact</label>
    <input type="number" class="form-control" id="contact1" placeholder="Enter Contact"/>
  </div>
  <div class="form-group">
    <label for="Select1" >Status</label>
    <select class="form-control" id="Select1">
      <option>1. Corona Virus Positive</option>
      <option>2.Shows Symtoms</option>
      <option>3. Travel History Abroad</option>
      <option>4. Close Contact</option>
      <option>5. Normal User</option>
    </select>
  </div>
  <div class="form-group">
    <label for="lat1" >Latitude</label>
    <input type="string" class="form-control" id="lat1" placeholder="Enter Latitude"/>
  </div>
  <div class="form-group">
    <label for="long1">Longitude</label>
    <input type="string" class="form-control" id="long1" placeholder="Enter Longitude"/>
  </div>
  <button class="btn-primary" type="submit">Submit</button>
  
  
</form>
        )
    }
}
