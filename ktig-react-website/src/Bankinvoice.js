// // import React, { useState } from 'react';
// // import { jsPDF } from 'jspdf';

// // const InvoiceForm = () => {
// //   const [inwardData, setInwardData] = useState({
// //     date: '',
// //     inwardType: '',
// //     amount: '',
// //     authorizedPerson: '',
// //     approved: ''
// //   });
// //   const [outwardData, setOutwardData] = useState({
// //     amount: '',
// //     authorizedPerson: '',
// //     approved: ''
// //   });

// //   const handleInwardChange = (e) => {
// //     const { name, value } = e.target;
// //     setInwardData((prevData) => ({
// //       ...prevData,
// //       [name]: value
// //     }));
// //   };

// //   const handleGeneratePDF = () => {
// //     const doc = new jsPDF();
// //     doc.text('Invoice', 10, 10);
// //     doc.text(`Date: ${inwardData.date}`, 10, 20);
// //     doc.text(`Inward Type: ${inwardData.inwardType}`, 10, 30);
// //     doc.text(`Amount: ${inwardData.amount}`, 10, 40);
// //     doc.text(`Authorized Person: ${inwardData.authorizedPerson}`, 10, 50);
// //     doc.text(`Approved: ${inwardData.approved}`, 10, 60);
    
// //     // Outward data
// //     doc.text(`Outward Amount: ${inwardData.amount}`, 10, 70); // same as inward amount for now
// //     doc.text(`Outward Authorized Person: ${inwardData.authorizedPerson}`, 10, 80); // same as inward authorized person
// //     doc.text(`Outward Approved: ${inwardData.approved}`, 10, 90); // same as inward approved
    
// //     // Total
// //     doc.text(`Total Amount: ${inwardData.amount}`, 10, 100);

// //     // Description
// //     doc.text('Description: ', 10, 110);

// //     // Save the PDF
// //     doc.save('invoice.pdf');
// //   };

// //   return (
// //     <div>
// //       <h2>Invoice Form</h2>
// //       <form>
// //         <div>
// //           <label>Date</label>
// //           <input
// //             type="date"
// //             name="date"
// //             value={inwardData.date}
// //             onChange={handleInwardChange}
// //           />
// //         </div>

// //         <div>
// //           <label>Inward Type</label>
// //           <select
// //             name="inwardType"
// //             value={inwardData.inwardType}
// //             onChange={handleInwardChange}
// //           >
// //             <option value="">Select</option>
// //             <option value="Cash">Cash</option>
// //             <option value="Check">Check</option>
// //             <option value="Account">Account</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label>Amount</label>
// //           <input
// //             type="text"
// //             name="amount"
// //             value={inwardData.amount}
// //             onChange={handleInwardChange}
// //           />
// //         </div>

// //         <div>
// //           <label>Authorized Person</label>
// //           <input
// //             type="text"
// //             name="authorizedPerson"
// //             value={inwardData.authorizedPerson}
// //             onChange={handleInwardChange}
// //           />
// //         </div>

// //         <div>
// //           <label>Approved</label>
// //           <select
// //             name="approved"
// //             value={inwardData.approved}
// //             onChange={handleInwardChange}
// //           >
// //             <option value="">Select</option>
// //             <option value="Yes">Yes</option>
// //             <option value="No">No</option>
// //           </select>
// //         </div>

// //         <button type="button" onClick={handleGeneratePDF}>
// //           Generate Invoice PDF
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default InvoiceForm;





// // import React, { useState } from 'react';
// // import { jsPDF } from 'jspdf';
// // import './Bankinvoice.css'; // Import the CSS file for styles

// // const InvoiceForm = () => {
// //   const [inwardData, setInwardData] = useState({
// //     date: '',
// //     inwardType: '',
// //     amount: '',
// //     authorizedPerson: '',
// //     approved: ''
// //   });

// //   const handleInwardChange = (e) => {
// //     const { name, value } = e.target;
// //     setInwardData((prevData) => ({
// //       ...prevData,
// //       [name]: value
// //     }));
// //   };

