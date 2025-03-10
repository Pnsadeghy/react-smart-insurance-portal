import type IInsuranceFormField from "./insurance.form.field.interface";

export default interface IInsuranceForm {
    formId: string;
    title: string;
    fields: IInsuranceFormField[]
}