import React, { Fragment, useState, useEffect } from "react";
import * as Yup from "yup";
import { MyTextInput } from "../../componentes/CustomFrom";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CreateAnAccount } from "./CreateAnAccount";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../actions";


import "bootstrap/dist/css/bootstrap.min.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const defaultTheme = createTheme();

function Login(props) {
  const [mostrarLogin, setMostrarLogin] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();


  const loggingIn = useSelector((state) => state.authentication.loggingIn);

  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (props.isAuthenticated) {
    return (
      <Navigate
        to={{
          pathname: "/",
          state: {
            from: props.location,
            isAuthenticated: props.isAuthenticated,
          },
        }}
        replace={true}
      />
    );
  } else {
    // reset login status


    const ChangeMostrarLogin = () => {
      setMostrarLogin(!mostrarLogin);
    };

    return (
      <Fragment>
        {mostrarLogin ? (
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Iniciar Sesión
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .email("Invalid email addresss`")
                        .required("El campo es requerido"),
                      password: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("El campo es requerido"),
                    })}
                    onSubmit={(values) => {
                      dispatch(
                        userActions.login(values.email, values.password)
                      );
                    }}
                  >
                    <Form>
                      <MyTextInput
                        fullWidth
                        required
                        margin="normal"
                        label="Correo Electronico"
                        name="email"
                        type="email"
                        placeholder="Ingresar Correo"
                      />

                      <MyTextInput
                        fullWidth
                        required
                        margin="normal"
                        label="Contraseña"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingresar Contraseña"
                        InputProps={{
                        endAdornment:(
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
        )
                      }}
                       
                      />

                      <Button
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        variant="contained"
                        endIcon={
                          loggingIn ? (
                            <span className="spinner-border spinner-border-sm mr-1"></span>
                          ) : (
                            <SendIcon />
                          )
                        }
                        type="submit"
                      >
                        INGRESAR
                      </Button>
                    </Form>
                  </Formik>

                  <Link
                    onClick={ChangeMostrarLogin}
                    to="/register"
                    variant="body2"
                  >
                    {"Crear una Cuenta"}
                  </Link>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        ) : (
          <CreateAnAccount />
        )}
      </Fragment>
    );
  }
}

export { Login };
