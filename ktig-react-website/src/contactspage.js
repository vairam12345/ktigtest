import './contactpage.css'
import { useState } from 'react';
import axios from 'axios';

function Contactspage() {
    

//     const [formData, setFormData] = useState({name: '',email: '',phone: '',subject: '',service: '', business: ''});
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value
//       }));
//     };

//     /////Api trggered part
//     const [alertMessage, setAlertMessage] = useState('');
//     const [showAlert, setShowAlert] = useState(false);
//     const handleSubmit = async (e) => {
//       e.preventDefault(); 
//       setAlertMessage('Subject Submitted Successfully!');
//       setShowAlert(true);
//           setTimeout(() => {
//         setShowAlert(false);
//       }, 3000);
  
//       const payload = { name: formData.name, email: formData.email, phone: formData.phone, subject: formData.subject, service: formData.service, business: formData.business
//       };
// /////Api trggered part

//       console.log('Payload:', payload);
  
//       try {
//         const response = await fetch('http://3.110.119.143:8081/api/form/submit', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(payload),
//         });
  
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Success:', data);
//         } else {
//           console.error('Error:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       }
//     };
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    business: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://3.110.119.143:8081/Contact/submitforms', formData);
      console.log('Response:', response);
    } catch (error) {
      console.log('Error:', error);
    }
  };


