// import React, { useState } from "react";

// // Form Component for Event 1
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
//     if (formData.image && formData.title && formData.description ) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         onSubmit(formType, {
//           image: reader.result,
//           title: formData.title,
//           description: formData.description,
//         });
//       };
//       reader.readAsDataURL(formData.image);
//     }
//     // Reset form
//     setFormData({ image: null, title: "", description: "" });
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
//         <h style={{fontSize:'32px'}}></h>
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

//   // Handle form submission for both event forms
//   const handleEventSubmit = (formType, eventData) => {
//     if (formType === "form1") {
//       setForm1Events((prevEvents) => [...prevEvents, eventData]);
//     } else if (formType === "form2") {
//       setForm2Events((prevEvents) => [...prevEvents, eventData]);
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
//          <a href="./index.html" class="navbar-brand p-0">
//             <h1 class="text-primary"><img src="assets/img/logo/ktig_logo.png" alt="KTIG" style={{width:'300px',height:'120px'}} /></h1>
//         </a>
//       <h1 style={{ textAlign: "center",color:'#bfb2ff' }}>KTIG Admin</h1>
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
//           <h2 style={{color:'#ff8d8d'}}>Blog News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form1" />
//         </div>

//         {/* Right Form */}
//         <div style={{ flex: 1, maxWidth: "48%" }}>
//           <h2 style={{color:'#b8e03d'}}>Event News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form2" />
//         </div>
//       </div>

//       {/* Slider for Event Section 1 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{color:'rgb(255, 141, 141)'}}>Blog News</h2>
//         {form1Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",

//               }}
//             >
//               &lt;
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <img
//                 src={form1Events[currentIndex1].image}
//                 alt={form1Events[currentIndex1].title}
//                 style={{
//                   maxWidth: "80%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <h3 style={{color:'white'}}>{form1Events[currentIndex1].title}</h3>
//               <p>{form1Events[currentIndex1].description}</p>
//               {/* <p>
//                 <strong>Date:</strong> {form1Events[currentIndex1].date}
//               </p> */}
//             </div>
//             <button
//               onClick={goToNext1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",

//               }}
//             >
//               &gt;
//             </button>
//           </div>
//         ) : (
//           <p>No events yet. Add an event above!</p>
//         )}
//       </div>

//       {/* Slider for Event Section 2 */}
//       <div style={{ marginTop: "40px" }}>
//         <h2 style={{color:'rgb(184, 224, 61)'}}>Event News</h2>
//         {form2Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",

//                 cursor: "pointer",
//               }}
//             >
//               &lt;
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <img
//                 src={form2Events[currentIndex2].image}
//                 alt={form2Events[currentIndex2].title}
//                 style={{
//                   maxWidth: "80%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   marginBottom: "10px",

                  
//                 }}
//               />
//               <h3 style={{color:'white'}}>{form2Events[currentIndex2].title}</h3>
//               <p>{form2Events[currentIndex2].description}</p>
//               {/* <p>
//                 <strong>Date:</strong> {form2Events[currentIndex2].date}
//               </p> */}
//             </div>
//             <button
//               onClick={goToNext2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &gt;
//             </button>
//           </div>
//         ) : (
//           <p>No events yet. Add an event above!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventPage;






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Form Component for Event 1
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

//       // POST API call for image upload
//       axios
//         .post(" http://3.109.208.126:8081/api/images/upload", formDataToSend)
//         .then((response) => {
//           onSubmit(formType, {
//             image: response.data.imageUrl,  // assuming response contains image URL
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

//   // Fetch events data (GET API)
//   useEffect(() => {
//     axios
//       .get(" http://3.109.208.126:8081/api/images/images")
//       .then((response) => {
//         const events = response.data; // assuming data contains event list
//         setForm1Events(events.filter(event => event.type === 'form1'));
//         setForm2Events(events.filter(event => event.type === 'form2'));
//       })
//       .catch((error) => {
//         console.error("Error fetching events:", error);
//       });
//   }, []);

//   // Handle form submission for both event forms
//   const handleEventSubmit = (formType, eventData) => {
//     if (formType === "form1") {
//       setForm1Events((prevEvents) => [...prevEvents, eventData]);
//     } else if (formType === "form2") {
//       setForm2Events((prevEvents) => [...prevEvents, eventData]);
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
//       <a href="./index.html" class="navbar-brand p-0">
//         <h1 class="text-primary">
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
//           <h2 style={{ color: "#ff8d8d" }}>Blog News</h2>
//           <EventForm onSubmit={handleEventSubmit} formType="form1" />
//         </div>

