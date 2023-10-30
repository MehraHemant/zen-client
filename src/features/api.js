import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zen-portal-backend.onrender.com/api/",
  }),
  tagTypes: ["session", "tasks", "user", "taskAnswers"],
  endpoints: (builder) => ({
    getRoadmapSession: builder.query({
      query: () => ({
        url: `session/get-roadmap-sessions`,
        providesTags: "session",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
    }),
    getAdditionalSession: builder.query({
      query: () => ({
        url: `session/get-additional-sessions`,
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
      query: (data) => ({
        url: `/reset-password/${data.token}`,
        method: "POST",
        body: data.value,
      }),
    }),
    getCapstone: builder.query({
      query: () => ({
        url: "/activity/getCapstone",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
    }),
    getWebcode: builder.query({
      query: () => ({
        url: "/activity/getwebcode",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
    }),
    getPlacement: builder.query({
      query: () => ({
        url: "placement/get",
      }),
    }),
    getActivity: builder.query({
      query: (session) => ({
        url: `activity/get/${session}`,
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
    }),
    getAnswerByActivity: builder.query({
      query: (activity) => ({
        url: `answers/get/${activity}`,
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
      providesTags: "tasksAnswers",
    }),
    postTaskAnswers: builder.mutation({
      query: (data) => ({
        // activity id
        url: `answers/post/${data.id}`,
        method: "POST",
        body: data.value,
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
      invalidateTags: "taksAnswers",
    }),
    updateAnswers: builder.mutation({
      query: (data) => ({
        // answer id
        url: `answers/update/${data.id}`,
        method: "PUT",
        body: data.value,
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),
      invalidateTags: "taksAnswers",
    }),
    application: builder.query({
      query: ()=>{
        url: `application`
      }
    }),
    cerificate: builder.query({
      query:()=>{
        url: `certificate`
      }
    }),
  }),
});

export const {
  useGetAdditionalSessionQuery,
  useGetRoadmapSessionQuery,
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
  useGetPlacementQuery,
  useGetActivityQuery,
  useGetAnswerByActivityQuery,
  usePostTaskAnswersMutation,
  useUpdateAnswersMutation,
  useApplicationQuery,
  useCerificateQuery,
} = myApi;
