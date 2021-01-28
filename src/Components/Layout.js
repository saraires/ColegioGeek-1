import React from 'react';
import Footer from './Footer';
import Encabezado from './Navbar';

function Layout(props) {
    return(
        <>
        <Encabezado />
        {props.children}
        <Footer/>
        </>
    )
}

export default Layout;