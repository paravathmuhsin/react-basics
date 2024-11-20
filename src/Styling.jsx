import "./Styling.css";
import classes from "./Styling.module.css";

const Styling = () => {
  return (
    <div>
      <p
        className={classes.borderYellow}
        style={{
          color: "red",
          fontWeight: "bold",
          textDecoration: "line-through",
        }}
      >
        Styling
      </p>
    </div>
  );
};

export default Styling;
