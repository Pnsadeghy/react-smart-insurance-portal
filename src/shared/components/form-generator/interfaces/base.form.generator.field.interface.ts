import type IBaseFormGeneratorFieldDynamicOptions from "./base.form.generator.field.dynamic.options.interface";
import BaseFormGeneratorFieldTypeEnum from "../enum/base.form.generator.field.type.enum";

export default interface IBaseFormGeneratorField {
    id: string;
    label: string;
    type: BaseFormGeneratorFieldTypeEnum;
    fields?: IBaseFormGeneratorField[];
    required?: boolean;
    options?: string[];
    dynamicOptions?: IBaseFormGeneratorFieldDynamicOptions;
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