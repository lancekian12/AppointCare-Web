import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from "react-router-dom"
import axios from 'axios';
import "../../css/Consult.css"

const Consult = () => {
    const [patientInfo, setPatientInfo] = useState(null)
    const [postInfo, setPostInfo] = useState({
        consultation: "",
        observation: "",
    })
    console.log(postInfo)
    const params = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${params.id}`);
                setPatientInfo(response.data);
                // setAppointmentInfo(prevState => ({
                //     ...prevState,
                //     doctorId: response.data._id // Assuming _id is the correct property name
                // }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setPostInfo(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    return (
        <div className='container mt-5'>
            {/* <h2 className='text-center mb-5 mt-3'>Consultation</h2> */}
            <div className="row">
                <div className="col-3 appointment-doctor-info">
                    {patientInfo ? (
                        <>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="doctor-picture" />
                            <br />
                            <h2 className='doctor-name-2 text-capitalize'>{patientInfo.Fname} {patientInfo.Lname}</h2>
                            <span><i className="fa-regular fa-envelope"></i> {patientInfo.email}</span>
                            <br />
                            <span><i className="fa-solid fa-phone"></i> {patientInfo.number}</span>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="col-8 book-an-appointment-2">
                    <h2 className='mb-3'>Consultation </h2>
                    <form onSubmit=" ">
                        <label className='label-common'>Common Symptomps</label>
                        <div className='common-symptomps-2'>
                            <div className="checkbox-container">
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Cough
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Unexplained Bruising
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Pain in bone,joints or abdmoen
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Frequent infection
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Tiredness
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Unexplained Rash
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Unexplained Weight Loss
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Shortness of Breath
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Paleness
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Drenching Night sweats
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Unexplained Fever
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Lumps or Swelling
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='observation-appointment'>
                            <div>
                                <label htmlFor="consultation">Observation</label>
                                <textarea className="form-control" id="consultation" placeholder="Enter Observation" onChange={handleChange} value={postInfo.consultation} required />
                            </div>
                            <div>
                                <label htmlFor="consultation">Prescription</label>
                                <textarea className="form-control" id="consultation" placeholder="Enter Observation" onChange={handleChange} value={postInfo.consultation} required />
                            </div>
                            <div className='book-button mt-3'>
                                <NavLink to="/doctorpage/DoctorPatient/"><button type="submit" className='btn-viewprofile px-3'>Go back</button></NavLink>
                                <button type="submit" className='btn-appointment'>Post Consultation</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Consult