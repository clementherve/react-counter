import '../styles/header.css';
import React, { useEffect } from 'react';


function Header (props) {

    useEffect(() => {
        setInterval(() => {
            props.reset();
        }, 10000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<header>{ props.title }</header>);
}

export default Header;