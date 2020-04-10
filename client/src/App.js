import React from 'react'
import './App.css'
import axios from 'axios'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState(res.data);
      })
      .catch(err => console.error.apply(err));
  }

  render(){
    return (
      <div className = 'App'>
        <h1>Place Holder</h1>

      </div>
    )
  }
}

export default App