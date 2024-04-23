import React from 'react';
 import { useFormik,Form } from 'formik';

 const FormikContext = React.createContext({});
 

function CustomFrom({ children, ...props }) {
  const formikStateAndHelpers = useFormik(props);
 

  return (
    
      <FormikContext.Provider value={formikStateAndHelpers}>
        <Form> {typeof children === 'function'
          ? children(formikStateAndHelpers)
          : children}</Form>
       
      </FormikContext.Provider>
    );
}

export { CustomFrom };
