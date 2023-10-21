import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  tagTypes: ["session", "tasks", "user"],
  endpoints: (builder) => ({
    getSession: builder.query({
      query: () => ({
        url: `session/get-all-sessions`,
        providesTags: "session",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
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
    resetPassword: builder.mutation({
      query: (token, data) => ({
        url: `/reset-password/${token}`,
        method: "POST",
        body: data,
      }),
    }),
    getCapstone: builder.query({
      query: () => ({
        url: "/answers/capstone",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
    }),
    getWebcode: builder.query({
      query: () => ({
        url: "/answers/webcode",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
    }),
    getPlacement: builder.query({
      query: ()=>({
        url: "placement/get"
      })
    })
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
  useResetPasswordMutation,
  useGetCapstoneQuery,
  useGetWebcodeQuery,
  useGetPlacementQuery
} = myApi;
