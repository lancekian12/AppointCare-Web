// import "../../css/DoctorHomePage.css";
// import Calendar from 'react-calendar'
// import "../../css/Calendar.css"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import VectorTwo from '../../../public/consultation-vector-2.png'
// import VectorThree from '../../../public/consultation-vector-3.png'
// import "../../css/PatientConsultation.css"
// import tiredness from "../../../public/tiredeness.png"
// import cough from "../../../public/cough-vector.png"
// import painInBone from "../../../public/painbone.png"
// import unexplainedWeightLoss from "../../../public/weightloss.png"
// import unexplainedFever from "../../../public/fever.png"
// import paleness from "../../../public/paleness.png"
// import bruising from "../../../public/bruising-vector.png"
// import freqeuentInfection from "../../../public/frequent-infection.png"
// import unexplainedRash from "../../../public/rashInfection.png"
// import shortnessOfbreath from "../../../public/shortnessofbreath.png"
// import drenchingNightSweats from "../../../public/drenching-sweats.png"
// import lumpsOfSwelling from "../../../public/lumps-swelling.png"
// import { Link } from "react-router-dom"



// const DoctorHomePage = ({ userData }) => {
//     const [loading, setLoading] = useState(true);
//     const [patientInfo, setPatientInfo] = useState(null);
//     const getSymptomImage = (symptom) => {
//         switch (symptom) {
//             case 'tiredness':
//                 return <img src={tiredness} alt="Tiredness" />;
//             case 'cough':
//                 return <img src={cough} alt="Cough" />;
//             case 'painInBone':
//                 return <img src={painInBone} alt="Pain in Bone" />;
//             case 'unexplainedWeightLoss':
//                 return <img src={unexplainedWeightLoss} alt="Ununexplained Weight Loss" />;
//             case 'unexplainedFever':
//                 return <img src={unexplainedFever} alt="Unexplained Fever" />;
//             case 'paleness':
//                 return <img src={paleness} alt="Paleness" />;
//             case 'bruising':
//                 return <img src={bruising} alt="Bruising" />;
//             case 'frequentInfection':
//                 return <img src={freqeuentInfection} alt="Frequent Infection" />;
//             case 'unexplainedRash':
//                 return <img src={bruising} alt="Unexplained Rash" />;
//             case 'shortnessOfBreath':
//                 return <img src={shortnessOfbreath} alt="Shortness of Breath" />;
//             case 'drenchingNightSweats':
//                 return <img src={drenchingNightSweats} alt="Drenching Night Sweats" />;
//             case 'lumpsOfSwelling':
//                 return <img src={lumpsOfSwelling} alt="Lumps of Swelling" />;
//             default:
//                 return null;
//         }
//     };
//     useEffect(() => {
//         const fetchPatient = async () => {
//             try {
//                 if (userData && userData._id) {
//                     const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
//                     setPatientInfo(response.data);
//                 }
//             } catch (e) {
//                 console.error('Error fetching data:', e);
//                 setLoading(false);
//             }
//         };
//         fetchPatient();
//     }, [userData]);
//     const acceptedAppointments = patientInfo && patientInfo.schedules ? patientInfo.schedules.filter(x => x.status === "Accepted") : [];
//     const rejectedAppointments = patientInfo && patientInfo.schedules ? patientInfo.schedules.filter(x => x.status === "Rejected") : [];
//     const doneBooking = patientInfo && patientInfo.schedules ? patientInfo.schedules.filter(x => x.status === "Done") : [];


//     const allPatientList = patientInfo && patientInfo.schedules ? patientInfo.schedules.map((x, index) => {
//         if (x.status === "Accepted") {
//             return (
//                 <div key={index}>
//                     <div className="first-half mb-4">
//                         <img src={x.imageData} alt="profile-picture" id="patient-list-img" />
//                         <div className="details-container">
//                             <div className="personal-details mx-2">
//                                 <span className='doctor-name text-capitalize'>{x.fullName}</span>
//                                 <br />
//                                 <span>{x.email}</span>
//                                 <br />
//                                 <span>{x.number}</span>
//                             </div>
//                             <div className="other-details i-details">
//                                 {x.online ? <span><i className="fa-solid fa-video">
//                                 </i><span className='important-bold'>Online Consultation</span></span>
//                                     : <span>
//                                         <i className="fa-solid fa-person-running"></i>
//                                         <span className='important-bold'>Face to Face Consultation</span></span>}
//                                 <br />
//                                 <span><i className="fa-regular fa-calendar"></i><span className='important-bold'>{x.date}</span></span>
//                                 <br />
//                                 <span><i className="fa-solid fa-clock"></i><span className='important-bold'>{x.time} (24 Hours Format)</span></span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//         return null;
//     }) : null;

//     // if (doneBooking.length === 0) {
//     //     return (
//     //         <section className='patient-booking'>
//     //             <div className="container">
//     //                 <div className='text-center'>
//     //                     <img src={VectorThree} alt="patient-vector" />
//     //                     <h2 className='mt-4'>No Consultation History</h2>
//     //                     <p className='lead'>You have no consultation history at the moment. Check Patient Appointment List</p>
//     //                 </div>
//     //             </div>
//     //         </section>
//     //     );
//     // }

