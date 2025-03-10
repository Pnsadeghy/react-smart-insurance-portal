import { create } from 'zustand';
import insuranceApi from "@/modules/insurance/services/insurance.api";

interface InsuranceFormState {
    loaded: boolean;
    insurances: object[];
    getInsurances: () => Promise<object[]>;
    getInsuranceForm: (id: string) => object;
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
            console.log(response);
            resolve(get().insurances);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    }),
    getInsuranceForm: (id: string) => ({})
}));

export default useInsuranceFormStore;