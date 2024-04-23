import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { formData } from '../../../../services';
import { alertActions } from '../../../../actions';
import { DefaultTable } from '../DefaultTable';


function CatalogoMarcas() {
    const [marca, setMarcas] = useState([]);

    const dispatch = useDispatch();

    let columns = [
      { title: "Numero", field: "id" ,editable: 'never'},
      { title: "Nombre", field: "nombreMarca"},
    
    ];

    const getMarca = async () => {
        try {
          const data = await formData.getMarcas();
          setMarcas(data.datos);
        } catch (error) {
          console.error("Error en la solicitud GET:", error.message);
          dispatch(alertActions.error("Error al obtener la situación"))
        }
      };

      async function saveMarca(nombre, resolve, reject) {
        if (!nombre.nombreMarca) {
          reject("Error");
          dispatch(alertActions.error("El nombre no puede ser vacío"));
          return;
        }
       
        // Validar que la primera letra del nombre sea mayúscula
      if (!/^[A-Z].*/.test(nombre.nombreMarca)) {
        reject("Error");
        dispatch(alertActions.error("El nombre debe comenzar con mayúscula"));
        return;
      }
   
        
        
        let index = marca.findIndex(
          (item) => item.nombreMarca === nombre.nombreMarca
        );
        if (index !== -1) {
          reject("Error");
          dispatch(alertActions.error("Ya existe el nombre ingresado"));
          return;
        }
        try {
          const data = await formData.addMarcas(nombre);
          nombre ={...nombre}
          setMarcas([...marca, nombre]);
          dispatch(alertActions.success(data.message));
        } catch (error) {
          console.log(error);
          dispatch(alertActions.error(error.message || "Error al guardar la situación"));
        }
        resolve();
      }
    
      async function marcasUpdate(nombre, id, resolve, reject) {
        if (!nombre.nombreMarca) {
            reject("Error");
            dispatch(alertActions.error("El nombre no puede ser vacío"));
            return;
          }
         
          // Validar que la primera letra del nombre sea mayúscula
        if (!/^[A-Z].*/.test(nombre.nombreMarca)) {
          reject("Error");
          dispatch(alertActions.error("El nombre debe comenzar con mayúscula"));
          return;
        }
       
        
       
        let index = marca.findIndex(
          
          (item) => item.nombreMarca === nombre.nombreMarca && item.id !== nombre.id
        
        );
        console.log("ver indez",index)
        if (index !== -1) {
          reject("Error");
          dispatch(alertActions.error("Ya existe una Situación con el nombre ingresado"));
          return;
        }
        try {
          const data = await formData.updateMarcas(nombre,id.id );
          const marcaUpdate = [...marca];
    
          const valor = marcaUpdate.find((el)=> el.id === id.id) 
          console.log("valores", valor)
          const index = marcaUpdate.indexOf(valor)
          marcaUpdate[index] = nombre;
    
          console.log("ver datos",index)
     
          setMarcas(marcaUpdate);
          dispatch(alertActions.success(data.message));
        } catch (error) {
          dispatch(alertActions.error("Error al actualizar la situación"));
        }
        resolve();
      }

      
      async function removeMarca(codigo, resolve, reject) {
        try {
          const data = await formData.deleteMarcas(codigo.id);

          const newMarcas = marca.filter((el) => el.id !== codigo.id);
          setMarcas(newMarcas);
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
        getMarca();
       
      }, []);
    
  return (
    <DefaultTable
      columns={columns}
      data={marca}
     handleRowAdd={saveMarca}
   handleRowUpdate={marcasUpdate}
      handleRowDelete={ removeMarca} 
      title="Catálogo de Marcas"
      text="¿Desea eliminar el color"
    />
  )
}

export { CatalogoMarcas}