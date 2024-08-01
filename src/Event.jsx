const Event = () => {
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

export default Event;

//react library
// eventHandler(event)
