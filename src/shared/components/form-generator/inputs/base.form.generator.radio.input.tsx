import type IBaseFormGeneratorInputProps from "../interfaces/base.form.generator.input.props.interface";

export default function BaseFormGeneratorRadioInput({field, value, onChange}: IBaseFormGeneratorInputProps<string>) {
    return (
        <ul className="radio-input-list">
            {field.options?.map((option) => (
                <li key={option}>
                    <input
                        type="radio"
                        id={`${field.id}-${option}`}
                        name={field.id}
                        value={option}
                        checked={value === option}
                        onChange={(e) => onChange(e.target.value)}
                        required={field.required}
                    />
                    <label htmlFor={`${field.id}-${option}`}>{option}</label>
                </li>
            ))}
        </ul>
    );
}