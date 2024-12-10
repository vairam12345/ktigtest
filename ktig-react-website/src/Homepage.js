









// import testimonialImage from '../src/images/testimonial-1.jpg'; // Adjust the path if needed


// import './HomePage.css'

// import CountUp from "react-countup";

// import React from 'react';
// import  { useState, useEffect } from "react";

// function Mainpage() {


//     const [currentDate, setCurrentDate] = useState("");

//     useEffect(() => {
//       const updateDate = () => {
//         const date = new Date();
//         const options = { day: "numeric", month: "short", year: "numeric" };
//         const formattedDate = date.toLocaleDateString("en-US", options);
//         setCurrentDate(formattedDate);
//       };
  
//       // Update the date every second
//       updateDate();
//       const interval = setInterval(updateDate, 1000);
  
//       // Cleanup interval on component unmount
//       return () => clearInterval(interval);
//     }, []);


//         const sliderItems = [
            
//             "Financial Wisdom, Educational Excellence",
//             "Beyond Finance, Beyond Education",
//             "Smart Money, Brighter Futures",
//         ];

    
//     return (
//   <div>
  
  
//           <div className="container-fluid position-relative p-0">
//               <div className="w-100 me-3 top_head">
//                   <div className="top_head align-items-center"></div>
//               </div>
//               <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
//                   <a href="" className="navbar-brand p-0">
//                       <h1 className="text-primary"><img src="assets/img/logo/ktig_logo.png" alt="KTIG" /></h1>                  
//                   </a>
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                       <span className="fa fa-bars"></span>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarCollapse">
//                       <div className="navbar-nav py-0">
//                           <a href="/" className="nav-item nav-link active">Home</a>
//                           <a href="Aboutpage" className="nav-item nav-link">About</a>                        
//                           <div className="nav-item dropdown">
//                               <a href="ktig_services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
//                               {/* <div className="dropdown-menu m-0">
//                                   <a href="ktig_services.html" className="dropdown-item">KTIG Services</a>
//                                   <a href="ktmc_services.html" className="dropdown-item">KTMC</a>
//                                   <a href="bnr_cogniitec_services.html" className="dropdown-item">BNR Cogniitec</a>
//                                   <a href="br_academy.html" className="dropdown-item">BR Academy</a>  
//                            </div> */}
//                            <div className="dropdown-menu m-0 custom-dropdown-background">
//                             <a href="ktig_services" className="dropdown-item">KTIG Groups</a>    
//                             <a href="Bankingsolution" className="dropdown-item">Bankingsolution</a> 
//                             <a href="Financesolution" className="dropdown-item">Finance Solution</a>   
//                             <a href="Itsolution" className="dropdown-item">IT Solution</a> 
//                             <a href="Nonitsolution" className="dropdown-item">Non-IT Solution</a>   
//                             <a href="SaleEcommerce" className="dropdown-item">Sales & E-commerce</a>  
//                             <a href="Training&coaching" className="dropdown-item">Training & Coaching</a>
//                             <a href="Marketing" className="dropdown-item">Marketing</a>   
//                         </div>

//                           </div>
//                           <a href="Achievement" className="nav-item nav-link">Achivement</a>
//                           <a href="" class="nav-item nav-link">Investment</a>

//                           <a href="Blogpage" className="nav-item nav-link">Blog</a>
//                           <a href="Contactpage" className="nav-item nav-link">Contact</a>
//                       </div>
//                       <div className="d-none d-xl-flex me-3">
//                           <div className="d-flex flex-column ps-3 pe-3 mb-3 text-white">
//                               <span className="text-body text-white ">Email: helpdesk@ktig.com</span>
//                               <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-white "></i></button>
//                            <a href="tel:+4733378901"><div className="d-flex align-items-center justify-content-center ">
//                               <a className="btn btn-secondary me-3" href=""><i className="fab fa-facebook-f text-white "></i></a>
//                               <a className="btn btn-secondary me-3" href=""><i className="fab fa fa-twitter text-white "></i></a>
//                               <a className="btn btn-secondary me-3" href=""><i className="fab fa-instagram text-white "></i></a>
//                               <a className="btn btn-secondary me-0" href=""><i className="fab fa-linkedin-in text-white"></i></a>
//                           </div></a>
//                           </div>
//                       </div>
//                   </div>
//               </nav>
              
//               <div className="single-hero-slide d-flex align-items-center justify-content-center" style={{ paddingTop: '11rem', position: 'relative', height:'30rem' }}>              
//     {/* Background Video */}
//     <div style={{ height: '500px', width: '100%', overflow: 'hidden', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
//         <video
//             autoPlay
//             loop
//             muted
//             style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover', // Ensures the video scales properly
//             }}
//             poster=""
//         >
//             <source src="assets/video/pexels-2022395.mp4" type="video/mp4" />
//         </video>
//     </div>

//     {/* Text Content */}
// {/* 
//     <div className="text-slider">
//     <div className="row">
//         <div className="col-12">
//             <div className="hero-slides-content text-center">
//                 <div className="slider-wrapper">
//                     <h2 className="slider-item">
//                         Beyond <br />Finance, Beyond Education
//                         <span>Beyond <br />Finance, Beyond Education</span>
//                     </h2>

//                     <h2 className="slider-item">
//                         Financial Wisdom, <br /> Educational Excellence
//                     </h2>

//                     <h6 className="slider-item">
//                         Transforming Lives Through Knowledge & Security
//                     </h6>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div> */}
//    <div className="text-slider">
//       <div className="row">
//         <div className="col-12">
//           <div className="hero-slides-content text-center">
//             <div className="slider-wrapper">
//               {sliderItems.map((item, index) => (
//                 <h2 key={index} className="slider-item">
//                   {item.split("<br />").map((line, lineIndex) => (
//                     <React.Fragment key={lineIndex}>
//                       {line}
//                       {lineIndex !== item.split("<br />").length - 1 && <br />}
//                     </React.Fragment>
//                   ))}
//                 </h2>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>



//     </div>



