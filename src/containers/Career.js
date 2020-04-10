import React from 'react';
import EarninLogo from "../assets/photos/earnin_logo.png"

const Career = () => {

  return(
    <div class='card'>
      <h2>Career</h2>
      <div class='job-container'>
        <div class='job-logo'>
          <img src={EarninLogo} alt='earnin logo' style={{height: "auto", maxWidth: "80%"}}/>
        </div>
        <div class='job-title'>
            <h3 align='left' style={{fontSize:"2vw", marginTop:"1vh", marginBottom: "5px"}}>Software Engineer</h3>
            <div align='left' style={{fontSize:"1vw"}}>Earnin - Palo Alto, CA</div>
            <div align='left' style={{fontSize:"1vw"}}>September 2019 - April 2020</div>
        </div>
        <div class='job-description'>
          <div align='left'>
            <ul style={{padding: 0}}>
              <li style={{fontSize:"1.25vw"}}>Developed React components to help build internal tools for a customer support base of 1000+ agents</li>
              <li style={{fontSize:"1.25vw"}}>Assisted in the design and planning for the migration of a legacy support tool that used modern JavaScript frameworks, decreased cognitive-load for users, and increased security permissions</li>
              <li style={{fontSize:"1.25vw"}}>Practiced Agile in 2 week sprints with 6 other developers and worked cross-functionally across pods</li>
              <li style={{fontSize:"1.25vw"}}>Supported new product launches by building new features for internal support tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career