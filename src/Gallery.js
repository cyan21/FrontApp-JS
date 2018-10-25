import React, { Component } from 'react';
import './App.css'
import Picture from './Picture'

export default class CustomGallery extends Component {

    render() {
        //this.props.myPics.map((im)=>{console.log(im)})
//        console.log(`${this.props.myPics}`)
        console.log("Gallery : " + this.props.myTheme)
        return (

            <div className={this.props.className} >
                <table>
                    <tbody>
                        <tr>
                             <td><Picture img={"./assets/" + this.props.myTheme + "/"+ this.props.myPics[0]} /></td>
                             <td><Picture img={"./assets/" + this.props.myTheme + "/"+ this.props.myPics[1]} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
/*
<div>
    <table>
        <tbody>
            {pics.map((pic) => <tr><td>{pic}</td></tr>)} 
        </tbody>
    </table>
</div>
*/