//           </div>
//           <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//               <div className="modal-dialog modal-fullscreen">
//                   <div className="modal-content rounded-0">
//                       <div className="col-lg-12 m-auto modal-header justify-content-lg-end">
//                       <button type="button" className="btn-close justify-content-lg-end textssss" data-bs-dismiss="modal" aria-label="Close"></button>
//                       </div>
//                       <div className="col-lg-9 m-auto modal-header align-items-center text-center">
//                           <h4 className="modal-title mb-0 m-auto text-white" id="exampleModalLabel">Search by keyword</h4>                        
//                       </div>
//                       <div className="modal-body align-items-center">
//                           <div className="input-group w-75 mx-auto d-flex">
//                               <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
//                               <span id="search-icon-1" className="input-group-text btn border p-3"><i className="fa fa-search text-white"></i></span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
  
  
  
  
//           <div className="overlaygradient container-fluid feature py-5">
//               <div className="container py-6 ">
//                   <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '880px' }}
//                   >                    
//                       <h1 className="display-3 text-white text-capitalize mb-3">CHOOSE YOUR BUSINESS INDUSTRY</h1>
//                       <p className="text-white">KTIG provides services which are designed to expedite <br />the use of technology for end users.</p>
//                   </div>
//                   <div className="row g-4 col-lg-9 m-auto ">
//                       <div className=" col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.2s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_1 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Banking</a>
//                           </div>
//                       </div>
//                       <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.4s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_2 fa-3x"></i></div>
//                              <a href="#" className="btn text-white">Finance</a>
//                           </div>
//                       </div>
//                       <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.6s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_3 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Investment</a>
//                           </div>
//                       </div>
//                       <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_4 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">IT-Sector</a>
//                           </div>
//                       </div>
//                        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_5 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Non-IT Sector</a>
//                           </div>
//                       </div>
//                        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_6 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Sales</a>
//                           </div>
//                       </div>
//                        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon"><i className="it_icons feat_items_7 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Education</a>
//                           </div>
//                       </div>
//                        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon "><i className="it_icons feat_items_8 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Training</a>
//                           </div>
//                       </div>
//                        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon"><i className="it_icons feat_items_9 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Insurance</a>
//                           </div>
//                       </div>
//                        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp m-auto" data-wow-delay="0.8s">
//                           <div className="feature-item p-4">
//                               <div className="feature-icon"><i className="it_icons feat_items_10 fa-3x"></i></div>
//                               <a href="#" className="btn text-white">Marketing</a>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//              <div class="container-fluid about overflow-hidden py-5">
//                     <div class="container py-5">
//                         <div class="row g-5">
//                         <div class="col-xl-9 m-auto">
//                             <div class="about-item text-center">
//                             <h1 class="display-3 text-white mb-3">About Us</h1>
//                             <p class="mb-4 text-white">
//                                 Kovai Tech India Group of Company is a dynamic conglomerate that
//                                 brings together diverse expertise across vital sectors to drive
//                                 innovation and societal progress. With a robust presence in
//                                 financial services, education, information technology, and social
//                                 development.
//                             </p>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="container-fluid counter py-5">
//       <div className="container py-5">
//         <div className="row col-xl-9 m-auto g-5">
//           {/* Projects Counter */}
//           <div className="col-md-6 col-lg-6 col-xl-3">
//             <div className="counter-item">
//               <div className="counter-counting">
//                 <span className="text-white fs-2 fw-bold">
//                   <CountUp end={257} duration={2.5} />
//                 </span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <div className="counter-item-icon mx-auto">
//                 <h4 className="text-white">Projects</h4>
                
//                 <i className="fas fa-3x text-white">@</i>
//               </div>
//             </div>
//           </div>

//           {/* Clients Counter */}
//           <div className="col-md-6 col-lg-6 col-xl-3">
//             <div className="counter-item">
//               <div className="counter-counting">
//                 <span className="text-white fs-2 fw-bold">
//                   <CountUp end={75} duration={2.5} />
//                 </span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <div className="counter-item-icon mx-auto">
//                 <h4 className="text-white">Clients</h4>
//                 <i className="fas fa-3x text-white">Nos</i>
//               </div>
//             </div>
//           </div>

//           {/* Revenue Counter */}
//           <div className="col-md-6 col-lg-6 col-xl-3">
//             <div className="counter-item">
//               <div className="counter-counting">
//                 <span className="text-white fs-2 fw-bold">
//                   <CountUp end={93.4} duration={2.5} decimals={1} />
//                 </span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <div className="counter-item-icon mx-auto">
//                 <h4 className="text-white">Revenue</h4>
//                 <i className="fas fa-3x text-white">%</i>
//               </div>
//             </div>
//           </div>

//           {/* Reviews Counter */}
//           <div className="col-md-6 col-lg-6 col-xl-3">
//             <div className="counter-item">
//               <div className="counter-counting">
//                 <span className="text-white fs-2 fw-bold">
//                   <CountUp end={87.2} duration={2.5} decimals={1} />
//                 </span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <div className="counter-item-icon mx-auto">
//                 <h4 className="text-white">Reviews</h4>
//                 <i className="fas fa-3x text-white">%</i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//           <div className="container-fluid service bg-light overflow-hidden p-0">
//               <div className="clientslide wow fadeInUp">
              
//               <div className="container-fluid p-0">
//                   <div className="slider">
//                       <div className="slide-track">
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/crescent logo.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/AIIRMYCART.png" height="100" width="250" alt="" />
//                           </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/edilink.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/DFLv3.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/srbt.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/logo_dark.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/logoa-1.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/mz account.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src={"assets/img/clients/Nantech - Logo.png"} height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/TK MART LOGO.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/NENE LOGO PNG.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/VK Logo PNG.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/royal shelter.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
//                           <div className="slide">
//                               <div className="slide_itemlist">
//                               <img src="assets/img/clients/nouveaux.png" height="100" width="250" alt="" />
//                               </div>
//                           </div>
                          
//                       </div>
//                   </div>
//                   </div>
              
//               </div>
//               </div>
  
  
//               <div className="container-fluid about overflow-hidden py-5">
//   <div className="container py-5">
//     <div className="row col-xl-9 m-auto g-5">
      
//       <div className="col-xl-6">
//         <div className="about-item">
//           <h1 className="display-3 mb-4 text-white">Security System</h1>
//           <p className="mb-4 text-white mytext">
//             Physical security is the foundation of asset protection, which is why we offer a comprehensive, multi-layered security system that combines cutting-edge technology with time-tested approaches. The basic infrastructure consists of access control systems with biometric verification, smart card readers, and turnstile integration, all administered by a centralized command center.
//           </p>
//           <p className="mb-4 text-white">
//             Our digital security system augments the physical infrastructure by including cybersecurity safeguards to protect against both external and internal threats. We conduct frequent system audits, maintenance schedules, and continual updates to ensure peak performance and adaptability to emerging security threats.
//           </p>
//         </div>
//       </div>
      
//       <div className="col-xl-6">
//         <div className="about-img rounded h-100 d-flex">
//           <img src="assets/img/securitysystem.png" className="img-fluid rounded w-100 m-auto d-block" alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
            
