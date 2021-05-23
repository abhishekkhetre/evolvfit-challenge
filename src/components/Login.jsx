import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap"

function Log(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    if (username === "test@gmail.com" && password === "test") {
      props.history.push("/admin");
    } else {
      props.history.push("/login");
    }
  };

  return (
    <>
    <div style={{margin:'0', padding:'20px',  background: 'black', height:'800px'}}>

    <ReactBootStrap.Card
    style={{ width: '45rem', height:'600px', margin:'auto', marginTop:'0px', alignItems:'center', paddingTop:'10px'}}
    className="mb-2 bg-danger text-white"
  >
    <ReactBootStrap.Card.Body>
      <h1 style={{marginTop:'12%', textAlign:'center', marginBottom:'10%'}}>ADMIN LOGIN</h1>
      <form onSubmit={handleSubmit} style={{width:'50%', height:'800px'}}>
        <label>
          <p>Username*</p>
          <input style={{width:'500px'}} type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)} />
        </label>
        <br/>
        <label>
          <p>Password*</p>
          <input style={{width:'500px'}} type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
        <ReactBootStrap.Button className="btn btn-primary btn-lg btn-block text-light" style={{width: '200%', marginTop:'30px'}} variant='primary btn-outline-dark' type="submit">Login</ReactBootStrap.Button> 
        </div>
      </form>
    
    </ReactBootStrap.Card.Body>
  </ReactBootStrap.Card>


    
    </div>
    </>
  );
}
export default Log;
