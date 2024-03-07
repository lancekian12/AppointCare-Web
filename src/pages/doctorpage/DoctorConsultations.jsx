import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VectorThree from "../../../public/consultation-vector-3.png"
import { NavLink } from 'react-router-dom'
import "../../css/PatientConsultation.css"
import tiredness from "../../../public/tiredeness.png"
import cough from "../../../public/cough-vector.png"
import painInBone from "../../../public/painbone.png"
import unexplainedWeightLoss from "../../../public/weightloss.png"
import unexplainedFever from "../../../public/fever.png"
import paleness from "../../../public/paleness.png"
import bruising from "../../../public/bruising-vector.png"
import freqeuentInfection from "../../../public/frequent-infection.png"
import unexplainedRash from "../../../public/rashInfection.png"
import shortnessOfbreath from "../../../public/shortnessofbreath.png"
import drenchingNightSweats from "../../../public/drenching-sweats.png"
import lumpsOfSwelling from "../../../public/lumps-swelling.png"


const DoctorConsultations = ({ userData }) => {
  const [loading, setLoading] = useState(true);
  const [patientInfo, setPatientInfo] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        if (userData && userData._id) {
          const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
          setPatientInfo(response.data);
          setLoading(false);
          if (response.data && response.data.schedules && response.data.schedules.length > 0) {
            const doctorId = response.data.schedules[0].doctorId;
            const response3 = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${doctorId}`);
            setDoctorInfo(response3.data);
          }
        }
      } catch (e) {
        console.error('Error fetching data:', e);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [userData]);

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
            <img src={VectorTwo} alt="patient-vector" />
            <h2 className='mt-4'>No Bookings</h2>
            <p className='lead'>You have no Patients at the moment. Check Patient Appointment List</p>
          </div>
        </div>
      </section>
    );
  }
  const getSymptomImage = (symptom) => {
    switch (symptom) {
      case 'tiredness':
        return <img src={tiredness} alt="Tiredness" />;
      case 'cough':
        return <img src={cough} alt="Cough" />;
      case 'painInBone':
        return <img src={painInBone} alt="Pain in Bone" />;
      case 'unexplainedWeightLoss':
        return <img src={unexplainedWeightLoss} alt="Ununexplained Weight Loss" />;
      case 'unexplainedFever':
        return <img src={unexplainedFever} alt="Unexplained Fever" />;
      case 'paleness':
        return <img src={paleness} alt="Paleness" />;
      case 'bruising':
        return <img src={bruising} alt="Bruising" />;
      case 'frequentInfection':
        return <img src={freqeuentInfection} alt="Frequent Infection" />;
      case 'unexplainedRash':
        return <img src={bruising} alt="Unexplained Rash" />;
      case 'shortnessOfBreath':
        return <img src={shortnessOfbreath} alt="Shortness of Breath" />;
      case 'drenchingNightSweats':
        return <img src={drenchingNightSweats} alt="Drenching Night Sweats" />;
      case 'lumpsOfSwelling':
        return <img src={lumpsOfSwelling} alt="Lumps of Swelling" />;
      default:
        return null;
    }
  };

  const acceptedBookings = patientInfo.schedules.filter(x => x.status === "Done");
  const patients = patientInfo.schedules.map((x, index) => {
    if (x.status === "Done") {
      return (
        <div key={index} className="bookings mb-5">
          <h2 className='status-4'>Status: {x.status}</h2>
          <h3>Doctor Who Oversees the Appointment</h3>
          <div className="row ">
            <div className="first-half ">
              {userData && userData.imageData ? <img src={userData.imageData}
                alt="Patient Profie" />
                :
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="Patient Profie" id="img-all" />
              }
              <div className="details-container">
                <div className="personal-details mx-4">
                  <span className='doctor-name text-capitalize'>{doctorInfo ? `${doctorInfo.Fname} ${doctorInfo.Lname}` : 'N/A'}</span>
                  <br />
                  <span className='speciality text-capitalize'>{doctorInfo ? `${doctorInfo.specialty}` : 'N/A'}</span>
                  <br />
                  <span className='md-doctor' >MD Since {doctorInfo ? `${doctorInfo.md}` : 'N/A'}</span>
                  <br />
                </div>
                <div className="other-details">
                  <span><i className="fa-regular fa-envelope"></i> {doctorInfo ? doctorInfo.email : 'N/A'}</span>
                  <br />
                  <span><i className="fa-solid fa-phone"></i> {doctorInfo ? doctorInfo.number : 'N/A'}</span>
                  <br />
                  <span><i className="fa-solid fa-money-bill-transfer"></i>₱ {doctorInfo ? doctorInfo.consultPrice : 'N/A'}</span>
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
                    : <div><span className='text-capitalize'><i className="fa-regular fa-building"></i> <span className='important-bold'> {doctorInfo ? doctorInfo.hn : 'N/A'} {doctorInfo ? doctorInfo.barangay : 'N/A'}</span></span>
                      <br />
                      <span className='text-capitalize'><i className="fa-solid fa-location-dot"></i><span className='text-capitalize important-bold'>{doctorInfo ? doctorInfo.municipality : 'N/A'} {doctorInfo ? doctorInfo.province : 'N/A'}</span></span>
                      <br /></div>}
                </div>
              </div>
            </div>
            <h3 className='mt-5'>PATIENT Info</h3>
            <div className="first-half mb-4">
              {x && x.imageData ? <img src={x.imageData}
                alt="avatar"
              />
                : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="avatar"
                />}
              <div className="details-container mx-4">
                <div className="personal-details">
                  <span className='doctor-name'>{x.fullName} </span>
                  <br />
                  <span><i className="fa-regular fa-envelope"></i> {x.email}</span>
                  <br />
                  <span><i className="fa-solid fa-phone"></i> {x.number}</span>
                  <br />
                </div>
              </div>
            </div>
            <hr />
            <h3 className='mt-2'>Consultation</h3>
            <div className='first-half'>
              <div className="details-container">
                <div className="personal-details observation">
                  <span className='important-bold'>Observation: </span>
                  <span className='mx-3'>{x.observation}</span>
                  <br />
                  <span className='important-bold'>Prescription: </span>
                  <span className='mx-3'>{x.prescription}</span>
                </div>
                <div className="other-details">
                </div>
              </div>
            </div>
            <h3 className='mt-4'>Common Symptomps</h3>
            <div className="first-half">
              <div className="details-container">
                <div className="personal-details ">
                  <div className='symptomps'>
                    {x.symptoms && x.symptoms.map((symptom, index) => (
                      <div key={index} className="symptomps-column">
                        {/* Render each symptom */}
                        {getSymptomImage(symptom)}
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className='btn-appointment mt-4'>Delete</button>

          </div>
        </div >
      );
    }
  });


  return (
    <section className='patient-accepted-list'>
      <div className="container">
        <h2 className='text-center mt-3 mb-5'>Doctor Consultation History</h2>
        {patients}
      </div>
    </section>
  )
}

export default DoctorConsultations