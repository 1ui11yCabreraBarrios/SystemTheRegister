import React, { Fragment,useState } from "react";
import * as Yup from "yup";
import { MyTextInput } from "../../componentes/CustomFrom";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Login } from "./Login";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../actions';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const defaultTheme = createTheme();
function CreateAnAccount() {
    const [mostrarCreateAccount, setMostrarCreateAccount]=useState(true);
    const dispatch = useDispatch();
 
    const registering = useSelector(state => state.registration.registering);


    const ChangeMostrarCreateAccount =()=>{
        setMostrarCreateAccount(!mostrarCreateAccount)
    }
    React.useEffect(() => {
      dispatch(userActions.logout());
  }, [dispatch]);
    
  return (
    <Fragment>
        {mostrarCreateAccount ? 
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 19,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Cuenta
        </Typography>
        <Box  sx={{ mt: 1 }}>
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
          console.log("Antes de dispatch", values);
          dispatch(userActions.register(values));
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
              type="text"
              placeholder="Ingresar Contraseña"
            />

            <Button
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
           //   endIcon={<SendIcon />}
              type="submit"
            >
                  {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
              REGISTRAR
            </Button>
          </Form>
        </Formik>
      <Link   onClick={ChangeMostrarCreateAccount}  to="/Login" variant="body2">
                {"Iniciar Sesión"}
              </Link>
      </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    : <Login/>}
  </Fragment>
  )
}

export {CreateAnAccount}