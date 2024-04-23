import React from "react";
import MaterialTable, { MTableToolbar } from "@material-table/core";
import Typography from '@mui/material/Typography';

const MyNewTitle = ({ text = "Table Title", variant = "h3" }) => (
  <Typography
    variant={variant}
    style={{
      whiteSpace: "normal",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {text}
  </Typography>
);

const DefaultTable = ({
  columns,
  data,
  handleRowAdd,
  handleRowUpdate,
  handleRowDelete,
  title,
  text,
  isDeletable = false,
}) => {
  return (
    <MaterialTable
      title={<MyNewTitle variant="h5" text={title} />}
      
      style={{ width: "100%",margin:"50px auto" }}
    //  title=""
      columns={columns}
      data={data}
      localization={{
        header: {
          actions: "Acciones",
        },
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count}",
          labelRowsSelect: "Filas",
          firstAriaLabel: "Primera página",
          firstTooltip: "Primera página",
          previousAriaLabel: "Página anterior",
          previousTooltip: "Página anterior",
          nextAriaLabel: "Página siguiente",
          nextTooltip: "Página siguiente",
          lastAriaLabel: "Última página",
          lastTooltip: "Última página",
        },
        toolbar: {
          searchTooltip: "Buscar",
          searchPlaceholder: "Buscar",
        },
        body: {
          addTooltip: "Agregar",
          editTooltip: "Editar",
          deleteTooltip: "Eliminar",
          editRow: {
            deleteText: text,
            cancelTooltip: "Cancelar",
            saveTooltip: "Guardar",
          },
        },
      }}
      options={{
        headerStyle: {
          borderBottomColor: "gray",
          borderBottomWidth: "3px",
          fontFamily: "verdana",
         
        },
        filtering: true,
        actionsColumnIndex: -1,
      }}
      editable={{
        isDeletable: (rowData) => !isDeletable,
        isDeleteHidden: (rowData) => isDeletable,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            handleRowUpdate(newData, oldData, resolve, reject);
          }),
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            handleRowAdd(newData, resolve, reject);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            handleRowDelete(oldData, resolve, reject);
          }),
      }}
      components={{
        Toolbar: (props) =>
          !isDeletable ? <MTableToolbar style={{ backgroundColor: "blue" }}{...props} /> : null,
      }}
    />
  );
};

export { DefaultTable };
