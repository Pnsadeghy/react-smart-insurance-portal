import type IBaseFormGeneratorInputProps from "./interfaces/base.form.generator.input.props.interface";
import type IBaseFormGeneratorField from "./interfaces/base.form.generator.field.interface";
import BaseFormGeneratorFieldTypeEnum from "./enum/base.form.generator.field.type.enum";
import BaseFormGeneratorCheckboxInput from "./inputs/base.form.generator.checkbox.input";
import BaseFormGeneratorNumberInput from "./inputs/base.form.generator.number.input";
import BaseFormGeneratorSelectInput from "./inputs/base.form.generator.select.input";
import BaseFormGeneratorRadioInput from "./inputs/base.form.generator.radio.input";
import BaseFormGeneratorDateInput from "./inputs/base.form.generator.date.input";
import BaseFormGeneratorTextInput from "./inputs/base.form.generator.text.input";
import {useFormValues} from "./contexts/base.form.generator.values.context";
import {Control, Controller, FieldErrors} from "react-hook-form";
import BaseCard from "@/shared/components/card/base.card";
import React, {useCallback, useMemo} from "react";

interface componentProps {
    field: IBaseFormGeneratorField;
    control: Control;
    errors: FieldErrors;
}

const fieldComponents: Record<
    string,
    React.FC<IBaseFormGeneratorInputProps<any>>
> = {
    text: BaseFormGeneratorTextInput,
    number: BaseFormGeneratorNumberInput,
    date: BaseFormGeneratorDateInput,
    select: BaseFormGeneratorSelectInput,
    radio: BaseFormGeneratorRadioInput,
    checkbox: BaseFormGeneratorCheckboxInput
};

export default function BaseFormGeneratorInput({field, control, errors}: Readonly<componentProps>) {

    const { formValues, updateFormValue } = useFormValues();

    const FieldComponent = useMemo(() => fieldComponents[field.type] || null, [field]);

    const handleChange = useCallback((onChange: (newValue: unknown) => void ,newValue: unknown) => {
        updateFormValue(field.id, newValue);
        onChange(newValue);
    }, [field, updateFormValue]);

    const isVisible = useMemo(() => {
        if (!field.visibility) return true;
        const { dependsOn, condition, value } = field.visibility;
        const dependsOnValue = formValues[dependsOn];

        if (condition === "equals") {
            return dependsOnValue === value;
        }
        return dependsOnValue !== value;
    }, [field, formValues])

    if (!isVisible) {
        return null;
    }

    if (field.type === BaseFormGeneratorFieldTypeEnum.Group) {
        if (!field.fields) {
            return (<></>);
        }

        return (
            <BaseCard title={field.label} >
                {field.fields.map(child =>
                    <BaseFormGeneratorInput key={child.id}
                                            field={child}
                                            control={control}
                                            errors={errors} />
                )}
            </BaseCard>
        );
    }

    return (
        <div key={field.id} className="form-control" data-invalid={!!errors[field.id]}>
            <label className="label" htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500" > *</span>}
            </label>
            <Controller
                name={field.id}
                control={control}
                rules={{
                    required: field.required ? `${field.label} is required` : false,
                    min: field.validation?.min ? { value: field.validation.min, message: `${field.label} must be at least ${field.validation.min}` } : undefined,
                    max: field.validation?.max ? { value: field.validation.max, message: `${field.label} cannot exceed ${field.validation.max}` } : undefined,
                    pattern: field.validation?.pattern ? { value: new RegExp(field.validation.pattern), message: `Invalid ${field.label}` } : undefined,
                }}
                render={({ field: { onChange, value } }) => {
                    return (
                        <FieldComponent
                            field={field}
                            value={value}
                            onChange={v => handleChange(onChange, v)}
                        />
                    );
                }}
            />
            {errors[field.id] && (
                <span className="validation">{errors[field.id]?.message as string}</span>
            )}
        </div>
    );
}