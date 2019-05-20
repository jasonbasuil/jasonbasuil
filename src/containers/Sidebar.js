import React, {Component} from 'react'
import headshot from '../assets/headshot.JPG'
import linkedin from '../assets/iconfinder_linkedin_834713.png'
import github from '../assets/iconfinder_mark-github_298822.svg'
import twitter from '../assets/iconfinder_twitter_834708.svg'

class Sidebar extends Component {

  render() {
    return(
      <div>
        <img id='headshot' src={headshot}/>
        <div class='name'>Jason Basuil</div>
        <div class='info'>Web Developer // Nonprofit Co-Founder</div>
          <div>
            basuilj@gmail.com
          </div>
          <div>
            (408)-772-3695
          </div>
        <div class='icons-container'>
          <a href='https://www.linkedin.com/in/jasonbasuil/'>
            <img id='icon' src={linkedin} />
          </a>
          <a href='https://github.com/jasonbasuil'>
            <img id='icon' src={github} />
          </a>
          <a href='https://twitter.com/jasonbasuil'>
            <img id='icon' src={twitter} />
          </a>
        </div>
      </div>
    )
  }
}

export default Sidebar;
