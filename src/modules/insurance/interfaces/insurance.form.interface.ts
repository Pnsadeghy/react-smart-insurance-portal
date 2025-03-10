import IBaseFormGeneratorField from "@/shared/components/form-generator/interfaces/base.form.generator.field.interface";

export default interface IInsuranceForm {
    formId: string;
    title: string;
    fields: IBaseFormGeneratorField[]
}