//         {/* Right Form */}
//         <div style={{ flex: 1, maxWidth: "48%" }}>
//           <h2 style={{ color: "#b8e03d" }}>Event News</h2>
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
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &lt;
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <img
//                 src={form1Events[currentIndex1].image}
//                 alt={form1Events[currentIndex1].title}
//                 style={{
//                   maxWidth: "80%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <h3 style={{ color: "white" }}>{form1Events[currentIndex1].title}</h3>
//               <p>{form1Events[currentIndex1].description}</p>
//             </div>
//             <button
//               onClick={goToNext1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &gt;
//             </button>
//           </div>
//         ) : (
//           <p>No events available.</p>
//         )}
//       </div>

//       {/* Slider for Event Section 2 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ color: "rgb(184, 224, 61)" }}>Event News</h2>
//         {form2Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &lt;
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <img
//                 src={form2Events[currentIndex2].image}
//                 alt={form2Events[currentIndex2].title}
//                 style={{
//                   maxWidth: "80%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <h3 style={{ color: "white" }}>{form2Events[currentIndex2].title}</h3>
//               <p>{form2Events[currentIndex2].description}</p>
//             </div>
//             <button
//               onClick={goToNext2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &gt;
//             </button>
//           </div>
//         ) : (
//           <p>No events available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventPage;

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
//       const apiUrl = formType === "form1" 
//         ? " http://3.109.208.126:8081/api/images/upload"
//         : " http://3.109.208.126:8081/api/blogimages/upload";
      
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
//     axios
//       .get(" http://3.109.208.126:8081/api/images/images")
//       .then((response) => {
//         const events = response.data; // assuming data contains event list
//         setForm1Events(events.filter(event => event.type === 'form1'));
//       })
//       .catch((error) => {
//         console.error("Error fetching events:", error);
//       });

//     axios
//       .get(" http://3.109.208.126:8081/api/blogimages/images")
//       .then((response) => {
//         const events = response.data; // assuming data contains event list
//         setForm2Events(events.filter(event => event.type === 'form2'));
//       })
//       .catch((error) => {
//         console.error("Error fetching blog events:", error);
//       });
//   }, []);

//   // Handle form submission for both event forms
//   const handleEventSubmit = (formType, eventData) => {
//     if (formType === "form1") {
//       setForm1Events((prevEvents) => [...prevEvents, eventData]);
//     } else if (formType === "form2") {
//       setForm2Events((prevEvents) => [...prevEvents, eventData]);
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
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &lt;
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <img
//                 // src={form1Events[currentIndex1].image}
//                 src={` http://3.109.208.126:8081${form1Events[currentIndex1].image}`} // Adjust to full URL

//                 alt={form1Events[currentIndex1].title}
//                 style={{
//                   maxWidth: "80%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <h3 style={{ color: "white" }}>{form1Events[currentIndex1].title}</h3>
//               <p>{form1Events[currentIndex1].description}</p>
//             </div>
//             <button
//               onClick={goToNext1}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &gt;
//             </button>
//           </div>
//         ) : (
//           <p>No events available.</p>
//         )}
//       </div>

//       {/* Slider for Event Section 2 */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ color: "rgb(184, 224, 61)" }}>Event News</h2>
//         {form2Events.length > 0 ? (
//           <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
//             <button
//               onClick={goToPrev2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &lt;
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <img
//                 // src={form2Events[currentIndex2].image}
//                 src={` http://3.109.208.126:8081${form1Events[currentIndex1].image}`} // Adjust to full URL

//                 alt={form2Events[currentIndex2].title}
//                 style={{
//                   maxWidth: "80%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <h3 style={{ color: "white" }}>{form2Events[currentIndex2].title}</h3>
//               <p>{form2Events[currentIndex2].description}</p>
//             </div>
//             <button
//               onClick={goToNext2}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               &gt;
//             </button>
//           </div>
//         ) : (
//           <p>No events available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventPage;






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
//           ? " http://3.109.208.126:8081/api/images/upload"
//           : " http://3.109.208.126:8081/api/blogimages/upload";

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
//                 src={` http://3.109.208.126:8081${form1Events[currentIndex1].image}`} 
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
//                 src={` http://3.109.208.126:8081${form2Events[currentIndex2].image}`} // Adjust to full URL
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


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import EventPage from "./Login";
const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static username and password
    const staticUsername = "admin";
    const staticPassword = "Ktig@123";

    // Dummy validation with hardcoded credentials
    if (credentials.username === staticUsername && credentials.password === staticPassword) {
      onLogin(); // Trigger onLogin to change the state in the parent component
      navigate("/Adminpage"); // Redirect to the EventPage (ensure /event path matches your routing)
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Login</h2>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0 15px 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0 15px 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true when login is successful
  };

  return (
    <div>
      {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <EventPage />} {/* Show EventPage once logged in */}
    </div>
  );
};

export default Login;
