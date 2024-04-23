
import React, { useEffect, useState } from 'react'
import { DefaultTable } from '../DefaultTable'
import { formData} from '../../../../services';
import { alertActions } from '../../../../actions';
import { useDispatch } from 'react-redux';



function CatalogoColors() {
    const [colores, setColores] = useState([]);

    const dispatch = useDispatch();

    let columns = [
      { title: "Numero", field: "id" ,editable: 'never'},
      { title: "Nombre", field: "nombreColor" },
    ];

    const getColores = async () => {
        try {
          const data = await formData.getColores();
          setColores(data.datos);
        } catch (error) {
          console.error("Error en la solicitud GET:", error.message);
          dispatch(alertActions.error("Error al obtener la situación"))
        }
      };

      async function removeColores(codigo, resolve, reject) {
        try {
          const data = await formData.deleteColors(codigo.id);

          const newColores = colores.filter((el) => el.id !== codigo.id);
          setColores(newColores);
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

      
  async function saveColors(nombre, resolve, reject) {
    if (!nombre.nombreColor) {
      reject("Error");
      dispatch(alertActions.error("El nombre no puede ser vacío"));
      return;
    }
    // Validar que la primera letra del nombre sea mayúscula
  if (!/^[A-Z].*/.test(nombre.nombreColor)) {
    reject("Error");
    dispatch(alertActions.error("El nombre debe comenzar con mayúscula"));
    return;
  }
    
    let index = colores.findIndex(
      (item) => item.nombreColor === nombre.nombreColor
    );
    if (index !== -1) {
      reject("Error");
      dispatch(alertActions.error("Ya existe un color con el nombre ingresado"));
      return;
    }
    try {
      const data = await formData.addColors(nombre);
      nombre ={...nombre}
      setColores([...colores, nombre]);
      dispatch(alertActions.success(data.message));
    } catch (error) {
      console.log(error);
      dispatch(alertActions.error(error.message || "Error al guardar la situación"));
    }
    resolve();
  }

  async function colorUpdate(nombre, id, resolve, reject) {
    if (!nombre.nombreColor) {
      reject("Error");
      dispatch(alertActions.error("El nombre no puede ser vacío"));
      return;
    }
   
    let index = colores.findIndex(
      
      (item) => item.nombreColor === nombre.nombreColor && item.id !== nombre.id
    
    );
    console.log("ver indez",index)
    if (index !== -1) {
      reject("Error");
      dispatch(alertActions.error("Ya existe una Situación con el nombre ingresado"));
      return;
    }
    try {
      const data = await formData.updateColor(nombre,id.id );
      const colorUpdate = [...colores];

      const valor = colorUpdate.find((el)=> el.id === id.id) 
      console.log("valores", valor)
      const index = colorUpdate.indexOf(valor)
      colorUpdate[index] = nombre;

      console.log("ver datos",index)
 
      setColores(colorUpdate);
      dispatch(alertActions.success(data.message));
    } catch (error) {
      dispatch(alertActions.error("Error al actualizar la situación"));
    }
    resolve();
  }
    useEffect(() => {
        getColores();
       
      }, []);
    
  
  return (
    <DefaultTable
      columns={columns}
      data={colores}
     handleRowAdd={saveColors}
   handleRowUpdate={colorUpdate}
      handleRowDelete={ removeColores}
      title="Catálogo de Colores"
      text="¿Desea eliminar el color"
    />
  )
}

export  {CatalogoColors}