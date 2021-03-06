import React from 'react'
import './App.css'
import axios from 'axios'
import { PlayerCards } from './components/PlayerCards'
import { DarkModeButton } from './components/DarkModeButton'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: [{}]
    }
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({players:res.data});
      })
      .catch(err => console.error.apply(err));
  }
  

  render(){
    return (
      <div className = 'App'>
        <DarkModeButton />
        <h1>Best Soccer Players Ever</h1>
        {this.state.players.map(item => {
          return <PlayerCards players={item} />
        })}
      </div>
      
    )
  }
}

export default App