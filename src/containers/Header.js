import React, {Component} from 'react'
import header_img from '../assets/IMG_0957@2x.png'

class Header extends Component {

  render() {
    return(
      <div>
        <img class='hero-component'src={header_img} />
        <h1>Jason Basuil</h1>
        <h2>Frontend Web Developer</h2>
      </div>
    )
  }
}

export default Header;
