import React from "react";
import pic from "../assets/photos/self_selfie.jpg"

const ProfilePic = () => {
  return(
    <div id="image-container">
      <img id="profile-photo" src={pic} alt='profile'/>
    </div>
   
  )
}

export default ProfilePic