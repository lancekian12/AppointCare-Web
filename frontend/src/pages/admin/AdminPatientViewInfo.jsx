import React from 'react'
import { useParams } from "react-router-dom"
import { NavLink, Outlet, Link } from 'react-router-dom'
import axios from 'axios';

const AdminPatientViewInfo = () => {
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
            <h2 className='refresh'>Patient View Information Admin | <button onClick={refreshPage}>Refresh</button></h2>
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
                    <div className="col-12 mt-5">
                        <div className='viewinfo-button'>
                            <Link to="/Admin"><button className='cancel-changes'>Go back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPatientViewInfo