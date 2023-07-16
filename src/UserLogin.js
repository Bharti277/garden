import React, { useState } from "react";

function UserLogin() {
  const initialState = { username: "", email: "", password: "" };
  const [formVales, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const formChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formVales, [name]: value });
    console.log(formVales);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formVales));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.username = "Username is required";
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="form">Login Form</div>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formVales.username}
            onChange={formChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formVales.email}
            onChange={formChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={formVales.password}
            onChange={formChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserLogin;