//     const firstPatientConsultation = patientInfo && patientInfo.schedules && patientInfo.schedules.length > 0 ?
//         (
//             <div key={0}>
//                 <div className="first-half">
//                     <img src={patientInfo.schedules[0].imageData}
//                         alt="profile-picture" />
//                     <div className="details-container">
//                         <div className="personal-details mx-2">
//                             <span className='doctor-name text-capitalize'>{patientInfo.schedules[0].fullName}</span>
//                             <br />
//                             <span>{patientInfo.schedules[0].email}</span>
//                             <br />
//                             <span>{patientInfo.schedules[0].number}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <hr />
//                 <h5>Common Symptoms:</h5>

//                 <div className="first-half">
//                     <div className="details-container">
//                         <div className="personal-details ">
//                             <div className='symptomps'>
//                                 {patientInfo.schedules[0].symptoms && patientInfo.schedules[0].symptoms.map((symptom, index) => (
//                                     <div key={index} className="image-symtomps">
//                                         {getSymptomImage(symptom)}
//                                         <span>{symptom}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="first-half mt-3">
//                     <span className="important-bold">Observation:</span>
//                     <div className="details-container">
//                         <div className="personal-details mx-2">
//                             <span>{patientInfo.schedules[0].observation}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="first-half mt-3">
//                     <span className="important-bold">Prescription:</span>
//                     <div className="details-container">
//                         <div className="personal-details mx-2">
//                             <span>{patientInfo.schedules[0].prescription}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ) : (
//             <section className='patient-booking'>
//                 <div className='text-center doctor-homepage-else'>
//                     <img src={VectorTwo} alt="patient-vector" />
//                     <h2 className='mt-5'>You Have No Recent Consultation</h2>
//                     <p className='lead'>No recent Consultation. Check some Appoinments</p>
//                 </div>
//             </section>
//         );

//     return (
//         <section className='doctor-homepage'>
//             <div className="container-fluid">
//                 <div className="row justify-content-between flex-nowrap align-items-center">
//                     <div className="col-6">
//                         <h2 className="Goodmorning">Good Morning <span id="name-of-doctor">Dr. {userData.Fname}!</span></h2>
//                     </div>
//                     <div className="col-2">
//                         <Link to="/doctorpage/DoctorUserProfile" className='doctorpage-avatar'>
//                             <div className='doctor-picture-box'>
//                                 {userData.imageData ? (
//                                     <img
//                                         id="profile-picture"
//                                         className="change-profile"
//                                         src={userData.imageData}
//                                         alt="profile picture"
//                                     />
//                                 ) : (
//                                     <img
//                                         id="profile-picture"
//                                         className="change-profile"
//                                         src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//                                         alt="profile picture"
//                                     />
//                                 )}
//                                 <span className='text-capitalize'>{userData.Fname} {userData.Lname}</span>
//                             </div>
//                         </Link>

//                     </div>
//                 </div>
//                 <div className='row mt-3'>
//                     <div className="col-6 rectangle-2">
//                         <div className="row px-3">
//                             <div className="col-6">
//                                 <h2>Number of Appointments</h2>
//                                 <h2 id='number-of-new-patients'>{patientInfo ? patientInfo.schedules.length : 0}</h2>
//                                 <div className="row mt-5">
//                                     <div className="col-6 new-patients">
//                                         <h3>Accepted Patients</h3>
//                                         <h3>{acceptedAppointments.length}</h3>
//                                     </div>
//                                     <div className="col-1"></div>
//                                     <div className="col-5 old-patients">
//                                         <h3>Rejected Patients</h3>
//                                         <h3>{rejectedAppointments.length}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-6">
//                                 <img src="doctor-homepage-vector.png" alt="doctor2" id="doctorpage-doctor" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-1"></div>
//                     <div className="col-5">
//                         <h2>Calendar</h2>
//                         <Calendar />
//                     </div>
//                 </div>
//                 <div className="row mt-4 ">
//                     <div className="col-12 patient-data">
//                         <div className="row">
//                             <div className="col-6 mt-2">
//                                 <h2>Patient List</h2>
//                                 <div className="img-first-half">
//                                     {acceptedAppointments.length === 0 ? (
//                                         <section className='patient-booking'>
//                                             <div className='text-center doctor-homepage-else'>
//                                                 <img src={VectorThree} alt="patient-vector" />
//                                                 <h2 className='mt-5'>You Have No Patients</h2>
//                                                 <p className='lead'>No Patient List Right now. Check some Appointments</p>
//                                             </div>
//                                         </section>
//                                     ) : (
//                                         allPatientList
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="col-6 mt-2">
//                                 <h2>Recent Consultation</h2>
//                                 <div className="img-first-half">
//                                     {doneBooking.length === 0 ? (
//                                         <section className='patient-booking'>
//                                             <div className='text-center doctor-homepage-else'>
//                                                 <img src={VectorThree} alt="patient-vector" />
//                                                 <h2 className='mt-5'>You Have No Recent Consultation</h2>
//                                                 <p className='lead'>No Consultation List Right now. Check some Appointments</p>
//                                             </div>
//                                         </section>
//                                     ) : (
//                                         firstPatientConsultation
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </section >
//     );
// };

// export default DoctorHomePage;
