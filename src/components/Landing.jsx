import './landing.css'
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import './main.css'
import cv from '../img/cv.pdf'
import { MdEmail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import landingImg from '../img/team/yonela.jpg'
function Landing() {
  return (
    <div>
      <div id="home" className='landing'>
      <div className="landing-left">
          <div className="landing-left-wrapper">
            <p className="landing-intro">Entry Level Sofware Engineer</p>
            <p className="landing-desc">
              Hey I am Yonga, a entry level Software engineer based in Cape Town, RSA
            </p>
          </div>
      </div>
        <div className="landing-left">
          <div className="landing-left-wrapper">
          <img src={landingImg} className='landing-img' alt=" Yonela Johannes" />
            <h1 className="landing-name">YONELA JOHANNES</h1>
            <div className="landing-title">
              <div className="landing-title-wrapper">
                <div className="landing-title-item">Web Developer</div>
                <div className="landing-title-item">Entry Level Software Engineer</div>
                <div className="landing-title-item">Web Developer</div>
              </div>
            </div>
              <a href={cv} target='_blank' class="cv">TLTR? Download CV <BsFillFileEarmarkPdfFill className='icon' /></a>
          </div>
        </div>
        <div className="landing-left">
          <div className="landing-left-wrapper">
            <p className="landing-intro">Web Developer in Cape Town</p>
            <p className="landing-desc">If you belief it, it is so.<br />
            As a man thinketh in his heart, so is he.
            </p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Landing
