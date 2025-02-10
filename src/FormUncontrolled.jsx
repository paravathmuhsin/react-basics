import { useRef } from "react";

const FormUncontrolled = () => {
  const fName = useRef();
  const lName = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      fname: fName.current.value,
      lname: lName.current.value,
    });
  };
  return (
    <div>
      FormUncontrolled
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" ref={fName} name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" ref={lName} name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormUncontrolled;
