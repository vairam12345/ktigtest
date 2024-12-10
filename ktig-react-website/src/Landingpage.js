
function Landingpage() {
    return (
  <div>
  
  
  <div className="container-fluid ktig_services_page position-relative p-0">
      <div className="w-100 me-3 top_head">
          <div className="top_head align-items-center"></div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
              {/* <h1 className="text-primary"><img src="assets/img/ktig_logo.png" alt="KTIG" /></h1> */}
              {/* <img src="assets/img/logo/ktig_logo.png" alt="KTIG" style={{ maxHeight:'210px' }} /> */}
              <div className="ktig-container" style={{ textAlign: 'center' }}>
                          <h1 className="text-primary">
                              <img
                                src="assets/img/logo/ktignewremove.png"
                                 alt="KTIG"
                                 style={{ maxHeight: '124px' }}
                                    />
                                   </h1>
                                   <p
                                    className="custom-white-text"
                                    style={{
                                     marginTop: '-47px',
                                     fontSize: '12px',
                                     marginLeft: '166px',
                                     color: 'white',
                                     fontFamily: "'Great Vibes', cursive", // Apply the cursive font
                                       }}
                                        >
                                      Rising Beyond Limits... </p>
                                              </div>
            
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav py-0">
                  <a href="/" className="nav-item nav-link active">Home</a>
                  <a href="Aboutpage" className="nav-item nav-link">About</a>                        
                  <div className="nav-item dropdown">
                              <a href="ktig_services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                             
                           <div className="dropdown-menu m-0 custom-dropdown-background">
                            <a href="ktig_services" className="dropdown-item">KTIG Groups</a>    
                            <a href="Bankingsolution" className="dropdown-item">Bankingsolution</a> 
                            <a href="Financesolution" className="dropdown-item">Finance Solution</a>   
                            <a href="Itsolution" className="dropdown-item">IT Solution</a> 
                            <a href="Nonitsolution" className="dropdown-item">Non-IT Solution</a>   
                            <a href="SaleEcommerce" className="dropdown-item">Sales & E-commerce</a>  
                            <a href="Training&coaching" className="dropdown-item">Training & Coaching</a>
                            <a href="Marketing" className="dropdown-item">Marketing</a>   
                        </div>
                        </div>
                  <a href="Achievement" className="nav-item nav-link">Achivement</a>
                  {/* <a href="" class="nav-item nav-link">Investment</a> */}

                  <a href="Blogpage" className="nav-item nav-link">Blog</a>
                  <a href="Contactpage" className="nav-item nav-link">Contact</a>
              </div>
              <div className="d-none d-xl-flex me-3">
                  <div className="d-flex flex-column ps-3 pe-3 mb-3">
                      <span className="text-body">Help Desk : + 044 4567890</span>
                      <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                   <a href="tel:+4733378901"><div className="d-flex align-items-center justify-content-center ">
                      <a className="btn btn-secondary me-3" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-secondary me-3" href=""><i className="fab fa fa-twitter"></i></a>
                      <a className="btn btn-secondary me-3" href=""><i className="fab fa-instagram"></i></a>
                      <a className="btn btn-secondary me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div></a>
                  </div>
              </div>
                 </div>
      </nav>
  
  
     
  </div>
      <div className="container-fluid ktig_services_page bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: "900px" }}>                    
              <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>                        
                  <li className="breadcrumb-item active text-primary">services</li>
              </ol>
              <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Future of Excellence</h4>    
          </div>
      </div>
  
  <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
              <div className="modal-header">
                  <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex align-items-center">
                  <div className="input-group w-75 mx-auto d-flex">
                      <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                      <span id="search-icon-1" className="input-group-text btn border p-3"><i className="fa fa-search text-white"></i></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  
  
  <div className="overlaygradient ktig_services_page container-fluid feature py-5">
      <div className="container py-6 ">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>                    
              <h1 className="display-3 text-white text-capitalize mb-3">CHOOSE YOUR BUSINESS INDUSTRY</h1>
    <p className="text-white">KTIG provides services which are designed to expedite <br />the use of technology for end users.</p>
          </div>
          <div className="row g-4 col-lg-9 m-auto ">
              <div className=" col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.2s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_1 fa-3x"></i></div>
        <a href="#" className="btn text-white">Banking</a>
                  </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.4s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_2 fa-3x"></i></div>
                     <a href="#" className="btn text-white">Finance</a>
                  </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.6s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_3 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Investment</a>
                  </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_4 fa-3x"></i></div>
                      <a href="#" className="btn text-white">IT-Sector</a>
                  </div>
              </div>
     <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_5 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Non-IT Sector</a>
                  </div>
              </div>
     <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_6 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Sales</a>
                  </div>
              </div>
     <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon"><i className="it_icons feat_items_7 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Education</a>
                  </div>
              </div>
     <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon "><i className="it_icons feat_items_8 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Training</a>
                  </div>
              </div>
     <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon"><i className="it_icons feat_items_9 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Insurance</a>
                  </div>
              </div>
     <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
                  <div className="feature-item p-4">
                      <div className="feature-icon"><i className="it_icons feat_items_10 fa-3x"></i></div>
                      <a href="#" className="btn text-white">Marketing</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  

  <div className="container-fluid ktig_services_page kti_details_1 overflow-hidden py-5">
      <div className="container">
          <div className="row col-xl-9 m-auto g-5">
              <div className="text-center mt-0 mx-auto wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>                    
                  <h1 className="display-3 text-capitalize text-white">Kovai Tech India Group</h1>
                  <p className="mb-4 text-white text-center service_caption">Global Link</p>
                 </div>                   
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                  <div className="about-item">                          
                     
                      <p className="mb-4 text-white text-right" style={{fontFamily:'poppins'}}>Kovai Tech India Group of Company is a dynamic conglomerate that brings together diverse expertise across vital sectors to drive innovation and societal progress. With a robust presence in financial services, education, information technology, and social development.
                     </p>		
                </div>
              </div>
     <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="about-img h-100">
                      <div className="about-img_border"></div>
                      <img src="assets/img/event/ktig_service.jpg" className="img-fluid w-100 m-auto d-block"  alt="service" />                           
                  </div>
              </div>
          </div>
      </div>
  </div>
  
   <div className="overlaygradient ktig_services_page kti_details_2 container-fluid feature py-5">
      <div className="container py-6 ">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"style={{ maxWidth: "800px" }}>                    
              <h1 className="display-3 text-white text-center text-capitalize mb-3">KTIG Business Group</h1>
  </div>
      <div className="col-lg-6 col-xl-8 m-auto wow fadeInRight" data-wow-delay="0.2s" style={{
      visibility: "visible",
      animationDelay: "0.2s",
      animationName: "fadeInRight",
    }}>
          <div className="service-item rounded p-4 mb-4">
              <div className="row">
                  <div className="col-12">
                      <div className="d-flex">
                          <div className="pe-4">
                              <div className="service-btn"><i className="fas fa-assistive-listening-systems text-white fa-2x"></i></div>
                          </div>
                          <div className="service-content">
                              <a href="#" className="h4 text-white d-inline-block mb-3">Kovai Tech Member Chamber</a>
                              <p className="small_caption">Supporting | Social service | Trust</p>
                              <p className="mb-0 text-white"><strong>Kovai Tech Members Chamber</strong> stands as an elite business networking hub that facilitates social services and growth opportunities among industry leaders, offering state-of-the-art conference facilities and exclusive member services in a prestigious setting.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="service-item rounded p-4 mb-4">
              <div className="row">
                  <div className="col-12">
                      <div className="d-flex">
                          <div className="pe-4">
                              <div className="service-btn"><i className="fas fa-recycle text-white fa-2x"></i></div>
                          </div>
                          <div className="service-content">
                              <a href="#" className="h4  text-white d-inline-block mb-3">BNR Cogniitec Private Limited</a>
                              <p className="small_caption">ITES Service | Digital Marketing | Branding Services</p>
                              <p className="mb-0 text-white"><strong>BNR CogniItec Private Limited</strong> emerges as a pioneering technology solutions provider, specializing in artificial intelligence, machine learning, and custom software development, serving clients across global markets with innovative digital transformation solutions.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="service-item rounded p-4 mb-0">
              <div className="row">
                  <div className="col-12">
                      <div className="d-flex">
                          <div className="pe-4">
                              <div className="service-btn"><i className="fas fa-project-diagram text-white fa-2x"></i></div>
                          </div>
                          <div className="service-content">
                              <a href="#" className="h4 text-white d-inline-block mb-3">BR Academy</a>
                              <p className="small_caption">Educational Training | Corporate Event | Campaigns</p>
                              <p className="mb-0 text-white"><strong>BR Academy Private Limited </strong> shines as a premier educational institution focusing on technical and professional development, offering industry-aligned courses and certification programs that bridge the gap between academic learning and industry requirements.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
      </div>
  </div>
  
  
  <div className="container-fluid about overflow-hidden py-5">
      <div className="container">
          <div className="row col-xl-9 m-auto g-5">
             
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                  <div className="about-item">
                     
                      <h1 className="display-3 mb-4 text-white">Security System</h1>
                      <p className="mb-4 text-white" style={{fontFamily:'poppins'}}>Physical security is the foundation of asset protection, which is why we offer a comprehensive, multi-layered security system that combines cutting-edge technology with time-tested approaches. The basic infrastructure consists of access control systems with biometric verification, smart card readers, and turnstile integration, all administered by a centralized command center. We also use perimeter security devices such as motion sensors, infrared barriers, and automated alarm systems to inform security staff immediately.
                     </p>
        <p className="mb-4 text-white"style={{fontFamily:'poppins'}}>Our digital security system augments the physical infrastructure by including cybersecurity safeguards to protect against both external and internal threats. We conduct frequent system audits, maintenance schedules, and continual updates to ensure peak performance and adaptability to emerging security threats. Our specialized staff of security professionals provides 24-hour technical help and a quick reaction to any security concerns.
                     </p>                           
                      
                     
                  </div>
              </div>
     <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="about-img rounded h-100 d-flex">
                      <img src="assets/img/securitysystem.png" className="img-fluid rounded w-100 m-auto d-block" alt="" />                           
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  
  <div className="container-fluid footer wow fadeIn" data-wow-delay="0.2s">
  
  <section className="footervideobg" id="section_1">
      <div className="footer-section-overlay"></div>
      <div className="video-wrap">
      <video autoPlay loop muted className="custom-video" poster="">
          <source src="assets/video/footerbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
  
             </div>
          </section>
    
      <div className="content container py-5">
  
          <div className="row g-5 align-items-center">
              <div className="col-lg-12">
                  <div className="position-relative mb-3 mx-auto py3">
      {/* <img src="assets/img/ktig_white.png" alt="KTIG" /> */}
      <img src="assets/img/logo/ktig_white2.png" alt="KTIG" style={{backgroundColor:'none'}} />

      </div>
              </div>                    
          </div>
  
          <div className="row col-lg-11 m-auto g-5">
                <div className="col-md-6 col-lg-6 col-xl-2">
                  <div className="footer-item d-flex flex-column">
                      {/* <h4 className="text-true-white font-m mb-2">About Us</h4>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a> */}
                       <h4 className="text-true-white font-m mb-2">About Us</h4>
                                      <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose KTIG</a>
                                      <a href="Ktmc" className="font-s"><i className="fas fa-angle-right me-2"></i> About KTMC</a>
                                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Goal and Rules</a>
                                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                  </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                  <div className="footer-item d-flex flex-column">
                      <h4 className="text-true-white font-m mb-2">TRAINING</h4>
                      <a href="Technicaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Technical Training</a>
                       <a href="Professionaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i>  Professional Training</a>
                        <a href="Corporatetraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Training</a>
                  </div>
              </div>


              <div className="col-md-6 col-lg-6 col-xl-2">
                  <div className="footer-item d-flex flex-column">
                      <h4 className="text-true-white font-m mb-2">SERVICES</h4>
                                     <a href="Busineesdevelopment" className="font-s"><i className="fas fa-angle-right me-2"></i>Business Developemnt</a>
                                      <a href="Branding" className="font-s"><i className="fas fa-angle-right me-2"></i> Branding</a>
                                      <a href="Bankingandfinance" className="font-s"><i className="fas fa-angle-right me-2"></i> Banking/Finance</a>
                                      <a href="Digitalmarketing" className="font-s"><i className="fas fa-angle-right me-2"></i> Digital Marketing</a>
                                      <a href="Itites" className="font-s"><i className="fas fa-angle-right me-2"></i> IT/ITES Service</a>
                                      <a href="saledandpromotion" className="font-s"><i className="fas fa-angle-right me-2"></i> Sales/ Promotions</a>
                  </div>
              </div>
       <div className="col-md-6 col-lg-6 col-xl-2">
                  <div className="footer-item d-flex flex-column">
                      <h4 className="text-true-white font-m mb-2">Achievement</h4>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
                      <a href="Contactpage" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                  </div>
              </div>
      
       <div className="col-md-6 col-lg-6 col-xl-2">
                  <div className="footer-item d-flex flex-column">
                      <h4 className="text-true-white font-m mb-2">Recent Events/News</h4>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                  </div>
              </div>
            
              <div className="col-md-6 col-lg-6 col-xl-2">
                  <div className="footer-item d-flex flex-column">
                      <h4 className="text-true-white font-m mb-2">Contact Info</h4>
                                      <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Meet KTIG</a>
                                      <a href="Corporateoffice" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Office</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Business Hours</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Privacy Policies</a> 
                  </div>
              </div>
          </div>
  
   <div className="row g-5 mb-5 d-block mt-10 align-items-center">                    
              <div className="col-lg-12 footer-social-icons">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-center">
                      <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa fa-twitter"></i></a>
                      <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-instagram"></i></a>
                      <a className="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>					
              <div className="col-md-6 d-block m-auto text-center mt-3">
                  <span className="text-copyright"><a href="#" className="text-copyright">Kovai Tech India Group <i className="fas fa-copyright text-light"></i></a> All right reserved.</span>
              </div>                   
          
          </div>				
  
      </div>
  
  
  
  </div>
  
  
  
  <a href="#" className="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   
  
  
  
  </div>
    );
  }
  
  export default Landingpage;
  