import React from 'react';
import FooterEspecifico from './FooterEspecifico';
import Encabezado from './Navbar';

function Layout(props) {
    return(
        <>
        <Encabezado />
        {props.children}
        <FooterEspecifico/>
        </>
    )
}

export default Layout;