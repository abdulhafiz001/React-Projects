import React from 'react';
import Header from './components/header';

function JobDetails() {
  return (
    <div>
      <Header />
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="breadcrumb-logo">
              <img src="/images/others/company-logo.png" alt="Logo" className="img-fluid" />
            </div>
            <div className="page-title">
              <h1>Graphics Designer @ Google Inc</h1>
            </div>
            <ul className="tr-list job-meta list-inline">
              <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i>Full Time</li>
              <li><i className="fa fa-money" aria-hidden="true"></i>$25,000 - $35,000</li>
              <li><i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</li>
              <li><i className="fa fa-hourglass-start" aria-hidden="true"></i>Application Deadline: Jun 27, 2017</li>
            </ul>
            <div className="buttons">
              <a href="#" className="btn btn-primary">
                <i className="fa fa-briefcase" aria-hidden="true"></i>Apply For This Job
              </a>
              <a href="#" className="btn button-bookmark">
                <i className="fa fa-bookmark" aria-hidden="true"></i>Bookmark
              </a>
              <span className="btn button-share">
                <i className="fa fa-share-alt" aria-hidden="true"></i>Share
                <span>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="job-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="job-summary section">
                <span className="tr-title">Job Summary</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <br />
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <span>Key Responsibilities:</span>
                <p>
                  Execute all visual design stages of website design from concept to final hand-off to development. Create print advertisements, social media advertisements, client collateral & digital resizes according to Client demands. With direction of the Creative team, input into new design ideas for client branding.
                </p>
                <span>Minimum Requirements:</span>
                <ul className="tr-list">
                  <li>Bachelor's Degree</li>
                  <li>2-5 years of relevant experience (or equivalent educational experience)</li>
                  <li>Experience developing in Wordpress and other web design platforms</li>
                  <li>HTML, CSS, and JavaScript experience a plus</li>
                  <li>In-depth knowledge & technical experience of Photoshop, Illustrator, InDesign, Adobe PDF, Keynote, PowerPoint, Microsoft Word & Excel</li>
                  <li>Exceptional eye for design, deep understanding of creativity, and ability to recognize fresh approaches to Advertising</li>
                  <li>Must be fluent in Spanish; working written and spoken proficiency</li>
                  <li>All applicants must be eligible to work in the U.S. without sponsorship</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="tr-sidebar">
                <div className="widget-area">
                  <div className="widget short-info">
                    <h3 className="widget_title">Short Info</h3>
                    <ul className="tr-list">
                      <li className="media">
                        <div className="pull-left">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <div className="media-body"><span>Published:</span>1 Day ago</div>
                      </li>
                      <li className="media">
                        <div className="pull-left"><i className="fa fa-user-plus" aria-hidden="true"></i></div>
                        <div className="media-body"><span>Job poster:</span>Lance Ladaga</div>
                      </li>
                      <li className="media">
                        <div className="pull-left"><i className="fa fa-industry" aria-hidden="true"></i></div>
                        <div className="media-body"><span>Industry:</span>Marketing and Advertising</div>
                      </li>
                      <li className="media">
                        <div className="pull-left"><i className="fa fa-line-chart" aria-hidden="true"></i></div>
                        <div className="media-body"><span>Experience:</span>Entry level</div>
                      </li>
                      <li className="media">
                        <div className="pull-left"><i className="fa fa-key" aria-hidden="true"></i></div>
                        <div className="media-body"><span>Job function:</span>Advertising, Design, Art/Creative</div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget cmpany-info">
                    <h3 className="widget_title">Company Info</h3>
                    <span>Google Inc</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="tr-list">
                      <li><span>Address:</span> London, UK</li>
                      <li><span>Company Size:</span> 2k Employees</li>
                      <li><span>Industry:</span> <a href="#">Technology</a></li>
                      <li><span>Phone:</span> +1234 567 8910</li>
                      <li>
                        <span>Email:</span> <a href="mailto:emailprotected">[email&#160;protected]</a>
                      </li>
                      <li><span>Website:</span> <a href="#">www.dropbox.com</a></li>
                    </ul>
                    <div className="widget-social">
                      <ul className="tr-list">
                        <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default JobDetails;
