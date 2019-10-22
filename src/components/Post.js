import React, { Component } from "react";
import User from "./User";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User 
          src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg" 
          alt="man" 
          name="Scott"
          min/>
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">some account</div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>
    );
  }
}
