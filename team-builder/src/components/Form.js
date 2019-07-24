import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };

    setUser(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user", user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Tell us about yourself</legend>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your username"
                value={user.name}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Role</label>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Your Role ex.backend developer"
            onChange={handleChange}
            value={user.role}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
