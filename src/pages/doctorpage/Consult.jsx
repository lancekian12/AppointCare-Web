import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import axios from 'axios';
import "../../css/Consult.css";

const Consult = ({ userData }) => {
    const params = useParams();
    const [patientInfo, setPatientInfo] = useState(null);
    const [updateInfo, setUpdateInfo] = useState({
        patientId: params.id,
        symptoms: [],
        observation: "",
        prescription: "",
    });
    console.log(params.id)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${params.id}`);
                setPatientInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);

    const doctorAcceptReject = async (patientId, status) => {
        try {
            await axios.put(
                `https://appointment-care-api.vercel.app/api/v1/appoint/verify/${userData._id}`,
                { patientId, status }
            );
            const response = await axios.get(
                `https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`
            );
            setPatientInfo(response.data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting consultation:", updateInfo);
            if (patientInfo && patientInfo.schedules && patientInfo.schedules.length > 0) {
                await doctorAcceptReject(params.id, "Done");
                const doctorId = patientInfo.schedules[0].doctorId;
                console.log("Doctor ID:", doctorId);
                const response = await axios.put(`https://appointment-care-api.vercel.app/api/v1/appoint/consult/${doctorId}`, updateInfo);
                console.log("Update response:", response.data);
                // window.location.href = "/doctorpage/DoctorPatient/";
            } else {
                console.error("No patient information found.");
            }
        } catch (error) {
            console.error('Error updating consultation:', error);
        }
    };

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            if (checked) {
                setUpdateInfo(prevFormData => ({
                    ...prevFormData,
                    symptoms: [...prevFormData.symptoms, name]
                }));
            } else {
                setUpdateInfo(prevFormData => ({
                    ...prevFormData,
                    symptoms: prevFormData.symptoms.filter(symptom => symptom !== name)
                }));
            }
        } else {
            setUpdateInfo(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    }
    return (
        <div className='container mt-5'>
            {/* <h2 className='text-center mb-5 mt-3'>Consultation</h2> */}
            <div className="row">
                <div className="col-3 appointment-doctor-info">
                    {patientInfo ? (
                        <>
                            <img src={patientInfo.schedules[0].imageData} alt="doctor-picture" />
                            <br />
                            <h2 className='doctor-name-2 text-capitalize'>{patientInfo.schedules[0].fullName}</h2>
                            <span><i className="fa-regular fa-envelope"></i> {patientInfo.schedules[0].email}</span>
                            <br />
                            <span><i className="fa-solid fa-phone"></i> {patientInfo.schedules[0].number}</span>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="col-8 book-an-appointment-2">
                    <h2 className='mb-3'>Consultation </h2>
                    <form onSubmit={handleSubmit}>
                        <label className='label-common'>Common Symptomps</label>
                        <div className='common-symptomps-2'>
                            <div className="checkbox-container">
                                <div>
                                    <input name="cough" className="form-check-input" type="checkbox" value="" id="cough" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="cough">
                                        Cough
                                    </label>
                                </div>
                                <div>
                                    <input name="bruising" className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Unexplained Bruising
                                    </label>
                                </div>
                                <div>
                                    <input name="painInBone" className="form-check-input" type="checkbox" value="" id="painInBone" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="painInBone">
                                        Pain in bone,joints or abdmoen
                                    </label>
                                </div>
                                <div>
                                    <input name="frequentInfection" className="form-check-input" type="checkbox" value="" id="frequentInfection" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="frequentInfection">
                                        Frequent infection
                                    </label>
                                </div>
                                <div>
                                    <input name="tiredness" className="form-check-input" type="checkbox" value="" id="tiredness" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="tiredness">
                                        Tiredness
                                    </label>
                                </div>
                                <div>
                                    <input name="unexplainedRash" className="form-check-input" type="checkbox" value="" id="unexplainedRash" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="unexplainedRash">
                                        Unexplained Rash
                                    </label>
                                </div>
                                <div>
                                    <input name="unexplainedWeightLoss" className="form-check-input" type="checkbox" value="" id="unexplainedWeightLoss" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="unexplainedWeightLoss">
                                        Unexplained Weight Loss
                                    </label>
                                </div>
                                <div>
                                    <input name="shortnessOfBreath" className="form-check-input" type="checkbox" value="" id="shortnessOfBreath" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="shortnessOfBreath">
                                        Shortness of Breath
                                    </label>
                                </div>
                                <div>
                                    <input name="paleness" className="form-check-input" type="checkbox" value="" id="paleness" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="paleness">
                                        Paleness
                                    </label>
                                </div>
                                <div>
                                    <input name="drenchingNightSweats" className="form-check-input" type="checkbox" value="" id="drenchingNightSweats" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="drenchingNightSweats">
                                        Drenching Night sweats
                                    </label>
                                </div>
                                <div>
                                    <input name="unexplainedFever" className="form-check-input" type="checkbox" value="" id="unexplainedFever" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="unexplainedFever">
                                        Unexplained Fever
                                    </label>
                                </div>
                                <div>
                                    <input name="lumpsOfSwelling" className="form-check-input" type="checkbox" value="" id="lumpsOfSwelling" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="lumpsOfSwelling">
                                        Lumps or Swelling
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='observation-appointment'>
                            <div>
                                <label htmlFor="observation">Observation</label>
                                <textarea
                                    className="form-control"
                                    id="observation"
                                    name="observation"
                                    placeholder="Enter Observation"
                                    onChange={handleChange}
                                    value={updateInfo.observation}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="prescription">Prescription</label>
                                <textarea
                                    className="form-control"
                                    id="prescription"
                                    name="prescription"
                                    placeholder="Enter Prescription"
                                    onChange={handleChange}
                                    value={updateInfo.prescription}
                                    required
                                />
                            </div>
                            <div className='book-button mt-3'>
                                <NavLink to="/doctorpage/DoctorPatient/">
                                    <button type="button" className='btn-viewprofile px-3'>Go back</button>
                                </NavLink>
                                <button type="submit" className='btn-appointment'>Post Consultation</button>
                                {/* <NavLink ><button className='btn-viewprofile-2 px-5' onClick={() => doctorAcceptReject(params.id, "Done")}>Done</button></NavLink> */}

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Consult