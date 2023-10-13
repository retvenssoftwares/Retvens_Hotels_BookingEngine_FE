import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Auth() {

  const [isLogin, setIsLogin] = useState(true)



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
        isLogin ? <Login /> : <Register setIsLogin={setIsLogin} />
      }



    </>
  )
}

const Register = ({setIsLogin}) => {
  
  const handleSignup = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password =document.getElementById("password").value
   const repassword =document.getElementById("repassword").value
    // Create a data object with user registration information

     // Check if the passwords match
     if (password !== repassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
     firstName: name,
      email:email,
      phoneNumber:mobile,
      pwd:password,
    
    };

    // Make a POST request to the signup API using the fetch API
    fetch("http://localhost:9000/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          // Registration was successful
          setIsLogin(true)
        } else {
          // Registration failed, handle the error
          alert("Registration failed");
        }
      })
      .catch((error) => {
        // Handle any network errors
        alert("Network error: " + error.message);
      });
  };
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
                <input id="name" type="text" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="email">Email address:</label>
                <input id="email" type="email" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input id="mobile" type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input id="password" type="password" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="repwd">Re-enter Password:</label>
                <input id="repassword" type="password" class="form-control" />
              </div>
              <br />
            
              <br />
              <p>Already have an account? <a href="#">Login</a></p>
              <button type="button" class="btn btn-success" onClick={handleSignup}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async () => {
    const email = document.getElementById("email").value;

    const password =document.getElementById("password").value

    // Create a data object with user registration information
    ;

    const userData = {
      email:email,
      passwd:password,
    
    };

    // Make a POST request to the signup API using the fetch API
    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
        // Registration was successful
        response.json().then((data) => {
          const { userId } = data; // Destructure the userId from the response data
        window.cookieStore.set("userId",userId)
        window.cookieStore.set("auth",true)
          
          navigate("/home");
        });
        } else {
          // Registration failed, handle the error
          alert("login failed");
        }
      })
      .catch((error) => {
        // Handle any network errors
        alert("Network error: " + error.message);
      });
  };
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
                <input id="email" type="email" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input id="password" type="password" class="form-control" />
              </div>
              <br />
              <p>Don't have an account? <a href="#">Register here</a></p>
              <button type="button" class="btn btn-success" onClick={handleLogin}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

// import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";

// export default function Auth() {

//   const [isLogin, setIsLogin] = useState(true)

//   // useEffect(()=>{
//   //     if(isLogin){
//   //         alert("Login")
//   //     }else{
//   //         alert('register')
//   //     }
//   // },[isLogin])

//   return (
//     <>
//       <div className="d-flex justify-content-center ">
//         <div role="button" className="border border-secondary rounded p-2" onClick={() => setIsLogin(true)} style={{ marginRight: '10px' }}>
//           <h3>Login</h3>
//         </div>
//         <div role="button" className="border border-secondary rounded p-2" onClick={() => setIsLogin(false)}>
//           <h3>Register</h3>
//         </div>
//       </div>

//       {
//         isLogin ? <Login /> : <Register />
//       }



//     </>
//   )
// }

// const Register = () => {
//   return <>

//     <div class="container-fluid bg-light p-0">
//       <div class="row g-0">
//         <div class="col-lg-12 py-6 px-5 row justify-content-center">
//           <div className="col-md-6">
//             <h1 class="display-5 mb-4">Register <span class="text-success">Here!!!</span></h1>
//             {/* <font color="blue">{output}</font> */}
//             <form>
//               <div class="form-group">
//                 <label for="name">Name:</label>
//                 <input type="text" class="form-control" />
//               </div>
//               <br />
//               <div class="form-group">
//                 <label for="email">Email address:</label>
//                 <input type="email" class="form-control" />
//               </div>
//               <br />
//               <div class="form-group">
//                 <label for="pwd">Password:</label>
//                 <input type="password" class="form-control" />
//               </div>
//               <br />
//               <div class="form-group">
//                 <label for="repwd">Re-enter Password:</label>
//                 <input type="password" class="form-control" />
//               </div>
//               <br />
//               <div class="form-group">
//                 <label for="mobile">Mobile:</label>
//                 <input type="text" class="form-control" />
//               </div>
//               <br />
//               <p>Already have an account? <a href="#">Login</a></p>
//               <button type="button" class="btn btn-success">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <form>
//               <h2 className=" justify-content-center">Register</h2>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" className="form-control" id="name" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="email" className="form-control" id="email" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" className="form-control" id="password" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="reenterPassword">Re-enter Password</label>
//                 <input type="password" className="form-control" id="reenterPassword" />
//               </div>
//               <button type="submit" className="btn btn-primary">Register</button>
//               <p>Already have an account? <a href="#">Login</a></p>
//             </form>
//           </div>
//         </div>
//       </div> */}

//     {/* <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <form>
//               <h2>Register</h2>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" className="form-control" id="name" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="email" className="form-control" id="email" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" className="form-control" id="password" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="reenterPassword">Re-enter Password</label>
//                 <input type="password" className="form-control" id="reenterPassword" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="mobile">Mobile</label>
//                 <input type="text" className="form-control" id="mobile" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="city">City</label>
//                 <input type="text" className="form-control" id="city" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="gender">Gender</label>
//                 <select className="form-control" id="gender">
//                   <option value="">Select</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <button type="submit" className="btn btn-primary">Register</button>
//               <p>Already have an account? <a href="#">Login</a></p>
//             </form>
//           </div>
//         </div>
//       </div> */}

//   </>
// }

// const Login = () => {
//   return <>
//     <div class="container-fluid bg-light p-0">
//       <div class="row g-0">
//         <div class="col-lg-12 py-6 px-5 row justify-content-center">
//           <div className="col-md-6">
//             <h1 class="display-5 mb-4">Login <span class="text-success">Here!!!</span></h1>
//             {/* <font color="blue">{output}</font> */}
//             <form>
//               <br />
//               <div class="form-group">
//                 <label for="email">Email address:</label>
//                 <input type="email" class="form-control" />
//               </div>
//               <br />
//               <div class="form-group">
//                 <label for="pwd">Password:</label>
//                 <input type="password" class="form-control" />
//               </div>
//               <br />
//               <p>Don't have an account? <a href="#">Register here</a></p>
//               <button type="button" class="btn btn-success">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// }