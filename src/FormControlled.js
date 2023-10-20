import React, { useState } from "react";

const FormControlled = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    age: 0,
  });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form)
  };
  return (
    <div>
      Form Controlled - {JSON.stringify(form)}
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          onChange={changeHandler}
          name="fname"
          value={form.fname}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          onChange={changeHandler}
          name="lname"
          value={form.lname}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input
          type="number"
          id="age"
          onChange={changeHandler}
          name="age"
          value={form.age}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default FormControlled;
