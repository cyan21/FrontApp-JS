import React, { Component } from 'react';
import './App.css'

export default class Picture extends Component {

    showPic() {
        console.log('this is:', this);
    }
	
    render() {
        const style = {
            height: "100px", 
            width: "100px",  
            backgroundImage: "url(" + require(`${this.props.img}`) +")" 
        };

        return(
            <input id="clickbutton" type="button" style={style}  onClick={e=> this.showPic(e)}/> 
        );
    }
} 