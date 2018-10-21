import React, { Component } from 'react';

import './App.css';

export default class BannerTop extends Component {

    constructor() {
        super();

        var dayName = "Sunday",
            monthName = "January",
            todayDate = new Date(),
            todayMsg = "";

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
        todayMsg =  dayName + ',' + todayDate.getFullYear() + '-' + monthName + ' ' + todayDate.getDate();

        this.state = {
            today: todayMsg
        };
    }

    render() {
        return (
            <div className="Test">
                Yay !! Today, we're {this.state.today}
                <div>it's Unicorn Day</div>  
            </div>
        )
    }
}