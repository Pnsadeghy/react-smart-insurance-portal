import useInsuranceFormStore from "@/modules/insurance/stores/insurance.forms.store";

interface componentProps {
    select: (id: string) => void;
}

export default function InsuranceCreateSelect({select}: Readonly<componentProps>) {
    const insurances = useInsuranceFormStore(state => state.insurances);

    return (
        <ul className="space-y-2" >
            {insurances.map((insurance) => (
                <button type="button"
                        key={insurance.formId}
                        onClick={() => select(insurance.formId)}
                        className="block px-2 py-2 ring-1 ring-gray-200 w-full text-start rounded cursor-pointer hover:bg-gray-100 transition hover:ring-gray-400">
                    {insurance.title}
                </button>
            ))}
        </ul>
    );
}