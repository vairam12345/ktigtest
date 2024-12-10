

import './Ktmc.css'

import CountUp from "react-countup";


function Ktmc(){
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
    <div class="container text-center py-5" style={{maxWidth:'900px'}}>
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
<div class="container-fluid about overflow-hidden py-5">
    <div class="container py-5">
        <div class="row g-5">

            <div class="col-xl-9 m-auto wow fadeInRight" data-wow-delay="0.2s">

                <div class="about-item text-center">

                    <h1 class="mb-4 text-white">KTMC <span class="text-white"
                            style={{fontSize:'12px', display:'block'}}>(Kovai Tech
                            Members Chamber)</span>
                    </h1>
                    <p class="text-white"> KTMC serves as an exclusive business networking platform fostering
                        collaboration and growth opportunities among industry leaders. Our chamber provides a
                        dynamic environment for knowledge sharing, business development, and professional
                        networking, supported by state-of-the-art facilities and expert-led initiatives. We
                        facilitate meaningful connections that drive innovation and business excellence across
                        sectors.

                    </p>
                </div>
                {/* <div class="row mt-5 about_ktmc g-4 justify-content-center">
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="blog-itemss">
                            <div class="blog-imgs">
                                <img src="assets/img/event/ev1.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="blog-date py-2" style={{fontSize:'10px'}}><i
                                        class="fa fa-calendar-alt me-1"></i> 16 November
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="blog-itemss">
                            <div class="blog-imgs">
                                <img src="assets/img/event/ev2.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="blog-date py-2" style={{fontSize:'10px'}}><i
                                        class="fa fa-calendar-alt me-1"></i> 16 November
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="blog-itemss">
                            <div class="blog-imgs">
                                <img src="assets/img/event/ev4.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="blog-date py-2" style={{fontSize:'10px'}}><i
                                        class="fa fa-calendar-alt me-1"></i> 16 November
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
               <div class="row mt-5 about-ktmc-events g-4 justify-content-center">
    <div class="col-lg-6 col-xl-4">
        <div class="blog-itemss image-slide-right-to-center">
            <div class="blog-imgs">
                <img src="assets/img/event/ev1.jpg" class="img-fluid rounded-top w-100" alt="" />
                <div class="blog-date py-2" style={{fontSize:'10px'}}>
                    <i class="fa fa-calendar-alt me-1"></i> 16 November 2024
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-xl-4">
        <div class="blog-itemss image-slide-right-to-center">
            <div class="blog-imgs">
                <img src="assets/img/event/ev2.jpg" class="img-fluid rounded-top w-100" alt="" />
                <div class="blog-date py-2" style={{fontSize:'10px'}}>
                    <i class="fa fa-calendar-alt me-1"></i> 16 November 2024
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-xl-4">
        <div class="blog-itemss image-slide-right-to-center">
            <div class="blog-imgs">
                <img src="assets/img/event/ev4.jpg" class="img-fluid rounded-top w-100" alt="" />
                <div class="blog-date py-2" style={{fontSize:'10px'}}>
                    <i class="fa fa-calendar-alt me-1"></i> 16 November 2024
                </div>
            </div>
        </div>
    </div>
</div>

                    
            </div>
        </div>
    </div>
</div>
{/* <!-- About End --> */}


{/* <!-- Fact Counter --> */}
<div class="container-fluid counter py-5">
    <div class="container py-5">
        <div class="row col-xl-9 m-auto g-5">
            <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                <div class="counter-item">
                    <div class="counter-counting">
                        <span className="text-white fs-2 fw-bold">
                  <CountUp end={257} duration={2.5} />
                </span>
                        <span class="h1 fw-bold text-white">+</span>
                    </div>
                    <div class="counter-item-icon mx-auto">
                        <h4 class="text-white">Projects</h4>
                        <i class="fas fa-3x text-white">@</i>
                    </div>

                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp " data-wow-delay="0.4s">
                <div class="counter-item">
                    <div class="counter-counting">
                        <span className="text-white fs-2 fw-bold">
                  <CountUp end={75} duration={2.5} />
                </span>

                        <span class="h1 fw-bold text-white">+</span>
                    </div>
                    <div class="counter-item-icon mx-auto">
                        <h4 class="text-white">Clients</h4>
                        <i class="fas fa-3x text-white">Nos</i>
                    </div>

                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                <div class="counter-item">
                    <div class="counter-counting">
                        <span className="text-white fs-2 fw-bold">
                        <CountUp end={93.4} duration={2.5} decimals={1} />
                        </span>


                        <span class="h1 fw-bold text-white">+</span>
                    </div>
                    <div class="counter-item-icon mx-auto">
                        <h4 class="text-white">Revenue</h4>
                        <i class="fas fa-3x text-white">%</i>
                    </div>

                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                <div class="counter-item">
                    <div class="counter-counting">
                        <span className="text-white fs-2 fw-bold">
                        <CountUp end={87.2} duration={2.5} decimals={1} />
                        </span>


                        <span class="h1 fw-bold text-white">+</span>
                    </div>
                    <div class="counter-item-icon mx-auto">
                        <h4 class="text-white">Reviews</h4>
                        <i class="fas fa-3x text-white">%</i>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Fact Counter --> */}

<div class="container-fluid service bg-light overflow-hidden p-0">
    <div class="clientslide wow fadeInUp">

        <div class="container-fluid p-0">
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/crescent logo.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide"> 
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/AIIRMYCART.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/edilink.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/DFLv3.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/srbt.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/logo_dark.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/logoa-1.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/mz account.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/Nantech - Logo.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/TK MART LOGO.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/NENE LOGO PNG.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/VK Logo PNG.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/royal shelter.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide_itemlist">
                            <img src="assets/img/clients/nouveaux.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

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
                    {/* <h4 class="text-true-white font-m mb-2">About Us</h4>
                    <a href="./ktig_services.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Why Choose
                        KTIG</a>
                    <a href="./ktmc_page.html" class="font-s"><i class="fas fa-angle-right me-2"></i> About KTMC</a>
                    <a href="./goals_and_rules.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Goals
                        and Rules</a>
                    <a href="./goals_and_rules.html" class="font-s"><i class="fas fa-angle-right me-2"></i> Terms &
                        Conditions</a> */}
                         <h4 className="text-true-white font-m mb-2">About Us</h4>
                                      <a href="ktig_services" className="font-s"><i className="fas fa-angle-right me-2"></i> Why Choose KTIG</a>
                                      <a href="Ktmc" className="font-s"><i className="fas fa-angle-right me-2"></i> About KTMC</a>
                                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Goal and Rules</a>
                                      <a href="Goalandrules" className="font-s"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                </div>
            </div>




            <div class="col-md-6 col-lg-6 col-xl-2">
                <div class="footer-item d-flex flex-column">
                    <h4 class="text-true-white font-m mb-2">TRAINING</h4>
                         <a href="Technicaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Technical Training</a>
                                      <a href="Professionaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i>  Professional Training</a>
                                      <a href="Corporatetraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Training</a>
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
                    <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i> Faculty Training</a>
                    <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i> Future Education</a>
                    <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i> Finance Support</a>
                    <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i> Save Money</a>
                    <a href="#" class="font-s"><i class="fas fa-angle-right me-2"></i> Success Journey</a>


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


export default Ktmc;