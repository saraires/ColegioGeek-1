import React from 'react';
import MenuAdmin from '../Components/menuAdmin';
import Contenido from '../Components/contenidoAdmin';

function AdminInicio() {
    return (
        <div className="Container">
            
            <MenuAdmin />
            <Contenido />
            
        </div>
    );
}

export default AdminInicio;