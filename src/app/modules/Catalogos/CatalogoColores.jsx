import { Fragment, useEffect, useState } from "react";
import { CusomTable } from "../../componentes/TableCustom";
import { formData, userService } from "../../../services";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import { FormColor } from "./Colores";
import { useDispatch } from "react-redux";
import { alertActions } from "../../../actions";
import * as Styled from "./styles";
import Divider from '@mui/material/Divider';



function CatalogoColores() {
  const [colores, setColores] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [openModalColorEdit, SetopenModalColorEdit] = useState(false)
  const dispatch = useDispatch();
  const columns = [
    { label: "Numero", field: "id" },
    { label: "Nombre", field: "nombreColor" },
  ];

  

  const getColores = async () => {
    try {
      const data = await userService.getColores();
      setColores(data.datos);
    } catch (error) {
      console.error("Error en la solicitud GET:", error.message);
      dispatch(alertActions.error("Error al obtener la situación"))
    }
  };

  useEffect(() => {
    getColores();
  }, []);

  const handleOpenModalEdit =(data)=>{
    setSelectedColor(data);
    SetopenModalColorEdit(true)
 
  }
  const handleCloseModalEdit =()=>{
    SetopenModalColorEdit(false)
  }

  const handleOpenModalDelete =(data)=>{
   
  }


  return (
    <Fragment>
       <Styled.Title > TABLA DE COLORES DE LOS VEHICULOS </Styled.Title>
       <Divider sx={{backgroundColor:" #165a72", margin:"10px auto",padding:"2px"}}/>
      <CusomTable
        columns={columns}
        data={colores}
        renderActionIcon= {(row) => (
          
          <div>
             <Tooltip title="Editar">
             <IconButton onClick={() => handleOpenModalEdit(row)}>
              <EditIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar"> <IconButton onClick={() => handleOpenModalDelete(row)}>
              <DeleteIcon sx={{ color: "#EA384D " }} />
            </IconButton></Tooltip>
        
           
         
          </div>
          
        )}
      />

      {openModalColorEdit && (
        <FormColor
        openFullScreenDialog={openModalColorEdit}
        handleClose={handleCloseModalEdit}
        colores={selectedColor}
        title="Editar Colores"
       
        />

      )}
       
    </Fragment>
  );
}
export { CatalogoColores };
