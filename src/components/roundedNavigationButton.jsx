import { Button, styled } from "@mui/material";

const RoundedNavigationButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1),
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(0.5),
  },
  padding: theme.spacing(0.5, 1.5),
  textTransform: "none",
}));

export default RoundedNavigationButton;