//             <div className="container-fluid blog pb-5">
//                 <div className="container pb-5">
//                     <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>                    
//                         <h1 className="display-3 text-white text-capitalize mb-3">OUR TRAINING AND DIVISION</h1>
//                     </div>
//                     <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">

//                     <div className="row g-4 justify-content-center">
//                         <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
//                             <div className="blog-item">
//                                 <div className="blog-img">
//                                     <img src="assets/img/event/testimonial-1.jpg" className="img-fluid rounded-top w-100" style={{width: '100px',height: '300px',}} alt="" />
//                                 </div>
//                                 <div className="blog-content rounded-bottom p-4">
//                                     <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
//                                     <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
//                             <div className="blog-item">
//                                 <div className="blog-img">
//                                 <img src="assets/img/event/testimonial-2.jpg" className="img-fluid rounded-top w-100" style={{width: '100px',height: '300px'}} alt="" />
//     =                              </div>
//                                 <div className="blog-content rounded-bottom p-4">
//                                     <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
//                                     <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
                                    
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
//                             <div className="blog-item">
//                                 <div className="blog-img">
//                                 <img src="assets/img/event/testimonial-3.jpg" className="img-fluid rounded-top w-100" style={{width: '100px',height: '300px'}} alt="" />
//                                 </div>
//                                 <div className="blog-content rounded-bottom p-4">
//                                     <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
//                                     <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>

//                 </div>
//             </div>
//   {/* Testimonial Part End */}
  
  
//           <div className="container-fluid blog pb-5">
//               <div className="container pb-5">
//                   <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>                    
//                       <h1 className="display-3 text-white text-capitalize mb-3">Latest Blog & News</h1>
//                   </div>
//                   <div className="row g-4 justify-content-center">
//                       <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
//                           <div className="blog-item">
//                               <div className="blog-img">
//                                   <img src="assets/img/blog/blog-1.jpg" className="img-fluid rounded-top w-100" alt="" />
//                                     <div className="blog-date px-4 py-2">
//                                     <i className="fa fa-calendar-alt me-1"></i> {currentDate}
//                                     </div>
//                               </div>
//                               <div className="blog-content rounded-bottom p-4">
//                                   <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
//                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
//                                   <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
//                               </div>
//                           </div>
//                       </div>
//                       <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
//                           <div className="blog-item">
//                               <div className="blog-img">
//                                   <img src="assets/img/blog/blog-2.jpg" className="img-fluid rounded-top w-100" alt="" />
//                                   <div className="blog-date px-4 py-2">
//                                     <i className="fa fa-calendar-alt me-1"></i> {currentDate}
//                                     </div>
//                               </div>
//                               <div className="blog-content rounded-bottom p-4">
//                                   <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
//                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
//                                   <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
//                               </div>
//                           </div>
//                       </div>
//                       <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
//                           <div className="blog-item">
//                               <div className="blog-img">
//                                   <img src="assets/img/blog/blog-3.jpg" className="img-fluid rounded-top w-100" alt=""/>
//                                   {/* <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1"></i> Nov 19 2024</div> */}
//                                 <div className="blog-date px-4 py-2">
//                                     <i className="fa fa-calendar-alt me-1"></i> {currentDate}
//                                     </div>
//                               </div>
//                               <div className="blog-content rounded-bottom p-4">
//                                   <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
//                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
//                                   <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
  
//           {/* <div className="container-fluid contact py-5">
//               <div className="container py-5">
//                   <div className="row group_contact g-5">
//                       <div className="col-lg-10 m-auto h-100 wow fadeInUp" data-wow-delay="0.2s">
//                           <div className="text-center mx-auto pb-5" style={{maxWidth:'800px'}}>                            
//                               <h1 className="display-3 text-white text-capitalize mb-3">Get In Touch</h1>
//                               <p className="mb-0 text-white">Contact our skilled team today or email us at to learn how we can design tailored solutions for your unique requirements.</p>
//                           </div>
//                           <form>
//                               <div className="row g-4">
//                               <div className="form_left btn-md-square rounded-circle"><i className="fas fa-map-marker-alt fa-2x"></i></div>
//                                   <div className="col-lg-12 col-xl-6">
//                                       <div className="form-floating">
//                                           <input type="text" className="form-control border-1" id="name" placeholder="Full Name" />
//                                           <label for="name">Your Name</label>
//                                       </div>
//                                   </div>
//                                   <div className="col-lg-12 col-xl-6">
//                                       <div className="form-floating">
//                                           <input type="email" className="form-control border-1" id="email" placeholder="Email Address" />
//                                           <label for="email">Your Email</label>
//                                       </div>
//                                   </div>
//                                   <div className="col-lg-12 col-xl-6">
//                                       <div className="form-floating">
//                                           <input type="phone" className="form-control border-1" id="phone" placeholder="Contact" />
//                                           <label for="phone">Your Phone</label>
//                                       </div>
//                                   </div>
//                                   <div className="col-lg-12 col-xl-6">
//                                       <div className="form-floating">
//                                           <input type="text" className="form-control border-1" id="subject" placeholder="Subject" />
//                                           <label for="subject">Subject</label>
//                                       </div>
//                                   </div> 
//                                   <div className="col-lg-12 col-xl-6">
//                                       <div className="form-floating">                                        
//                                           <select name="shirts" className="form-control border-1" id="service" placeholder="Select Our Service">	
//                                             <option  className="optinglist">Select Our Service</option>
//                                             <option  className="optinglist">Red t-shirt</option>
//                                             <option  className="optinglist">Blue t-shirt</option>
//                                             <option  className="optinglist">Orange t-shirt</option>
//                                           </select>
//                                       </div>
//                                   </div> 
//                                   <div className="col-lg-12 col-xl-6">
//                                       <div className="form-floating">                                        
//                                           <select name="shirts" className="form-control border-1" id="business" placeholder="Group of Business">										  
//                                             <option className="optinglist">Group of Business</option>
//                                             <option  className="optinglist">Finance</option>
//                                             <option  className="optinglist">Banking</option>
//                                             <option  className="optinglist">Course Training</option>
//                                             <option  className="optinglist">IT/ITES Services</option>
//                                             <option  className="optinglist">Content Writing</option>
//                                             <option  className="optinglist">Web design & Developemnt</option>
//                                           </select>
//                                       </div>
//                                   </div> 							
                                  
//                               </div>
//                                   <div className="col-lg-12 col-xl-12 d-flex align-items-center justify-content-center justify-content-lg-end ">							
//                                       <div className="form_right btn-md-square rounded-circle">
//                                       <i className="fa fa-phone-alt fa-2x"></i>
//                                   </div>
//                               </div>
//                           </form>
                          
