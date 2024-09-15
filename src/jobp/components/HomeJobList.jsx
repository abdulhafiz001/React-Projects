import React from 'react';

function HomeJobList() {
  return (
    <div>
      <div className="page">
        <div className="container">
          <div className="section category-items job-category-items text-center">
            <ul className="category-list">
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/1.png" alt="Accounting/Finance" className="img-fluid" /></div>
                  <span className="category-title">Accounting/Finance</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="Education/Training" className="img-fluid" /></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/3.png" alt="Engineer/Architects" className="img-fluid" /></div>
                  <span className="category-title">Engineer/Architects</span>
                  <span className="category-quantity">(212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/4.png" alt="Garments/Textile" className="img-fluid" /></div>
                  <span className="category-title">Garments/Textile</span>
                  <span className="category-quantity">(972)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/5.png" alt="HR/Org. Development" className="img-fluid" /></div>
                  <span className="category-title">HR/Org. Development</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/6.png" alt="Design/Creative" className="img-fluid" /></div>
                  <span className="category-title">Design/Creative</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/7.png" alt="Research/Consultancy" className="img-fluid" /></div>
                  <span className="category-title">Research/Consultancy</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/8.png" alt="Medical/Pharma" className="img-fluid" /></div>
                  <span className="category-title">Medical/Pharma</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/9.png" alt="Music & Arts" className="img-fluid" /></div>
                  <span className="category-title">Music & Arts</span>
                  <span className="category-quantity">(212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/10.png" alt="Marketing/Sales" className="img-fluid" /></div>
                  <span className="category-title">Marketing/Sales</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/11.png" alt="Production/Operation" className="img-fluid" /></div>
                  <span className="category-title">Production/Operation</span>
                  <span className="category-quantity">(124)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/12.png" alt="Miscellaneous" className="img-fluid" /></div>
                  <span className="category-title">Miscellaneous</span>
                  <span className="category-quantity">(972)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="section latest-jobs-ads">
            <div className="section-title tab-manu">
              <h4>Latest Jobs</h4>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#hot-jobs" data-toggle="tab">Hot Jobs</a></li>
                <li role="presentation"><a href="#recent-jobs" data-toggle="tab">Recent Jobs</a></li>
                <li role="presentation"><a className="active" href="#popular-jobs" data-toggle="tab">Popular Jobs</a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane fade in" id="hot-jobs">
                { /* Hot Jobs Items Here */ }
              </div>
              <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
                { /* Recent Jobs Items Here */ }
              </div>
              <div role="tabpanel" className="tab-pane fade in active show" id="popular-jobs">
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/1.png" alt="Project Manager" className="img-fluid" /></a>
                      </div>
                    </div>
                    <div className="ad-info">
                      <span><a href="job-details.html" className="title">Project Manager</a> @ <a href="#">Dominos Pizza</a></span>
                      <div className="ad-meta">
                        <ul>
                          <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US </a></li>
                          <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Full Time</a></li>
                          <li><a href="#"><i className="fa fa-money" aria-hidden="true"></i>$25,000 - $35,000</a></li>
                          <li><a href="#"><i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>
                {/* Other job ad items can be added here similarly */}
              </div>
            </div>
          </div>
          
          {/* <div className="ad-section text-center">
            <a href="#"><img src="images/ads/3.jpg" alt="Ad" className="img-fluid" /></a>
          </div> */}

          {/* <div className="section workshop-training">
            <div className="section-title">
              <h4>Workshop Training</h4>
              <a href="#" className="btn btn-primary">See all</a>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="workshop">
                  <img src="images/job/5.png" alt="Business Process Management Training" className="img-fluid" />
                  <h3><a href="#">Business Process Management Training</a></h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon Ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated"><a href="#">7 Jan 10:10 pm</a></span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#"><i className="fa fa-map-marker"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="workshop">
                  <img src="images/job/6.png" alt="Employee Motivation and Engagement" className="img-fluid" />
                  <h3><a href="#">Employee Motivation and Engagement</a></h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon Ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated"><a href="#">7 Jan 10:10 pm</a></span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#"><i className="fa fa-map-marker"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section cta cta-two text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-jobs">
                    <img src="images/icon/31.png" alt="Live Jobs" className="img-fluid" />
                  </div>
                  <h3>3,412</h3>
                  <h4>Live Jobs</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-company">
                    <img src="images/icon/32.png" alt="Total Company" className="img-fluid" />
                  </div>
                  <h3>12,043</h3>
                  <h4>Total Company</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-candidate">
                    <img src="images/icon/33.png" alt="Total Candidate" className="img-fluid" />
                  </div>
                  <h3>5,798,298</h3>
                  <h4>Total Candidate</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeJobList;
