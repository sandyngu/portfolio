import React from 'react';
import Camera from '../../assets/images/polaroidcamera2.png';
import Polaroid from '../../assets/images/polaroid.png';
import Photo1 from '../../assets/images/1.jpg';
import Photo2 from '../../assets/images/2.jpg';
import Photo3 from '../../assets/images/3.jpg';
import './about-me.scss';

function AboutMe() {

    return (
        <div className="section aboutme" id="aboutme">
            <p className="aboutme__title">about me</p>
            <div className="aboutme__content">
                <div className="aboutme__photos">
                    <img src={Camera} alt="Polaroid Camera" className="aboutme__camera"/>
                    <div className="aboutme__photo-container aboutme__photo-container1">
                        <img src={Polaroid} alt="Polaroid" className="aboutme__border aboutme__border1"/>
                        <img src={Photo1} alt="Polaroid" className="aboutme__photo aboutme__photo1"/>
                    </div>
                    <div className="aboutme__photo-container aboutme__photo-container2">
                        <img src={Polaroid} alt="Polaroid" className="aboutme__border aboutme__border2"/>
                        <img src={Photo2} alt="Polaroid" className="aboutme__photo aboutme__photo2"/>
                    </div>
                    <div className="aboutme__photo-container aboutme__photo-container3">
                        <img src={Polaroid} alt="Polaroid" className="aboutme__border aboutme__border3"/>
                        <img src={Photo3} alt="Polaroid" className="aboutme__photo aboutme__photo3"/>
                    </div>
                </div>
                <div className="aboutme__bio">
                    <p className="aboutme__greeting aboutme__text">Hello!</p>
                    <p className="aboutme__text">
                        My name is Sandy and I am a full-stack web developer & registered nurse. 
                        I am excited to make a career transition to web development; I love seeing
                        complex ideas come to fruition through problem-solving and implementation of 
                        various technical languages. I am committed to lifelong learning and am so 
                        eager to grow my technical skills and build wonderful, life-altering applications.
                        My passion for technology extends to my hobby of playing PC games in my 
                        spare time -- particularly Valorant and League of Legends. I even built my own PC last spring!

                        <br/><br/><q className="aboutme__text aboutme__text-quote">Dream it. Believe it. Build it.</q>

                        <br/><br/>Below is a showcase of the various projects I was able to complete. 
                        Don't hesitate to get in touch with me through <a href="https://www.linkedin.com/in/sandyngu/" className="aboutme__link">LinkedIn</a>, 
                        <a href="https://github.com/sandyngu" className="aboutme__link"> GitHub</a> or <a href="mailto:sandy_nguyen@live.ca" className="aboutme__link">e-mail</a>!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
