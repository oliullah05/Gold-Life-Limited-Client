import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_SERVER_API_URL}`,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        prepareHeaders: (headers) => {
           
            // headers.set("authorization",JSON.parse(localStorage.getItem("auth") as string) as string)
            // return headers
        }
    }),
    tagTypes: [],
    endpoints: () => ({}),
})