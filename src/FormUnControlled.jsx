import { useRef } from "react";

export const FormUnControlled = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(fnameRef.current.value)
    const inputs = {
      fname: fnameRef.current.value,
      lname: lnameRef.current.value,
    };
    console.log(inputs);
  };
  return (
    <div>
      FormUnControlled
      <form onSubmit={submitHandler}>
        <input name="fname" ref={fnameRef} placeholder="First name" />
        <br />
        <input name="lname" ref={lnameRef} placeholder="Last name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
