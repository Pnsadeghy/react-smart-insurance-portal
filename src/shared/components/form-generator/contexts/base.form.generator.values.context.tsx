import React, { createContext, useContext, useState } from "react";

interface BaseFormGeneratorValuesContextType {
    formValues: Record<string, unknown>;
    updateFormValue: (id: string, value: unknown) => void;
}

const BaseFormGeneratorValuesContext = createContext<BaseFormGeneratorValuesContextType | undefined>(undefined);

export const BaseFormGeneratorValuesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [formValues, setFormValues] = useState<Record<string, unknown>>({});

    const updateFormValue = (id: string, value: unknown) => {
        setFormValues((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <BaseFormGeneratorValuesContext.Provider value={{ formValues, updateFormValue }}>
            {children}
        </BaseFormGeneratorValuesContext.Provider>
    );
};

export const useFormValues = () => {
    const context = useContext(BaseFormGeneratorValuesContext);
    if (!context) {
        throw new Error("useFormValues must be used within a FormValuesProvider");
    }
    return context;
};