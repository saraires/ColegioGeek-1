import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      form: {
        tipo_doc: '',
        nro_doc: '',
        nom_completo: '',
        direccion: '',
        ciudad: '',
        fecha_nacimiento: '',
        sexo: '',
        rol: '',
        correo: '',
        telefono: '',
        contrasena: ''
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
        <div className="card shadow-lg col-10 row mx-auto mt-5">
          <form className="m-3" >
            <div className="form-row">
              <div className="form-group col-md-6">
              <label for="tipo_doc">Tipo Documento</label>
                <select id="tipo_doc" className="form-control" name="tipo_doc" onChange={this.handleChange} >
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
                  onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="ciudad">Ciudad</label>
              <input
                type="text"
                className="form-control"
                id="ciudad"
                placeholder="Medellin"
                name="ciudad"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="fecha_nacimiento">Fecha de nacimiento</label>
                <input type="date" className="form-control" id="fecha_nacimiento" name="fecha_nacimiento" onChange={this.handleChange} />
              </div>
              <div className="form-group col-md-3">
                <label for="genero">Genero</label>
                <select id="genero" className="form-control" name="sexo" onChange={this.handleChange}>
                  <option selected>Choose...</option>
                  <option value="M" >Masculino</option>
                  <option value="F" >Femenino</option>
                </select>
              </div>
              <div className="form-group col-md-3">
              <label for="rol">Rol</label>
                <select id="rol" className="form-control" name="rol" onChange={this.handleChange}>
                  <option selected>Choose...</option>
                  <option value="1" >Administrador</option>
                  <option value="2" >Profesor</option>
                  <option value="3" >Estudiante</option>
                </select>
                </div>
            </div>
            <div className="form-group">
              <label for="correo">Correo</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="example@emaple.com"
                name="correo"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="Telefono">Nº Telefono</label>
                <input type="number" className="form-control" id="Telefono" name="telefono" onChange={this.handleChange}/>
              </div>
              <div className="form-group col-md-6">
                <label for="celular">Nº Celular</label>
                <input type="number" className="form-control" id="celular" name="celular" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group">
              <label for="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="contrasena"
                onChange={this.handleChange}
              />
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
