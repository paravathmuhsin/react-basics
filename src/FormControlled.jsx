import { useState } from "react";

const FormControlled = () => {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      FormControlled
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
          onChange={changeHandler}
          id="lname"
          name="lname"
          value={form.lname}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormControlled;
