import React from 'react';
import {ListGroup, Figure } from 'react-bootstrap';
import axios from 'axios';
// import { RadioPage } from './views/radiopage/RadioPage';
// import { Nav, NavItem, NavLink} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './HomeRadio.css';


 
export class HomeRadio extends React.Component {
    constructor (props) {
        super(props);
        this.apiUrl = "http://localhost:3004/radios";

        this.state = {
            radio: [],
            musicRadios: [],
        }
    }
    componentDidMount() {
        this.fetchName();
        // this.fetchImages();
        // this.fetchStreams();
    }

     

    async fetchName() {
        const url = this.apiUrl;
        axios.get(url)
        .then(response => {
            let radio = response.data;
            // console.log(response.data);
            this.setState({radio});
            // console.log(this.state.radio);
        })
        .catch(err => {
            console.log(err);
        });
      }

    render() {
        return (
      
            <div className="main-container">
                <h3> All Radios</h3>
                {this.state.radio.map(radio =>
                <Figure className="cards-layout">
                <Figure.Image className="radio-card"
                  width={171}
                  height={180}
                  alt="171x180"
                  src={radio.image}
                />
                <Figure.Caption>
                <a href ={"/views/radiopage/" + radio.id}>{radio.name}</a>
                </Figure.Caption>
              </Figure>
                )}
            </div>
            );
        }
    }

;    
