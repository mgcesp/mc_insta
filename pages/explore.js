import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const Explore = () => {
    return (
        <Stack direction="column" height="100vh">
            <Topbar></Topbar>
            <Box bgcolor="#F5F5F5" flex="1" overflow="hidden">
                <Stack direction="row">
                    <Sidebar></Sidebar>
                    <h1>EXPLORE PAGE</h1>
                    <Rightbar></Rightbar>
                </Stack>
            </Box>
            <Navbar></Navbar>
        </Stack>
    )
}

export default Explore