// //   const handleGeneratePDF = () => {
// //     const doc = new jsPDF();
// //     doc.setFont("helvetica", "normal");
// //     doc.setFontSize(12);
// //     doc.text('Invoice', 10, 10);
// //     doc.text(`Date: ${inwardData.date}`, 10, 20);
// //     doc.text(`Inward Type: ${inwardData.inwardType}`, 10, 30);
// //     doc.text(`Amount: ${inwardData.amount}`, 10, 40);
// //     doc.text(`Authorized Person: ${inwardData.authorizedPerson}`, 10, 50);
// //     doc.text(`Approved: ${inwardData.approved}`, 10, 60);
// //     doc.text(`Total Amount: ${inwardData.amount}`, 10, 70);
// //     doc.text('Description:', 10, 80);
// //     doc.save('invoice.pdf');
// //   };

// //   return (
// //     <div className="form-container">
// //       <h2>Create Invoice</h2>
// //       <form>
// //         <div className="form-group">
// //           <label>Date</label>
// //           <input
// //             type="date"
// //             name="date"
// //             value={inwardData.date}
// //             onChange={handleInwardChange}
// //             className="form-input"
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label>Inward Type</label>
// //           <select
// //             name="inwardType"
// //             value={inwardData.inwardType}
// //             onChange={handleInwardChange}
// //             className="form-input"
// //           >
// //             <option value="">Select</option>
// //             <option value="Cash">Cash</option>
// //             <option value="Check">Check</option>
// //             <option value="Account">Account</option>
// //           </select>
// //         </div>

// //         <div className="form-group">
// //           <label>Amount</label>
// //           <input
// //             type="text"
// //             name="amount"
// //             value={inwardData.amount}
// //             onChange={handleInwardChange}
// //             className="form-input"
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label>Authorized Person</label>
// //           <input
// //             type="text"
// //             name="authorizedPerson"
// //             value={inwardData.authorizedPerson}
// //             onChange={handleInwardChange}
// //             className="form-input"
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label>Approved</label>
// //           <select
// //             name="approved"
// //             value={inwardData.approved}
// //             onChange={handleInwardChange}
// //             className="form-input"
// //           >
// //             <option value="">Select</option>
// //             <option value="Yes">Yes</option>
// //             <option value="No">No</option>
// //           </select>
// //         </div>

// //         <button type="button" className="generate-btn" onClick={handleGeneratePDF}>
// //           Generate Invoice PDF
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default InvoiceForm;

// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf'; 
// import './Bankinvoice.css'; 

// const InvoiceForm = () => {
//   const [inwardData, setInwardData] = useState({
//     date: '',
//     inwardType: '',
//     amount: '',
//     authorizedPerson: '',
//     approved: ''
//   });

//   const handleInwardChange = (e) => {
//     const { name, value } = e.target;
//     setInwardData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

// const handleGeneratePDF = () => {
//     const doc = new jsPDF();
  
//     // Set font styles
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(12);
  
//     // Title of the Invoice
//     doc.setTextColor(0, 123, 255);  // Blue color
//     doc.setFontSize(18);
//     doc.text('Invoice', 10, 20);
  
//     // Set general text color
//     doc.setTextColor(0, 0, 0);  // Black color
  
//     // Invoice details
//     doc.setFontSize(12);
//     doc.text(`Date: ${inwardData.date}`, 10, 30);
//     doc.text(`Inward Type: ${inwardData.inwardType}`, 10, 40);
//     doc.text(`Amount: ${inwardData.amount}`, 10, 50);
//     doc.text(`Authorized Person: ${inwardData.authorizedPerson}`, 10, 60);
//     doc.text(`Approved: ${inwardData.approved}`, 10, 70);
  
//     // Add a colored box for the Total Amount
//     doc.setFillColor(52, 152, 219);  // Light Blue color for background
//     doc.rect(10, 75, 190, 10, 'F');  // Draw a filled rectangle
//     doc.setTextColor(255, 255, 255);  // White text color
//     doc.text(`Total Amount: ${inwardData.amount}`, 15, 80);
  
//     // Add a Description section
//     doc.setTextColor(0, 0, 0);  // Reset text color to black
//     doc.text('Description:', 10, 90);
//     doc.setTextColor(127, 140, 141);  // Light Gray color for description
//     doc.text('This is a sample invoice description.', 10, 100);  // Placeholder text
  
