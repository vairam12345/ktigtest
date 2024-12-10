// import React, { useState } from "react";
// import EventPage from "./Adminpage"; // Assuming EventPage is in the same directory

// const LoginForm = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ username: "", password: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Dummy validation for simplicity
//     if (credentials.username === "admin" && credentials.password === "password") {
//       onLogin();
//     } else {
//       alert("Invalid username or password!");
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         background: "#f0f2f5",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           width: "300px",
//           padding: "20px",
//           background: "white",
//           borderRadius: "8px",
//           boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
//         <label style={{ display: "block", marginBottom: "10px" }}>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={credentials.username}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               margin: "5px 0 15px 0",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//         </label>
//         <label style={{ display: "block", marginBottom: "10px" }}>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               margin: "5px 0 15px 0",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//         </label>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             background: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// const Login = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <EventPage />}
//     </div>
//   );
// };

// export default Login;











// import React, { useState, useEffect } from "react";
// import axios from "axios";


// // Form Component for Event 1 (Event News)
// const EventForm = ({ onSubmit, formType }) => {
//   const [formData, setFormData] = useState({
//     image: null,
//     title: "",
//     description: "",
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.image && formData.title && formData.description) {
//       const formDataToSend = new FormData();
//       formDataToSend.append("image", formData.image);
//       formDataToSend.append("title", formData.title);
//       formDataToSend.append("description", formData.description);

//       // Post API call based on form type
//       const apiUrl =
//         formType === "form1"
//           ? " http://3.111.193.110:8081/api/images/upload"
//           : " http://3.111.193.110:8081/api/blogimages/upload";

//       axios
//         .post(apiUrl, formDataToSend)
//         .then((response) => {
//           onSubmit(formType, {
//             image: response.data.imageUrl, // assuming response contains image URL
//             title: formData.title,
//             description: formData.description,
//           });
//           setFormData({ image: null, title: "", description: "" }); // Reset form
//         })
//         .catch((error) => {
//           console.error("Error uploading image:", error);
//         });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         background: "rgb(253 244 244)",
//         padding: "20px",
//         borderRadius: "8px",
//         border: "1px solid #ddd",
//       }}
//     >
//       <label>
//         Upload Image:
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           required
//           style={{ margin: "10px 0", padding: "10px", width: "100%" }}
//         />
//       </label>
//       <br />
//       <label>
//         Title:
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleInputChange}
//           placeholder="Enter event title"
//           required
//           style={{
//             width: "100%",
//             margin: "10px 0",
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           placeholder="Enter event description"
//           rows="5"
//           required
//           style={{
//             width: "100%",
//             margin: "10px 0",
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </label>
//       <br />
//       <button
//         type="submit"
//         style={{
//           background: "#007bff",
//           color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// // EventPage Component with Slider
// const EventPage = () => {
//   const [form1Events, setForm1Events] = useState([]);
//   const [form2Events, setForm2Events] = useState([]);
//   const [currentIndex1, setCurrentIndex1] = useState(0);
//   const [currentIndex2, setCurrentIndex2] = useState(0);

//   // Fetch events data for both forms (GET API)
//   useEffect(() => {
//     // Load from sessionStorage if events exist
//     const savedForm1Events = JSON.parse(sessionStorage.getItem("form1Events")) || [];
//     const savedForm2Events = JSON.parse(sessionStorage.getItem("form2Events")) || [];

//     setForm1Events(savedForm1Events);
//     setForm2Events(savedForm2Events);
//   }, []);

//   const handleEventSubmit = (formType, eventData) => {
//     if (formType === "form1") {
//       setForm1Events((prevEvents) => {
//         const updatedEvents = [...prevEvents, eventData];
//         sessionStorage.setItem("form1Events", JSON.stringify(updatedEvents)); // Store in sessionStorage
//         return updatedEvents;
//       });
//     } else if (formType === "form2") {
//       setForm2Events((prevEvents) => {
//         const updatedEvents = [...prevEvents, eventData];
//         sessionStorage.setItem("form2Events", JSON.stringify(updatedEvents)); // Store in sessionStorage
//         return updatedEvents;
//       });
//     }
//   };

//   // Handle next and previous for slider
//   const goToNext1 = () => {
//     setCurrentIndex1((prevIndex) => (prevIndex + 1) % form1Events.length);
//   };
//   const goToPrev1 = () => {
//     setCurrentIndex1((prevIndex) => (prevIndex - 1 + form1Events.length) % form1Events.length);
//   };

