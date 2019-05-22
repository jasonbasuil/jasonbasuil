import React, {Component} from 'react'
import header_img from '../assets/IMG_0957.png'

class Header extends Component {

  render() {
    return(
      <div>
        <img class='hero-component'src={header_img} />
        <h1 class='header-name'>JASON BASUIL</h1>
        <h3>Web Developer // Nonprofit Co-Founder</h3>
      </div>
    )
  }
}

export default Header;
