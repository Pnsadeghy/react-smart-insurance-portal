"use client"

import useInsuranceFormStore from "@/modules/insurance/stores/insurance.forms.store";
import InsuranceCreateSubmitted from "./insurance.create.submitted";
import InsuranceCreateSelect from "./insurance.create.select";
import InsuranceCreateForm from "./insurance.create.form";
import {useCallback, useMemo, useState} from "react";
import BaseLoaderApi from "@/shared/components/loader/base.loader.api";

enum CreateStepEnum {
    Select,
    Form,
    Submitted
}

export default function InsuranceCreate() {
    const [step, setStep] = useState<CreateStepEnum>(CreateStepEnum.Select);
    const [insurance, setInsurance] = useState<string>('');

    const getForms = useInsuranceFormStore((state) => state.getInsurances)

    const onSelectInsurance = useCallback((id: string) => {
        setInsurance(id);
        setStep(CreateStepEnum.Form);
    }, [setInsurance, setStep]);

    const onFormSubmitted = useCallback(() => {
        setStep(CreateStepEnum.Submitted);
    }, [setStep]);

    return (
        <BaseLoaderApi apiAction={getForms} loader={<span>Getting forms...</span>}>
            { step === CreateStepEnum.Select && <InsuranceCreateSelect select={onSelectInsurance} /> }
            { step === CreateStepEnum.Form && <InsuranceCreateForm insurance={insurance} submit={onFormSubmitted} /> }
            { step === CreateStepEnum.Submitted && <InsuranceCreateSubmitted /> }
        </BaseLoaderApi>
    )
}