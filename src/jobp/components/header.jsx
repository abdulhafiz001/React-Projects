import React from 'react';

function Header() {
  return (
    <div>
      <header id="header" className="clearfix">
        <nav className="navbar navbar-default navbar-expand-lg">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
            </button>
            <a className="navbar-brand" href="index.html"><img className="img-fluid" src="images/logo.png" alt="Logo"/></a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/jobPoster">Home</a></li>
                <li ><a href="/jobList">Job list</a></li>
                <li ><a href="/jobPost">Job post</a></li>
                <li><a href="/jobDetails">Job Details</a></li>
                
                {/* <li><a href="resume.html">Resume</a></li> */}
                {/* <li className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">Pages<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="post-resume.html">Post Resume</a></li>
                    <li><a href="post.html">Job Post</a></li>
                    <li><a href="edit-resume.html">Edit Resume</a></li>
                    <li><a href="profile-details.html">profile Details</a></li>
                    <li><a href="bookmark.html">Bookmark</a></li>
                    <li><a href="applied-job.html">Applied Job</a></li>
                    <li><a href="delete-account.html">Close Account</a></li>
                    <li><a href="signup.html">Job Signup</a></li>
                    <li><a href="signin.html">Job Signin</a></li>
                  </ul>
                </li> */}
              </ul>
            </div>
            <div className="nav-right">
              <ul className="sign-in">
                <li><i className="fa fa-user"></i></li>
                <li><a href="signin.html">Sign In</a></li>
                <li><a href="signup.html">Register</a></li>
              </ul>
              <a href="#" className="btn">Post Your Job</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