//   const goToNext2 = () => {
//     setCurrentIndex2((prevIndex) => (prevIndex + 1) % form2Events.length);
//   };
//   const goToPrev2 = () => {
//     setCurrentIndex2((prevIndex) => (prevIndex - 1 + form2Events.length) % form2Events.length);
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "auto" }}>
//       <a href="./index.html" className="navbar-brand p-0">
//         <h1 className="text-primary">
//           <img
//             src="assets/img/logo/ktig_logo.png"
//             alt="KTIG"
//             style={{ width: "300px", height: "120px" }}
//           />
//         </h1>
//       </a>
//       <h1 style={{ textAlign: "center", color: "#bfb2ff" }}>KTIG Admin</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           gap: "20px",
//           marginBottom: "40px",
//         }}
//       >
//         {/* Left Form */}
//         <div style={{ flex: 1, maxWidth: "48%" }}>
//           <h2 style={{ color: "#ff8d8d" }}>Event News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form1" />
//         </div>

//         {/* Right Form */}
//         <div style={{ flex: 1, maxWidth: "48%" }}>
//           <h2 style={{ color: "#b8e03d" }}>Blog News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form2" />
//         </div>
//       </div>

//       {/* Slider for Event Section 1 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ color: "rgb(255, 141, 141)" }}>Blog News</h2>
//         {form1Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "-80px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Prev
//             </button>
//             <img
//                 src={` http://3.111.193.110:8081${form1Events[currentIndex1].image}`} 
//               style={{ width: "60%", height: "auto", borderRadius: "8px" }}
//             />
//              <h3 style={{ color: "white", marginTop: "10px" }}>
//                 {form1Events[currentIndex1].title}
//               </h3>
//               <p style={{ color: "white", marginTop: "5px" }}>
//                 {form1Events[currentIndex1].description}
//               </p>
//               <button style={{background:'yellow'}}>Delete</button>

//             <button
//               onClick={goToNext1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "160px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Next
//             </button>
//           </div>
//         ) : (
//           <p>No events available</p>
//         )}
//       </div>

//       {/* Slider for Event Section 2 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ color: "rgb(184, 224, 61)" }}>Blog News</h2>
//         {form2Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "-80px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Prev
//             </button>
//             <img
//                 src={` http://3.111.193.110:8081${form2Events[currentIndex2].image}`} // Adjust to full URL
//               style={{ width: "60%", height: "auto", borderRadius: "8px" }}
//             />
//             <h3 style={{ color: "white", marginTop: "10px" }}>
//                 {form2Events[currentIndex2].title}
//               </h3>
//               <p style={{ color: "white", marginTop: "5px" }}>
//                 {form2Events[currentIndex2].description}
//               </p>
//               <button style={{background:'yellow'}}>Delete</button>
//             <button
//               onClick={goToNext2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "160px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Next
//             </button>
//           </div>
//         ) : (
//           <p>No events available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventPage;




////////09/12/2024



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Form Component for Event 1 (Event News)
// const EventForm = ({ onSubmit, formType }) => {
//   const [formData, setFormData] = useState({
//     image: null,
//     title: "",
//     description: "",
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.image && formData.title && formData.description) {
//       const formDataToSend = new FormData();
//       formDataToSend.append("image", formData.image);
//       formDataToSend.append("title", formData.title);
//       formDataToSend.append("description", formData.description);

//       // Post API call based on form type
//       const apiUrl =
//         formType === "form1"
//           ? " http://3.111.193.110:8081/api/images/upload"
//           : " http://3.111.193.110:8081/api/blogimages/upload";

//       axios
//         .post(apiUrl, formDataToSend)
//         .then((response) => {
//           onSubmit(formType, {
//             image: response.data.imageUrl, // assuming response contains image URL
//             title: formData.title,
//             description: formData.description,
//           });
//           setFormData({ image: null, title: "", description: "" }); // Reset form
//         })
//         .catch((error) => {
//           console.error("Error uploading image:", error);
//         });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         background: "rgb(253 244 244)",
//         padding: "20px",
//         borderRadius: "8px",
//         border: "1px solid #ddd",
//       }}
//     >
//       <label>
//         Upload Image:
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           required
//           style={{ margin: "10px 0", padding: "10px", width: "100%" }}
//         />
//       </label>
//       <br />
//       <label>
//         Title:
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleInputChange}
//           placeholder="Enter event title"
//           required
//           style={{
//             width: "100%",
//             margin: "10px 0",
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           placeholder="Enter event description"
//           rows="5"
//           required
//           style={{
//             width: "100%",
//             margin: "10px 0",
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </label>
//       <br />
//       <button
//         type="submit"
//         style={{
//           background: "#007bff",
//           color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// // EventPage Component with Slider
// const EventPage = () => {
//   const [form1Events, setForm1Events] = useState([]);
//   const [form2Events, setForm2Events] = useState([]);
//   const [form3Events, setForm3Events] = useState([]);

