import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
