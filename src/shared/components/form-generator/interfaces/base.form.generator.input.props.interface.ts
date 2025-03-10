import IBaseFormGeneratorField from "@/shared/components/form-generator/interfaces/base.form.generator.field.interface";

export default interface IBaseFormGeneratorInputProps<T> {
    field: IBaseFormGeneratorField;
    value: T;
    onChange: (value: T) => void;
}