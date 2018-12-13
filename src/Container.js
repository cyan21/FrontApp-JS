import React, { Component } from 'react';
import './App.css';
import CustomGallery from "custom-gallery" 

export default class Container extends Component {

    render() {

        const c = "Day-img", c2= "Day-desc";
        var pics = ["no-data-thumbnail.jpg", "no-data-thumbnail.jpg"]; 
 
        if (`${this.props.myTheme}`.localeCompare("Unicorn") === 0) {
            console.log("Unicorn day")
            pics = ["./images/Unicorn/unicorn1-thumbnail.jpg", "./images/Unicorn/unicorn2-thumbnail.jpg"]; 
        } 
        
        if (`${this.props.myTheme}`.localeCompare("Halloween") === 0) {
            console.log("Halloween")
            pics = ["./images/Halloween/halloween1-thumbnail.jpg", "./images/Halloween/halloween2-thumbnail.jpg"]; 
        } 

        var theme = this.props.myTheme ? this.props.myTheme : "Normal";

/*    
        console.log("theme :" + this.props.myTheme);
        console.log("themePics :" + pics[`${this.props.myTheme}`]);
*/        console.log("theme :" + theme);
        console.log("pics :" + pics);


        return (
            
            <div className={theme + "-back"} >
                <CustomGallery myPics={pics} myTheme={theme} />
                <div className={c2}>
                    {this.props.desc}
                </div>
            </div>

        )
    }
}
