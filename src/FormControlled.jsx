import { useState } from "react";

export const FormControlled = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  //   const [form, setForm] = useState({
  //     fname: "",
  //     lname: "",
  //   });
  const changeHandler = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    if (e.target.name === "fname") {
      setFname(e.target.value);
    } else {
      setLname(e.target.value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // read user inputs
    console.log({ fname, lname });
  };
  return (
    <div>
      FormControlled
      <form onSubmit={submitHandler}>
        <input
          name="fname"
          value={fname}
          onChange={changeHandler}
          placeholder="First name"
        />
        <br />
        <input
          name="lname"
          value={lname}
          onChange={changeHandler}
          placeholder="Last name"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
