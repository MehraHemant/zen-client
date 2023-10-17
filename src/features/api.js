import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zen-portal-backend.onrender.com/api/",
  }),
  tagTypes: ["session", "tasks", "user"],
  endpoints: (builder) => ({
    getSession: builder.query({
      query: ()=>({
      url: `session/get-all-sessions`,
      providesTags: "session",
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    })
    }),
    getOneSession: builder.query({
      query: (id) => `session/get-session/${id}`,
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidateTags: "session",
    }),
    getTasks: builder.query({
      query: () => ({
        url: "/answers/get",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
      providesTags: "tasks",
    }),
    getSelf: builder.query({
      query: () => ({
        url: "/getSelf",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
      providesTags: "user",
    }),
    updateSelf: builder.mutation({
      query: (data) => ({
        url: "updateSelf",
        method: "PUT",
        body: data,
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
        keepUnusedDataFor: 5,
      }),
      invalidateTags: "user",
    }),
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/addStudent",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetSessionQuery,
  useGetOneSessionQuery,
  useLoginMutation,
  useGetTasksQuery,
  useGetSelfQuery,
  useUpdateSelfMutation,
  useCreateStudentMutation,
  useForgotPasswordMutation,
} = myApi;
