import React from 'react'
import linkedin from '../assets/iconfinder_linkedin_834713.png'
import github from '../assets/iconfinder_mark-github_298822.svg'
import twitter from '../assets/iconfinder_twitter_834708.svg'
import devto from '../assets/devto.png'
import ProfilePic from "../containers/ProfilePic"

const borderRadius = {borderRadius: '200px'}

const Sidebar = () =>  {

    return(
      <div class='side-bar'>
        <ProfilePic />
        <div class='name'>Jason Basuil</div>
        <div class='info'>Software Engineer</div>
        <div class='info'>Nonprofit Co-Founder</div>
          <div class='info'>
            basuilj@gmail.com
          </div>
          <div class='info'>
            (408)-772-3695
          </div>
        <div class='icons-container'>
          <a href='https://www.linkedin.com/in/jasonbasuil/'>
            <img id='icon' alt='linkedin icon' src={linkedin} />
          </a>
          <a href='https://github.com/jasonbasuil'>
            <img id='icon' alt='github icon' src={github} />
          </a>
          <a href='https://twitter.com/jasonbasuil'>
            <img id='icon' alt='twitter icon' src={twitter} />
          </a>
          <a href='https://dev.to/jasonbasuil'>
            <img style={borderRadius} id='icon' alt='icon' src={devto} />
          </a>
        </div>
      </div>
    )
  }

export default Sidebar;
