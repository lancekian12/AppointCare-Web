import React from 'react'
import '../../css/DoctorProfile.css'
import { NavLink } from 'react-router-dom'
import { useParams } from "react-router-dom"
import axios from 'axios';



const DoctorProfile = () => {
    const [doctorInfo, setDoctorInfo] = React.useState([])
    const params = useParams();
    console.log(params.id)
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/auth/users/${params.id}`);
                setDoctorInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);
    return (
        <section className='doctor-profile-section'>
            <div className="container">
                <div className="header-card-section">
                    <div className="header-avatar">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt="avatar"
                        />
                    </div>
                    <div className="personal-details">
                        <h2>{doctorInfo.Fname} {doctorInfo.Lname}, MD</h2>
                        <span className='speciality'>Heart Surgeon</span>
                        <br />
                        <span>MD since 2010</span>
                        <div className="svg-component">
                            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.26701 3.88159C6.91008 3.83027 7.52057 3.5774 8.01158 3.15897C9.15738 2.18252 10.8426 2.18252 11.9884 3.15897C12.4794 3.5774 13.0899 3.83027 13.733 3.88159C15.2336 4.00135 16.4253 5.19299 16.545 6.69365C16.5964 7.33672 16.8492 7.94721 17.2677 8.43821C18.2441 9.58401 18.2441 11.2693 17.2677 12.4151C16.8492 12.9061 16.5964 13.5166 16.545 14.1596C16.4253 15.6603 15.2336 16.8519 13.733 16.9717C13.0899 17.023 12.4794 17.2759 11.9884 17.6943C10.8426 18.6707 9.15738 18.6707 8.01158 17.6943C7.52057 17.2759 6.91008 17.023 6.26701 16.9717C4.76636 16.8519 3.57471 15.6603 3.45496 14.1596C3.40364 13.5166 3.15077 12.9061 2.73234 12.4151C1.75589 11.2693 1.75589 9.58401 2.73234 8.43821C3.15077 7.94721 3.40364 7.33672 3.45496 6.69365C3.57471 5.19299 4.76636 4.00135 6.26701 3.88159ZM13.7071 9.13374C14.0976 8.74322 14.0976 8.11005 13.7071 7.71953C13.3166 7.329 12.6834 7.329 12.2929 7.71953L9 11.0124L7.70711 9.71953C7.31658 9.329 6.68342 9.329 6.29289 9.71953C5.90237 10.1101 5.90237 10.7432 6.29289 11.1337L8.29289 13.1337C8.68342 13.5243 9.31658 13.5243 9.70711 13.1337L13.7071 9.13374Z" fill="#10B981"></path>
                            </svg>
                            <span>Face to Face Consultation</span>
                            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.26701 3.88159C6.91008 3.83027 7.52057 3.5774 8.01158 3.15897C9.15738 2.18252 10.8426 2.18252 11.9884 3.15897C12.4794 3.5774 13.0899 3.83027 13.733 3.88159C15.2336 4.00135 16.4253 5.19299 16.545 6.69365C16.5964 7.33672 16.8492 7.94721 17.2677 8.43821C18.2441 9.58401 18.2441 11.2693 17.2677 12.4151C16.8492 12.9061 16.5964 13.5166 16.545 14.1596C16.4253 15.6603 15.2336 16.8519 13.733 16.9717C13.0899 17.023 12.4794 17.2759 11.9884 17.6943C10.8426 18.6707 9.15738 18.6707 8.01158 17.6943C7.52057 17.2759 6.91008 17.023 6.26701 16.9717C4.76636 16.8519 3.57471 15.6603 3.45496 14.1596C3.40364 13.5166 3.15077 12.9061 2.73234 12.4151C1.75589 11.2693 1.75589 9.58401 2.73234 8.43821C3.15077 7.94721 3.40364 7.33672 3.45496 6.69365C3.57471 5.19299 4.76636 4.00135 6.26701 3.88159ZM13.7071 9.13374C14.0976 8.74322 14.0976 8.11005 13.7071 7.71953C13.3166 7.329 12.6834 7.329 12.2929 7.71953L9 11.0124L7.70711 9.71953C7.31658 9.329 6.68342 9.329 6.29289 9.71953C5.90237 10.1101 5.90237 10.7432 6.29289 11.1337L8.29289 13.1337C8.68342 13.5243 9.31658 13.5243 9.70711 13.1337L13.7071 9.13374Z" fill="#10B981"></path>
                            </svg>
                            <span>Online Consultation</span>
                        </div>
                        <div className='mt-2'>
                            <button className='btn-appointment px-3 py-2'>Request an Appointment</button>
                            <button className='mx-2 doctor-phonenumber'>+639477402202</button>                        </div>
                    </div>
                </div>
                <div>
                    <div className="container body-section">
                        <div className="row tab-section">
                            <div className="col-2">
                                <button className="tabs"><i className="fa-regular fa-user"></i> Overview</button>
                            </div>
                            <div className="col-2">
                                <button className="tabs"><i className="fa-regular fa-calendar-days"></i> Schedule</button>
                            </div>
                            <div className="col-2">
                                <button className="tabs"><i className="fa-solid fa-sitemap"></i> Affiliation</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container overview-component">
                        <div className="overview-content px-3">
                            <div className="row">
                                <h3>Professional Info</h3>
                                <p>Dr. Lance Kian Flores is in the field of Otolaryngology (ENT).</p>
                                <p>Our doctor treats patients at Christ the King Medical Center Unihealth Las Piñas in Las Piñas City, Metro Manila. Patients are accepted walk in and by appointment.
                                    ou can request for an appointment by clicking on the button or call the clinic at the numbers provided.</p>
                            </div>
                        </div>
                        <div className="schedule content px-3">

                        </div>
                        <div className="affiliations px-3">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorProfile