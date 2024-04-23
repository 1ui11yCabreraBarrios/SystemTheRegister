import React from "react";
import { CssBaseline, Toolbar } from "@mui/material";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { CreateAnAccount, Login } from "./app/modules/Login";
import { Home } from "./app/modules/Home";
import * as Styled from "./styles";
import Footer from "./app/componentes/Footer/Footer";
import { PrivateRoute } from "./app/componentes/PrivateRoute";
import { CatalogoColores } from "./app/modules/Catalogos";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import GridViewRounded from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { userActions } from "./actions";
import "./App.css";
import { CatalogoColors } from "./app/modules/Catalogos/Colores";
import { CatalogoDimesion } from "./app/modules/Catalogos/Dimensiones";
import { CatalogoMarcas } from "./app/modules/Catalogos/Marcas";

function App() {
  const alert = useSelector((state) => state.alert);
  const isAuthenticated = useSelector((state) => state.authentication.loggedIn);
  //const usuario = useSelector((state)=>state.authenticacion.user.username)
  //console.log("usuario",usuario)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userActions.logout());
    navigate("/login", {});
  };

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <>
      <Styled.Container>
        <CssBaseline />
        {isAuthenticated ? (
          <Sidebar
            backgroundColor="rgb(0, 249, 249)"
            rtl={false}
            style={{ height: "100vh" }}
            //  breakPoint="sm"
          >
            <Menu>
              <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center" }}
             //   breakPoint="sm"
              //  transitionDuration={800}
              >
                {" "}
      <h5>Bienvenido</h5>
              </MenuItem>

              <MenuItem
                component={<Link to="/" className="link" />}
                icon={<GridViewRounded />}
              >
                Home
              </MenuItem>
              <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
              <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
                <MenuItem icon={<TimelineRoundedIcon />}>
                  {" "}
                  Timeline Chart{" "}
                </MenuItem>
                <MenuItem icon={<BubbleChartRoundedIcon />}>
                  Bubble Chart
                </MenuItem>
              </SubMenu>
              <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
                <MenuItem icon={<AccountBalanceRoundedIcon />}>
                  Current Wallet
                </MenuItem>
                <MenuItem icon={<SavingsRoundedIcon />}>
                  Savings Wallet
                </MenuItem>
              </SubMenu>
              <MenuItem
                //component={<Link to="/catalogos" className="link" />}
                icon={<MonetizationOnRoundedIcon />}
              >
                Transactions
              </MenuItem>
              <SubMenu label="Catalogos" icon={<MenuBookIcon />}>
                <MenuItem
                  component={<Link to="/colores" className="link" />}
                  icon={<PaletteIcon />}
                >
                  {" "}
                  Colores{" "}
                </MenuItem>
                <MenuItem
                  component={<Link to="/marcas" className="link" />}
                  icon={<ShieldRoundedIcon />}
                >
                  {" "}
                  Marcas{" "}
                </MenuItem>
                <MenuItem
                  component={<Link to="/dimensiones" className="link" />}
                  icon={<NotificationsRoundedIcon />}
                >
                  Dimensiones
                </MenuItem>
              </SubMenu>
              <MenuItem icon={<LogoutRoundedIcon />} onClick={onLogout}>
                {" "}
                Logout{" "}
              </MenuItem>
            </Menu>
          </Sidebar>
        ) : (
          ""
        )}
    
        <Styled.BoxMain>
        <Footer />
          <Toolbar />

          {alert.message && (
            <Styled.StackAlert>
              {alert.type === "alert-success" ? (
                <Alert variant="filled" severity="success">
                  {alert.message}
                </Alert>
              ) : (
                <Alert variant="filled" severity="error">
                  {alert.message}
                </Alert>
              )}
            </Styled.StackAlert>
          )}
          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/login"
                element={<Login isAuthenticated={isAuthenticated} />}
              />
              <Route path="/register" element={<CreateAnAccount />} />

              <Route
                path="/colores"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <CatalogoColors />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dimensiones"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <CatalogoDimesion />
                  </PrivateRoute>
                }
              />
              <Route
                path="/marcas"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <CatalogoMarcas />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        
        </Styled.BoxMain>
   
      </Styled.Container>
      <Footer />
    </>
  );
}

export default App;
