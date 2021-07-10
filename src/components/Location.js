import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Location extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <img src={this.props.locationImage} alt=''/>
            </div>
        )
    }
}

export default Location
