import InsuranceFormFieldTypeEnum from "@/modules/insurance/enum/insurance.form.field.type.enum";

export default interface IInsuranceFormField {
    id: string;
    label: string;
    type: InsuranceFormFieldTypeEnum;
    fields?: IInsuranceFormField[];
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