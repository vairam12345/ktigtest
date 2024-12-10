import './Achievement.css'
function Achievement() {
  return (

<div>

{/* <!-- Spinner Start --> */}
{/* <div id="spinner"
    class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</div> */}
{/* <!-- Spinner End --> */}

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
                {/* <a href="" class="nav-item nav-link">Investment</a> */}

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
{/* <div class="container-fluid achivement_page bg-breadcrumb">
    <div class="container text-center py-5" style={{maxWidth:'900px'}}>
        <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active text-primary">Achievement</li>
        </ol>
        <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Until you succeed, wait for your
            chance</h4>
    </div>
</div> */}
<div
    class="container-fluid achivement_page bg-breadcrumb"
    style={{
        backgroundImage: "url('assets/img/achive_page.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height:'22rem',
       
        
    }}
>
    <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
        <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"  style={{marginTop:'5rem'}}>
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active text-primary">Achievement</li>
        </ol>
        <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s" style={{marginTop:'4rem'}}>
            Until you succeed, wait for your chance
        </h4>
    </div>
</div>

{/* <!-- Header End --> */}

{/* <!-- Modal Search Start --> */}
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


{/* <!-- Products Start --> */}
<div class="container-fluid achivementpage py-5">
    <div class="container py-5">
        <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>

            <h1 class="display-3 text-white mb-3">KTIG Goals and Rules</h1>
            <p class="text-white">Milestones of Excellence: KTIG's Journey of Impact
                Transforming Visions into Reality, One Achievement at a Time
                <br />(OR)<br />
                KTIG Success Stories: Building Tomorrow's Legacy
                Where Innovation Meets Excellence - Our Journey of <br />Transformative Achievements
            </p>
        </div>
        <div class="row g-4 justify-content-center">
            <div class="service-item col-6 rounded p-4 mb-0">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex">
                            <div class="pe-4">
                                {/* <div class="service-btn"><i class="fas fa-project-diagram text-white fa-2x"></i> */}
                                <div class="service-btn">
                            {/* <i class="fas fa-project-diagram text-white fa-2x"></i> */}
                            {/* <img src="assets/img/icons/shield.png" alt="Image Description" class="your-image-class" style={{width:'40px',height:'40px'}}/> */}
                            <img src="assets/img/icons/shield.png" alt="Image Description" class="moving-image" style= {{width:'40px',height:'40px'}} />



                                </div>
                            </div>
                            <div class="service-content">

                                <p class="small_caption">Success journey of the year</p>
                                <p class="mb-0 text-white">
                                    At KTIG, our success is measured by our clients' achievements. Through our
                                    innovative banking solutions, we've helped financial institutions reduce
                                    processing times by 60% and enabled hundreds of small businesses to access
                                    seamless funding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service-item col-6 rounded p-4 mb-0">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex">
                            <div class="pe-4">
                                <div class="service-btn">
                                {/* <i class="fas fa-project-diagram text-white fa-2x"></i> */}
                                {/* <img src="assets/img/icons/shield.png" alt="Image Description" class="your-image-class" style={{width:'40px',height:'40px'}}/> */}
                                <img src="assets/img/icons/shield.png" alt="Image Description" class="moving-image" style= {{width:'40px',height:'40px'}} />

                                </div>
                            </div>
                            <div class="service-content">

                                <p class="small_caption">Success journey of the year</p>
                                <p class="mb-0 text-white">
                                    BNR Cogniitec's technological interventions have driven efficiency
                                    improvements of up to 40% for manufacturing clients, while our process
                                    optimization solutions have achieved cost savings exceeding 35% for enterprises.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service-item col-6 rounded p-4 mb-0">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex">
                            <div class="pe-4">
                                <div class="service-btn">
                                {/* <i class="fas fa-project-diagram text-white fa-2x"></i> */}
                                {/* <img src="assets/img/icons/shield.png" alt="Image Description" class="your-image-class" style={{width:'40px',height:'40px'}}/> */}
                                <img src="assets/img/icons/shield.png" alt="Image Description" class="moving-image" style= {{width:'40px',height:'40px'}} />

                                </div>
                            </div>
                            <div class="service-content">

                                <p class="small_caption">Success journey of the year</p>
                                <p class="mb-0 text-white">
                                    BR Academy stands proud with over 1,000 trained professionals and an 85%
                                    placement success rate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service-item col-6 rounded p-4 mb-0">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex">
                            <div class="pe-4">
                                <div class="service-btn">
                                {/* <i class="fas fa-project-diagram text-white fa-2x">
                                </i> */}
                                {/* <img src="assets/img/icons/shield.png" alt="Image Description" class="your-image-class" style={{width:'40px',height:'40px'}}/> */}
                                <img src="assets/img/icons/shield.png" alt="Image Description" class="moving-image" style= {{width:'40px',height:'40px'}} />

                                </div>
                            </div>
                            <div class="service-content">

                                <p class="small_caption">Success journey of the year</p>
                                <p class="mb-0 text-white">
                                    Our e-commerce transformations have boosted client revenues by up to 200%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-item col-6 rounded p-4 mb-0">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex">
                            <div class="pe-4">
                                <div class="service-btn">   
                                {/* <i class="fas fa-project-diagram text-white fa-2x"></i> */}
                                {/* <img src="assets/img/icons/shield.png"  class="your-image-class" style={{width:'40px',height:'40px'}}/> */}
                                <img src="assets/img/icons/shield.png" alt="Image Description" class="moving-image" style= {{width:'40px',height:'40px'}} />

                                </div>
                            </div>
                            <div class="service-content">
                                <p class="small_caption">Success journey of the year</p>
                                <p class="mb-0 text-white">
                                    Our marketing campaigns consistently deliver above-industry ROI. With a 90%
                                    client retention rate across all divisions, we continue to strengthen businesses
                                    through integrated technology, training, and strategic solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
{/* <!-- Products End --> */}


{/* <!-- Footer Start --> */}
<div class="container-fluid footer wow fadeIn" data-wow-delay="0.2s">
<section className="footervideobg" id="section_1">
      <div className="footer-section-overlay"></div>
      <div className="video-wrap">
      <video autoPlay loop muted className="custom-video" poster="">
          <source src="assets/video/footerbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
  
             </div>
          </section>
    <div class="content container py-5">

        <div class="row g-5 align-items-center">
            <div class="col-lg-12">
                <div class="position-relative mb-3 mx-auto py3">
                    {/* <img src="assets/img/ktig_white.png" alt="KTIG"/> */}
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
{/* <!-- Footer End --> */}


{/* <!-- Back to Top --> */}
<a href="#" class="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>


</div>
  );
}




export default Achievement;





