import {useMemo, useState} from "react";
import useInsuranceFormStore from "@/modules/insurance/stores/insurance.forms.store";
import BaseFormGenerator from "@/shared/components/form-generator/base.form.generator";
import {useTranslations} from "next-intl";
import BaseButton from "@/shared/components/button/base.button";
import insuranceApi from "@/modules/insurance/services/insurance.api";

interface componentProps {
    insurance: string;
    back: () => void;
    submit: () => void;
}

export default function InsuranceCreateForm({submit, back, insurance}: Readonly<componentProps>) {
    const t = useTranslations("insurance.create");
    const tButton = useTranslations("common.button");

    const [loading, setLoading] = useState<boolean>(false);

    const getInsuranceForm = useInsuranceFormStore(state => state.getInsuranceForm)

    const form = useMemo(() => getInsuranceForm(insurance), [insurance, getInsuranceForm]);

    const onSubmit = async (data: object) => {
        setLoading(true);

        try {
            await insuranceApi.submit(data);
            submit();
        } catch(error) {
            alert(error?.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-wrap bg-gray-100 justify-between rounded p-2 mb-8" >
                <h3>{form?.title}</h3>
                <BaseButton onClick={back}>{tButton('change')}</BaseButton>
            </div>
            <BaseFormGenerator fields={form!.fields}
                               loading={loading}
                               onSubmit={onSubmit}
                               submitText={t('submit')} />
        </>
    );
}