//     // Save the PDF
//     doc.save('invoice.pdf');
//   };
// // const handleGeneratePDF = () => {
// //     const doc = new jsPDF();
  
// //     // Set font styles
// //     doc.setFont("helvetica", "normal");
// //     doc.setFontSize(12);
  
// //     // Title of the Invoice
// //     doc.setTextColor(0, 123, 255);  // Blue color
// //     doc.setFontSize(18);
// //     doc.text('Invoice', 10, 20);
  
// //     // Set general text color
// //     doc.setTextColor(0, 0, 0);  // Black color
  
// //     // Invoice details in a table format
// //     doc.setFontSize(12);
// //     const tableStartY = 30;
  
// //     // Column headers
// //     const headers = ['Date', 'Inward Type', 'Amount', 'Authorized Person', 'Approved'];
// //     const rowData = [
// //       [inwardData.date, inwardData.inwardType, inwardData.amount, inwardData.authorizedPerson, inwardData.approved]
// //     ];
  
// //     // Draw table header
// //     let x = 10;
// //     let y = tableStartY;
  
// //     // Header Background Color
// //     doc.setFillColor(52, 152, 219);  // Light Blue
// //     doc.rect(x, y, 40, 10, 'F');  // Date Column
// //     doc.rect(x + 40, y, 40, 10, 'F');  // Inward Type Column
// //     doc.rect(x + 80, y, 40, 10, 'F');  // Amount Column
// //     doc.rect(x + 120, y, 40, 10, 'F');  // Authorized Person Column
// //     doc.rect(x + 160, y, 40, 10, 'F');  // Approved Column
  
// //     // Set Text color to white for headers
// //     doc.setTextColor(255, 255, 255);
  
// //     // Write header texts
// //     doc.text(headers[0], x + 5, y + 7);
// //     doc.text(headers[1], x + 45, y + 7);
// //     doc.text(headers[2], x + 85, y + 7);
// //     doc.text(headers[3], x + 125, y + 7);
// //     doc.text(headers[4], x + 165, y + 7);
  
// //     // Draw table data rows
// //     doc.setTextColor(0, 0, 0);  // Set text color to black for data rows
// //     y += 10; // Move down to the next row
  
// //     // Draw data rows with white background
// //     rowData.forEach(row => {
// //       doc.rect(x, y, 40, 10, 'F');  // Date Column
// //       doc.rect(x + 40, y, 40, 10, 'F');  // Inward Type Column
// //       doc.rect(x + 80, y, 40, 10, 'F');  // Amount Column
// //       doc.rect(x + 120, y, 40, 10, 'F');  // Authorized Person Column
// //       doc.rect(x + 160, y, 40, 10, 'F');  // Approved Column
  
// //       doc.text(row[0], x + 5, y + 7);
// //       doc.text(row[1], x + 45, y + 7);
// //       doc.text(row[2], x + 85, y + 7);
// //       doc.text(row[3], x + 125, y + 7);
// //       doc.text(row[4], x + 165, y + 7);
  
// //       y += 10; // Move down to the next row
// //     });
  
// //     // Add a colored box for the Total Amount
// //     doc.setFillColor(52, 152, 219);  // Light Blue color for background
// //     doc.rect(10, y, 190, 10, 'F');  // Draw a filled rectangle
// //     doc.setTextColor(255, 255, 255);  // White text color
// //     doc.text(`Total Amount: ${inwardData.amount}`, 15, y + 7);
  
// //     // Save the PDF
// //     doc.save('invoice.pdf');
// //   };


// // const handleGeneratePDF = () => {
// //     const doc = new jsPDF();
  
// //     // Set font styles
// //     doc.setFont("helvetica", "normal");
// //     doc.setFontSize(12);
  
// //     // Title of the Invoice
// //     doc.setTextColor(0, 123, 255);  // Blue color
// //     doc.setFontSize(18);
// //     doc.text('Invoice', 10, 20);
  
// //     // Set general text color
// //     doc.setTextColor(0, 0, 0);  // Black color
  
