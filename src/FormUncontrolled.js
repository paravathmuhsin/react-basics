import React, { useRef } from "react";

const FormUncontrolled = () => {
  const fname = useRef(null);
  const lname = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
    console.log({ fname: fname.current.value, lname: lname.current.value });
  };
  return (
    <div>
      FormUncontrolled
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" ref={fname} id="fname" name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" ref={lname} id="lname" name="lname" />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default FormUncontrolled;
