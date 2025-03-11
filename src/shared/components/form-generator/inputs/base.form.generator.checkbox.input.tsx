import type IBaseFormGeneratorInputProps from "../interfaces/base.form.generator.input.props.interface";

export default function BaseFormGeneratorCheckboxInput({field, value, onChange}: IBaseFormGeneratorInputProps<string[]>) {
    const handleChange = (option: string) => {
        const newValue = value?.includes(option)
            ? value.filter((v) => v !== option)
            : [...(value || []), option];
        onChange(newValue);
    };

    return (
        <ul className="checkbox-input-list" >
            {field.options?.map((option) => (
                <li key={option}>
                    <input
                        type="checkbox"
                        id={`${field.id}-${option}`}
                        checked={value?.includes(option) || false}
                        onChange={() => handleChange(option)}
                    />
                    <label htmlFor={`${field.id}-${option}`}>{option}</label>
                </li>
            ))}
        </ul>
    );
}