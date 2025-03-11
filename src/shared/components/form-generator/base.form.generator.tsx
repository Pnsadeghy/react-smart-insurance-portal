import BaseFormGeneratorInput from "@/shared/components/form-generator/base.form.generator.input";
import {BaseFormGeneratorValuesProvider} from "./contexts/base.form.generator.values.context";
import type IBaseFormGeneratorField from "./interfaces/base.form.generator.field.interface"
import BaseBoxLoading from "@/shared/components/box-loading/base.box.loading";
import BaseButtonSubmit from "@/shared/components/button/base.button.submit";
import {useForm} from "react-hook-form";
import React from "react";

interface componentProps {
    fields: IBaseFormGeneratorField[];
    onSubmit: (data: object) => void;
    defaultValues?: Record<string, unknown>;
    loading: boolean;
    submitText: string;
}

export default function BaseFormGenerator({fields, onSubmit, defaultValues, loading, submitText}: Readonly<componentProps>) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues,
    });

    const errorMessages = Object.keys(errors)
        .map((key) => errors[key]?.message)
        .filter(Boolean);
    const hasErrors = errorMessages.length > 0;

    return (
        <BaseFormGeneratorValuesProvider>
            <BaseBoxLoading loading={loading}>
                <form noValidate onSubmit={handleSubmit(onSubmit || (() => {}))}>

                    {fields.map(field =>
                        <BaseFormGeneratorInput key={field.id}
                                                field={field}
                                                control={control}
                                                errors={errors} />
                    )}

                    {hasErrors && (
                        <div className="bg-red-100 ring-1 ring-red-500 rounded p-2 mb-8 text-xs text-red-600">
                            <ul className="space-y-2 list-disc ps-4" >
                                {errorMessages.map(message => <li key={message}>{message}</li>)}
                            </ul>
                        </div>
                    )}

                    <BaseButtonSubmit loading={loading}>
                        {submitText}
                    </BaseButtonSubmit>
                </form>
            </BaseBoxLoading>
        </BaseFormGeneratorValuesProvider>
    );
}