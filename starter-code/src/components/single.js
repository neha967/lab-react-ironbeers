import React, { Component } from "react";
import axios from "axios";
import Header from "./header";

class Single extends Component {
    constructor(props){
        super(props);
        this.state = {
            beer: {}
        }
    }

    componentDidMount(){
        let beerId = this.props.match.params.id

        axios.get(`https://ih-beers-api.herokuapp.com/beers/${beerId}`)
        .then(response => {
            this.setState({
                beer: response.data
            })
        })
    }

    render(){
        return(
            <div className="single-container">
                <Header/>
                <div class="single-wrapper">
                <img src={this.state.beer.image_url} alt="" className="single-beer"/>
                <div className="d-flex">
                    <span className="font-weight-bold">{this.state.beer.name}</span>
                    <span className="ml-auto lead text-secondary">{this.state.beer.attenuation_level}</span>
                </div>
                <div className="d-flex">
                    <span className="text-secondary">{this.state.beer.tagline}</span>
                    <span className="ml-auto font-weight-bold">{this.state.beer.first_brewed}</span>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start">
                <p>{this.state.beer.description}</p>
                <p className="text-secondary">{this.state.beer.contributed_by}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Single