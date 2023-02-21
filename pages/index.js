import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function Home() {
  return (
    <Stack direction="column" height="100vh">
      <Topbar></Topbar>
      <Box bgcolor="#F5F5F5" flex="1" overflow="hidden">
        <Stack direction="row">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Box>
      <Navbar></Navbar>
    </Stack>
  )
}
