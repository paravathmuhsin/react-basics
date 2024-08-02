import withHOC from "./withHOC";

const Event = (props) => {
  console.log(props);
  const eventHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      Event
      <button
        onClick={(e) => {
          eventHandler(e);
        }}
      >
        Click me
      </button>
      <input onChange={eventHandler} />
    </div>
  );
};

export default withHOC(Event);

//react library
// eventHandler(event)
