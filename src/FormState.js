import React, { useState } from "react";

const FormState = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });
  const changeHandler = (e) => {
    // console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    // step 1 - prevent default redirection to action URL.
    e.preventDefault();

    // step 2 - Collect user entered values
    console.log(form);
  };
  return (
    <>
      <div>FormState</div>
      <form onSubmit={submitHandler}>
        <label for="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          onChange={changeHandler}
          name="fname"
          value={form.fname}
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={changeHandler}
          value={form.lname}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormState;