/////Post API In contact Form


    return (
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
                        <div class="nav-item dropdown">
                            <a href="ktig_services" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                            <div class="dropdown-menu m-0">
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
                            <span class="text-body contactshadow" >Email: contact@ktig.in</span>
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
        {/* <div class="container-fluid contact_page bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth:'9000px'}}>
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active text-primary">Contact Us</li>
                </ol>
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">We Know Your Values</h4>
            </div>
        </div> */}
                        <div
                        className="container-fluid blogpage_page bg-breadcrumb"
                        style={{
                            backgroundImage: "url('assets/img/contactpage.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height:'19rem',
                            marginTop:'2rem'
                            

                        }}
                        >
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <ol style={{marginTop:'3rem'}}
                    className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                    data-wow-delay="0.3s"
                    >
                    {/* <li className="breadcrumb-item col-lg-10 m-auto  wow fadeInUp" style={{color:'yell'}}>
                        <a href="/">Blog</a>
                    </li> */}
                    <li className="breadcrumb-item active text-primary wow fadeInUp ">Blog</li>
                    </ol>
                    <h4
                    className="col-lg-10 m-auto  wow fadeInUp"
                    data-wow-delay="0.1s" style={{marginTop:'4rem',color:'white'}}
                    >
                    We Know Your Values
                    </h4>
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
    
    
        {/* <!-- Contact Start --> */}
        <div class="container-fluid contact py-5">
            <div class="container py-5">
                <div class="row group_contact g-5">
                    <div class="col-lg-10 m-auto h-100 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="text-center mx-auto py-5" style={{maxWidth:'800px'}}>
                            <h1 class="display-3 text-white text-capitalize mb-3">Get In Touch</h1>
                            <p class="mb-0 text-white" style={{fontFamily:'poppins'}}>Contact our skilled team today or email us at to learn how we can
                                design tailored solutions for your unique<br /> requirements.</p>
                        </div>
    
    
     
                        <div class="col-lg-12 fulladdresspage wow fadeInUp" data-wow-delay="0.4s"
                                style={{ visibility: 'visible',animationDelay: '0.4s',animationName: 'fadeInUp',}}>
                            <div class="row g-4">
                                <div class="col-lg-12 col-xl-4">
                                    <div class="d-inline-flex miniheight rounded mb-5 floating-box w-100 p-4">
                                        <i class="fas fa-map-marker-alt fa-2x text-secondary me-4"></i>
                                        <div>
                                            <p class="mb-0">53-2, Second Floor, MKP Colony Main St, Ganapathy, Coimbatore,
                                                Tamil Nadu 641006.</p>
                                        </div>
                                    </div>
                                </div>
                               
                                 <div class="col-lg-12 col-xl-4">
                                <div class="floating-box d-inline-flex miniheight rounded mb-5 w-100 p-4">
                                    <i class="fas fa-envelope fa-2x text-secondary me-4"></i>
                                    <div>
                                        <p class="mb-0">contact@ktig.in</p>
                                    </div>
                                </div>
                            </div>
                                <div class="col-lg-12 col-xl-4">
                            <div class="floating-box d-inline-flex miniheight mb-5 rounded w-100 p-4">
                                <i class="fa fa-phone-alt fa-2x text-secondary me-4"></i>
                                <div>
                                    <p class="mb-0">Call : [+91] 9600414760</p>
                                </div>
                            </div>
                        </div>

                            </div>
                        </div>
     


                        <form>
                            <div class="row g-4">
                                <div class="form_left btn-md-square rounded-circle"><i
                                        class="fas fa-map-marker-alt fa-2x"></i></div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-1" id="name" placeholder="Full Name"
                                          name="name"
                                          value={formData.name}
                                          onChange={handleChange}
                                        
                                        />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control border-1" id="email"
                                            placeholder="Email Address" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            
                                            
                                            />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="phone" class="form-control border-1" id="phone" placeholder="Contact" 
                                        
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        />
                                        <label for="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-1" id="subject" placeholder="Subject"
                                          name="subject"
                                          value={formData.subject}
                                          onChange={handleChange}
                                        
                                        
                                        />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <select  name="service"
                      className="form-control border-1"
                      value={formData.service}
                      onChange={handleChange}
                                            placeholder="Select Our Service">
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
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <select
                                        name="business"
                                        className="form-control border-1"
                                        value={formData.business}
                                        onChange={handleChange}
                                            placeholder="Group of Business">
                                            <option class="optinglist">Group of Business</option>
                                            <option class="optinglist">Finance</option>
                                            <option class="optinglist">Banking</option>
                                            <option class="optinglist">Course Training</option>
                                            <option class="optinglist">IT/ITES Services</option>
                                            <option class="optinglist">Content Writing</option>
                                            <option class="optinglist">Web design & Developemnt</option>
                                        </select>
                                    </div>
                                </div>
    
                            </div>
                            <div
                                class="col-lg-12 col-xl-12 d-flex align-items-center justify-content-center justify-content-lg-end ">
                                <div class="form_right btn-md-square rounded-circle">
                                    <i class="fa fa-phone-alt fa-2x"></i>
                                </div>
                            </div>
                        </form>
    
                        <div class="col-12">
                            <div class="col-md-12 col-lg-3 m-auto">
                                <button class=" btn-grad btn w-100 py-3" onClick={handleSubmit}>Submit Your Subject</button>
                            </div>
                        </div>
                         {/* <form onSubmit={handleSubmit}>
      <div className="form-floating">
        <input
          type="text"
          className="form-control border-1"
          id="name"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Your Name</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control border-1"
          id="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Your Email</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control border-1"
          id="phone"
          placeholder="Contact"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="phone">Your Phone</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control border-1"
          id="subject"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label htmlFor="subject">Subject</label>
      </div>
      <div className="form-floating">
        <select
          name="service"
          className="form-control border-1"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select Our Service</option>
          <option value="KTIG Groups">KTIG Groups</option>
          <option value="Banking solution">Banking solution</option>
          <option value="Finance solution">Finance solution</option>
          <option value="IT solution">IT solution</option>
          <option value="Non-IT solution">Non-IT solution</option>
          <option value="Sales & Ecommerce">Sales & Ecommerce</option>
          <option value="Training & Coaching">Training & Coaching</option>
          <option value="Marketing">Marketing</option>
        </select>
        <label htmlFor="service">Select Our Service</label>
      </div>
      <div className="form-floating">
        <select
          name="business"
          className="form-control border-1"
          value={formData.business}
          onChange={handleChange}
        >
          <option value="">Group of Business</option>
          <option value="Finance">Finance</option>
          <option value="Banking">Banking</option>
          <option value="Course Training">Course Training</option>
          <option value="IT/ITES Services">IT/ITES Services</option>
          <option value="Content Writing">Content Writing</option>
          <option value="Web design & Development">Web design & Development</option>
        </select>
        <label htmlFor="business">Group of Business</label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={()=>handleSubmit}>Submit</button>
    </form> */}
                    </div>
    
                </div>
            </div>
        </div>
        {/* <!-- Contact End -->
    
    
        <!-- Footer Start --> */}
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
                            {/* <a href="./technical_training.html" class="font-s"><i
                                    class="fas fa-angle-right me-2"></i>Technical Training</a>
                            <a href="./professional_training.html" class="font-s"><i class="fas fa-angle-right me-2"></i>
                                Professional Training</a>
                            <a href="./corporate_training.html" class="font-s"><i class="fas fa-angle-right me-2"></i>
                                Corporate Training</a> */}
                                 <a href="Technicaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Technical Training</a>
                                      <a href="Professionaltraining" className="font-s"><i className="fas fa-angle-right me-2"></i>  Professional Training</a>
                                      <a href="Corporatetraining" className="font-s"><i className="fas fa-angle-right me-2"></i> Corporate Training</a>
                        </div>
                    </div>
    
                    <div class="col-md-6 col-lg-6 col-xl-2">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-true-white font-m mb-2">Services</h4>
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
        {/* <!-- Footer End --> */}
    
    
    
        {/* <!-- Back to Top --> */}
        <a href="#" class="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>
    
    
        {/* <!-- JavaScript Libraries -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    
    
        <!-- Template Javascript -->
        <script src="js/main.js"></script> */}
    
    </div>
    );
  }
  
  export default Contactspage;
  