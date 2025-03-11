import type IBaseFormGeneratorInputProps from "../interfaces/base.form.generator.input.props.interface";

export default function BaseFormGeneratorDateInput({field, value, onChange}: IBaseFormGeneratorInputProps<string>) {
    return <input
        id={field.id}
        type="date"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        required={field.required}
        className="input"
    />;
}