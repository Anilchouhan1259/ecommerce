import Card from "./Card";
import { useFetchCategoryQuery } from "../store";
import { useParams } from "react-router-dom";
import Skleton from "./Skleton";

const Categories = () => {
  const { type } = useParams();
  console.log(type);
  const { data, isLoading, error } = useFetchCategoryQuery(type);
  console.log(data);
  console.log(isLoading);
  return (
    <div>
      <div className="font-medium text-2xl px-9 pt-6"> {type}</div>
      {isLoading ? <Skleton /> : <Card products={data} />}
    </div>
  );
};

export default Categories;
