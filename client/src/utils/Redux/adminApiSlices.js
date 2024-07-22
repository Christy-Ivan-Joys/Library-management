import { apiSlice } from "./apiSlice"
const ADMIN_URL = 'api/admin'


export const adminApiSlices = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/Alogin`,
                method: 'POST',
                body: data
            })
        }),
        add: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/add`,
                method: 'POST',
                body: data
            })
        }),
        fetchBooks: builder.mutation({
            query: () => ({
                url: `${ADMIN_URL}/books`,
                method: 'GET',
            }),
        }),
        edit: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/edit`,
                method: 'PATCH',
                body: data
            })
        }),
        members: builder.mutation({
            query: () => ({
                url: `${ADMIN_URL}/users`,
                method: 'GET'
            })
        }),
        borrow:builder.mutation({
            query:(data)=>({
                url:`${ADMIN_URL}/borrow`,
                method:'POST',
                body:data,
            })
        })
    })
})


export const {
    useLoginMutation,
    useAddMutation,
    useFetchBooksMutation,
    useEditMutation,
    useMembersMutation,
    useBorrowMutation,
} = adminApiSlices