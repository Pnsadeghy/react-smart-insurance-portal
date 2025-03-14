import type IBaseFormGeneratorInputProps from "../interfaces/base.form.generator.input.props.interface";

export default function BaseFormGeneratorTextInput({field, value, onChange}: IBaseFormGeneratorInputProps<string>) {
    return <input
        id={field.id}
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        required={field.required}
        pattern={field.validation?.pattern}
        className="input"
    />;
}