//   const [currentIndex1, setCurrentIndex1] = useState(0);
//   const [currentIndex2, setCurrentIndex2] = useState(0);
//   const [currentIndex3, setCurrentIndex3] = useState(0);


//   // Fetch events data for both forms (GET API)
//   useEffect(() => {
//     const savedForm1Events = JSON.parse(sessionStorage.getItem("form1Events")) || [];
//     const savedForm2Events = JSON.parse(sessionStorage.getItem("form2Events")) || [];
//     const savedForm3Events = JSON.parse(sessionStorage.getItem("form3Events")) || [];


//     setForm1Events(savedForm1Events);
//     setForm2Events(savedForm2Events);
//     setForm3Events(savedForm3Events);

//   }, []);

//   const handleEventSubmit = (formType, eventData) => {
//     if (formType === "form1") {
//       setForm1Events((prevEvents) => {
//         const updatedEvents = [...prevEvents, eventData];
//         sessionStorage.setItem("form1Events", JSON.stringify(updatedEvents)); // Store in sessionStorage
//         return updatedEvents;
//       });
//     } else if (formType === "form2") {
//       setForm2Events((prevEvents) => {
//         const updatedEvents = [...prevEvents, eventData];
//         sessionStorage.setItem("form2Events", JSON.stringify(updatedEvents)); // Store in sessionStorage
//         return updatedEvents;
//       });
//     }

//     else if (formType === "form3") {
//       setForm2Events((prevEvents) => {
//         const updatedEvents = [...prevEvents, eventData];
//         sessionStorage.setItem("form3Events", JSON.stringify(updatedEvents)); // Store in sessionStorage
//         return updatedEvents;
//       });
//     }


//   };

//   // Handle next and previous for slider
//   const goToNext1 = () => {
//     setCurrentIndex1((prevIndex) => (prevIndex + 1) % form1Events.length);
//   };
//   const goToPrev1 = () => {
//     setCurrentIndex1((prevIndex) => (prevIndex - 1 + form1Events.length) % form1Events.length);
//   };

//   const goToNext2 = () => {
//     setCurrentIndex2((prevIndex) => (prevIndex + 1) % form2Events.length);
//   };
//   const goToPrev2 = () => {
//     setCurrentIndex2((prevIndex) => (prevIndex - 1 + form2Events.length) % form2Events.length);
//   };

  
//   // // Handle delete event
//   const handleDelete = (formType, index) => {
//     if (formType === "form1") {
//       const updatedEvents = form1Events.filter((_, i) => i !== index);
//       setForm1Events(updatedEvents);
//       sessionStorage.setItem("form1Events", JSON.stringify(updatedEvents));
//     } else if (formType === "form2") {
//       const updatedEvents = form2Events.filter((_, i) => i !== index);
//       setForm2Events(updatedEvents);
//       sessionStorage.setItem("form2Events", JSON.stringify(updatedEvents));
//     }
//   };


//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "auto" }}>
//       <a href="./index.html" className="navbar-brand p-0">
//         <h1 className="text-primary">
//         <img src="assets/img/logo/ktig_logo.png" alt="KTIG" style={{ maxHeight:'250px' }} />

//         </h1>
//       </a>
//       <h1 style={{ textAlign: "center", color: "#bfb2ff" }}>KTIG Admin</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           gap: "20px",
//           marginBottom: "40px",
//         }}
//       >
//         {/* Left Form */}
//         {/* <div style={{ flex: 1, maxWidth: "38%" }}>
//           <h2 style={{ color: "#ff8d8d" }}>Event News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form1" />
//         </div> */}

//         {/* Right Form */}
//         {/* <div style={{ flex: 1, maxWidth: "38%" }}>
//           <h2 style={{ color: "#b8e03d" }}>Blog News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form2" />
//         </div> */}

// <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "20px" }}>
//   {/* Left Form */}
//   <div style={{ width: "100%", maxWidth: "500px", marginBottom: "20px" }}>
//     <h2 style={{ color: "#ff8d8d" }}>Event News</h2>
//     <EventForm onSubmit={handleEventSubmit} formType="form1" />
//   </div>