// //     // Invoice details in a table format
// //     doc.setFontSize(12);
// //     const tableStartY = 30;
  
// //     // Column headers
// //     const headers = ['Date', 'Inward Type', 'Amount', 'Authorized Person', 'Approved'];
// //     const rowData = [
// //       [inwardData.date, inwardData.inwardType, inwardData.amount, inwardData.authorizedPerson, inwardData.approved]
// //     ];
  
// //     // Draw table header
// //     let x = 10;
// //     let y = tableStartY;
  
// //     // Header Background Color
// //     doc.setFillColor(52, 152, 219);  // Light Blue
// //     doc.rect(x, y, 40, 10, 'F');  // Date Column
// //     doc.rect(x + 40, y, 40, 10, 'F');  // Inward Type Column
// //     doc.rect(x + 80, y, 40, 10, 'F');  // Amount Column
// //     doc.rect(x + 120, y, 40, 10, 'F');  // Authorized Person Column
// //     doc.rect(x + 160, y, 40, 10, 'F');  // Approved Column
  
// //     // Set Text color to white for headers
// //     doc.setTextColor(255, 255, 255);
  
// //     // Write header texts
// //     doc.text(headers[0], x + 5, y + 7);
// //     doc.text(headers[1], x + 45, y + 7);
// //     doc.text(headers[2], x + 85, y + 7);
// //     doc.text(headers[3], x + 125, y + 7);
// //     doc.text(headers[4], x + 165, y + 7);
  
// //     // Draw table data rows
// //     doc.setTextColor(0, 0, 0);  // Set text color to black for data rows
// //     y += 10; // Move down to the next row
  
// //     // Draw data rows with white background
// //     rowData.forEach(row => {
// //       doc.rect(x, y, 40, 10, 'F');  // Date Column
// //       doc.rect(x + 40, y, 40, 10, 'F');  // Inward Type Column
// //       doc.rect(x + 80, y, 40, 10, 'F');  // Amount Column
// //       doc.rect(x + 120, y, 40, 10, 'F');  // Authorized Person Column
// //       doc.rect(x + 160, y, 40, 10, 'F');  // Approved Column
  
// //       doc.text(row[0], x + 5, y + 7);
// //       doc.text(row[1], x + 45, y + 7);
// //       doc.text(row[2], x + 85, y + 7);
// //       doc.text(row[3], x + 125, y + 7);
// //       doc.text(row[4], x + 165, y + 7);
  
// //       y += 10; // Move down to the next row
// //     });
  
// //     // Add a colored box for the Total Amount
// //     doc.setFillColor(52, 152, 219);  // Light Blue color for background
// //     doc.rect(10, y, 190, 10, 'F');  // Draw a filled rectangle
// //     doc.setTextColor(255, 255, 255);  // White text color
// //     doc.text(`Total Amount: ${inwardData.amount}`, 15, y + 7);
  
// //     // Add static description text at the bottom
// //     y += 15;  // Move down to make space for description
// //     doc.setFontSize(10);  // Optional: reduce font size for description
// //     doc.setTextColor(0, 0, 0);  // Set text color to black
// //     doc.text("All payments have been processed through the chosen method.", 10, y);
  
// //     // Save the PDF
// //     doc.save('invoice.pdf');
// //   };


  

//   return (
//     <div className="form-container">
//       <h2>Create Invoice</h2>
//       <form>
//         <table className="invoice-table">
//           <thead>
//             <tr>
//               <th>Field</th>
//               <th>Input</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td><label>Date</label></td>
//               <td>
//                 <input
//                   type="date"
//                   name="date"
//                   value={inwardData.date}
//                   onChange={handleInwardChange}
//                   className="form-input"
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td><label>Inward Type</label></td>
//               <td>
//                 <select
//                   name="inwardType"
//                   value={inwardData.inwardType}
//                   onChange={handleInwardChange}
//                   className="form-input"
//                 >
//                   <option value="">Select</option>
//                   <option value="Cash">Cash</option>
//                   <option value="Check">Check</option>
//                   <option value="Account">Account</option>
//                 </select>
//               </td>
//             </tr>

