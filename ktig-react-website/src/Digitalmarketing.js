
function Digitalmarketing(){
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
    <div class="container-fluid terms overflow-hidden py-5">
        <div class="container py-5">
            <div class="row g-5">

                <div class="col-xl-9 m-auto wow fadeInRight" data-wow-delay="0.2s">

                    <div class="about-item text-center">

                        <h1 class="mb-4 text-white">Digital Marketing

                        </h1>
                        <p class="text-white text-left" >Drive your online presence and engagement through our results-driven digital marketing strategies. We create integrated digital campaigns that combine SEO, content marketing, social media management, and performance marketing to achieve your business objectives. Our data-driven approach ensures optimal ROI and measurable results across all digital channels.

                        </p>
                        <p class="text-white text-left">Our digital marketing experts employ the latest tools and technologies to enhance your brand's online visibility and engagement. We provide comprehensive analytics and reporting, continual optimization, and strategic content development to ensure your digital marketing efforts deliver sustained growth and market leadership.</p>
                    </div>


                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}




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
                        <a href="Ktmc" class="font-s"><i class="fas fa-angle-right me-2"></i> About KTMC</a>
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
                        {/* <a href="./business.html" class="font-s"><i class="fas fa-angle-right me-2"></i>Business
                            Development</a>
                        <a href="./branding.html" class="font-s"><i class="fas fa-angle-right me-2"></i>Branding</a>
                        <a href="./banking_finance.html" class="font-s"><i
                                class="fas fa-angle-right me-2"></i>Banking/Finance</a>
                        <a href="./digital_marketing.html" class="font-s"><i class="fas fa-angle-right me-2"></i>Digital
                            Marketing</a>
                        <a href="./ites_services.html" class="font-s"><i class="fas fa-angle-right me-2"></i>IT/ITES
                            Services</a>
                        <a href="./sales_promotion.html" class="font-s"><i
                                class="fas fa-angle-right me-2"></i>Sales/Promotions</a> */}
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


export default Digitalmarketing;