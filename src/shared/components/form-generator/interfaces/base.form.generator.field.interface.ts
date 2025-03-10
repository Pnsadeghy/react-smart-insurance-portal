import BaseFormGeneratorFieldTypeEnum from "../enum/base.form.generator.field.type.enum";

export default interface IBaseFormGeneratorField {
    id: string;
    label: string;
    type: BaseFormGeneratorFieldTypeEnum;
    fields?: IBaseFormGeneratorField[];
    required?: boolean;
    options?: string[];
    dynamicOptions?: {
        dependsOn?: string;
        endpoint: string;
        method: string;
    };
    visibility?: {
        "dependsOn": string;
        "condition": string;
        "value": unknown;
    };
    validation?: {
        min?: number;
        max?: number;
        pattern?: string;
    };
}