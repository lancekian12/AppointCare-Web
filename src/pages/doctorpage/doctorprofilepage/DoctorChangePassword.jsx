import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const DoctorChangePassword = ({ userData }) => {
    const [storedUserData, setStoredUserData] = useState(null)
    const [newPassword, setNewPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [passwordWrong, setPasswordWrong] = useState(false);

    useEffect(() => {
        setPasswordWrong(false);
    }, []);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setStoredUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPassword(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditName = async () => {
        let newErrors = {};
        let isValid = true;

        if (!newPassword.currentPassword) {
            newErrors.currentPassword = 'Password is required';
            isValid = false;
        } else {
            newErrors.currentPassword = '';
        }

        if (!newPassword.newPassword) {
            newErrors.newPassword = 'Password is required';
            isValid = false;
        } else if (newPassword.newPassword.length < 8) {
            newErrors.newPassword = 'Password must be 8 characters long';
            isValid = false;
        } else {
            newErrors.newPassword = '';
        }

        if (!newPassword.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (newPassword.confirmPassword !== newPassword.newPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        } else {
            newErrors.confirmPassword = '';
        }

        if (isValid) {
            try {
                const response = await axios.put(`https://appointment-care-api.vercel.app/api/v1/person/password/${userData._id}`, newPassword);
                console.log("Successfully updated");
                window.location.href = "/DoctorPage"
            } catch (error) {
                if (error.response.status = 400) {
                    setPasswordWrong(true)
                } else {
                    console.error('Error updating user data:', error);
                }
            }
        } else {
            setErrors(newErrors);
        }
    };
    return (
        <div className="col-7 mx-5 mt-3 mb-5">
            <div className="row align-items-center mb-3">
                <div className="col-5">
                    <h2 className='mb-3'>Change Password</h2>
                </div>
            </div>
            <div className="row info-input">
                <div className="input-control">
                    <label htmlFor="currentPassword" className="form-label d-block">Current Password*</label>
                    <input placeholder='Enter your Password' autoComplete='new-password' type="password" className={`form-control ${errors.currentPassword ? 'is-invalid' : ''}`} id="currentPassword" name="currentPassword" value={newPassword.currentPassword} onChange={handleChange} />
                    {errors.currentPassword && <div className="error">{errors.currentPassword}</div>}
                </div>
                <div className="input-control">
                    <label htmlFor="newPassword" className="form-label d-block">New Password*</label>
                    <input placeholder='Enter your Password' autoComplete='new-password' type="password" className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`} id="newPassword" name="newPassword" value={newPassword.newPassword} onChange={handleChange} />
                    {errors.newPassword && <div className="error">{errors.newPassword}</div>}
                </div>
                <div className="input-control">
                    <label htmlFor="confirmPassword" className="form-label d-block">Confirm Password*</label>
                    <input placeholder='Enter your Confirm Password' autoComplete='new-password' type="password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" name="confirmPassword" value={newPassword.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </div>
                <div className="col-7">
                </div>
                <div className="col-2">
                    <button className='save-changes' onClick={handleEditName}>Save Changes</button>
                </div>
                <div className="col-2">
                    <Link to="/DoctorPage"><button className='cancel-changes'>Cancel</button></Link>
                </div>
                {passwordWrong && <div className="alert alert-danger alert-email mt-3" role="alert">Current Password is Incorrect! Please double check your current password.</div>}

            </div>
        </div>
    )
}

export default DoctorChangePassword