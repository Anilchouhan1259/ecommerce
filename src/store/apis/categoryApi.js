import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products/category",
  }),
  endpoints(builder) {
    return {
      fetchCategory: builder.query({
        query: (type) => {
          return {
            url: `/${type}`,
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchCategoryQuery } = categoryApi;
export { categoryApi };
