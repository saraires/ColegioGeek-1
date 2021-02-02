import React, { Component } from "react";
import MenuAdmin from "../Components/menuAdmin";

class RegistroGrupo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            form: {
                codigo: '',
                profesor: '',
                jornada: '',
            },
        };
    }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
        console.log(this.state.form);
    };

    render() {

        return (

            <div >
                <MenuAdmin/>
                <h1 className="ml-5 pl-5 pt-5">Registro de grupo</h1>

                <div className="card col-10 row mx-auto mt-5">
                    <form className="m-3" >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="codigo">Código</label>
                                <input id="codigo" type="text" readonly class="form-control-plaintext" id="staticEmail2" value="2021001" /> {/* El codigo es automaticamente generado por el sistema */}
                            </div>
                            <div className="form-group col-md-6">
                                <label for="jornada">Jornada</label>
                                <select id="inputJornada" class="form-control">
                                    <option selected></option>
                                    <option>Tarde</option>
                                    <option>Mañana</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="profesor">Profesor</label>
                            <select id="inputProfesor" class="form-control">
                                <option selected></option>
                                <option>Fabio Leon Restrepo</option>
                                <option>Jaime Alberto Giraldo</option>
                                <option>Adriana Maria Zuluaga</option>
                                <option>Fabiola Ramirez</option>
                                <option>Maria Dolores Smith</option>
                                <option>Alberto Cañas</option>
                                <option>Alexander Restrepo</option>
                                <option>Aurora Martinez</option>
                                <option>Guillermo Alberto Marín</option>
                                <option>Fabio Ramirez Castaño</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Registrar
            </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistroGrupo;