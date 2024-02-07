import { FormContext } from "../context/formContext"
import { useContext } from "react"

function UserForm () {
    const {form, updateFieldHandler} = useContext(FormContext)

    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome" required value={form.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required value={form.email || ""} onChange={(e) => updateFieldHandler("email", e.target.value)}/>
            </div>
        </div>
    )
}

export default UserForm