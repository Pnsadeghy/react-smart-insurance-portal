import type IBaseFormGeneratorInputProps from "../interfaces/base.form.generator.input.props.interface";

export default function BaseFormGeneratorNumberInput({field, value, onChange}: IBaseFormGeneratorInputProps<number>) {
    return <input
        id={field.id}
        type="number"
        value={value ?? ""}
        onChange={(e) => onChange(Number(e.target.value))}
        required={field.required}
        min={field.validation?.min}
        max={field.validation?.max}
        className="input"
    />;
}