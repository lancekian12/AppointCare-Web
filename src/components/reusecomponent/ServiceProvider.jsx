import React from 'react'
import '../../css/ServiceProvider.css'

const ServiceProvider = () => {
  return (
    <section className='provider mb-5'>
      <div className="container">
        <div className='text-center service-provide'>
          <h2>Services we Provide</h2>
          <p>
            Our services include diagnosing fractures and injuries, X-ray checkups, specialist consultations, eye care, and various treatments.</p>
        </div>
        <div className="row justify-content-center align-items-center provide">
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="diagnosis.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Diagnosis</h5>
                <p>We provide thorough diagnostic services to identify and manage a wide range of health concerns.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="injury.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Fractures and Injury</h5>
                <p className="card-text">Our expertise includes diagnosing and treating fractures and injuries promptly and effectively.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="teeth.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Xray Checkup</h5>
                <p className="card-text">Benefit from our detailed X-ray examinations, offering accurate insights into your health and aiding in precise medical assessments.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="special.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Specialist Consultations</h5>
                <p className="card-text">Receive specialized medical advice through our expert consultations, customized to meet your individual health needs.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="treatment.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Eye Care</h5>
                <p className="card-text">Prioritize your eye health with our dedicated eye care services, offering everything from routine check-ups to specialized treatments.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="eyecare.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Treatments</h5>
                <p className="card-text">Discover a variety of treatments designed to target specific health conditions and enhance your overall well-being.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProvider