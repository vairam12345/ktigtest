// import AboutPage from "./Aboutpage";
// import Mainpage from "./Homepage";
// import Landingpage from "./Landingpage";


// function App() {
//   return (
// <div>

//   {/* <Landingpage /> */}
//     {/* <Mainpage /> */}

//     {/* <AboutPage /> */}
    

// </div>
//   );
// }

// export default App;


////19/11/2024

//About page inprogress

////19/11/2024
// import Achievement from "./Achievement";
// import Blogpage from "./Blogpage";
// import contactpage from "./contactspage"
// import Bankingsolution from "./Bankingsolution";
// // import Financesolution from "./Financesolution"

// // import Itsolution from "./Itsolutionpage"
// // import Nonitsolution from "./Nonitsolution";

// // function App() {
// //   return (
// //     <div>
     


// // {/* < Bankingsolution /> */}

// // {/* < Financesolution /> */}
// // {/* < Itsolution /> */}


// // < Nonitsolution />




// //     </div>
// //   );
// // }

// // export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Homepage";
import Landingpage from "./Landingpage";
import AboutPage from "./Aboutpage";
import Achievement from "./Achivement"
import Blogpage from "./Blogpage";
import Blogpage1 from "./contactspage";
import Bankingsolution from "./Bankingsolution";
import Itsolution from "./Itsolutionpage"
import Nonitsolution from "./Nonitsolution";
import Financesolution from "./Financesolution"
import SaleEcommerce from "./salesandecommerce"
import Trainingandcoaching from "./Trainingandcoaching";
import Marketing from "./Marketing";
import Ktmc from "./Ktmcpage";
import Goalandrules from "./Goalandrules";
import Technicaltraining from "./Technicaltraining"
import Busineesdevelopment from "./Businessdevelopement"
import Branding from "./Branding";
import Bankandfinance from "./Bankandfinance";
import Digitalmarketing from "./Digitalmarketing";
import Itites from "./Itites";
import Digitalmarketing1 from './salesandpormotion'
import Professionaltraining from "./Professionaltraining";
import Corporatetraining from "./Corporatetraining";
import Corporateoffice from "./Corporateoffice";
import Adminpage from "./Adminpage";
import Investmentpage from "./Investmentpage";
import InvoiceForm from "./Bankinvoice";

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Mainpage />} />
          <Route path="/ktig_services" element={<Landingpage />} />
          <Route path="/Aboutpage" element={<AboutPage />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/Blogpage" element={<Blogpage />} />
          <Route path="/Contactpage" element={<Blogpage1 />} />
          <Route path="/Bankingsolution" element={<Bankingsolution />} />
          <Route path="/Financesolution" element={<Financesolution />} />
          <Route path="/Itsolution" element={<Itsolution />} />
          <Route path="/Nonitsolution" element={<Nonitsolution />} />
          <Route path="/SaleEcommerce" element={<SaleEcommerce />} />
          <Route path="/Training&coaching" element={<Trainingandcoaching />} />
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/Ktmc" element={<Ktmc />} />
          <Route path="/Goalandrules" element={<Goalandrules />} />
          <Route path="/Technicaltraining" element={<Technicaltraining />} />
          <Route path="/Busineesdevelopment" element={<Busineesdevelopment />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Bankingandfinance" element={<Bankandfinance />} />
          <Route path="/Digitalmarketing" element={<Digitalmarketing />} />
          <Route path="/Itites" element={<Itites />} />
          <Route path="/saledandpromotion" element={<Digitalmarketing1 />} />
          <Route path="/Professionaltraining" element={<Professionaltraining />} />
          <Route path="/Corporatetraining" element={<Corporatetraining />} />
          <Route path="/Corporateoffice" element={<Corporateoffice />} />
          <Route path="/Adminpage" element={<Adminpage />} />
          {/* <Route path="/Investmentpage" element={<Investmentpage />} /> */}

          <Route path="/InvoiceForm" element={<InvoiceForm />} />


          


          




          

          
          
          
          






          





          






        </Routes>
      </div>
    </Router>
  );
}

export default App;
