import type IBaseFormGeneratorInputProps from "../interfaces/base.form.generator.input.props.interface";
import {useFormValues} from "@/shared/components/form-generator/contexts/base.form.generator.values.context";
import {useEffect, useMemo, useState} from "react";

export default function BaseFormGeneratorSelectInput({field, value, onChange}: IBaseFormGeneratorInputProps<string>) {
    const { formValues } = useFormValues();

    const [dynamicOptions, setDynamicOptions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const dependsOnValue = useMemo(() => {
        if (!field.dynamicOptions) return undefined;
        if (!field.dynamicOptions.dependsOn) return undefined;
        return formValues[field.dynamicOptions.dependsOn];
    }, [field, formValues])

    useEffect(() => {

        if (!field.dynamicOptions) return;

        if (field.dynamicOptions.dependsOn) {
            setDynamicOptions([])

            if (!dependsOnValue) {
                return;
            }
        }

        const { endpoint, method } = field.dynamicOptions;

        const fetchOptions = async () => {
            try {
                setIsLoading(true);
                let url = endpoint;
                if (dependsOnValue) {
                    url += `?dependsOn=${dependsOnValue.toLowerCase()}`;
                }
                const response = await fetch(url, {
                    method: method || "GET",
                });
                if (response.ok) {
                    throw new Error("Failed to fetch dynamic options");
                }

                const data = await response.json();
                setDynamicOptions(data);
            } catch (error) {
                console.error("Error fetching dynamic options:", error);
                setDynamicOptions([]);
            } finally {
                setIsLoading(false);
            }
        };

        (async () => {
            await fetchOptions();
        })();
    }, [field, dependsOnValue]);

    const options = field.options || dynamicOptions || [];

    return (
        <select
            id={field.id}
            name={field.id}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            required={field.required}
            className="input"
            disabled={!!(isLoading && field.dynamicOptions)}
        >
            <option value="">Select an option</option>
            {options.map((option: string) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}