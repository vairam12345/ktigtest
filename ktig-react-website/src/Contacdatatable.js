// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './contactdatatable.css';  // Import the CSS file for styling

// const ConatctDataTable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     axios
//       .get(' http://3.111.193.110:8081/Contact/submitforms')  // Replace with your API URL
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="table-container">
//  <div>
//       <h1 style={{
//         fontSize: '18px',
//         fontFamily: 'Poppins, sans-serif',
//         color: '#333',
//         fontWeight: '600',
//         textTransform: 'uppercase',
//         letterSpacing: '1px'
//       }}>
//         User Contact Information
//       </h1>
//     </div>      <table className="data-table" style={{marginTop:'13rem'}}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Subject</th>
//             <th>Service</th>
//             <th>Business</th>

//             {/* Add more columns as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>{item.subject}</td>
//               <td>{item.service}</td>
//               <td>{item.business}</td>

//               {/* Map additional columns as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ConatctDataTable;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contactdatatable.css';  // Import the CSS file for styling

const ConatctDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(' http://3.111.193.110:8081/Contact/submitforms')  // Replace with your API URL
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // Ensure `id` is valid
    if (!id) {
      console.error('Invalid ID:', id);
      return;
    }

    // Send DELETE request to the backend
    axios
      .delete(` http://3.111.193.110:8081/Contact/deleteforms/${id}`)
      .then((response) => {
        // Filter out the deleted item from the state
        setData(data.filter(item => item._id !== id));  // Ensure the correct key for ID
        alert('Form data deleted successfully');
      })
      .catch((error) => {
        console.error('There was an error deleting the form data!', error);
        alert('Failed to delete form data');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <div>
      <div>
  <h1
    style={{
      fontSize: '13px',
      fontFamily: 'Poppins, sans-serif',
      color: 'Navy',  // Navy blue color
      fontWeight: '1000',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      borderBottom: '4px solid #2c3e50', 
      paddingBottom: '5px',  
    }}
  >
    User Contact Information
  </h1>
</div>


      </div>
      <table className="data-table" style={{ marginTop: '13rem' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Service</th>
            <th>Business</th>
            <th>Actions</th> {/* Add an actions column for the delete button */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}> {/* Use _id as the key */}
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.subject}</td>
              <td>{item.service}</td>
              <td>{item.business}</td>
              <td>
                {/* Delete button */}
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConatctDataTable;
