import { useRef } from "react";

const FormUncontrolled = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <h3>FormUncontrolled</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label> <input ref={usernameRef} />
        </div>
        <div>
          <label>Password</label> <input ref={passwordRef} type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormUncontrolled;
