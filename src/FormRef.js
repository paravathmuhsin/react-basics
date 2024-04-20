import React, { useRef } from "react";

const FormRef = () => {
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);

  const submitHandler = (e) => {
    // step 1 - prevent default redirection to action URL.
    e.preventDefault();


    // step 2 - Collect user entered values
    console.log({
      fname: fnameRef.current.value,
      lname: lnameRef.current.value
    })
  };
  return (
    <>
      <div>FormRef</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" ref={fnameRef} name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" ref={lnameRef} name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormRef;
