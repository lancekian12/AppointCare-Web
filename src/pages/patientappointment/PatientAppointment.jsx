import React, { useEffect, useState } from 'react';
import "../../css/PatientAppointment.css"
import axios from 'axios';
import VectorThree from "../../../public/consultation-vector-3.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"


const PatientAppointment = ({ userData }) => {
    const [loading, setLoading] = useState(true);
    const [patientInfo, setPatientInfo] = useState(null);
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(patientInfo)
    console.log(doctorInfo)
    useEffect(() => {
        const fetchPatient = async () => {
            try {
                if (userData && userData._id) {
                    const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
                    setPatientInfo(response.data);
                    setLoading(false);
                    if (response.data && response.data.schedules && response.data.schedules.length > 0) {
                        // Fetch doctor info for each schedule
                        const doctorInfoPromises = response.data.schedules.map(async (schedule) => {
                            if (schedule && schedule.doctorId) { // Check if schedule is not null
                                return await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${schedule.doctorId}`);
                            }
                            return null;
                        });
                        const doctorResponses = await Promise.all(doctorInfoPromises);
                        // Filter out null responses
                        const validDoctorResponses = doctorResponses.filter(response => response !== null);
                        // Set doctor info
                        setDoctorInfo(validDoctorResponses.map(response => response.data));
                    }
                }
            } catch (e) {
                console.error('Error fetching data:', e);
                setLoading(false);
            }
        };

        fetchPatient();
    }, [userData]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://appointment-care-api.vercel.app/api/v1/appoint/delete/${id}`);
            window.location.reload();

        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    if (!userData || !userData._id) {
        return <div>No user data available.</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!patientInfo || !patientInfo.schedules || patientInfo.schedules.length === 0) {
        return (
            <section className='patient-booking'>
                <div className="container">
                    <div className='text-center'>
                        <img src={VectorThree} alt="patient-vector" />
                        <h2>No Bookings</h2>
                        <p className='lead'>You have no bookings at the moment.</p>
                    </div>
                </div>
            </section>
        );
    }
    const pendingAppointments = patientInfo && patientInfo.schedules ? patientInfo.schedules.filter(x => x.status !== "Done" && x.status !== "Delete") : [];
    if (pendingAppointments.length === 0) {
        return (
            <section className='patient-booking'>
                <div className="container">
                    <div className='text-center'>
                        <img src={VectorThree} alt="patient-vector" />
                        <h2>No Pending Appointments</h2>
                        <p className='lead'>You have no pending appointments at the moment.</p>
                    </div>
                </div>
            </section>
        );
    }

    const patients = pendingAppointments.map((x, index) => {
        if (x.status !== "Done" && x.status !== "Delete") {
            const correspondingDoctor = doctorInfo && doctorInfo.find(doctor => doctor._id === x.doctorId);
            if (correspondingDoctor) {
                return (
                    <div key={index} className="bookings mb-5">
                        <h2 className='status'>Status: {x.status}</h2>
                        <h3>Doctor Information</h3>
                        <div className="row ">
                            <div className="first-half ">
                                {correspondingDoctor && correspondingDoctor.imageData ? <img src={correspondingDoctor.imageData}
                                    alt="Doctor Profile Picture" />
                                    : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                        alt="Doctor Profile Picture" id="img-all" />
                                }
                                <div className="details-container">
                                    <div className="personal-details mx-4">
                                        <span className='doctor-name text-capitalize'>{correspondingDoctor ? `${correspondingDoctor.Fname} ${correspondingDoctor.Lname}` : 'N/A'}</span>
                                        <br />
                                        <span className='speciality text-capitalize'>{correspondingDoctor ? `${correspondingDoctor.specialty}` : 'N/A'}</span>
                                        <br />
                                        <span className='md-doctor' >MD Since {correspondingDoctor ? `${correspondingDoctor.md}` : 'N/A'}</span>
                                        <br />
                                    </div>
                                    <div className="other-details">
                                        <span><i className="fa-regular fa-envelope"></i> {correspondingDoctor ? correspondingDoctor.email : 'N/A'}</span>
                                        <br />
                                        <span><i className="fa-solid fa-phone"></i> {correspondingDoctor ? correspondingDoctor.number : 'N/A'}</span>
                                        <br />
                                        <span><i className="fa-solid fa-money-bill-transfer"></i>₱ {correspondingDoctor ? correspondingDoctor.consultPrice : 'N/A'}</span>

                                    </div>
                                </div>
                            </div>
                            <h3 className='mt-5'>Appointment Request Details</h3>
                            <div className="first-half">
                                <div className="details-container">
                                    <div className="personal-details">
                                        {x.online ? <span><i className="fa-solid fa-video">
                                        </i><span className='important-bold'>Online Consultation</span></span>
                                            : <span>
                                                <i className="fa-solid fa-person-running"></i>
                                                <span className='important-bold'>Face to Face Consultation</span></span>}
                                        <br />
                                        <span><i className="fa-regular fa-calendar"></i><span className='important-bold'>{x.date}</span></span>
                                        <br />
                                        <span><i className="fa-solid fa-clock"></i><span className='important-bold'>{x.time} (24 Hours Format)</span></span>
                                    </div>
                                    <div className="other-details">
                                        {x.online ? <div></div>
                                            : <div><span className='text-capitalize'><i className="fa-regular fa-building"></i> <span className='important-bold'> {correspondingDoctor ? correspondingDoctor.hn : 'N/A'} {correspondingDoctor ? correspondingDoctor.barangay : 'N/A'}</span></span>
                                                <br />
                                                <span className='text-capitalize'><i className="fa-solid fa-location-dot"></i><span className='text-capitalize important-bold'>{correspondingDoctor ? correspondingDoctor.municipality : 'N/A'} {correspondingDoctor ? correspondingDoctor.province : 'N/A'}</span></span>
                                                <br /></div>}
                                    </div>
                                </div>
                            </div>
                            <h3 className='mt-5'>Personal Info</h3>
                            <div className="first-half">
                                {x && x.imageData ? <img src={x.imageData}
                                    alt="Patient Profie" />
                                    :
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                        alt="Patient Profie" id="img-all" />
                                }
                                <div className="details-container mx-4">
                                    <div className="personal-details">
                                        <span className='doctor-name'> {x.fullName} </span>
                                        <br />
                                        <span><i className="fa-regular fa-envelope"></i> {x.email}</span>
                                        <br />
                                        <span><i className="fa-solid fa-phone"></i> {x.number}</span>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="first-half note-patient mt-4 mb-3">
                                <div className="details-container-2">
                                    <div className="personal-details">
                                        <h3 className='mt-2 important-bold'>Notes to Patient</h3>
                                        <span className=''>1. The information above will be sent to this Doctor</span>
                                        <br />
                                        <span>2. You will recieve a call to your Doctor and check your email containing about the appoinment. Please check your Spam mailbox as well</span>
                                        <br />
                                        <span>3. The Doctor will give your consultation after the Appoinment. You can check in your consultation Page</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {(x.status === "Accepted" || x.status === "Request") && <Link className='btn-appointment link-buttons' to={`/ProfileLayout/ProfileSchedule/${x._id}`}>Re-schedule</Link>}
                        <Button variant="primary" className="btn btn-danger mt-2" onClick={handleShow}>
                            Cancel Booking
                        </Button>
                        <Modal show={show} onHide={handleClose}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            className="custom-modal" >
                            <Modal.Header closeButton>
                                <Modal.Title>Are you sure you want to delete this?</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button className="btn btn-info px-4" variant="secondary" onClick={handleClose}>
                                    No
                                </Button>
                                <Button className="btn btn-danger px-4" variant="primary" onClick={() => handleDelete(x._id)}>
                                    Yes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div >
                );
            } else {
                return (
                    <div key={index} className="bookings mb-5">
                        <p>Loading....</p>
                    </div>
                );
            }
        }
    });

    return (
        <section className='patient-booking'>
            <div className="container">
                <h2 className='mb-5 text-center'>My Appointments</h2>
                {patients}
            </div>
        </section>
    );
}

export default PatientAppointment;
