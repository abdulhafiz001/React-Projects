import React from 'react';
import Header from './components/header';
import PostBanner from './components/PostBanner';
import Footer from './components/Footer';

function JobPost() {
  return (
    <div>
      <Header />
      {/* <PostBanner /> */}
      <div className="tr-post-job page-content">
<div className="container">
<div className="row">
<div className="col-md-9">
<div className="short-info code-edit-small">
<div className="section">
<span className="tr-title">Short Info</span>
<div className="row">
<div className="col-sm-3">
<label>Title for your job</label>
</div>
<div className="col-sm-9">
<div className="code-edit">
<span>ex, Human Resource Manager</span>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Job Category</label>
</div>
<div className="col-sm-9">
<div className="dropdown tr-change-dropdown">
<a data-toggle="dropdown" href="#" aria-expanded="true"><span className="change-text">Select a category</span><i className="fa fa-angle-down"></i></a>
<ul className="dropdown-menu tr-change">
<li><a href="#">Select a category</a></li>
<li><a href="#">Software Engineer</a></li>
<li><a href="#">Project Manager</a></li>
<li><a href="#">Graphics Designer</a></li>
</ul>
</div>
</div>
</div>
<div className="row job-category">
<div className="col-sm-3">
<label>Job Category</label>
</div>
<div className="col-sm-9">
<div className="job-type">
<input type="radio" name="radio1" value="full-time" id="full-time"/> <label for="full-time">Full Time</label>
<input type="radio" name="radio1" value="part-time" id="part-time"/> <label for="part-time">Part Time</label>
<input type="radio" name="radio1" value="freelance" id="freelance"/> <label for="freelance">Freelance</label>
<input type="radio" name="radio1" value="contract" id="contract"/> <label for="contract">Contract</label>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Job Location</label>
</div>
<div className="col-sm-9">
<div className="code-edit">
<span>Type your address</span>
</div>
<div className="row">
<div className="col-sm-6">
<div className="dropdown tr-change-dropdown">
<a data-toggle="dropdown" href="#" aria-expanded="true"><span className="change-text">City</span><i className="fa fa-angle-down"></i></a>
<ul className="dropdown-menu tr-change">
<li><a href="#">City</a></li>
<li><a href="#">Chicago</a></li>
<li><a href="#">Denver</a></li>
<li><a href="#">New Orleans</a></li>
</ul>
</div>
</div>
<div className="col-sm-6">
<div className="code-edit"><span>Postal Code</span></div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Salary Information</label>
</div>
<div className="col-sm-9">
<div className="row">
<div className="col-sm-6">
<div className="code-edit">
<span>$5000</span>
</div>
</div>
<div className="col-sm-6">
<div className="aegotiable">
<span>Or</span>
<input type="radio" name="radio2" value="aegotiable" id="aegotiable"/> <label for="aegotiable">Negotiable</label>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Application Deadline</label>
</div>
<div className="col-sm-9">
<div className="calendar">
<input type="date" className="form-control" value="2017-06-25"/>
</div>
</div>
</div>
<div className="row exprience-level">
<div className="col-sm-3">
<label>Exprience Level</label>
</div>
<div className="col-sm-9">
<div className="exprience">
<input type="radio" name="radio3" value="entry-level" id="entry-level"/> <label for="entry-level">Entry Level</label>
<input type="radio" name="radio3" value="mid-level" id="mid-level"/> <label for="mid-level">Mid Level</label>
<input type="radio" name="radio3" value="mid-senior" id="mid-senior"/> <label for="mid-senior">Mid-Senior Level</label>
<input type="radio" name="radio3" value="top-level" id="top-level"/> <label for="top-level">Top Level</label>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Job Function</label>
</div>
<div className="col-sm-9">
<div className="dropdown tr-change-dropdown">
<a data-toggle="dropdown" href="#" aria-expanded="true"><span className="change-text">Graphics Design</span><i className="fa fa-angle-down"></i></a>
<ul className="dropdown-menu tr-change">
<li><a href="#">Graphics Design</a></li>
<li><a href="#">Project Manager</a></li>
<li><a href="#">Software Engineer</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="job-description section">
<span className="tr-title">Job Description</span>
<div className="row">
<div className="col-sm-3">
<label>Job Summary</label>
</div>
<div className="col-sm-9">
<div className="code-edit">
<span>Write few lines about your Job</span>
</div>
<span className="characters-left">5000 Characters left</span>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Key Responsibilities:</label>
</div>
<div className="col-sm-9">
<div className="code-edit">
<span>Write few lines about your Job</span>
</div>
<span className="characters-left">5000 Characters left</span>
</div>
</div>
<div className="row">
<div className="col-sm-3">
<label>Minimum Requirements:</label>
</div>
<div className="col-sm-9">
<div className="code-edit">
<span>Write few lines about your Job</span>
</div>
<span className="characters-left">5000 Characters left</span>
</div>
</div>
</div>
<div className="premium-post section">
<span className="tr-title">Make Your Post Premium</span>
<p>More replies means more interested buyers. With lots of interested buyers, you have a better chance of selling for the price that you want. <a href="#">Learn more</a></p>
<ul className="tr-list">
<li>
<input type="radio" name="radio4" value="regular-post" id="regular-post"/>
<label for="regular-post">Regular Post</label>
<span>$20.00</span>
</li>
<li>
<input type="radio" name="radio4" value="urgent-job" id="urgent-job"/>
<label for="urgent-job">Urgent Job </label>
<span>$30.00</span>
</li>
<li>
<input type="radio" name="radio4" value="top-post" id="top-post"/>
<label for="top-post">Top Post for 7 days</label>
<span>$50.00</span>
</li>
<li>
<input type="radio" name="radio4" value="daily-bump" id="daily-bump"/>
<label for="daily-bump">Daily Bump Up for 7 days</label>
<span>$100.00</span>
</li>
</ul>
</div>
<div className="section agreement">
<label for="send">
<input type="checkbox" name="send" id="send"/>
You agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> and acknowledge that you are the rightful owner of this item and using Trade to find a genuine buyer.
</label>
<div className="buttons">
<a href="#" className="btn btn-primary">Post Your Job</a>
<a href="#" className="btn button-cancle">Cancle</a>
</div>
</div>
</div>
<div className="col-md-3">
<div className="section quick-rules">
<span className="tr-title">Quick Rules</span>
<p>Posting an ad on <a href="#">Seeker.com</a> is free! However, all post must follow our rules:</p>
<ul className="tr-list">
<li>Make sure you post in the correct category.</li>
<li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
<li>Do not upload pictures with watermarks.</li>
<li>Do not post ads containing multiple items unless it's a package deal.</li>
<li>Do not put your email or phone numbers in the title or description.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
      <Footer />
    </div>
  );
}

export default JobPost;
