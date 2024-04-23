import React ,{useState,useEffect }from "react";
import { DialogFullScreen } from "../../../componentes/ModalCustom";
import { CustomFrom } from "../../../componentes/CustomFrom";




function FormColor({ title, handleClose, openFullScreenDialog, colores }) {
  const [editedColor, setEditedColor] = useState(colores);

  useEffect(() => {
    // Actualizar el estado de editedColor cuando cambie colores
    setEditedColor(colores);
  }, [colores]);

  const formFields = [
    { name: 'id', label: 'Numero', type: 'input', value: editedColor.id, readOnly: true },
    { name: 'nombreColor', label: 'Nombre del color', type: 'input', value:editedColor.nombreColor, required: true },
  ];
  
 
  const handleCustomFormChange = (fieldName, fieldValue) => {
    setEditedColor({
      ...editedColor,
      [fieldName]: fieldValue,
    });
  };



 const handleSubmit = (formData) => {
    // Lógica para enviar los datos a tu servidor o realizar alguna acción con formData
    console.log('Form data submitted:', formData);
  };
  const closeFullScreenForm = () => {
    handleClose();
  };
  console.log("nuedara",editedColor)
  console.log("formulario",formFields)
 

  return (
    <DialogFullScreen
      openFullScreenDialog={openFullScreenDialog}
      handleClose={closeFullScreenForm}
      title={title}
      fullscreen={false}
    >
     < CustomFrom
      onSubmit={handleSubmit}
       fields={formFields}
       formData={editedColor}
      onFieldChange={handleCustomFormChange}
      />
    
    </DialogFullScreen>
  );
}

export { FormColor };
