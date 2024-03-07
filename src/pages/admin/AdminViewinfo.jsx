import React from 'react'
import { useParams } from "react-router-dom"
import { NavLink, Outlet, Link } from 'react-router-dom'
import axios from 'axios';
import '../../css/AdminViewinfo.css'


const AdminViewinfo = () => {
  const [doctorInfo, setDoctorInfo] = React.useState([])
  const params = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${params.id}`);
        setDoctorInfo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [params.id]);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`https://appointment-care-api.vercel.app/api/v1/person/users/${id}`, { status });
      const response = await axios.get('https://appointment-care-api.vercel.app/api/v1/person/users');
      setDoctorInfo(response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2 className='refresh'>Doctor Accepted Admin | <button onClick={refreshPage}>Refresh</button></h2>
      <div className="container mt-3">
        <div className="row image-view align-items-center">
          <div className="col-3">
            <h2 className=''>Doctor Information</h2>
          </div>
          <div className="col-6"></div>
          <div className="col-3 avatar-image-view">
            {doctorInfo && doctorInfo.imageData ? (
              <img src={doctorInfo.imageData} alt="patient-image" />
            ) : (
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="patient-image" />
            )}
          </div>
          <div className="col-12 ">
            <h3>Full Name:</h3>
            <h4>{doctorInfo.Fname} {doctorInfo.Lname}</h4>
          </div>
          <div className="col-12">
            <h3>Email:</h3>
            <h4>{doctorInfo.email}</h4>
          </div>
          <div className="col-12">
            <h3>Phone Number:</h3>
            <h4>{doctorInfo.number}</h4>
          </div>
          <div className="col-12">
            <h3>Gender:</h3>
            <h4>{doctorInfo.gender}</h4>
          </div>
          <div className="col-12">
            <h3>Age:</h3>
            <h4>{doctorInfo.age}</h4>
          </div>
          <div className="col-12">
            <h3>Clinic House Number :</h3>
            <h4>{doctorInfo.hn}</h4>
          </div>
          <div className="col-12">
            <h3>Clinic Barangay:</h3>
            <h4>{doctorInfo.barangay}</h4>
          </div>
          <div className="col-12">
            <h3>Clinic Municipality:</h3>
            <h4>{doctorInfo.municipality}</h4>
          </div>
          <div className="col-12">
            <h3>Clinic Province:</h3>
            <h4>{doctorInfo.province}</h4>
          </div>
          <div className="col-12">
            <h3>MD:</h3>
            <h4>{doctorInfo.md}</h4>
          </div>
          <div className="col-12">
            <h3>Specialty:</h3>
            <h4>{doctorInfo.specialty}</h4>
          </div>
          <div className="col-12">
            <h3>Consultation Price:</h3>
            <h4>{doctorInfo.consultPrice}</h4>
          </div>
          <div className="col-12 license-picture">
            <h3>License Picture:</h3>
            <img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/431024564_365942866273667_8372084059085554563_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUTUaBwl8NQryimQyxjaK2YTI-OOPLs8BhMj4448uzwDp3MO0hU5A6Vv242PN6ZCkw5ehsMtNoXj3U158ddoZp&_nc_ohc=B3DZBOHoi-oAX-b02ar&_nc_ht=scontent.fbag1-2.fna&oh=03_AdRepcwWhakVqW7_fNWJgTlAF0BQclc9MwV6-GjDirYxTQ&oe=66100A02" alt="license-picture" />
          </div>
          <div className="col-12 mt-5">
            <div className='viewinfo-button'>
              <Link to="/Admin"><button className='save-changes mb-2' onClick={() => updateStatus(doctorInfo._id, "Accepted")}>Accept</button></Link>
              <Link to="/Admin"><button className='cancel-changes'>Go back</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminViewinfo