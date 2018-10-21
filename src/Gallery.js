import React, { Component } from 'react';
import './App.css'

export default class CustomGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cssName: props
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <p>Yaoo {this.props.className}</p>
            </div>
        );
    }
}