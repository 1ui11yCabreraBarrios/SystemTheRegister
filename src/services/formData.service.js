import { API_SIA } from "../constants";
import { authHeader, handleResponse } from '../helpers';


function addColors(nombre) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    
    },
    body: JSON.stringify(nombre),
  };

  return fetch(`${API_SIA.service}/Colores`, requestOptions)
    .then(handleResponse)
    .then((data) => data);
}

function updateColor(nombre, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    
    },
    body: JSON.stringify(nombre),
  };

  return fetch(
    `${API_SIA.service}/Colores/${id}`,
    requestOptions
  )
    .then(handleResponse)
    .then((data) => data);
}


function deleteColors(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    
    },
  };

  return fetch(
    `${API_SIA.service}/Colores/${id}`,
    requestOptions
  )
    .then(handleResponse)
    .then((data) => data)
    .catch((error) => error);
}

  function getColores(){
    const requestOptions = {
        method: 'GET',
        headers: {...authHeader(), 'Content-Type': 'application/json', },
     
    };
    return fetch(`${API_SIA.service}/Colores/list`, requestOptions)
    .then(handleResponse)
    .then((data) => data);


   

    }


    function getDimension(){
      const requestOptions = {
          method: 'GET',
          headers: {...authHeader(), 'Content-Type': 'application/json', },
       
      };
      return fetch(`${API_SIA.service}/Dimensiones/list`, requestOptions)
      .then(handleResponse)
      .then((data) => data);
  
  
     
      }
  
      function addDimension(nombre) {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          
          },
          body: JSON.stringify(nombre),
        };
      
        return fetch(`${API_SIA.service}/Dimensiones`, requestOptions)
          .then(handleResponse)
          .then((data) => data);
      }


      function updateDimension(nombre, id) {
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          
          },
          body: JSON.stringify(nombre),
        };
      
        return fetch(
          `${API_SIA.service}/Dimensiones/${id}`,
          requestOptions
        )
          .then(handleResponse)
          .then((data) => data);
      }
      
      
      function deleteDimension(id) {
        const requestOptions = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          
          },
        };
      
        return fetch(
          `${API_SIA.service}/Dimensiones/${id}`,
          requestOptions
        )
          .then(handleResponse)
          .then((data) => data)
          .catch((error) => error);
      }
      
 
      function getMarcas(){
        const requestOptions = {
            method: 'GET',
            headers: {...authHeader(), 'Content-Type': 'application/json', },
         
        };
        return fetch(`${API_SIA.service}/Marcas/list`, requestOptions)
        .then(handleResponse)
        .then((data) => data);
    
    
       
        }
    
        function addMarcas(nombre) {
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...authHeader(),
            
            },
            body: JSON.stringify(nombre),
          };
        
          return fetch(`${API_SIA.service}/Marcas`, requestOptions)
            .then(handleResponse)
            .then((data) => data);
        }
  
  
        function updateMarcas(nombre, id) {
          const requestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              ...authHeader(),
            
            },
            body: JSON.stringify(nombre),
          };
        
          return fetch(
            `${API_SIA.service}/Marcas/${id}`,
            requestOptions
          )
            .then(handleResponse)
            .then((data) => data);
        }
        
        
        function deleteMarcas(id) {
          const requestOptions = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              ...authHeader(),
            
            },
          };
        
          return fetch(
            `${API_SIA.service}/Marcas/${id}`,
            requestOptions
          )
            .then(handleResponse)
            .then((data) => data)
            .catch((error) => error);
        }
        
   
    
  

  // api.js
/*
const hacerPeticionGet = async (url, parametros = {}) => {
  try {
    const queryString = new URLSearchParams(parametros).toString();
    const respuesta = await fetch(`${API_SIA.service}/Colores/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(`Error en la solicitud GET: ${error.message}`);
    return null;
  }
};

export default hacerPeticionGet;

*/
  export const formData = {

    getColores,
    deleteColors,
    addColors, 
    updateColor,
    getDimension,
    addDimension,
    updateDimension,
    deleteDimension,
    addMarcas,
    updateMarcas,
    deleteMarcas,
    getMarcas

  };
  