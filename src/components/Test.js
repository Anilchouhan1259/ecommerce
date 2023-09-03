import { useFetchCategoryQuery } from "../store";

const Test = () => {
  const { data, error, isLoading } = useFetchCategoryQuery();
  console.log(data);

  return <div> hi</div>;
};

export default Test;
