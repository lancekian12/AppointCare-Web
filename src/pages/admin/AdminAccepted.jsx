import React from 'react'
import axios from 'axios';

const AdminAccepted = () => {
    const [doctorData, setDoctorData] = React.useState([]);

    const refreshPage = () => {
        window.location.reload();
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users`);
                setDoctorData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const updateStatus = async (id, status) => {
        try {
            await axios.put(`https://appointment-care-api.vercel.app/api/v1/person/users/${id}`, { status });
            const response = await axios.get('https://appointment-care-api.vercel.app/api/v1/person/users');
            setDoctorData(response.data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const displayDoctorAccepted = doctorData.map(x => {

        if (x.role === "Doctor" && x.status === "Accepted") {
            return (
                <tr key={x._id}>
                    <td className='border-td'>{x.Fname} {x.Lname}</td>
                    <td className='border-td'>{x.number}</td>
                    <td className='border-td'>{x.gender}</td>
                    <td className='border-td'>{x.age}</td>
                    <td className='border-td'>{x.email}</td>
                    <td className='border-td'>{x.status}</td>
                    <td className="td-button border-td">
                        <button type="button" className="btn btn-info admin-button" onClick={() => updateStatus(x._id, "Accepted")}>View Info</button>
                        <button type="button" className="btn btn-danger admin-button" onClick={() => updateStatus(x._id, "Rejected")}>Reject</button>
                    </td>
                </tr>
            );
        }
        return null;
    });

    return (
        <div>
            <h2 className='refresh'>Doctor Accepted Admin | <button onClick={refreshPage}>Refresh</button></h2>
            <div className="p-4">
                <h2 className='applicants'>Doctor AppointCare Accepted</h2>
                <table className="p-4 text-center">
                    <tbody>
                        <tr>
                            <th className="th-color" scope="col">Doctor's Name</th>
                            <th className="th-color" scope="col">Phone Number</th>
                            <th className="th-color" scope="col">Gender</th>
                            <th className="th-color" scope="col">Age</th>
                            <th className="th-color" scope="col">Email</th>
                            <th className="th-color" scope="col">Status</th>
                            <th className="th-color" scope="col">Actions</th>
                        </tr>
                        {displayDoctorAccepted}
                    </tbody>
                </table >
            </div >
        </div>
    )
}

export default AdminAccepted