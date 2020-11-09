import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import { Link,Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import axios from 'axios';
import {Nav,NavDropdown} from 'react-bootstrap';
import idea from './idea.png';
import { BASE_API_URL } from '../../utils/constants';

import './Header.css'


class NoMatch extends Component {

    render() {
        return(
        <>
        <h1>Sin coincidencias</h1>
        </>)
    }
}
export default NoMatch;