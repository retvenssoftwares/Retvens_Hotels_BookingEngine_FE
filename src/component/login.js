import React from "react";


export function Login(){
return(
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
      
          <div className="modal-content-centered">
            <div className="modal-body">
              <div className="post-tabs">
              
                <ul classsName="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                    <li classsName="nav-item" role="presentation">
                        <button aria-controls="login" aria-selected="false" classsName="nav-link active" data-bs-target="#login" data-bs-toggle="tab" id="login-tab" role="tab" type="button">Login</button>
                    </li>
                    <li classsName="nav-item" role="presentation">
                        <button aria-controls="register" aria-selected="true" classsName="nav-link" data-bs-target="#register" data-bs-toggle="tab" id="register-tab" role="tab" type="button">Register</button>
                    </li>

                </ul>
                              
                <div classsName="tab-content blog-full" id="postsTabContent">
                
                    <div aria-labelledby="login-tab" classsName="tab-pane fade active show" id="login" role="tabpanel">
                        <div classsName="row">
                            <div classsName="col-lg-6">
                               <div classsName="blog-image rounded">
                                    <a href="#" style="background-image: url(images/trending/trending5.jpg);"></a>
                                </div> 
                            </div>
                            <div classsName="col-lg-6">
                                <h4 classsName="text-center border-b pb-2">Login</h4>
                                <div classsName="log-reg-button d-flex align-items-center justify-content-between">
                                    <button type="submit" classsName="btn btn-fb">
                                        <i classsName="fab fa-facebook"></i> Login with Facebook
                                    </button>
                                    <button type="submit" classsName="btn btn-google">
                                        <i classsName="fab fa-google"></i> Login with Google
                                    </button>
                                </div>
                                <hr classsName="log-reg-hr position-relative my-4 overflow-visible"/>
                                <form method="post" action="#" name="contactform" id="contactform">
                                    <div classsName="form-group mb-2">
                                        <input type="text" name="user_name" classsName="form-control" id="fname" placeholder="User Name or Email Address"/>
                                    </div>
                                    <div classsName="form-group mb-2">
                                        <input type="password" name="password_name" classsName="form-control" id="lpass" placeholder="Password"/>
                                    </div>
                                    <div classsName="form-group mb-2">
                                        <input type="checkbox" classsName="custom-control-input" id="exampleCheck1"/>
                                        <label classsName="custom-control-label mb-0" for="exampleCheck1">Remember me</label>
                                        <a classsName="float-end" href="#">Lost your password?</a>
                                    </div>
                                    <div classsName="comment-btn mb-2 pb-2 text-center border-b">
                                        <input type="submit" classsName="nir-btn w-100" id="submit" value="Login"/>
                                    </div>
                                    <p classsName="text-center">Don't have an account? <a href="#" classsName="theme">Register</a></p>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div aria-labelledby="register-tab" classsName="tab-pane fade" id="register" role="tabpanel">
                        <div classsName="row">
                            <div classsName="col-lg-6">
                               <div classsName="blog-image rounded">
                                    <a href="#" style="background-image: url(images/trending/trending5.jpg);"></a>
                                </div> 
                            </div>
                            <div classsName="col-lg-6">
                                <h4 classsName="text-center border-b pb-2">Register</h4>
                                <div classsName="log-reg-button d-flex align-items-center justify-content-between">
                                    <button type="submit" classsName="btn btn-fb">
                                        <i classsName="fab fa-facebook"></i> Login with Facebook
                                    </button>
                                    <button type="submit" classsName="btn btn-google">
                                        <i classsName="fab fa-google"></i> Login with Google
                                    </button>
                                </div>
                                <hr classsName="log-reg-hr position-relative my-4 overflow-visible"/>
                                <form method="post" action="#" name="contactform1" id="contactform1">
                                    <div classsName="form-group mb-2">
                                        <input type="text" name="user_name" classsName="form-control" id="fname1" placeholder="User Name"/>
                                    </div>
                                    <div classsName="form-group mb-2">
                                        <input type="text" name="user_name" classsName="form-control" id="femail" placeholder="Email Address"/>
                                    </div>
                                    <div classsName="form-group mb-2">
                                        <input type="password" name="password_name" classsName="form-control" id="lpass1" placeholder="Password"/>
                                    </div>
                                    <div classsName="form-group mb-2">
                                        <input type="password" name="password_name" classsName="form-control" id="lrepass" placeholder="Re-enter Password"/>
                                    </div>
                                    <div classsName="form-group mb-2 d-flex">
                                        <input type="checkbox" classsName="custom-control-input" id="exampleCheck2"/>
                                        <label classsName="custom-control-label mb-0 ms-1 lh-1" for="exampleCheck2">I have read and accept the Terms and Privacy Policy?</label>
                                    </div>
                                    <div classsName="comment-btn mb-2 pb-2 text-center border-b">
                                        <input type="submit" classsName="nir-btn w-100" id="submit2" value="Register"/>
                                    </div>
                                    <p classsName="text-center">Already have an account? <a href="#" classsName="theme">Login</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
  
      </div>
    </div>
    
    </>
)
}