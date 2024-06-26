import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../../css/Footer.css'
import logoImage from "/logo.png"



const Footer = () => {
    const [storedUserData, setStoredUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setStoredUserData(JSON.parse(storedUserData));
        }
    }, []);
    return (
        <section>
            <footer className='align-items-center justify-content-center'>
                <div className='container'>
                    <div className="row">
                        <div className="col-3 footerLogo">
                            <img src={logoImage} alt="logo" />
                            <h2>AppointCare</h2>
                            <h4>Copyright @2023. Design by: Lance Kian Flores</h4>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2 info">
                            <h3>Office <div className="underline"><span></span></div> </h3>
                            <p>PHINMA University</p>
                            <p>Dagupan City</p>
                            <p>Pangasinan, 2433</p>
                            <p className='email-id mb-3'>lafa.flores.up@phinmaed.com</p>
                            <h4>+63-9477402202</h4>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2 flex-column justify-center links">
                            <h3>Links <div className="underline"><span></span></div></h3>
                            <ul className='list-unstyled'>
                                <li className="nav-item nav2"><NavLink exact="true" to="/" className="nav-link">Home</NavLink></li>
                                <li className="nav-item nav2"><NavLink to="/TopDoctors" className="nav-link">Find Doctor</NavLink></li>
                                <li className="nav-item nav2"><NavLink to="/Contact" className="nav-link">Contact Us</NavLink></li>
                                {storedUserData && <li className="nav-item nav2"><NavLink to="/PatientAppoinment" className="nav-link">My Bookings</NavLink></li>}
                                {storedUserData && <li className="nav-item nav2"><NavLink to="/PatientConsultation" className="nav-link">Consultation</NavLink></li>}

                            </ul>
                        </div>
                        <div className="col-2 footer-form">
                            <h3>Email Us <div className="underline"><span></span></div></h3>
                            <form action="">
                                <i className="far fa-envelope"></i>
                                <input type="email" placeholder="Enter your email here" required />
                                <Link to="/Contact"><button type='submit'><i className="fas fa-arrow-right"></i></button></Link>
                            </form>
                            <div className="icons">
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='copyright'>Lance Kian Flores © 2023 - All Rights Reserved</p>
            </footer>
        </section>
    )
}

export default Footer