//                            <div className="col-12">
//                                    <div className="col-md-12 col-lg-3 m-auto">
//                                       <button className=" btn-grad btn w-100 py-3">Submit Your Subject</button>
//                                       </div>
//                                   </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//    */}



// <div className="container-fluid contact py-5">
//   <div className="container py-5">
//     <div className="row group_contact g-5">
//       <div className="col-lg-10 m-auto h-100 wow fadeInUp" data-wow-delay="0.2s">
//         <div className="text-center mx-auto pb-5" style={{maxWidth:'800px'}}>
//           <h1 className="display-3 text-white text-capitalize mb-3">Get In Touch</h1>
//           <p className="mb-0 text-white">Contact our skilled team today or email us at to learn how we can design tailored solutions for your unique requirements.</p>
//         </div>
//         <form>
//           <div className="row g-4">
//             <div className="form_left btn-md-square rounded-circle"><i className="fas fa-map-marker-alt fa-2x"></i></div>
//             <div className="col-lg-12 col-xl-6">
//               <div className="form-floating">
//                 <input type="text" className="form-control border-1" id="name" placeholder="Full Name" />
//                 <label for="name">Your Name</label>
//               </div>
//             </div>
//             <div className="col-lg-12 col-xl-6">
//               <div className="form-floating">
//                 <input type="email" className="form-control border-1" id="email" placeholder="Email Address" />
//                 <label for="email">Your Email</label>
//               </div>
//             </div>
//             <div className="col-lg-12 col-xl-6">
//               <div className="form-floating">
//                 <input type="phone" className="form-control border-1" id="phone" placeholder="Contact" />
//                 <label for="phone">Your Phone</label>
//               </div>
//             </div>
//             <div className="col-lg-12 col-xl-6">
//               <div className="form-floating">
//                 <input type="text" className="form-control border-1" id="subject" placeholder="Subject" />
//                 <label for="subject">Subject</label>
//               </div>
//             </div> 
//             <div className="col-lg-12 col-xl-6">
//               <div className="form-floating">
//                 <select name="shirts" className="form-control border-1" id="service" placeholder="Select Our Service">  
//                   <option className="optinglist">Select Our Service</option>
//                   <option className="optinglist">Red t-shirt</option>
//                   <option className="optinglist">Blue t-shirt</option>
//                   <option className="optinglist">Orange t-shirt</option>
//                 </select>
//               </div>
//             </div> 
//             <div className="col-lg-12 col-xl-6">
//               <div className="form-floating"> 
//                 <select name="shirts" className="form-control border-1" id="business" placeholder="Group of Business">    
//                   <option className="optinglist">Group of Business</option>
//                   <option className="optinglist">Finance</option>
//                   <option className="optinglist">Banking</option>
//                   <option className="optinglist">Course Training</option>
//                   <option className="optinglist">IT/ITES Services</option>
//                   <option className="optinglist">Content Writing</option>
//                   <option className="optinglist">Web design & Development</option>
//                 </select>
//               </div>
//             </div>                              
//           </div>
//           <div className="col-lg-12 col-xl-12 d-flex align-items-center justify-content-center justify-content-lg-end ">    
//             <div className="form_right btn-md-square rounded-circle">
//               <i className="fa fa-phone-alt fa-2x"></i>
//             </div>
//           </div>
//         </form>
//         <div className="col-12">
//           <div className="col-md-12 col-lg-3 m-auto">
//             <button className="btn-grad btn w-100 py-3">Submit Your Subject</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

  
  
//           <div className="container-fluid footer wow fadeIn" data-wow-delay="0.2s">
              
//               <section className="footervideobg" id="section_1">
//                       <div className="footer-section-overlay"></div>
//                       <div className="video-wrap">
//                           <video autoplay="" loop="" muted="" className="custom-video" poster="">
//                               <source src="assets/video/footerbg.mp4" type="video/mp4" />
//                           </video>
//                       </div>
//                   </section>
                  
//                       <div className="content container py-5">
          
//                           <div className="row g-5 align-items-center">
//                               <div className="col-lg-12">
//                                   <div className="position-relative mb-3 mx-auto py3">
//                                   <img src="assets/img/logo/ktig_white.png" alt="KTIG" />
//                                   </div>
//                               </div>                    
//                           </div>
                          
//                           <div className="row col-lg-11 m-auto g-5">
//                                 <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">About Us</h4>
//                                       <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose KTIG</a>
//                                       <a href="Ktmc" className="font-s"><i className="fas fa-angle-right me-2"></i> About KTMC</a>
//                                       <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Goal and Rules</a>
//                                       <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
//                                   </div>
//                               </div>
                              
//                               <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">Training</h4>
//                                       <a href="Technicaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Technical Training</a>
//                                       <a href="Professionaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i>  Professional Training</a>
//                                       <a href="Corporatetraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Training</a>
//                                   </div>
//                               </div>
//                               <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">SERVICES</h4>
//                                       <a href="Busineesdevelopment" className="font-s"><i className="fas fa-angle-right me-2"></i>Business Developemnt</a>
//                                       <a href="Branding" className="font-s"><i className="fas fa-angle-right me-2"></i> Branding</a>
//                                       <a href="Bankingandfinance" className="font-s"><i className="fas fa-angle-right me-2"></i> Banking/Finance</a>
//                                       <a href="Digitalmarketing" className="font-s"><i className="fas fa-angle-right me-2"></i> Digital Marketing</a>
//                                       <a href="Itites" className="font-s"><i className="fas fa-angle-right me-2"></i> IT/ITES Service</a>
//                                       <a href="saledandpromotion" className="font-s"><i className="fas fa-angle-right me-2"></i> Sales/ Promotions</a>
//                                   </div>
//                               </div>
//                                  <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">Achievement</h4>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
//                                   </div>
//                               </div>
//                                  {/* <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">Online Training</h4>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
//                                   </div>
//                               </div> */}
//                                  <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">Recent Events/News</h4>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
//                                   </div>
//                               </div>
                            
//                               <div className="col-md-6 col-lg-6 col-xl-2">
//                                   <div className="footer-item d-flex flex-column">
//                                       <h4 className="text-true-white font-m mb-2">Contact Info</h4>
//                                       <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Meet KTIG</a>
//                                       <a href="Corporateoffice" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Office</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Business Hours</a>
//                                       <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Privacy Policies</a>                           
//                                   </div>
//                               </div>
//                           </div>
                          
