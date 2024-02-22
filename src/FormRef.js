import React, { useRef } from "react";

const FormRef = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
        fname: fnameRef.current.value,
        lname: lnameRef.current.value
    })
  };
  return (
    <div>
      FormRef
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input ref={fnameRef} type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input ref={lnameRef} type="text" id="lname" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormRef;
