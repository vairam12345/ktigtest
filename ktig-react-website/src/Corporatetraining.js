



// import './Technicaltraining.css'

import Slider from "react-slick";
import { useState,useEffect } from 'react';

function Corporatetraining(){
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //   };
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
      const settings = {
        dots: false,
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };


    const [sliderData, setSliderData] = useState([]);

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

    return(
        <div>

   

    {/* <!-- Navbar & Hero Start --> */}
    <div class="container-fluid position-relative p-0">
        <div class="w-100 me-3 top_head">
            <div class="top_head align-items-center"></div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="./index.html" class="navbar-brand p-0">
                {/* <h1 class="text-primary"><img src="assets/img/logo/ktig_logo.png" alt="KTIG" /></h1> */}
                {/* <img src="assets/img/logo/ktig_logo.png" alt="KTIG" style={{ maxHeight:'210px' }} /> */}
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
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav py-0">
                    <a href="/" class="nav-item nav-link active">Home</a>
                    <a href="Aboutpage" class="nav-item nav-link">About</a>
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
                    <a href="Achievement" class="nav-item nav-link">Achievement</a>
                    <a href="Blogpage" class="nav-item nav-link">Blog</a>
                    <a href="Contactpage" class="nav-item nav-link">Contact</a>
                </div>
                <div class="d-none d-xl-flex me-3">
                    <div class="d-flex flex-column ps-3 pe-3 mb-3">
                        <span class="text-body">Email: contact@ktig.in</span>
                        <button class="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle"
                            data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button>
                        <a href="tel:+4733378901">
                            <div class="d-flex align-items-center justify-content-center ">
                                <a class="btn btn-secondary me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-secondary me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-secondary me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-secondary me-3" href=""><i class="fab fa fa-twitter"></i></a>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    {/* <!-- Navbar & Hero End -->
    <!-- Header Start --> */}
    <div class="container-fluid aboutus_page bg-breadcrumb">
        <div class="container text-center py-5" style={{maxWidth:'9000px'}}>
            <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active text-primary">About</li>
            </ol>
            <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Know About Our Gallexy</h4>
        </div>
    </div>
    {/* <!-- Header End -->

    <!-- Modal Search Start --> */}
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content rounded-0">
                <div class="col-lg-12 m-auto modal-header justify-content-lg-end">
                    <button type="button" class="btn-close justify-content-lg-end text-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="col-lg-9 m-auto modal-header align-items-center text-center">
                    <h4 class="modal-title mb-0 m-auto text-white" id="exampleModalLabel">Search by keyword</h4>
                </div>
                <div class="modal-body align-items-center">
                    <div class="input-group w-75 mx-auto d-flex">
                        <input type="search" class="form-control p-3" placeholder="keywords"
                            aria-describedby="search-icon-1" />
                        <span id="search-icon-1" class="input-group-text btn border p-3"><i
                                class="fa fa-search text-white"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Modal Search End --> */}




    {/* <!-- About Start --> */}
    {/* <div class="container-fluid about overflow-hidden py-5">
        <div class="container py-5">
            <div class="row g-5">

                <div class="col-xl-9 m-auto wow fadeInRight" data-wow-delay="0.2s">

                    <div class="about-item text-center">

                        <h1 class="mb-5 text-white">Technical Training Programs
                        </h1>
                        <h4 class="mb-4 text-white text-left">Web Application Development</h4>
                        <p class="text-white text-left">Master the art of modern web development with our comprehensive
                            training
                            in advanced frameworks and technologies. Our hands-on programs cover frontend and backend
                            development, database management, and deployment strategies. Training includes practical
                            projects, industry-standard coding practices, and real-world application development
                            scenarios that prepare you for professional web development roles.
                        </p>
                        <h4 class="mb-4 text-white text-left">Mobile Application Development</h4>
                        <p class="text-white text-left">Dive into the world of mobile app creation with our specialized
                            courses
                            covering both Android and iOS development. Learn to build responsive, user-friendly
                            applications using the latest tools and frameworks. Our training combines theoretical
                            knowledge with practical app development projects, ensuring you gain the skills needed to
                            create market-ready mobile applications.
                        </p>
                        <h4 class="mb-4 text-white text-left">Artificial Intelligence & Machine Learning</h4>
                        <p class="text-white text-left">Transform your career with our cutting-edge AI/ML training
                            programs. From
                            basic algorithms to advanced deep learning models, our courses cover the complete spectrum
                            of AI technologies. Learn data analysis, model development, and practical implementation of
                            AI solutions through real-world case studies and hands-on projects.
                        </p>
                        <h4 class="mb-4 text-white text-left">Digital Marketing Excellence</h4>
                        <p class="text-white text-left">Master comprehensive digital marketing strategies through our
                            practical
                            training programs. Learn SEO, social media marketing, content strategy, email marketing, and
                            analytics. Our courses include live campaign management, tool usage, and performance
                            tracking, preparing you for successful digital marketing roles.
                        </p>


                    </div>

                </div>
            </div>
        </div>
    </div> */}
    <div class="container-fluid about overflow-hidden py-5">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-xl-9 m-auto wow fadeInRight" data-wow-delay="0.2s">
                <div class="about-item text-left"> 

                    <h1 class="mb-5 text-white text-left " style={{marginLeft:'8rem'}}>Corporate Training Solutions</h1> 
                    <h4 class="mb-4 text-white text-left custom-width" >Faculty Development Programs (FDP)
                    </h4>
                    <p class="text-white text-left">Enhance teaching effectiveness and academic leadership through our specialized faculty development programs. Covering modern pedagogical methods, research techniques, and academic administration, our FDPs help educators excel in their roles.</p>

                    <h4 class="mb-4 text-white text-left custom-width">Employee Engagement & Team Building</h4>
                    <p class="text-white text-left">Foster a positive work culture through our engagement and team-building programs. From communication workshops to team dynamics training, our programs help build cohesive, high-performing teams. Sessions include interactive activities, group exercises, and practical workplace scenarios.</p>
                </div>
            </div>
        </div>
    </div>
</div>

   {/* Testimonial Part start */}
{/* <div className="container-fluid blog pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>                    
                        <h1 className="display-3 text-white text-capitalize mb-3">OUR TRAINING AND DIVISION</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="assets/img/event/testimonial-1.jpg" className="img-fluid rounded-top w-100" style={{width: '100px',height: '300px',}} alt="" />
                                </div>
                                    <h4 style={{color:'white'}}>Web Application</h4>
                                    <a href="#" className="h4 d-inline-block mb-3 text-white" style={{color:'white'}}>Dive into the world of mobile app creation with our specialized courses
                                    covering both Android and iOS development.</a>
                                    <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="blog-item">
                                <div className="blog-img">
                                <img src="assets/img/event/testimonial-2.jpg" className="img-fluid rounded-top w-100" style={{width: '100px',height: '300px'}} alt="" />
                                  </div>
                                <div className="blog-content rounded-bottom p-4">
                                <h4 style={{color:'white'}}>Mobile Application</h4>

                                    <a href="#" className="h4 d-inline-block mb-3 text-white" style={{color:'white'}}>Dive into the world of mobile app creation with our specialized courses
                            covering both Android and iOS development.</a>
                                    <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="blog-item">
                                <div className="blog-img">
                                <img src="assets/img/event/testimonial-3.jpg" className="img-fluid rounded-top w-100" style={{width: '100px',height: '300px'}} alt="" />
                                </div>
                                <div className="blog-content rounded-bottom p-4">
                                <h4 style={{color:'white'}}>AI & Machine Learning</h4>

                                    <a href="#" className="h4 d-inline-block mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                    <a href="#" className="text-white text-right"><i className="fa fa-angle-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

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

    {/* <!-- Footer Start --> */}
    <div class="container-fluid footer wow fadeIn" data-wow-delay="0.2s">

        <section class="footervideobg" id="section_1">
            <div class="footer-section-overlay"></div>
            <div class="video-wrap">
                <video autoplay="" loop="" muted="" class="custom-video" poster="">
                    <source src="assets/video/footerbg.mp4" type="video/mp4" />
                </video>
            </div>
        </section>

        <div class="content container py-5">

            <div class="row g-5 align-items-center">
                <div class="col-lg-12">
                    <div class="position-relative mb-3 mx-auto py3">
                        {/* <img src="assets/img/ktig_white.png" alt="KTIG" /> */}
                        <img src="assets/img/logo/ktig_white2.png" alt="KTIG" style={{backgroundColor:'none'}} />

                    </div>
                </div>
            </div>

            <div class="row col-lg-11 m-auto g-5">
                <div class="col-md-6 col-lg-6 col-xl-2">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-true-white font-m mb-2">About Us</h4>
                        <a href="ktig_services" class="font-s"><i class="fas fa-angle-right me-2"></i> Why Choose
                            KTIG</a>
                        <a href="ktmc" class="font-s"><i class="fas fa-angle-right me-2"></i> About KTMC</a>
                        <a href="Goalandrules" class="font-s"><i class="fas fa-angle-right me-2"></i> Goals
                            and Rules</a>
                        <a href="Goalandrules" class="font-s"><i class="fas fa-angle-right me-2"></i> Terms &
                            Conditions</a>
                    </div>
                </div>




                <div class="col-md-6 col-lg-6 col-xl-2">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-true-white font-m mb-2">TRAINING</h4>
                        <a href="Technicaltraining" class="font-s"><i
                                class="fas fa-angle-right me-2"></i>Technical Training</a>
                        <a href="Professionaltraining" class="font-s"><i class="fas fa-angle-right me-2"></i>
                            Professional Training</a>
                        <a href="Corporatetraining" class="font-s"><i class="fas fa-angle-right me-2"></i>
                            Corporate Training</a>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6 col-xl-2">
                <div class="footer-item d-flex flex-column">
                    <h4 class="text-true-white font-m mb-2">SERVICES</h4>
                             <a href="Busineesdevelopment" className="font-s"><i className="fas fa-angle-right me-2"></i>Business Developemnt</a>
                                      <a href="Branding" className="font-s"><i className="fas fa-angle-right me-2"></i> Branding</a>
                                      <a href="Bankingandfinance" className="font-s"><i className="fas fa-angle-right me-2"></i> Banking/Finance</a>
                                      <a href="Digitalmarketing" className="font-s"><i className="fas fa-angle-right me-2"></i> Digital Marketing</a>
                                      <a href="Itites" className="font-s"><i className="fas fa-angle-right me-2"></i> IT/ITES Service</a>
                                      <a href="saledandpromotion" className="font-s"><i className="fas fa-angle-right me-2"></i> Sales/ Promotions</a>
                </div>
            </div>

                <div class="col-md-6 col-lg-6 col-xl-2">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-true-white font-m mb-2">Recent Events/News</h4>
                        <a href="index.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Faculty Training</a>
                        <a href="index.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Future Education</a>
                        <a href="index.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Finance Support</a>
                        <a href="index.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Save Money</a>
                        <a href="index.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Success Journey</a>


                    </div>
                </div>

                <div class="col-md-6 col-lg-6 col-xl-2">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-true-white font-m mb-2">Achievement</h4>
                        <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i>KTIG Milestones</a>
                        <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i>Placement</a>
                        <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i>Success Story</a>
                        <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i>Happy Clients</a>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6 col-xl-2">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-true-white font-m mb-2">Contact Info</h4>
                                      <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Meet KTIG</a>
                                      <a href="Corporateoffice" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Office</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Business Hours</a>
                                      <a href="#" className="font-s"><i className="fas fa-angle-right me-2"></i> Privacy Policies</a> 
                    </div>
                </div>
            </div>

            <div class="row g-5 mb-5 d-block mt-10 align-items-center">
                <div class="col-lg-12 footer-social-icons">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-center">

                        <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i
                                class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i
                                class="fab fa-instagram"></i></a>
                        <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i
                                class="fab fa fa-twitter"></i></a>

                        <a class="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i
                                class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div class="col-md-6 d-block m-auto text-center mt-3">
                    <span class="text-copyright"><a href="index.html" class="text-copyright">Kovai Tech India Group <i
                                class="fas fa-copyright text-light"></i></a> All right reserved.</span>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>


    

</div>
    )
}



export default Corporatetraining;