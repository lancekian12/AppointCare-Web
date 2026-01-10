// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import VectorThree from "../../../public/consultation-vector-3.png"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const PatientBookings = ({ userData }) => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [loading, setLoading] = useState(true);

//     const [patientInfo, setPatientInfo] = useState(null);
//     const [doctorInfo, setDoctorInfo] = useState(null);

//     console.log(patientInfo)
//     useEffect(() => {
//         const fetchPatient = async () => {
//             try {
//                 if (userData && userData._id) {
//                     const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
//                     setPatientInfo(response.data);
//                     setLoading(false);
//                     if (response.data && response.data.schedules && response.data.schedules.length > 0) {
//                         const doctorId = response.data.schedules[0].doctorId;
//                         const response3 = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${patientInfo.doctorId}`);
//                         setDoctorInfo(response3.data);
//                     }
//                 }
//             } catch (e) {
//                 console.error('Error fetching data:', e);
//                 setLoading(false);
//             }
//         };

//         fetchPatient();
//     }, [userData]);
//     return (
//         <div>PatientBookings</div>
//     )
// }

// export default PatientBookings