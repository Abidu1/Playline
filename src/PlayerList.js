import React, { Component } from 'react';
import players from './players';

class PlayerList extends Component {
  render() {
    return (
      // Displaying the database of the players
      <div className="playerInfo">     
        {players.map((players) => {
          return (
            <div className="playerInfo">
              <div>
              <div className="playerHeadshot">
              <img src={players.headshot} alt={players.last_name} />
            </div>
              <p>{players.last_name}</p>
              </div>
              <div> 
                <h3 className="points">{players.points}</h3>
                <p>PTS</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlayerList;