import type IBaseFormGeneratorField from "./interfaces/base.form.generator.field.interface"

interface componentProps {
    fields: IBaseFormGeneratorField[]
}

export default function BaseFormGenerator({fields}: Readonly<componentProps>) {



    return (
        <div className="space-y-2" >
            {fields.map((field, i) => (
                <li key={field.id}>{field.label}</li>
            ))}
        </div>
    );
}