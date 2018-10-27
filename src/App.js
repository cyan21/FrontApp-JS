import React, { Component } from 'react'
import axios from 'axios'
import Container from './Container'
import BannerTop from './BannerTop'


class App extends Component {
  
  constructor() {
    super()

    this.state = {
      day: "truc",
      specialMsg: "",
      desc: "",
      myTheme: ""
    };  
  }

  componentWillMount() {
    axios.get('http://localhost:4000/today')
        .then(json =>  
            {
                this.setState({
                    day: json.data.day, 
                    myTheme: json.data.theme,
                    desc: json.data.description
                });                
            })
  } 

  render() {  
    return (
      <div>
        <BannerTop day={this.state.day} myTheme={this.state.myTheme}/>
        <Container desc={this.state.desc} myTheme={this.state.myTheme}/>
      </div>
    );
  }
}

export default App;
