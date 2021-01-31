import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      form: {
        email: "",
        password: "",
        rol: "",
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
    const Dform = this.state.form;
    const datos = this.state.data;
    return (
      <div className="container-fluid row p-5">
        <div className="card col-10 row mx-auto mt-5">
          <form className="m-3" >
            <div className="form-row">
              <div className="form-group col-md-6">
              <label for="tipo_doc">Tipo Documento</label>
                <select id="tipo_doc" className="form-control" name="tipo_doc" >
                  <option selected>Elige</option>
                  <option value="TI" >Tarjeta Identidad</option>
                  <option value="CC" >Cedula Ciudadania</option>
                  <option value="NUIP" >NUIP</option>
                </select>
                </div>
              <div className="form-group col-md-6">
                <label for="nro_doc">Nº Documento</label>
                <input
                  type="number"
                  className="form-control"
                  id="nro_doc"
                  name="nro_doc"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="Nombre_Completo">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                id="Nombre_Completo"
                name="nom_completo"
              />
            </div>
            <div className="form-group">
              <label for="direccion">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                placeholder="Cra 78 # 38 sur 37"
                name="direccion"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="fecha_nacimiento">Fecha de nacimiento</label>
                <input type="date" className="form-control" id="fecha_nacimiento" name="fecha_nacimiento" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
