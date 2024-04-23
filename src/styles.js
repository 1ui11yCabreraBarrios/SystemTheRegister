import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { Sidebar } from "react-pro-sidebar";

export const BoxRoot = styled(Box)({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
});

export const BoxMain = styled(Box)({
  background: "rgb(241 241 241)",
  flex: "1" /* El contenido principal ocupará el espacio restante */,
  padding: "20px" /* Espaciado para el contenido */,
  overflowY: "auto" /* Si el contenido es demasiado largo, habrá un desplazamiento vertical */,
  /*   '@media (max-width:415px)': { 
        marginTop: 0        
    } */
});
export const StackAlert = styled(Stack)({
  width: "100%",
  position: "fixed",
  textAlign: "center",
  right: "0",
  Zindex: "9999",
  padding: "50px",
  top: "0",
  maxWidth: "15cm",
});

export const Container = styled.div({
  display: "flex",
  height: "100vh",
});
