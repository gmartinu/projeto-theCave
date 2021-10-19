import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const MainPaper = styled(Paper)(({ theme }) => ({
  boxSizing: "border-box",
  position: "relative",
}));

export default MainPaper;
