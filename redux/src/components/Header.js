import '../styles/header.css';
import React, { useEffect } from 'react';
import { reset } from '../redux/store';


function Header (props) {

    useEffect(() => {
        setInterval(() => {
            reset();
        }, 10000);
    }, []);

    return (<header>{ props.title }</header>);
}

export default Header;