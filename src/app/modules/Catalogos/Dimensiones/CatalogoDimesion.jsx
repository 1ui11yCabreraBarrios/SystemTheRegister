import React, { useEffect, useState } from 'react'
import { DefaultTable } from '../DefaultTable'
import { formData, userService } from '../../../../services';
import { alertActions } from '../../../../actions';
import { useDispatch } from 'react-redux';

function CatalogoDimesion() {
    const [dimension, setDimension] = useState([]);

    const dispatch = useDispatch();

    let columns = [
      { title: "Numero", field: "id" ,editable: 'never'},
      { title: "Nombre", field: "nombreDimension"},
      { title: "Alto", field: "alto" },
      { title: "Ancho", field: "ancho" },
    ];

    const getDimension = async () => {
        try {
          const data = await formData.getDimension();
          setDimension(data.datos);
        } catch (error) {
          console.error("Error en la solicitud GET:", error.message);
          dispatch(alertActions.error("Error al obtener la situación"))
        }
      };

      async function saveDimension(nombre, resolve, reject) {
        if (!nombre.nombreDimension) {
          reject("Error");
          dispatch(alertActions.error("El nombre no puede ser vacío"));
          return;
        }
        if (!nombre.alto) {
          reject("Error");
          dispatch(alertActions.error("El campo alto no puede ser vacío"));
          return;
        }
        if (!nombre.ancho) {
          reject("Error");
          dispatch(alertActions.error("El campo ancho no puede ser vacío"));
          return;
        }
        // Validar que la primera letra del nombre sea mayúscula
      if (!/^[A-Z].*/.test(nombre.nombreDimension)) {
        reject("Error");
        dispatch(alertActions.error("El nombre debe comenzar con mayúscula"));
        return;
      }
      if (!/^[0-9].*/.test(nombre.alto)) {
        reject("Error");
        dispatch(alertActions.error("El campo alto debe ser un numero "));
        return;
      }
      if (!/^[0-9].*/.test(nombre.ancho)) {
        reject("Error");
        dispatch(alertActions.error("El campo ancho debe ser un numero "));
        return;
      }
        
        
        
        let index = dimension.findIndex(
          (item) => item.nombreDimension === nombre.nombreDimension
        );
        if (index !== -1) {
          reject("Error");
          dispatch(alertActions.error("Ya existe el nombre ingresado"));
          return;
        }
        try {
          const data = await formData.addDimension(nombre);
          nombre ={...nombre}
          setDimension([...dimension, nombre]);
          dispatch(alertActions.success(data.message));
        } catch (error) {
          console.log(error);
          dispatch(alertActions.error(error.message || "Error al guardar la situación"));
        }
        resolve();
      }
    
      async function dimensionUpdate(nombre, id, resolve, reject) {
        if (!nombre.nombreDimension) {
          reject("Error");
          dispatch(alertActions.error("El nombre no puede ser vacío"));
          return;
        }
        if (!nombre.alto) {
          reject("Error");
          dispatch(alertActions.error("El campo alto no puede ser vacío"));
          return;
        }
        if (!nombre.ancho) {
          reject("Error");
          dispatch(alertActions.error("El campo ancho no puede ser vacío"));
          return;
        }
        // Validar que la primera letra del nombre sea mayúscula
      if (!/^[A-Z].*/.test(nombre.nombreDimension)) {
        reject("Error");
        dispatch(alertActions.error("El nombre debe comenzar con mayúscula"));
        return;
      }
      if (!/^[0-9].*/.test(nombre.alto)) {
        reject("Error");
        dispatch(alertActions.error("El campo alto debe ser un numero "));
        return;
      }
      if (!/^[0-9].*/.test(nombre.ancho)) {
        reject("Error");
        dispatch(alertActions.error("El campo ancho debe ser un numero "));
        return;
      }
        
       
        let index = dimension.findIndex(
          
          (item) => item.nombreDimension === nombre.nombreDimension && item.id !== nombre.id
        
        );
        console.log("ver indez",index)
        if (index !== -1) {
          reject("Error");
          dispatch(alertActions.error("Ya existe una Situación con el nombre ingresado"));
          return;
        }
        try {
          const data = await formData.updateDimension(nombre,id.id );
          const dimensionUpdate = [...dimension];
    
          const valor = dimensionUpdate.find((el)=> el.id === id.id) 
          console.log("valores", valor)
          const index = dimensionUpdate.indexOf(valor)
          dimensionUpdate[index] = nombre;
    
          console.log("ver datos",index)
     
          setDimension(dimensionUpdate);
          dispatch(alertActions.success(data.message));
        } catch (error) {
          dispatch(alertActions.error("Error al actualizar la situación"));
        }
        resolve();
      }

      
      async function removeDimension(codigo, resolve, reject) {
        try {
          const data = await formData.deleteDimension(codigo.id);

          const newDimensiones = dimension.filter((el) => el.id !== codigo.id);
          setDimension(newDimensiones);
       /*    const colorDelete = [...colores];
          const codigoColor = colorDelete.filter((el) => el.id !== codigo.id);
          console.log("valores reomve",colorDelete)
          const index = colorDelete.indexOf(codigoColor)
          colorDelete[index] = codigo;
           */
        //  console.log("valores ",colorDelete)
         // const codigoColor = colorDelete.filter((el) => el.id !== codigo.id);

        //  setColores(colorDelete);
          dispatch(alertActions.success(data.message));
          
        } catch (error) {
          console.log(error);
          dispatch(alertActions.error("Error al eliminar el color"));
        }
        resolve();
      }


      useEffect(() => {
        getDimension();
       
      }, []);
    
  return (
    <DefaultTable
      columns={columns}
      data={dimension}
     handleRowAdd={saveDimension}
   handleRowUpdate={dimensionUpdate}
      handleRowDelete={ removeDimension} 
      title="Catálogo de Dimensiones"
      text="¿Desea eliminar el color"
    />
  )
}

export  {CatalogoDimesion}