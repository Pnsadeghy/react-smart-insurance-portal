import type IInsuranceForm from "@/modules/insurance/interfaces/insurance.form.interface";
import insuranceApi from "@/modules/insurance/services/insurance.api";
import { create } from 'zustand';

interface InsuranceFormState {
    loaded: boolean;
    insurances: IInsuranceForm[];
    getInsurances: () => Promise<IInsuranceForm[]>;
    getInsuranceForm: (id: string) => IInsuranceForm|undefined|null;
}

const useInsuranceFormStore = create<InsuranceFormState>((set, get) => ({
    loaded: false,
    insurances: [],
    getInsurances: () => new Promise(async (resolve, reject) => {
        if (get().loaded) {
            resolve(get().insurances);
            return;
        }
        try {
            const response = await insuranceApi.forms();
            set({
                insurances: response.data as IInsuranceForm[],
                loaded: true
            })
            resolve(response.data as IInsuranceForm[]);
        } catch (e) {
            reject(e);
        }
    }),
    getInsuranceForm: (id: string) => {
        return get().insurances.find((insurance) => insurance.formId === id);
    }
}));

export default useInsuranceFormStore;