//             <tr>
//               <td><label>Amount</label></td>
//               <td>
//                 <input
//                   type="text"
//                   name="amount"
//                   value={inwardData.amount}
//                   onChange={handleInwardChange}
//                   className="form-input"
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td><label>Authorized Person</label></td>
//               <td>
//                 <input
//                   type="text"
//                   name="authorizedPerson"
//                   value={inwardData.authorizedPerson}
//                   onChange={handleInwardChange}
//                   className="form-input"
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td><label>Approved</label></td>
//               <td>
//                 <select
//                   name="approved"
//                   value={inwardData.approved}
//                   onChange={handleInwardChange}
//                   className="form-input"
//                 >
//                   <option value="">Select</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         <button type="button" className="generate-btn" onClick={handleGeneratePDF}>
//           Generate Invoice PDF
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InvoiceForm;







// import React, { useState } from "react";

// const TabComponent = () => {
//   const [activeTab, setActiveTab] = useState("KTNL");

//   const tabs = ["KTNL", "BR Academy", "Cogniitec", "Multiscale Effect", "KTMC"];

//   const renderContent = () => {
//     switch (activeTab) {
//       case "KTNL":
//         return <p>Content for KTNL</p>;
//       case "BR Academy":
//         return <p>Content for BR Academy</p>;
//       case "Cogniitec":
//         return <p>Content for Cogniitec</p>;
//       case "Multiscale Effect":
//         return <p>Content for Multiscale Effect</p>;
//       case "KTMC":
//         return <p>Content for KTMC</p>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={{ width: "40%", margin: "auto", marginTop: "20px",marginRight:'12rem' }}>
//       {/* Tab Headers */}
//       <div style={{ display: "flex", borderBottom: "2px solid #ccc", backgroundColor: "#333" }}>
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             style={{
//               padding: "10px 20px",
//               cursor: "pointer",
//               border: "none",
//               borderBottom: activeTab === tab ? "2px solid #007BFF" : "none",
//               background: "none",
//               fontWeight: activeTab === tab ? "bold" : "normal",
//               color: "white", // Tab link color
//               opacity: activeTab === tab ? "1" : "0.8", // Slightly dim inactive tabs
//             }}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div style={{ padding: "20px", border: "1px solid #ccc", borderTop: "none" }}>
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default TabComponent;





import React, { useState } from "react";
import "./Bankinvoice.css"; // Import the CSS file

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("KTNL");

  const tabs = ["KTNL", "BR Academy", "Cogniitec", "Multiscale Effect", "KTMC"];

  const renderContent = () => {
    switch (activeTab) {
      case "KTNL":
        return (
          <div className="tab-content">
            {/* Left and Right Cards */}
            <div className="card-container">
              {/* Left Card */}
              <div className="card left-card">
                <h3 className="form-title">Inward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>

                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                                    </div>
                    {/* Amount */}
                    <div className="form-group">
                     <label>Amount</label>
                      <input type="text" name="authorizedPerson" className="form-input" />
                       </div>
                    {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                 
                <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>


                  {/* Description Field */} 
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Inward
                  </button>
                </form>
              </div>

              {/* Right Card */}
              <div className="card right-card">
                <h3 className="form-title">Outward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                      <option value="" disabled selected>Select</option>

                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                                    </div>
                    {/* Amount */}
                    <div className="form-group">
                    <label>Amount</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                    </div>
                   {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>
                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Outward
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      case "BR Academy":
        return (
            <div className="tab-content">
            {/* Left and Right Cards */}
            <div className="card-container">
              {/* Left Card */}
              <div className="card left-card">
                <h3 className="form-title">Inward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                      <option value="" disabled selected>Select</option>

                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option> 
                    </select>
                  </div>
                  {/* Amount */}
                  <div className="form-group">
                    <label>Amount</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>
                  {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>

                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Inward
                  </button>
                </form>
              </div>

              {/* Right Card */}
              <div className="card right-card">
                <h3 className="form-title">Outward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                  </div>
                {/* Amount */}
                  <div className="form-group">
                    <label>Amount</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>
                   {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>
                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Outward
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      case "Cogniitec":
        return (
            <div className="tab-content">
  {/* Left and Right Cards */}
  <div className="card-container">
    {/* Left Card */}
    <div className="card left-card">
      <h3 className="form-title">Inward</h3>
      <form className="form-container">
        {/* Dropdown Field */}
        <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                                    </div>
                    {/* Amount */}
                    <div className="form-group">
                    <label>Amount</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                    </div>
                   {/* Amount */}

        {/* Authorized Person */}
        <div className="form-group">
          <label>Authorized Person:</label>
          <input type="text" name="authorizedPerson" className="form-input" />
        </div>

        {/* Approved Field */}
        <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>

        {/* Description Field */}
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" className="form-input" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Submit Inward
        </button>
      </form>
    </div>

    {/* Right Card */}
    <div className="card right-card">
      <h3 className="form-title">Outward</h3>
      <form className="form-container">
        {/* Dropdown Field */}
        <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                                    </div>
                    {/* Amount */}
                    <div className="form-group">
                     <label>Amount</label>
                      <input type="text" name="authorizedPerson" className="form-input" />
                      </div>
                    {/* Amount */}

        {/* Authorized Person */}
        <div className="form-group">
          <label>Authorized Person:</label>
          <input type="text" name="authorizedPerson" className="form-input" />
        </div>

        {/* Approved Field */}
       
        <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>

        {/* Description Field */}
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" className="form-input" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Submit Outward
        </button>
      </form>
    </div>
  </div>
</div>

        )
      case "Multiscale Effect":
        return (
            <div className="tab-content">
            {/* Left and Right Cards */}
            <div className="card-container">
              {/* Left Card */}
              <div className="card left-card">
                <h3 className="form-title">Inward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                     <option value="" disabled selected>Select</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                     </div>
                    {/* Amount */}
                    <div className="form-group">
                    <label>Amount</label>
                   <input type="text" name="authorizedPerson" className="form-input" />
                  </div>
                  {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>

                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Inward
                  </button>
                </form>
              </div>

              {/* Right Card */}
              <div className="card right-card">
                <h3 className="form-title">Outward</h3>
                <form className="form-container">
                  {/* Dropdown Field */} 
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>

                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                                </div>
                {/* Amount */}
                <div className="form-group">
                <label>Amount</label>
                <input type="text" name="authorizedPerson" className="form-input" />
                 </div>
                  {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>
                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Outward
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      case "KTMC":
        return (
            <div className="tab-content">
            {/* Left and Right Cards */}
            <div className="card-container">
              {/* Left Card */}
              <div className="card left-card">
                <h3 className="form-title">Inward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                     <option value="" disabled selected>Select</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                  </div>
                    {/* Amount */}
                    <div className="form-group">
                   <label>Amount</label>
                  <input type="text" name="authorizedPerson" className="form-input" />
                   </div>
                 {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>


                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Inward
                  </button>
                </form>
              </div>

              {/* Right Card */}
              <div className="card right-card">
                <h3 className="form-title">Outward</h3>
                <form className="form-container">
                  {/* Dropdown Field */}
                  <div className="form-group">
                    <label>Payment Method:</label>
                    <select name="paymentMethod" className="form-input">
                     <option value="" disabled selected>Select</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="account">Account</option>
                    </select>
                  </div>
                   {/* Amount */}
                  <div className="form-group">
                    <label>Amount</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>
                 {/* Amount */}

                  {/* Authorized Person */}
                  <div className="form-group">
                    <label>Authorized Person:</label>
                    <input type="text" name="authorizedPerson" className="form-input" />
                  </div>

                  {/* Approved Field */}
                  <div className="form-group">
                <label>Approved</label>
                <select name="paymentMethod" className="form-input">
                    <option value="" disabled selected>Select</option>
                    <option value="cash">Yes</option>
                    <option value="cheque">No</option>
                </select>
                </div>

                  {/* Description Field */}
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-input" />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="form-button">
                    Submit Outward
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <div className="tab-component">
              <div className="Viewdata">View</div>

      {/* Tab Headers */}
      <div className="tab-headers">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-body">{renderContent()}</div>
    </div>
    
  );
};

export default TabComponent;
