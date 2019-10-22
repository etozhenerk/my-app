import React from 'react';
import User from './User';

export default function Users() {
  return(
    <div className="right">
        <User 
          src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
          alt="man" 
          name="Scott"/>
        <div className="users__block">
          <User 
            src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
            alt="man" 
            name="Scott"
            min/>
          <User 
            src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
            alt="man" 
            name="Scott"
            min/>
          <User 
            src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
            alt="man" 
            name="Scott"
            min/>
          <User 
            src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
            alt="man" 
            name="Scott"
            min/>
        </div>
    </div>
  )
}