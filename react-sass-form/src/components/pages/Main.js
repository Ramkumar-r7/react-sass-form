import React from 'react'
import './styles/Main.scss'
function Main() {
  return (
    <div>
      <div className="header">
        <img
          className="header-logo"
          src="https://institute.e2ehiring.com/content/images/e2e_recruiter_Light%20bckground.svg"
          alt="e2e-logo"
        ></img>
      </div>
      <div className="container">
        <div className="container-img">
          <div className="card">
            <div className="card-container">
              <div className="card-title">
                <span className="card-title-text">For Training Institute</span>
              </div>
              <div className="card-subtitle">
                <div className='card-subtitle-heading'>
                  <span className='card-subtitle-text'>
                    e2eHiring is now partnering with Institutions, empowering its students to achieve their career goal </span>
                </div>
                <hr className='horizontal-line'></hr>
                <p className="card-subtext">
                  With the e2eHiring Institution platform, you will get:
                </p>

                <div className="card-subtext-text">
                  <ul>
                  <li className='card-subtext-list'>Insight about your students hiring status across jobs</li>
                  <li className='card-subtext-list'>Campaign and position your brand.</li>
                  <li className='card-subtext-list'>Dedicated point of contact (POC) to handle queries.</li>
                  <li className='card-subtext-list'> All these with NO COST :)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-form">
          <p className="reg-text">Register</p>
          <div className="form-name">
            <div className="form-firstname">
              <label className="name-label">First name</label>
              <input
                className="name-input"
                type="text"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="form-lastname">
              <label className="name-label">Last name</label>
              <input
                className="name-input"
                type="text"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <label>Institute name</label>
          <input type="text" placeholder="Enter your Institute Name" />
          <label>Registered email</label>
          <input type="text" placeholder="Enter your Email id" />
          <label>Mobile no</label>
          <input type="tel" placeholder="Enter your Mobile" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter your password" />
          <div className='policy-text-container'>
          <p className="policy-text">
            By registering, you agree to our 
             <a target='_blank' href="https://institute.e2ehiring.com/register">
               terms of service
            </a>
            &
            <a target='_blank' href="https://institute.e2ehiring.com/register">
              privacy policy
            </a>
          </p>
          </div>
          <button className="btn">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Main
