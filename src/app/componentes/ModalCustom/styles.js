import styled from "@emotion/styled";
import { AppBar, DialogContent, Typography } from "@mui/material";

export const CustomAppBar = styled(AppBar)({
    background: 'linear-gradient(0deg, #000 20%, #000 62%)',
    position: 'relative',
    boxShadow: 'none'
});

export const CustomTitle = styled(Typography)({
    marginLeft: '2%',
    flex: 1,
    fontWeight: 'bold'
});

export const CustomDialogContent = styled(DialogContent)({
    flexGrow: 1,
    marginBottom: 40
});