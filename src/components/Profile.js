import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
  return(
    <div className="container profile">
      <User 
          src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
          alt="man" 
          name="Scott"/>
      <Palette/>
    </div>
  )
}

export default Profile;