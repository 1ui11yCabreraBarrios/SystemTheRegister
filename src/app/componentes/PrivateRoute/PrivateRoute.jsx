import React from 'react';
import {  Navigate } from 'react-router-dom';


function PrivateRoute ({children,  isAuthenticated }){

    return  isAuthenticated ? children : <Navigate to={"/login"}/>;
}

export { PrivateRoute };



/* function PrivateRoute({ element: Element, ...rest }) {
    const isAuthenticated = !!localStorage.getItem('user'); // Verificar si el usuario está autenticado

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Element /> : <Navigate to="/login" state={{ from: window.location.pathname }} replace />} // Redirigir a la página de inicio de sesión y guardar la ruta actual
        />
    );
}

export { PrivateRoute };
 */