//                            <div className="row g-5 mb-5 d-block mt-10 align-items-center">                    
//                               <div className="col-lg-12 footer-social-icons">
//                                   <div className="d-flex align-items-center justify-content-center justify-content-lg-center">
//                                       <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
//                                       <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa fa-twitter"></i></a>
//                                       <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-instagram"></i></a>
//                                       <a className="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
//                                   </div>
//                               </div>					
//                               <div className="col-md-6 d-block m-auto text-center mt-3">
//                                   <span className="text-copyright"><a href="#" className="text-copyright">Kovai Tech India Group <i className="fas fa-copyright text-light"></i></a> All right reserved.</span>
//                               </div>                   
                          
//                           </div>				
                          
//                       </div>
                                      
//                   </div>
  
//                   <a href="#" className="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   
  
//   </div>
//     );
//   }
  
//   export default Mainpage;
  














import testimonialImage from '../src/images/testimonial-1.jpg'; // Adjust the path if needed

import React from "react";
import Slider from "react-slick";
import './HomePage.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Mainpage() {
/////Post API In contact Form
    const [formData, setFormData] = useState({name: '',email: '',phone: '',subject: '',service: '', business: ''});
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      /////Api trggered part
      const [alertMessage, setAlertMessage] = useState('');
      const [showAlert, setShowAlert] = useState(false);
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        setAlertMessage('Subject Submitted Successfully!');
        setShowAlert(true);
            setTimeout(() => {
          setShowAlert(false);
        }, 3000);
    
        const payload = { name: formData.name, email: formData.email, phone: formData.phone, subject: formData.subject, service: formData.service, business: formData.business
        };
 /////Api trggered part

        console.log('Payload:', payload);
    
        try {
          const response = await fetch('http://3.110.119.143:8081/api/form/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
          } else {
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };
/////Post API In contact Form


///// Blog News Get Api
const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://3.110.119.143:8081/api/blogimages/images") // Replace with your API URL
      .then((response) => {
        setBlogs(response.data); // Assuming response.data is an array of blog objects
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);



  const [activeIndexs, setActiveIndexs] = useState(0); // State to track active dot
  const [activeIndex, setActiveIndex] = useState(0); // State to track active dot


///// Event Name Get Api
const [sliderData, setSliderData] = useState([]);


const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
    className="slick-prev custom-arrow"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-80px",  
      top: "50%",
      zIndex: 1,
      color: 'blue', 
      background: 'none', 
      border: 'none', 
      fontSize: '60px', 
      cursor: 'pointer', 
      transform: 'translateY(-50%)' 
    }}
  >
    &#10094; {/* Left Arrow */}
  </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="slick-next custom-arrow"
      onClick={onClick}
      style={{  position: "absolute",
        right: "-80px",  
        top: "50%",
        zIndex: 1,
        color: 'blue',
        background: 'none', 
        border: 'none', 
        fontSize: '60px', 
        cursor: 'pointer', 
        transform: 'translateY(-50%)' 
         }}
    >
      &#10095;  {/* Right Arrow */}

    </button>
  );
};
const [formDatas, setFormDatas] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  service: '',
  business: '',
});

const handleChanges = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmits = async (e) => {
  e.preventDefault(); // Prevents the default form submission behavior
setShowAlert(true);
setTimeout(()=> setShowAlert(false),3000)
  try {
    const response = await axios.post('http://3.110.119.143:8081/Contact/submitforms', formData);
    console.log('Response:', response.data); // Handle the response from the server
    // You can add further actions here, like clearing the form or showing a success message
  } catch (error) {
    console.log('Error:', error); // Handle error
  }
};


