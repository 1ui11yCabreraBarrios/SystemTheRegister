import React, { Fragment } from 'react'
import { useField} from "formik";
import TextField from '@mui/material/TextField';

function MyTextInput({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <Fragment>
        <TextField
        id={props.id || props.name}
        label={label}
        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : props.helperText}
        {...field} {...props}
    
        />
          
            </Fragment>
      );
    };
export { MyTextInput}