//   {/* Right Form */}
//   <div style={{ width: "100%", maxWidth: "500px", marginBottom: "20px" }}>
//     <h2 style={{ color: "#b8e03d" }}>Blog News</h2>
//     <EventForm onSubmit={handleEventSubmit} formType="form2" />
//   </div>

//   {/* Another Form */}
//   {/* <div style={{ width: "100%", maxWidth: "500px" }}>
//     <h2 style={{ color: "#b8e03d" }}>Investors</h2>
//     <EventForm onSubmit={handleEventSubmit} formType="form2" />
//   </div> */}
// </div>


//       </div>
    

      

//       {/* Slider for Event Section 1 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ color: "rgb(255, 141, 141)" }}>Event News</h2>
//         {form1Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "-80px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Prev
//             </button>
//             <img
//               src={` http://3.111.193.110:8081${form1Events[currentIndex1].image}`}
//               style={{ width: "60%", height: "auto", borderRadius: "8px" }}
//             />
//             <h3 style={{ color: "white" }}>
//               {form1Events[currentIndex1].title}
//             </h3>
//             <p style={{ color: "white" }}>{form1Events[currentIndex1].description}</p>
//             <button
//               onClick={() => handleDelete("form1", currentIndex1)}
//               style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 16px",
//                 cursor: "pointer",
//                 borderRadius: "4px",
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "10px",
//               }}
//             >
//               Delete
//             </button>
//             <button
//               onClick={goToNext1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "-80px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Next
//             </button>
//           </div>
//         ) : (
//           <p>No events available.</p>
//         )}
//       </div>

//       {/* Slider for Blog Section 2 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ color: "#84e71c" }}>Blog News</h2>
//         {form2Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "-80px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Prev
//             </button>
//             <img
//               src={` http://3.111.193.110:8081${form2Events[currentIndex2].image}`}
//               style={{ width: "60%", height: "auto", borderRadius: "8px" }}
//             />
//             <h3 style={{ color: "white" }}>
//               {form2Events[currentIndex2].title}
//             </h3>
//             <p style={{ color: "white" }}>{form2Events[currentIndex2].description}</p>
//             <button
//               onClick={() => handleDelete("form2", currentIndex2)}
//               style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 16px",
//                 cursor: "pointer",
//                 borderRadius: "4px",
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "10px",
//               }}
//             >
//               Delete
//             </button>
//             <button
//               onClick={goToNext2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "-80px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Next
//             </button>
//           </div>
//         ) : (
//           <p>No blog events available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventPage;









import React, { useState, useEffect } from "react";
import axios from "axios";

import ConatctDataTable from '../src/Contacdatatable'

