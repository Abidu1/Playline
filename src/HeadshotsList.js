import React, { Component } from 'react';
import headshot from './headshot';


class HeadshotsList extends Component {
  render() {
    return (
      <div className="headshotList">
        {headshot.map((headshot) => {
          return (
            <div className="playerHeadshot">
              <img key={headshot.id} src={headshot.headshot} alt={headshot.fullname} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default HeadshotsList;