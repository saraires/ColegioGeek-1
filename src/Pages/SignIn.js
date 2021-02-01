import React, { useState, useEffect } from "react";

function SignIn() {

  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);

  const handleChange = async (e) => {
    e.persist();
    await setForm({
      form: {
        ...form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(form);
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     form: {
  //       email: "",
  //       password: "",
  //       rol: "",
  //     },
  //   };
  // }

  // handleChange = async (e) => {
  //   e.persist();
  //   await this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  //   console.log(this.state.form);
  // };

  // render() {
  //   const Dform = this.state.form;
  //   const datos = this.state.data;
    return (
      <div className="container-fluid row p-5">
        <div className="card col-10 row mx-auto mt-5">
          <form className="col-12 row justify-content-center">
            <div className="col-8 form-group row">
              <label
                for="email"
                onChange={handleChange}
                className="col-sm-4 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  onChange={handleChange}
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="col-8 form-group row">
              <label for="password" className="col-sm-4 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                  id="password"
                  name="password"
                />
              </div>
            </div>

            <div className="col-8 form-group row">
              <label className="col-sm-4 col-form-label" for="rol">
                Rol
              </label>
              <select
                className="custom-select col-sm-9"
                id="rol"
                name="rol"
                onChange={handleChange}
              >
                <option selected>Choose...</option>
                <option value="1">Administrador</option>
                <option value="2">Profesor</option>
                <option value="3">Estudiante</option>
              </select>
            </div>

            <div className="col-8 form-group row justify-content-center">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default SignIn;