///Slider Animation part/////
// const settings = {
//     dots: false,
    
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <CustomPrevArrow />,
     nextArrow: <CustomNextArrow />,
  beforeChange: (_, next) => setActiveIndex(next), 
  appendDots: dots => (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0",
          fontSize: "12px",
          listStyle: "none",
        }}
      >
        {dots}
      </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Inner Dot */}
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: activeIndex === i ? "#52788e" : "transparent", 
          transition: "0.5s",
        }}
      />
      {/* Outer Circle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: activeIndex === i ? "2px solid #52788e" : "2px solid #ccc", 
          transition: "0.5s",
        }}
      />
    </div>
  ),
};

  // const settingss = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />,
  // };
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_, next) => setActiveIndexs(next), // Update active index on slide change
    appendDots: dots => (
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0",
            fontSize: "12px",
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {/* Inner Dot */}
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: activeIndexs === i ? "#52788e" : "transparent", // Change color based on active index
            transition: "0.5s",
          }}
        />
        {/* Outer Circle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: activeIndexs === i ? "2px solid #52788e" : "2px solid #ccc", // Change border color
            transition: "0.5s",
          }}
        />
      </div>
    ),
  };

  // const sliderData = [
  //   {
  //     id: 1,
  //     imgSrc: "assets/img/event/testimonial-1.jpg",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "assets/img/event/testimonial-2.jpg",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //   },
  //   {
  //     id: 3,
  //     imgSrc: "assets/img/event/testimonial-3.jpg",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //   },
  //   {
  //       id: 3,
  //       imgSrc: "assets/img/event/testimonial-4.jpg",
  //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //     },
  // ];
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch("http://3.110.119.143:8081/api/images/images"); // Replace with your API endpoint
        const data = await response.json();
    
        const formattedData = data.map((item) => ({
          id: item._id,
          imageUrl: `http://3.110.119.143:8081${item.imagePath}`, // Correctly prepending the server URL
          title: item.title,
          description: item.description,
        }));
        
        setSliderData(formattedData);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };
    
    fetchSliderData();
  }, []);




  /////Blog part
  // const blogs = [
  //   {
  //     id: 1,
  //     imgSrc: "assets/img/blog/blog-1.jpg",
  //     title: "Lorem ipsum dolor sit amet consecteturadipisicing elit. Unde",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "assets/img/blog/blog-2.jpg",
  //     title: "Lorem ipsum dolor sit amet consecteturadipisicing elit. Unde",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //   },
  //   {
  //     id: 3,
  //     imgSrc: "assets/img/blog/blog-3.jpg",
  //     title: "Lorem ipsum dolor sit amet consecteturadipisicing elit. Undes",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //   },
  //   {
  //       id: 3,
  //       imgSrc: "assets/img/blog/blog-3.jpg",
  //       title: "Lorem ipsum dolor sit amet consecteturadipisicing elit. Undes",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
  //     },
      
  // ];

//////// Live Calendar
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const options = { day: "numeric", month: "short", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);
      setCurrentDate(formattedDate);
    };
    updateDate();
    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

//////// Live Calendar

///Slider Animation part/////
    // const sliderItems = [
    //     "Beyond Finance,<br /> Beyond Education" ,
    //     "Financial Wisdom, Educational Excellence",
    //     "Wealth of Knowledge,<br />Future of Excellence",
    //     "Smart Money,<br /> Brighter Futures",
    //   ];
    //   const [currentIndex, setCurrentIndex] = useState(0);  
    //   const [isVisible, setIsVisible] = useState(true); 
    
    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setIsVisible(false); 
    //       setTimeout(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    //         setIsVisible(true); 
    //       });
    
    //     }, 1000);
    
    //     return () => clearInterval(interval); 
    //   }, [sliderItems.length]);
    const sliderItems = [
      "Beyond <br />Finance, Beyond Education",
      "Wealth of Knowledge,<br />Future of Excellence",
      "Financial Wisdom, <br />Educational Excellence",
      "Smart Money,<br /> Brighter Futures",
    ];
    const subTextItems = [
      "Creating Leaders Who Transform Tomorrow",
      "Empowering Futures With Financial Expertise",
      "Transforming Lives Through Knowledge & Security",
     "Empowering Lives Through Financial Wisdom & Educational Innovation"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible(false); // Start hiding animation
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
          setIsVisible(true); // Start showing animation
        }, 1000); // Duration of hiding animation
      }, 2000); // Interval between slides
    
      return () => clearInterval(interval);
    }, [sliderItems.length]);
    
    return (
  <div>
 
  
          <div className="container-fluid position-relative p-0 ">
              <div className="w-100 me-3 top_head">
                  <div className="top_head align-items-center"></div>
              </div>
              <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                  <a href="" className="navbar-brand p-0">
                      {/* <h1 className="text-primary"><img src="assets/img/logo/ktig_logo.png" alt="KTIG" /></h1>                   */}
                      {/* <h1 className="text-primary">
                      <img src="assets/img/logo/ktignewremove.png" alt="KTIG" style={{ maxHeight:'101px' }} />
                      </h1> */}
                      <div className="ktig-container" style={{ textAlign: 'center' }}>
                          <h1 className="text-primary">
                              <img
                                src="assets/img/logo/Newlogo.png"
                                 alt="KTIG"
                                 style={{ maxHeight: '100px' }}
                                    />
                                   </h1>
                                    
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
                          {/* <a href="Investmentpage" class="nav-item nav-link">Investment</a> */}

                          <a href="Blogpage" className="nav-item nav-link">Blog</a>
                          <a href="Contactpage" className="nav-item nav-link">Contact</a>
                      </div>
                      <div className="d-none d-xl-flex me-3">
                          <div className="d-flex flex-column ps-3 pe-3 mb-3 text-white">
                              <span className="text-body text-white ">Email: helpdesk@ktig.com</span>
                              <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-white "></i></button>
                           <a href="tel:+4733378901"><div className="d-flex align-items-center justify-content-center ">
                              <a className="btn btn-secondary me-3" href=""><i className="fab fa-facebook-f text-white "></i></a>
                              <a className="btn btn-secondary me-3" href=""><i className="fab fa fa-twitter text-white "></i></a>
                              <a className="btn btn-secondary me-3" href=""><i className="fab fa-instagram text-white "></i></a>
                              <a className="btn btn-secondary me-0" href=""><i className="fab fa-linkedin-in text-white"></i></a>
                          </div></a>
                          </div>
                      </div>
                  </div>
              </nav>
              
              <div className="single-hero-slide d-flex align-items-center justify-content-center" style={{ paddingTop: '11rem', position: 'relative', height:'30rem' }}>              
    {/* Background Video */}
    <div style={{ height: '500px', width: '100%', overflow: 'hidden', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <video
            autoPlay
            loop
            muted
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the video scales properly
            }}
            poster=""
        >
            <source src="assets/video/pexels-2022395.mp4" type="video/mp4" />
        </video>
    </div>

    {/* Text Content */}
{/* 
    <div className="text-slider">
    <div className="row">
        <div className="col-12">
            <div className="hero-slides-content text-center">
                <div className="slider-wrapper">
                    <h2 className="slider-item">
                        Beyond <br />Finance, Beyond Education
                        <span>Beyond <br />Finance, Beyond Education</span>
                    </h2>

                    <h2 className="slider-item">
                        Financial Wisdom, <br /> Educational Excellence
                    </h2>

                    <h6 className="slider-item">
                        Transforming Lives Through Knowledge & Security
                    </h6>
                </div>
            </div>
        </div>
    </div>
</div> */}
   {/* <div className="text-slider">
      <div className="row">
        <div className="col-12">
          <div className="hero-slides-content text-center">
            <div className="slider-wrapper">
              {sliderItems.map((item, index) => (
                <h2 key={index} className="slider-item">
                  {item.split("<br />").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex !== item.split("<br />").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div> */}
  <div className="single-hero-slide d-flex align-items-center justify-content-center">
      <div>
        <div className="row">
          <div className="col-12 mt-5">
            <div className="hero-slides-content text-center">
              <h2
                className={`slider-item ${isVisible ? "fade-in" : "fade-out"}`}
              >
                {sliderItems[currentIndex]
                  .split("<br />")
                  .map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex !==
                        sliderItems[currentIndex].split("<br />").length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  ))}
              </h2>
              <h6
                className={`slider-subtext ${
                  isVisible ? "fade-in" : "fade-out"
                }`}
                data-animation="fadeInUp"
                data-delay="100ms"
              >
                {subTextItems[currentIndex]}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>




    </div>
          </div>
          <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content rounded-0">
                      <div className="col-lg-12 m-auto modal-header justify-content-lg-end">
                      <button type="button" className="btn-close justify-content-lg-end textssss" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="col-lg-9 m-auto modal-header align-items-center text-center">
                          <h4 className="modal-title mb-0 m-auto text-white" id="exampleModalLabel">Search by keyword</h4>                        
                      </div>
                      <div className="modal-body align-items-center">
                          <div className="input-group w-75 mx-auto d-flex">
                              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                              <span id="search-icon-1" className="input-group-text btn border p-3"><i className="fa fa-search text-white"></i></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
  
  
  
          <div className="overlaygradient container-fluid feature py-5">
              <div className="container py-6 ">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '880px' }}
                  >                    
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
                              {/* <a href="#" className="btn text-white">Investment</a> */}
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
             <div class="container-fluid about overflow-hidden py-5">
                    <div class="container py-5">
                        <div class="row g-5">
                        <div class="col-xl-9 m-auto">
                            <div class="about-item text-center">
                            <h1 class="display-3 text-white mb-3">About Us</h1>
                            <p class="mb-4 text-white" style={{fontFamily:'poppins'}}>
                                Kovai Tech India Group of Company is a dynamic conglomerate that
                                brings together diverse expertise across vital sectors to drive
                                innovation and societal progress. With a robust presence in
                                financial services, education, information technology, and social
                                development.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container-fluid counter py-5">
      <div className="container py-5">
        <div className="row col-xl-9 m-auto g-5">
          {/* Projects Counter */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter-item">
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={257} duration={2.5} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <div className="counter-item-icon mx-auto">
                <h4 className="text-white">Projects</h4>
                
                <i className="fas fa-3x text-white">@</i>
              </div>
            </div>
          </div>

          {/* Clients Counter */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter-item">
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={75} duration={2.5} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <div className="counter-item-icon mx-auto">
                <h4 className="text-white">Clients</h4>
                <i className="fas fa-3x text-white">Nos</i>
              </div>
            </div>
          </div>

          {/* Revenue Counter */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter-item">
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={93.4} duration={2.5} decimals={1} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <div className="counter-item-icon mx-auto">
                <h4 className="text-white">Revenue</h4>
                <i className="fas fa-3x text-white">%</i>
              </div>
            </div>
          </div>

          {/* Reviews Counter */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter-item">
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={87.2} duration={2.5} decimals={1} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <div className="counter-item-icon mx-auto">
                <h4 className="text-white">Reviews</h4>
                <i className="fas fa-3x text-white">%</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          <div className="container-fluid service bg-light overflow-hidden p-0">
              <div className="clientslide wow fadeInUp">
              
              <div className="container-fluid p-0">
                  <div className="slider">
                      <div className="slide-track">
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/crescent logo.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/AIIRMYCART.png" height="100" width="250" alt="" />
                          </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/edilink.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/DFLv3.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/srbt.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/logo_dark.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/logoa-1.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/mz account.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src={"assets/img/clients/Nantech - Logo.png"} height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/TK MART LOGO.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/NENE LOGO PNG.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/VK Logo PNG.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/royal shelter.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          <div className="slide">
                              <div className="slide_itemlist">
                              <img src="assets/img/clients/nouveaux.png" height="100" width="250" alt="" />
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  </div>
              
              </div>
              </div>
  
  
              <div className="container-fluid about overflow-hidden py-5">
  <div className="container py-5">
    <div className="row col-xl-9 m-auto g-5">
      
      <div className="col-xl-6">
        <div className="about-item">
          <h1 className="display-3 mb-4 text-white">Security System</h1>
          <p className="mb-4 text-white mytext" style={{fontFamily:'poppins'}}>
            Physical security is the foundation of asset protection, which is why we offer a comprehensive, multi-layered security system that combines cutting-edge technology with time-tested approaches. The basic infrastructure consists of access control systems with biometric verification, smart card readers, and turnstile integration, all administered by a centralized command center.
          </p>
          <p className="mb-4 text-white" style={{fontFamily:'poppins'}}>
            Our digital security system augments the physical infrastructure by including cybersecurity safeguards to protect against both external and internal threats. We conduct frequent system audits, maintenance schedules, and continual updates to ensure peak performance and adaptability to emerging security threats.
          </p>
        </div>
      </div>
      
      <div className="col-xl-6">
        <div className="about-img rounded h-100 d-flex">
          <img src="assets/img/securitysystem.png" className="img-fluid rounded w-100 m-auto d-block" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Testimonial starting part       */}
           

{/* Testimonial Start Part */}

    {/* <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h1 className="display-3 text-white text-capitalize mb-3">OUR TRAINING AND DIVISION</h1>
        </div>

        <Slider {...settings}>
          {sliderData.map((item) => (   
            <div key={item.id}>
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={item.imgSrc}
                    className="img-fluid rounded-top w-100"
                    style={{ width: "50px", height: "236px" }}
                    alt=""
                  />
                </div>
                <div className="blog-content rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-3 text-white">
                    {item.title}
                  </a>
                  <p>{item.description}</p>
                  <a href="#" className="text-white text-right">
                    <i className="fa fa-angle-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>   
      </div>
    </div> */}
     <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-3 text-white text-capitalize mb-3">
            OUR TRAINING AND DIVISION
          </h1>
        </div>

        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={item.imageUrl} 
                    className="img-fluid rounded-top w-100"
                    style={{ width: "50px", height: "236px" }}
                    alt=""
                  />
                </div>
                
                <div className="blog-content rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-3 text-white">
                    {item.title}
                  </a>
                  <p>{item.description}</p>
                  <a href="#" className="text-white text-right">
                    <i className="fa fa-angle-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  {/* Testimonial Part End */}
  
  


  {/* Testimonial Blog Part start */}


  <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-3 text-white text-capitalize mb-3">
            Latest Blog & News
          </h1>
        </div>

        {/* <Slider {...settingss}>
          {blogs.map((blog) => (
            <div key={blog.id} className="px-3">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={blog.imgSrc}
                    className="img-fluid rounded-top w-100"
                    alt={blog.title}
                  />
                  
                  <div className="blog-date px-4 py-2">
                    <i className="fa fa-calendar-alt me-1"></i> {currentDate}
                  </div>
                </div>
                <div className="blog-content rounded-bottom p-4">
                  <a
                    href="#"
                    className="h4 d-inline-block mb-3 text-white"
                  >
                    {blog.title}
                  </a>
                  <p>{blog.description}</p>
                  <a
                    href="#"
                    className="text-white text-right"
                  >
                    <i className="fa fa-angle-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
         <Slider {...settingss}>
        {blogs.map((blog) => (
          <div key={blog.id} className="px-3">
            <div className="blog-item">
              <div className="blog-img">
              <img
                    src={`http://3.110.119.143:8081${blog.imagePath}`} // Ensure to add backend URL
                    className="img-fluid rounded-top w-100"
                    alt={blog.title}
                  />

                <div className="blog-date px-4 py-2">
                  <i className="fa fa-calendar-alt me-1"></i> {currentDate}
                </div>
              </div>
              <div className="blog-content rounded-bottom p-4">
                <a href="#" className="h4 d-inline-block mb-3 text-white">
                  {blog.title}
                </a>
                <p>{blog.description}</p>
                <a href="#" className="text-white text-right">
                  <i className="fa fa-angle-right"></i> Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
 {/* Testimonial Blog Part start */}

  
 <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="row group_contact g-5">
          <div className="col-lg-10 m-auto h-100 wow fadeInUp" data-wow-delay="0.2s">
            <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
              <h1 className="display-3 text-white text-capitalize mb-3">Get In Touch</h1>
              <p className="mb-0 text-white">
                Contact our skilled team today or email us at to learn how we can design tailored solutions for your unique requirements.
              </p>
            </div>
            {/* <form>
              <div className="row g-4">
                <div className="form_left btn-md-square rounded-circle">
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-1"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                    <label>Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control border-1"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                    <label>Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control border-1"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contact"
                    />
                    <label>Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-1"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                    <label>Subject</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <select
                      name="service"
                      className="form-control border-1"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option>Select Our Service</option>
                      <option>KTIG Groups</option>
                      <option>Banking solution</option>
                      <option>Finance solution</option>
                      <option>IT solution</option>
                      <option>Non-IT solution</option>
                      <option>Sales & Ecommerce</option>
                      <option>Training & Coaching</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <select
                      name="business"
                      className="form-control border-1"
                      value={formData.business}
                      onChange={handleChange}
                    >
                      <option>Group of Business</option>
                      <option>Finance</option>
                      <option>Banking</option>
                      <option>Course Training</option>
                      <option>IT/ITES Services</option>
                      <option>Content Writing</option>
                      <option>Web design & Development</option>
                    </select>
                  </div>
                </div>
              </div>
             
            </form> */}
           <form onSubmit={handleSubmits}>
      <div className="row g-4">
        <div className="form_left btn-md-square rounded-circle">
          <i className="fas fa-map-marker-alt fa-2x"></i>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control border-1"
              name="name"
              value={formData.name}
              onChange={handleChanges}
              placeholder="Full Name"
            />
            <label>Your Name</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control border-1"
              name="email"
              value={formData.email}
              onChange={handleChanges}
              placeholder="Email Address"
            />
            <label>Your Email</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="phone"
              className="form-control border-1"
              name="phone"
              value={formData.phone}
              onChange={handleChanges}
              placeholder="Contact"
            />
            <label>Your Phone</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control border-1"
              name="subject"
              value={formData.subject}
              onChange={handleChanges}
              placeholder="Subject"
            />
            <label>Subject</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <select
              name="service"
              className="form-control border-1"
              value={formData.service}
              onChange={handleChanges}
            >
              <option>Select Our Service</option>
              <option>KTIG Groups</option>
              <option>Banking solution</option>
              <option>Finance solution</option>
              <option>IT solution</option>
              <option>Non-IT solution</option>
              <option>Sales & Ecommerce</option>
              <option>Training & Coaching</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <select
              name="business"
              className="form-control border-1"
              value={formData.business}
              onChange={handleChanges}
            >
              <option>Group of Business</option>
              <option>Finance</option>
              <option>Banking</option>
              <option>Course Training</option>
              <option>IT/ITES Services</option>
              <option>Content Writing</option>
              <option>Web design & Development</option>
            </select>
          </div>
        </div>
      </div>
      
    </form>
             <div className="btn-container col-12">
  <button
    type="button"
    className="btn-grad btn w-100 py-3"
    onClick={handleSubmits}
  >
    Submit Your Subject
  </button>
</div>

      {showAlert && (
  <div
    style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#4CAF50', color: 'white', padding: '15px 30px',borderRadius: '8px',  fontSize: '16px',  marginTop: '20rem',  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', zIndex: 1000,
      display: 'flex',flexDirection: 'column',alignItems: 'center',maxWidth: '380px',width: '100%',opacity: 1,transition: 'all 0.3s ease',transform: 'translate(-50%, -50%) scale(1)',marginLeft:'27rem'
    }}
  >
    <i className="fas fa-check-circle" style={{ fontSize: '40px', color: '#fff' }}></i>
    <h2 style={{ marginTop: '20px', fontSize: '20px', fontWeight: '500', color: 'white' }}>
      Success!
    </h2>
    <h3 style={{ fontSize: '16px', fontWeight: '400', color: 'white', textAlign: 'center' }}>
      Your Form is Successfully Submitted.
    </h3>
    <div className="buttons" style={{ marginTop: '20px' }}>
      <button
        onClick={() => setShowAlert(false)}
        style={{
          fontSize: '14px',
          padding: '6px 12px',
          margin: '0 10px',
          backgroundColor: '#4070f4',
          color: '#fff',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </div>
  </div>
)}

          </div>
        </div>
      </div>
    </div>
{/* ////////////////////////////////Contact Form////////////////////////////////////////////////////// */}

  
  
          <div className="container-fluid footer wow fadeIn" data-wow-delay="0.2s">
              
              <section className="footervideobg" id="section_1">
                      <div className="footer-section-overlay"></div>
                      <div className="video-wrap">
                          <video autoplay="" loop="" muted="" className="custom-video" poster="">
                              <source src="assets/video/footerbg.mp4" type="video/mp4" />
                          </video>
                      </div>
                  </section>
                  
                      <div className="content container py-5">
          
                          <div className="row g-5 align-items-center">
                              <div className="col-lg-12">
                                  <div className="position-relative mb-3 mx-auto py3">
                                  <img src="assets/img/logo/ktig_white2.png" alt="KTIG" style={{backgroundColor:'none'}} />
                                  </div>
                              </div>                    
                          </div>
                          
                          <div className="row col-lg-11 m-auto g-5">
                                <div className="col-md-6 col-lg-6 col-xl-2">
                                  <div className="footer-item d-flex flex-column">
                                      <h4 className="text-true-white font-m mb-2">About Us</h4>
                                      <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose KTIG</a>
                                      <a href="Ktmc" className="font-s"><i className="fas fa-angle-right me-2"></i> About KTMC</a>
                                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Goal and Rules</a>
                                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                                      <a href="InvoiceForm" className="font-s"><i className="fas fa-angle-right me-2"></i>InvoiceForm</a>

                                  </div>
                                  
                              </div>
                              
                              <div className="col-md-6 col-lg-6 col-xl-2">
                                  <div className="footer-item d-flex flex-column">
                                      <h4 className="text-true-white font-m mb-2">Training</h4>
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
                                      <a href="Goalandroles" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                                  </div>
                              </div>
                                
                                 <div className="col-md-6 col-lg-6 col-xl-2">
                                  <div className="footer-item d-flex flex-column">
                                      <h4 className="text-true-white font-m mb-2">Recent Events/News</h4>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose Us</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Free Water Bottles</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Water Dispensers</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
                                      <a href="Contactpage" className="font-s"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                                      <a href="Adminpage" className="font-s"><i className="fas fa-angle-right me-2"></i> Adminpage</a>

                                      
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
                                  <Link to="/Adminpage" className="buttons">
                                    <i className="fas fa-angle-right me-2"></i> Admin Login
                                  </Link>
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
  
  export default Mainpage;
  