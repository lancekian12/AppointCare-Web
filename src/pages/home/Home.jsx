import React from 'react'
import FindDoctor from '../../components/reusecomponent/FindDoctor'
import ServiceProvider from '../../components/reusecomponent/ServiceProvider'
import '../../css/Home.css'
import FAQ from '../../components/reusecomponent/FAQ'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main>
      <section className='home'>
        <div className='home text-center mt-3 mx-5'>
          <div className="container align-items-center justify-content-center">
            <div className="row align-items-center justify-content-center">
              <div className="col-6 description">
                <h2>
                  Providing Quality
                  <span style={{ color: "#007E85" }}> HealthCare</span> for A
                  <span style={{ color: "#6EAB36" }}> Brighter</span> and
                  <span style={{ color: "#6EAB36" }}> Healthy</span> Future
                </h2>
                <p className='lead'>At our AppointCare, we are dedicated to providing exceptional medical care to our patients and their families.
                  Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare i
                  ndustry</p>
                <div className='container mt-5 align-items-center'>
                  <div className='row align-items-center justify-content-center'>
                    <div className='col-6'>
                      <Link to="/TopDoctors">
                        <button id="Appointment">Appointments</button>

                      </Link>
                    </div>
                    <div className='col-6'>
                      <Link to="/TopDoctors" className='link-buttons'>
                        <button id="play"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <h3 className='text-center d-inline-block watch'>Find a Doctor</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="Vector.png" alt="Vector" className='vector' />
                <img src="doctor3.png" alt="doctor" className='doctor' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FindDoctor /> */}
      <ServiceProvider />
      <FAQ />
    </main >
  )
}

export default Home