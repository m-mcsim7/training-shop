import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const emailApi = createApi({
   reducerPath: 'emailApi',
   baseQuery: fetchBaseQuery({baseUrl: 'https://training.cleverland.by/shop/email'}),
   endpoints: (build) => ({
      addEmail: build.mutation({
         query: (body) => ({
            method: 'POST',
            body,
         }),
      })
   })
});

export const {useAddEmailMutation} = emailApi;