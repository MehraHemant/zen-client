import {
  AssignmentLateRounded,
  AssignmentRounded,
  AssignmentTurnedInRounded,
  BookmarkAdded,
  ChecklistOutlined,
  DashboardRounded,
  DomainAddRounded,
  ImportantDevicesRounded,
  ListAltRounded,
  Padding,
  PagesOutlined,
  PagesRounded,
  PortraitRounded,
  PostAddRounded,
  QuizRounded,
  TaskAltRounded,
  TimeToLeave,
} from "@mui/icons-material";

export const sideBarData = {
  title: "Zen Class",
  items: [
    {
      logo: <PortraitRounded color="blue" />,
      describe: "Class",
      link: "class",
    },
    {
      logo: <DashboardRounded />,
      describe: "Dashboard",
      link: "/dashboard",
    },
    {
      logo: <AssignmentTurnedInRounded />,
      describe: "Tasks",
      link: "task",
    },
    {
      logo: <AssignmentLateRounded />,
      describe: "Webcode",
      link: "webcode",
    },
    {
      logo: <AssignmentRounded />,
      describe: "Capstone",
      link: "capstone",
    },
    {
      logo: <QuizRounded />,
      describe: "Queries",
      link: "queries",
    },
    {
      logo: <DomainAddRounded />,
      describe: "Requirements",
      link: "requirements",
    },
    {
      logo: <PostAddRounded />,
      describe: "Portfolio Submission",
      link: "portfolio_submission",
    },
    {
      logo: <PagesOutlined />,
      describe: "Applications",
      link: "application",
    },
    {
      logo: <ChecklistOutlined />,
      describe: "Interview task",
      link: "interviewtask",
    },
    {
      logo: <TimeToLeave />,
      describe: "Leave Application",
      link: "leave_application",
    },
    {
      logo: <TaskAltRounded />,
      describe: "Mock Interview",
      link: "mock_interview",
    },
    {
      logo: <ImportantDevicesRounded />,
      describe: "Certificate",
      link: "certificate",
    },
    {
      logo: <PagesRounded />,
      describe: "Testimonial",
      link: "testimonial",
    },
    {
      logo: <ListAltRounded />,
      describe: "LeaderBoard",
      link: "leaderboard",
    },
    {
      logo: <Padding />,
      describe: "Syllabus",
      link: "syllabus",
    },
    {
      logo: <BookmarkAdded />,
      describe: "Placement Board",
      link: "placement_board",
    },
  ],
};
