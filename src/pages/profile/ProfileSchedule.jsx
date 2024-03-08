import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Schedule = ({ userData }) => {
  const [storedUserData, setStoredUserData] = React.useState(null);
  const [patientInfo, setPatientInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [editAppointment, setEditAppointment] = React.useState({ // Add editAppointment state
    patientId: '',
    f2f: true,
    online: false,
    date: '',
    time: '',
    status: 'Request',
  });
  const params = useParams(); // Access URL parameters
  console.log(params.id);

  // Fetch patient information based on the ID parameter from the URL
  React.useEffect(() => {
    const fetchPatient = async () => {
      try {
        if (userData && userData._id) {
          const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${params.id}`);
          setPatientInfo(response.data);
          setLoading(false);
        }
      } catch (e) {
        console.error('Error fetching data:', e);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [userData, params.id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://appointment-care-api.vercel.app/api/v1/appoint/delete/${id}`);
      window.location.reload();

    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  console.log(patientInfo)

  React.useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setStoredUserData(parsedUserData);
      setEditAppointment(prevState => ({
        ...prevState,
        patientId: parsedUserData._id
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'f2f') {
      setEditAppointment((prevState) => ({
        ...prevState,
        f2f: true,
        online: false,
      }));
    } else if (id === 'online') {
      setEditAppointment((prevState) => ({
        ...prevState,
        f2f: false,
        online: true,
      }));
    } else {
      setEditAppointment((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://appointment-care-api.vercel.app/api/v1/appoint/edit/${params.id}`,
        editAppointment
      );
      window.location.href = "/"
      console.log(response.data);
    } catch (error) {
      console.error('Error editing appointment:', error);
    }
  };
  const pendingAppointments = patientInfo && patientInfo.schedules ? patientInfo.schedules.filter(x => x.status !== "Done" && x.status !== "Delete") : [];
  const schedule = pendingAppointments.map((x, index) => {
    if (x.status !== "Done" && x.status !== "Delete") {
      return (
        <div key={index} className="bookings mb-5">
          <option value="1">{x._id}</option>
        </div>
      )
    }
  });

  return (
    <div className="col-7 mx-5 mt-3 mb-5">
      <div className="row align-items-center mb-3">
        <div className="col-5">
          <h2 className="mb-3">Edit Schedule</h2>
        </div>
      </div>
      <div className="row info-input">
        <form onSubmit={handleSubmit}>
          <div className="col-12 px-0">
            {/* <label htmlFor="">Select Appoinment to Edit</label>
            <select class="form-select my-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">{schedule}</option>
            </select> */}
            <label htmlFor="schedule-date">Date</label>
            <br />
            <input
              required
              type="date"
              className="form-control"
              id="date"
              value={editAppointment.date}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 px-0">
            <label htmlFor="schedule-time">Time</label>
            <br />
            <input
              required
              type="time"
              className="form-control"
              id="time"
              value={editAppointment.time}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 px-0">
            <label htmlFor="schedule-status">Status</label>
            <br />
            <select
              required
              className="form-control"
              id="status"
              value={editAppointment.status}
              onChange={handleChange}
            >
              <option value="Request">Request</option>
              <option value="Canceled">Cancel</option>
            </select>
          </div>
          <div className="col-12 px-0 my-3">
            <label>Consultation Type</label>
            <br />
            <div className="mx-auto appointment-f2f">
              <div>
                <input
                  type="radio"
                  id="f2f"
                  name="consultationType"
                  value="f2f"
                  checked={editAppointment.f2f}
                  onChange={handleChange}
                />
                <label htmlFor="f2f">F2F</label>
              </div>
              <div>
                <input
                  required
                  type="radio"
                  id="online"
                  name="consultationType"
                  value="online"
                  checked={editAppointment.online}
                  onChange={handleChange}
                />
                <label htmlFor="online">Online</label>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-end'>
            <button className="save-changes mx-3" type="submit">
              Save Changes
            </button>
            <Link to="/"><button className='cancel-changes'>Cancel</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
