import React from "react";

const FormUncontrolled = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      FormUncontrolled
      <form onSubmit={submitHandler}>
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default FormUncontrolled;
