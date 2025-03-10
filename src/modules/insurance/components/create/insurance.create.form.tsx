import {useMemo} from "react";
import useInsuranceFormStore from "@/modules/insurance/stores/insurance.forms.store";
import BaseFormGenerator from "@/shared/components/form-generator/base.form.generator";

interface componentProps {
    insurance: string;
    submit: () => void;
}

export default function InsuranceCreateForm({submit, insurance}: Readonly<componentProps>) {
    const getInsuranceForm = useInsuranceFormStore(state => state.getInsuranceForm)

    const form = useMemo(() => getInsuranceForm(insurance), [insurance, getInsuranceForm]);

    return (
        <BaseFormGenerator fields={form!.fields} />
    );
}