
import { Fragment } from "react";
import { Navigate } from 'react-router-dom';
import * as Styled from "./styles";
import iconSVG from "../../../assets/driving-cuate.svg";




function Home(props) {



  return (
    !props.isAuthenticated ? (
      <Navigate to={{ pathname: "/login", state: { from: props.location, authenticated: props.authenticated } }} replace={true} />
    ):(<>

      <Styled.Title > BIENVENIDO AL SISTEMA DE VEHICULOS </Styled.Title>
      <svg viewBox="0 0 90 90" width="70%" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', opacity: 0.5 }}>
        <image xlinkHref={iconSVG} width="100" height="100" />
      </svg>
    </>)

  );
}

export { Home };
