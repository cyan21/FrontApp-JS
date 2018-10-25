import React, { Component } from 'react';
import './App.css';

export default class BannerTop extends Component {

    constructor(props) {
        super(props);

        var dayName = "Sunday",
            monthName = "January",
            todayDate = new Date(),
            todayMsg = "",
            dayNum = todayDate.getDate();

        switch (todayDate.getDay()) {
            case 1: dayName = 'Monday';
                break;
            case 2: dayName = 'Tuesday';
                break;
            case 3: dayName = 'Wednesday';
                break;
            case 4: dayName = 'Thursday';
                break;
            case 5: dayName = 'Friday';
                break;
            case 6: dayName = 'Saturday';
                break;           
            default:
                break;
        }

        switch (todayDate.getMonth()) {
            case 1: monthName = 'Monday';
                break;
            case 2: monthName = 'Tuesday';
                break;
            case 3: monthName = 'Wednesday';
                break;
            case 4: monthName = 'Thursday';
                break;
            case 5: monthName = 'Friday';
                break;
            case 9: monthName = 'October';
                break;           
            default:
                break;
        }
        
        switch (dayNum) {
            case 1: 
            case 21:
            case 31: dayNum += "st";
                break;
            case 2: 
            case 22: dayNum += "nd";
                break;
            case 3: 
            case 23: dayNum += "rd";
                break;        
            default: dayNum += "th";
                break;
        }

        todayMsg =  dayName + ', ' + monthName + ' ' + dayNum;


        this.state = {
            today: todayMsg,
        };

    } // end constructor

    render() {
        return (

            <div className={this.props.myTheme}>
                Yay !! Today, we're {this.state.today}
                <div>it's {this.props.day} !!!</div>  
            </div>
        )
    }
}   