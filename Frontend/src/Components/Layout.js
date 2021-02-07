import React from 'react';
import FooterEspecifico from './FooterEspecifico';

function Layout(props) {
    return(
        <>
        {props.children}
        <FooterEspecifico/>
        </>
    )
}

export default Layout;