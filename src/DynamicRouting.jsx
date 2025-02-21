import { useParams } from "react-router";
import bird from "./assets/bird-thumbnail.jpg";

const DynamicRouting = () => {
  const { id } = useParams();
  return (
    <div>
      DynamicRouting - {id}
      <img src={bird} />
    </div>
  );
};

export default DynamicRouting;
