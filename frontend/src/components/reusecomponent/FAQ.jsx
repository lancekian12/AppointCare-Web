import React from 'react'
import '../../css/FAQ.css'

const FAQ = () => {
  return (
    <section className='FAQ'>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="container">
          <h2 className='text-center my-5'>Frequently Asked Questions</h2>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                How to navigate in Our Website
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <strong>How to navigate in Our Website.</strong> To browse through our website, begin by entering the URL into your web browser. Explore the homepage to find essential information, utilize menus and navigation bars to access various sections, click on links for specific content, scroll to discover additional details, employ the search function as necessary, engage with buttons and forms, and check the footer for extra links or contact information.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                How to book an Appointment
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>How to book an Appointment.</strong> To book an appointment, simply navigate to the "Appointments" section on the app or website, choose your preferred date and time, and follow the prompts to confirm your booking.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                How does the online consultation work?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>How does the online consultation work?</strong> After establishing an appointment through a website or app, individuals engage in virtual meetings with healthcare professionals via video or chat, where they share their medical concerns, receive guidance or a diagnosis, and, if required, obtain prescriptions or receive further recommendations for in-person care.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                What if I need to cancel or reschedule my appointment?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>What if I need to cancel or reschedule my appointment?</strong> If you need to cancel or reschedule your appointment, you can typically do so by accessing the online platform, navigating to your scheduled appointments, and following the provided options for rescheduling or cancellation.
              </div>
            </div>
          </div>
          {/* <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                How does the online consultation work?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong> How does the online consultation work?</strong> Following the appointment scheduling process on a website or app, users connect with healthcare professionals through video or chat, engage in discussions about their medical concerns, receive advice or a diagnosis, and, if needed, acquire prescriptions or additional recommendations for in-person care.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default FAQ