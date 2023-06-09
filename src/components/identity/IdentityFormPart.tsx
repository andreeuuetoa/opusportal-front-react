import {IRegisterFormField} from "./register/IRegisterFormField";

export const IdentityFormPart = (field: IRegisterFormField) => (
    <div className="form-floating mb-3">
        <input
            onChange={field.fieldElements.onchange}
            value={field.fieldElements.value}
            className="form-control"
            autoComplete={field.fieldElements.autocomplete}
            aria-required="true"
            type={field.fieldElements.type}
            id={"input_" + field.fieldElements.name}
            name={field.fieldElements.name}
        />
        <label htmlFor={"input_" + field.fieldElements.name}>{field.fieldElements.placeholder}</label>
    </div>
);