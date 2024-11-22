import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params)
  return <div>ProductDetails = {params.slug}</div>;
};

export default ProductDetails;
