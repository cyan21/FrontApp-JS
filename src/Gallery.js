import React, { Component } from 'react';
import './App.css'
//import Picture from "./Picture'
import CustomPicture from "custom-picture"

export default class CustomGallery extends Component {

    render() {
        //this.props.myPics.map((im)=>{console.log(im)})
//        console.log(`${this.props.myPics}`)
        console.log("Gallery : " + this.props.myTheme)

        const img_location = "http://192.168.41.41/images/"
        return (
            <div className={this.props.className} >
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <CustomPicture img={img_location + this.props.myTheme + "/"+ this.props.myPics[0]} />
                            <CustomPicture img={img_location + this.props.myTheme + "/"+ this.props.myPics[1]} />    
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
/*
                            <Picture img={"./assets/" + this.props.myTheme + "/"+ this.props.myPics[0]} />

<div>
    <table>
        <tbody>
            {pics.map((pic) => <tr><td>{pic}</td></tr>)} 
        </tbody>
    </table>
</div>
*/
