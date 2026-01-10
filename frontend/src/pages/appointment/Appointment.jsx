// import React from 'react'
// import { useParams, NavLink } from "react-router-dom"
// import axios from 'axios';
// import "../../css/Appointment.css"
// import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign';

// const Appointment = ({ userData }) => {
//     const [doctorInfo, setDoctorInfo] = React.useState([])
//     const [appointmentInfo, setAppointmentInfo] = React.useState({
//         fullName: '',
//         email: '',
//         number: '',
//         doctorId: '',
//         online: false,
//         f2f: true,
//         date: '',
//         time: '',
//         imageData: userData ? userData.imageData : ''
//     })
//     console.log(appointmentInfo)
//     const [errors, setErrors] = React.useState({
//         date: '',
//         time: '',
//         general: '', // New error state for general errors
//     });
//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         if (id === 'online') {
//             setAppointmentInfo(prevState => ({
//                 ...prevState,
//                 online: true,
//                 f2f: false
//             }));
//         } else if (id === 'f2f') {
//             setAppointmentInfo(prevState => ({
//                 ...prevState,
//                 online: false,
//                 f2f: true
//             }));
//         } else {
//             if ((id === 'number' || id === 'email') && value.trim() === '') {
//                 setAppointmentInfo(prevState => ({
//                     ...prevState,
//                     [id]: id === 'number' ? userData.number : userData.email
//                 }));
//             } else {
//                 setAppointmentInfo(prevState => ({
//                     ...prevState,
//                     [id]: value
//                 }));
//             }
//         }
//     };
//     const params = useParams();
//     React.useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${params.id}`);
//                 setDoctorInfo(response.data);
//                 setAppointmentInfo(prevState => ({
//                     ...prevState,
//                     doctorId: response.data._id // Assuming _id is the correct property name
//                 }));
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, [params.id]);
//     const handleSubmit = async (e) => {
//         try {
//             e.preventDefault();

//             // Check if date or time is empty
//             if (!appointmentInfo.date) {
//                 setErrors(prevState => ({
//                     ...prevState,
//                     date: 'Date is required'
//                 }));
//                 return;
//             }
//             if (!appointmentInfo.time) {
//                 setErrors(prevState => ({
//                     ...prevState,
//                     time: 'Time is required'
//                 }));
//                 return;
//             }
//             if (appointmentInfo.email !== userData.email) {
//                 setErrors(prevState => ({
//                     ...prevState,
//                     general: 'You can only book appointments with your registered email. You can change your email in user Setting'
//                 }));
//                 return;
//             }


//             const response = await axios.post(
//                 `https://appointment-care-api.vercel.app/api/v1/appoint/request/${userData._id}`,
//                 appointmentInfo
//             );
//             console.log(response);
//             window.location.href = '/'

//         } catch (error) {
//             console.error('Error submitting appointment:', error);
//             setErrors(prevState => ({
//                 ...prevState,
//                 general: 'Error submitting appointment. Please try again later.'
//             }));
//         }
//     };
//     const [emailExists, setEmailExists] = React.useState(false);
//     return (
//         <section className='section-appointment'>
//             <div className='text-center mb-5'>
//                 <WelcomeDesign />
//                 <hr />
//             </div>
//             <div className="container">
//                 <div className='row'>
//                     <div className="col-3 appointment-doctor-info">
//                         {doctorInfo && doctorInfo.imageData ? (
//                             <img src={doctorInfo.imageData} alt="patient-image" />
//                         ) : (
//                             <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="patient-image" />
//                         )}
//                         <br />
//                         <h2 className='doctor-name-2 text-capitalize'>{doctorInfo.Fname} {doctorInfo.Lname}</h2>
//                         <span className='speciality text-capitalize'>{doctorInfo.specialty}</span>
//                         <br />
//                         <span className='md-doctor-2'>MD since {doctorInfo.md}</span>
//                     </div>
//                     <div className="col-8 book-an-appointment">
//                         <h2 className='mb-3'>Book an Appointment</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="fullName">Full Name*</label>
//                                 <br />
//                                 <input type="text" className="form-control" id="fullName" placeholder={userData ? `${userData.Fname} ${userData.Lname}` : "Full Name"} onChange={handleChange} value={appointmentInfo.fullName} required />
//                             </div>
//                             <div>
//                                 <label htmlFor="email">Email*</label>
//                                 <br />
//                                 <input type="email" className="form-control" id="email" placeholder={userData ? userData.email : "Email"} onChange={handleChange} value={appointmentInfo ? appointmentInfo.email : userData.email} required />
//                             </div>
//                             <div>
//                                 <label htmlFor="number">Phone Number*</label>
//                                 <br />
//                                 <input type="text" className="form-control" id="number" placeholder={userData ? userData.number : "Phone Number"} onChange={handleChange} value={appointmentInfo.number} required />
//                             </div>
//                             <div>
//                                 <label htmlFor="date">Date*</label>
//                                 <br />
//                                 <input type="date" className="form-control" id="date" value={appointmentInfo.date} onChange={handleChange} required />
//                                 {errors.date && <div className="error">{errors.date}</div>} {/* New error message display */}
//                             </div>
//                             <div>
//                                 <label htmlFor="time">Time*</label>
//                                 <br />
//                                 <input type="time" className="form-control" id="time" value={appointmentInfo.time} onChange={handleChange} required />
//                                 {errors.time && <div className="error">{errors.time}</div>} {/* New error message display */}
//                             </div>
//                             <div>
//                                 <label htmlFor="">Appointment Type</label>
//                                 <div className='mx-auto appointment-f2f'>
//                                     <div>
//                                         <input type="radio" id="f2f" name="consultationType" value="f2f" checked={appointmentInfo.f2f} onChange={handleChange} />
//                                         <label htmlFor="f2f">F2F</label>
//                                     </div>
//                                     {doctorInfo.online && <div>
//                                         <input type="radio" id="online" name="consultationType" value="online" checked={appointmentInfo.online} onChange={handleChange} />
//                                         <label htmlFor="online">Online</label>
//                                     </div>}
//                                 </div>
//                             </div>
//                             <div className='book-button'>
//                                 <NavLink to="/"><button type="submit" className='btn-viewprofile px-3'>Go back</button></NavLink>
//                                 <button type="submit" className='btn-appointment'>Book Appointment</button>
//                             </div>
//                             {emailExists && <div className="alert alert-danger alert-email email-error" role="alert">Email already exists. Please use another email.</div>}
//                             {errors.general && <div className="alert alert-danger alert-email email-error" role="alert">{errors.general}</div>} {/* New error message display */}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section >
//     )
// }

// export default Appointment
