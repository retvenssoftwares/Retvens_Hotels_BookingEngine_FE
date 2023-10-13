import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

export default function Auth() {

  const [isLogin, setIsLogin] = useState(true)

  // useEffect(()=>{
  //     if(isLogin){
  //         alert("Login")
  //     }else{
  //         alert('register')
  //     }
  // },[isLogin])

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div role="button" className="border border-secondary rounded p-2" onClick={() => setIsLogin(true)} style={{ marginRight: '10px' }}>
          <h3>Login</h3>
        </div>
        <div role="button" className="border border-secondary rounded p-2" onClick={() => setIsLogin(false)}>
          <h3>Register</h3>
        </div>
      </div>

      {
        isLogin ? <Login /> : <Register />
      }



    </>
  )
}

const Register = () => {
  return <>

    <div class="container-fluid bg-light p-0">
      <div class="row g-0">
        <div class="col-lg-12 py-6 px-5 row justify-content-center">
          <div className="col-md-6">
            <h1 class="display-5 mb-4">Register <span class="text-success">Here!!!</span></h1>
            {/* <font color="blue">{output}</font> */}
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="repwd">Re-enter Password:</label>
                <input type="password" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <p>Already have an account? <a href="#">Login</a></p>
              <button type="button" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <h2 className=" justify-content-center">Register</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="form-group">
                <label htmlFor="reenterPassword">Re-enter Password</label>
                <input type="password" className="form-control" id="reenterPassword" />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
              <p>Already have an account? <a href="#">Login</a></p>
            </form>
          </div>
        </div>
      </div> */}

    {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <h2>Register</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="form-group">
                <label htmlFor="reenterPassword">Re-enter Password</label>
                <input type="password" className="form-control" id="reenterPassword" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" className="form-control" id="mobile" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
              <p>Already have an account? <a href="#">Login</a></p>
            </form>
          </div>
        </div>
      </div> */}

  </>
}

const Login = () => {
  return <>
    <div class="container-fluid bg-light p-0">
      <div class="row g-0">
        <div class="col-lg-12 py-6 px-5 row justify-content-center">
          <div className="col-md-6">
            <h1 class="display-5 mb-4">Login <span class="text-success">Here!!!</span></h1>
            {/* <font color="blue">{output}</font> */}
            <form>
              <br />
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" />
              </div>
              <br />
              <p>Don't have an account? <a href="#">Register here</a></p>
              <button type="button" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}