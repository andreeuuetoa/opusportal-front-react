import {IIdentityFormField} from "./IIdentityFormField";

export const IdentityFormPart = (field: IIdentityFormField) => (
    <div className="form-floating mb-3">
        <input
            className="form-control form-input"
            aria-required="true"
            onChange={field.fieldElements.onchange}
            value={field.fieldElements.value}
            autoComplete={field.fieldElements.autocomplete}
            type={field.fieldElements.type}
            id={"input_" + field.fieldElements.name}
            name={field.fieldElements.name}
        />
        <label htmlFor={"input_" + field.fieldElements.name}>{field.fieldElements.placeholder}</label>
    </div>
);
