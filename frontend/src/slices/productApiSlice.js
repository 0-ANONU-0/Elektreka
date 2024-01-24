import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (productID) => ({
                url: `${PRODUCTS_URL}/${productID}`,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetProductQuery } = productApiSlice;