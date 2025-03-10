interface componentProps {
    select: (id: string) => void;
}

export default function InsuranceCreateSelect({select}: Readonly<componentProps>) {
    return (<div>Select</div>);
}