import { apiSlice } from "./apiSlice"
const USERS_URL = 'api/users'


export const userApiSlices = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body:data
            })
        }),
        books:builder.mutation({
            query:()=>({
                url:`${USERS_URL}/books`,
                method:'GET'
            })
        })
    })
})


export const { useLoginMutation,useRegisterMutation,useBooksMutation} = userApiSlices