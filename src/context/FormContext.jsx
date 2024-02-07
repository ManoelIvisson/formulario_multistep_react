import { createContext, useState } from "react";

const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: ""
}

export const FormContext = createContext()

export const FormProvider = ({children}) => {
    const [form, setForm] = useState(formTemplate)

    function updateFieldHandler(key, value) {
        setForm((prev) => {
          return {...prev, [key]: value}
        })
      }

    return (
        <FormContext.Provider value={{form, updateFieldHandler}}>
            {children}
        </FormContext.Provider>
    )
}