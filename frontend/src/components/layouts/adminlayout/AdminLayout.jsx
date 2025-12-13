import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "../../../css/AdminLayout.css"
import logoImage from "/logo.png"


const AdminLayout = ({ adminData }) => {
    const handleLogout = () => {
        localStorage.removeItem('tokenAdmin');
        localStorage.removeItem('adminData');
        window.location.href = '/AdminLogin';
    };
    return (
        <section>
            {adminData ?
                <div className="wrapper">
                    <aside id="sidebar2">
                        <div className='mb-1 mt-5 text-center admin-title'>
                            <img src={logoImage} alt="logo" className='mb-2 img-fluid' />
                            <br />
                            <span>Appoint<span>Care</span></span>
                            <br />
                            <span>Admin Panel</span>
                        </div>
                        <ul className="sidebar-nav">
                            <li className="sidebar-item">
                                <NavLink exact="true" end className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"} to="/Admin">
                                    <i className='lni lni-grid-alt'></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="AdminPending" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-list-check"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="AdminAccepted" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-circle-check"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="AdminRejected" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-ban"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="PatientList" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-users"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="DoctorList" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-user-doctor"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/" onClick={handleLogout} className="sidebar-link"><i className="fa-solid fa-right-from-bracket"></i></NavLink>
                            </li>
                        </ul>
                    </aside>
                    <div className='admin-outlet'>
                        <Outlet />
                    </div>
                </div>
                : (
                    <>
                        <div className='denied bg-danger'>Access Denied! Please go back!</div>
                    </>
                )}
        </section>
    )
}

export default AdminLayout