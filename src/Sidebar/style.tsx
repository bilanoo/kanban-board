import { Button, keyframes, styled } from "@mui/material";
// Define a keyframe animation
const stretchToShrink = keyframes`
  0% {
    width: 20%;
  }
  100% {
    width: 55px;
  }
`;
export const DisplaySidebarButton = styled(Button)(() => ({
  "&": {
    margin: 0,
    justifyContent: "start",
    alignItems: "center",
    height: "48px",
    width: "55px",
    minWidth: "30px",
    paddingLeft: "20px",
    borderRadius: "0 100px 100px 0",
    textTransform: "none",
    marginBottom: "20px",
    display: "flex",
    marginTop: "auto",
    position: "absolute",
    bottom: "0",
    left: "0",
    backgroundColor: "var(--dark-purple)",
    animation: `${stretchToShrink} 0.2s ease-in-out forwards`, // Apply the animation
  },
  "&&.MuiButton-text": {
    color: "var(--lighter-grey)",
  },

  "&:hover": {
    backgroundColor: "var(--light-purple)",
  },
}));
