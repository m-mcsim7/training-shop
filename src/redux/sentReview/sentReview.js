import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const sentReview = createApi({
   reducerPath: 'sentReview',
   //tagTypes:['reviews'], 
   baseQuery: fetchBaseQuery({baseUrl: 'https://training.cleverland.by/shop/product/review'}),
   endpoints: (build) => ({
      addReview: build.mutation({
         query: (body) => ({
            method: 'POST',
            body,
         }),
      })
   })
});

export const {useAddReviewMutation} = sentReview;