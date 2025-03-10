"use client"

import {useState} from "react";

enum CreateStepEnum {
    Select,
    Form,
    Submitted
}

export default function InsuranceCreate() {
    const [step, setStep] = useState<CreateStepEnum>(CreateStepEnum.Select);

    switch (step) {
        case CreateStepEnum.Form:
            return (<div>form</div>);
        case CreateStepEnum.Submitted:
            return (<div>submitted</div>);
        default:
            return (<div>select</div>);
    }
}