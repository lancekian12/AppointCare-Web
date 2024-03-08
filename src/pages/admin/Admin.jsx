import React from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import '../../css/Admin.css';

const Admin = () => {
  const [doctorData, setDoctorData] = React.useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users`);
        setDoctorData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const patientNumber = doctorData.filter(x => x.role === "Patient");
  const doctorNumber = doctorData.filter(x => x.role === "Doctor");
  const doctorPendingNumber = doctorData.filter(x => x.role === "Doctor" && x.status === "Pending");
  const doctorAcceptedNumber = doctorData.filter(x => x.role === "Doctor" && x.status === "Accepted");
  const doctorRejectedNumber = doctorData.filter(x => x.role === "Doctor" && x.status === "Rejected");




  return (
    <div>
      <h2 className='refresh'>Doctor Admin | <button onClick={refreshPage}>Refresh</button></h2>
      <div className="p-4">
        <div className="container">
          <h2 className='applicants'>Dashboard</h2>
          <div className="admin-container">
            <div className="col-3 user-total">
              <h2>Total Users:</h2>
              <h2>{patientNumber.length + doctorNumber.length}</h2>
            </div>
            <div className="col-3 user-total">
              <h2>Patients Users: </h2>
              <h2>{patientNumber.length}</h2>
            </div>
            <div className="col-3 user-total">
              <h2>Doctor Users:</h2>
              <h2>{doctorNumber.length}</h2>
            </div>
            <div className="col-3 pending-total mt-3">
              <h2>Pending Doctors:</h2>
              <h2>{doctorPendingNumber.length}</h2>
            </div>
            <div className="col-3 accepted-total mt-3">
              <h2>Accepted Doctors:</h2>
              <h2>{doctorAcceptedNumber.length}</h2>
            </div>
            <div className="col-3 rejected-total mt-3">
              <h2>Rejected Doctors:</h2>
              <h2>{doctorRejectedNumber.length}</h2>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Admin;