import './Login.css'
// Form Component for Event 1 (Event News)
const EventForm = ({ onSubmit, formType }) => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.image && formData.title && formData.description) {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);

      const apiUrl =
        formType === "form1"
          ? " http://3.111.193.110:8081/api/images/upload"
          : " http://3.111.193.110:8081/api/blogimages/upload";

      axios
        .post(apiUrl, formDataToSend)
        .then((response) => {
          onSubmit(formType, response.data);
          setFormData({ image: null, title: "", description: "" });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "rgb(253 244 244)",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #ddd",
      }}
    >
      <label>
        Upload Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          style={{ margin: "10px 0", padding: "10px", width: "100%" }}
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter event title"
          required
          style={{
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter event description"
          rows="5"
          required
          style={{
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </label>
      <br />
      <button
        type="submit"
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

const EventPage = ( ) => {
  const [form1Events, setForm1Events] = useState([]);
  const [form2Events, setForm2Events] = useState([]);
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
  };

// State to manage which slide is being shown
const [currentSlide, setCurrentSlide] = useState(0);

// Handle Next Slide
const handleNextSlide = (totalSlides) => {
  setCurrentSlide((prev) => (prev + 1) % totalSlides);
};

// Handle Previous Slide
const handlePrevSlide = (totalSlides) => {
  setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
};





  useEffect(() => {
    // Fetch events from the backend
    axios.get("  http://3.111.193.110:8081/api/images/images").then((response) => {
      setForm1Events(response.data);
    });
    axios.get(" http://3.111.193.110:8081/api/blogimages/images").then((response) => {
      
      setForm2Events(response.data);
    });
  }, []);

  const handleEventSubmit = (formType, eventData) => {
    if (formType === "form1") {
      setForm1Events((prevEvents) => [...prevEvents, eventData]);
    } else if (formType === "form2") {
      setForm2Events((prevEvents) => [...prevEvents, eventData]);
    }
  };

  const handleDelete = (formType, id) => {
    const apiUrl =
      formType === "form1"  
        ? ` http://3.111.193.110:8081/api/images/images/${id}`
        : ` http://3.111.193.110:8081/api/blogimages/images/${id}`;

    axios
      .delete(apiUrl)
      .then(() => {
        if (formType === "form1") {
          setForm1Events((prevEvents) => prevEvents.filter((event) => event._id !== id));
        } else if (formType === "form2") {
          setForm2Events((prevEvents) => prevEvents.filter((event) => event._id !== id));
        }
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };

  return (
    // <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "auto" }}>
    //   <h1 style={{ textAlign: "center", color: "#bfb2ff" }}>KTIG Admin</h1>
    //   <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
    //     <div style={{ flex: 1 }}>
    //       <h2 style={{ color: "#ff8d8d" }}>Event News</h2>
    //       <EventForm onSubmit={handleEventSubmit} formType="form1" />
    //     </div>
    //     <div style={{ flex: 1 }}>
    //       <h2 style={{ color: "#84e71c" }}>Blog News</h2>
    //       <EventForm onSubmit={handleEventSubmit} formType="form2" />
    //     </div>
    //   </div>
    //   <div>
    //     <h2 style={{ color: "#ff8d8d" ,marginLeft:'15rem'}}>Event News</h2>
    //     {form1Events.length > 0 ? (
    //       form1Events.map((event) => (
    //         <div key={event._id}>
    //           {/* <img src={event.image} alt={event.title} /> */}
    //           <div key={event._id}>
    //         <img src={` http://3.111.193.110:8081${event.imagePath}`}   style={{ width: "30%", height: "auto", borderRadius: "8px" }} />
    //       <p>{event.title}</p>
    //       <p>{event.description}</p>
    //       </div>

    //           <button onClick={() => handleDelete("form1", event._id)}>Delete</button>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No events available.</p>
    //     )}
    //   </div>
    //   <div>
    //     <h2 style={{ color: "#84e71c" }}>Blog News</h2>
    //     {form2Events.length > 0 ? (
    //       form2Events.map((event) => (
    //         <div key={event._id}>
    //          {/* <img src= {event.image} alt={event.title} />  */}
    //          <div key={event._id}>
    //         <img src={` http://3.111.193.110:8081${event.imagePath}`}   style={{ width: "30%", height: "auto", borderRadius: "8px" }} />
    //       <p>{event.title}</p>
    //       <p>{event.description}</p>
    //       </div>

             
    //           <button onClick={() => handleDelete("form2", event._id)}>Delete</button>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No blogs available.</p>
    //     )}
    //   </div>
    // </div>
<div className="dashboard-container">
  <h1 className="dashboard-title">KTIG Admin Dashboard</h1>

  <div className="form-section">
    <div className="form-container">
      <h2 className="form-title event-title">Event News</h2>
      <EventForm onSubmit={handleEventSubmit} formType="form1" />
    </div>
    <div className="form-container">
      <h2 className="form-title blog-title">Blog News</h2>
      <EventForm onSubmit={handleEventSubmit} formType="form2" />
    </div>
  </div>

  <div className="events-section">
    <h2 className="section-title event-title">Event News</h2>
    <div className="card-container">
      {form1Events.length > 0 ? (
        form1Events.map((event) => (
          <div key={event._id} className="card">
            <img 
              src={` http://3.111.193.110:8081${event.imagePath}`} 
              alt={event.title} 
              className="card-image"
            />
            <h3 className="card-title">{event.title}</h3>
            <p className="card-description">{event.description}</p>
            <button 
              className="delete-button event-button"
              onClick={() => handleDelete("form1", event._id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="no-data">No events available.</p>
      )}
    </div>
  </div>

  <div className="blogs-section">
    <h2 className="section-title blog-title">Blog News</h2>
    <div className="card-container">
      {form2Events.length > 0 ? (
        form2Events.map((event) => (
          <div key={event._id} className="card">
            <img 
              src={` http://3.111.193.110:8081${event.imagePath}`} 
              alt={event.title} 
              className="card-image"
            />
            <h3 className="card-title">{event.title}</h3>
            <p className="card-description">{event.description}</p>
            <button 
              className="delete-button blog-button"
              onClick={() => handleDelete("form2", event._id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="no-data">No blogs available.</p>
      )}
    </div>

  </div>
 
  <div className="contact-data-table-section">
    <ConatctDataTable />
  </div>
</div>





    
  
  );
};

export default EventPage;
