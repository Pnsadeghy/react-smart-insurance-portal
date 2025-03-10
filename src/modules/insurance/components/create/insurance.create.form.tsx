interface componentProps {
    insurance: string;
    submit: () => void;
}

export default function InsuranceCreateForm({submit}: Readonly<componentProps>) {
    return (<div>Form</div>);
}