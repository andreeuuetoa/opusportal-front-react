import {FormField} from "../components/form/FormField";

export const FormPart = (field: FormField) => (
    <div className="mb-3">
        <input
            className="form-control form-input"
            aria-required="true"
            onChange={field.fieldElements.onchange}
            value={field.fieldElements.value}
            autoComplete={field.fieldElements.autocomplete}
            type={field.fieldElements.type}
            id={"input_" + field.fieldElements.name}
            name={field.fieldElements.name}
            placeholder={field.fieldElements.placeholder}
        />
    </div>
);
